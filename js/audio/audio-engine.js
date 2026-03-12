/**
 * Audio engine for Theory Training.
 * Loads SoundFont samples from CDN with Web Audio synthesis fallback.
 */

// ─── Configuration ──────────────────────────────────────────

const SOUNDFONT_BASE = 'assets/soundfonts';
const INSTRUMENTS = {
  piano: 'acoustic_grand_piano',
  guitar: 'acoustic_guitar_steel',
};

// ─── Note Utilities ─────────────────────────────────────────

const NOTE_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const SHARP_TO_FLAT = { 'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb' };

/** Normalize a note name to use flats (matches SoundFont filenames). */
export function normalizeNote(name) {
  let n = name.replace(/\u266F/g, '#').replace(/\u266D/g, 'b');
  const match = n.match(/^([A-Ga-g][#b]?)(\d*)$/);
  if (!match) return name;
  let [, note, oct] = match;
  note = note.charAt(0).toUpperCase() + note.slice(1);
  if (SHARP_TO_FLAT[note]) note = SHARP_TO_FLAT[note];
  return note + oct;
}

/** Convert MIDI note number to note name (e.g., 60 → "C4"). */
export function midiToNoteName(midi) {
  return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}

/** Convert note name to MIDI number (e.g., "C4" → 60). */
function noteNameToMidi(name) {
  const n = normalizeNote(name);
  const match = n.match(/^([A-G]b?)(\d+)$/);
  if (!match) return -1;
  const [, note, oct] = match;
  const idx = NOTE_NAMES.indexOf(note);
  if (idx === -1) return -1;
  return (parseInt(oct) + 1) * 12 + idx;
}

/** MIDI note to frequency in Hz. */
function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// ─── Guitar Tuning ──────────────────────────────────────────

/** Open-string MIDI numbers for standard tuning. */
const GUITAR_OPEN_MIDI = { 6: 40, 5: 45, 4: 50, 3: 55, 2: 59, 1: 64 };

/** Map guitar string + fret to a note name (e.g., string 6, fret 0 → "E2"). */
export function guitarNoteName(string, fret) {
  const midi = GUITAR_OPEN_MIDI[string] + fret;
  return midiToNoteName(midi);
}

// ─── Audio Context ──────────────────────────────────────────

let ctx = null;
let masterGain = null;
let compressor = null;

function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Master output chain: compressor → gain → destination
    compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.knee.value = 24;
    compressor.ratio.value = 8;
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.8;
    compressor.connect(masterGain).connect(ctx.destination);
  }
  return ctx;
}

function getOutput() {
  getCtx();
  return compressor;
}

async function ensureReady() {
  const c = getCtx();
  if (c.state === 'suspended') await c.resume();
}

// ─── Sample Loading ─────────────────────────────────────────

const bufferCache = new Map();
const loadingMap = new Map();

async function loadSample(instrument, note) {
  const key = `${instrument}/${note}`;
  if (bufferCache.has(key)) return bufferCache.get(key);
  if (loadingMap.has(key)) return loadingMap.get(key);

  const instName = INSTRUMENTS[instrument];
  if (!instName) return null;

  const promise = (async () => {
    const url = `${SOUNDFONT_BASE}/${instName}-mp3/${encodeURIComponent(note)}.mp3`;
    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const arr = await resp.arrayBuffer();
      const buf = await getCtx().decodeAudioData(arr);
      bufferCache.set(key, buf);
      return buf;
    } catch (e) {
      console.warn(`[audio] Failed to load ${key}:`, e.message);
      return null;
    } finally {
      loadingMap.delete(key);
    }
  })();

  loadingMap.set(key, promise);
  return promise;
}

/** Preload a set of notes for an instrument (fire-and-forget). */
export function preload(instrument, notes) {
  for (const n of notes) {
    loadSample(instrument, normalizeNote(n));
  }
}

// ─── Synthesis Fallback ─────────────────────────────────────

function synthNote(midi, { duration = 1.5, gain = 0.3, type = 'triangle' } = {}) {
  const c = getCtx();
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.value = midiToFreq(midi);
  g.gain.setValueAtTime(gain, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
  osc.connect(g).connect(getOutput());
  osc.start();
  osc.stop(c.currentTime + duration + 0.05);
}

// ─── Playback API ───────────────────────────────────────────

/**
 * Play a single note.
 * @param {'piano'|'guitar'} instrument
 * @param {string} note — e.g., "C4", "Eb3"
 */
export async function playNote(instrument, note, { duration = 2, gain = 0.5 } = {}) {
  await ensureReady();
  const n = normalizeNote(note);
  const buf = await loadSample(instrument, n);

  if (buf) {
    const c = getCtx();
    const source = c.createBufferSource();
    source.buffer = buf;
    const gNode = c.createGain();
    gNode.gain.setValueAtTime(gain, c.currentTime);
    gNode.gain.setTargetAtTime(0.001, c.currentTime + duration * 0.7, duration * 0.15);
    source.connect(gNode).connect(getOutput());
    source.start();
    source.stop(c.currentTime + duration + 0.5);
  } else {
    const midi = noteNameToMidi(n);
    if (midi >= 0) {
      synthNote(midi, {
        duration,
        gain: gain * 0.5,
        type: instrument === 'guitar' ? 'sine' : 'triangle',
      });
    }
  }
}

/**
 * Play multiple notes simultaneously (chord).
 */
export async function playChord(instrument, notes, opts = {}) {
  await ensureReady();
  const normalized = notes.map(n => normalizeNote(n));
  // Preload all, then play together
  await Promise.allSettled(normalized.map(n => loadSample(instrument, n)));
  return Promise.all(normalized.map(n => playNote(instrument, n, opts)));
}

/**
 * Play notes with stagger (strum effect).
 * @param {number} opts.delay — ms between each note (default 35)
 */
export async function playStrum(instrument, notes, { delay = 35, ...opts } = {}) {
  await ensureReady();
  const normalized = notes.map(n => normalizeNote(n));
  // Preload all
  await Promise.allSettled(normalized.map(n => loadSample(instrument, n)));
  // Stagger playback
  for (let i = 0; i < normalized.length; i++) {
    setTimeout(() => playNote(instrument, normalized[i], opts), i * delay);
  }
}
