/**
 * Transposer module — shifts piano/guitar chord configs to any root.
 * All lesson data uses C as the default root.
 */

const LETTERS   = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const LETTER_CI = [0, 2, 4, 5, 7, 9, 11];

/** Chromatic index for each root name. */
const CI_MAP = {
  'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
  'E': 4, 'Fb': 4, 'E#': 5, 'F': 5, 'F#': 6, 'Gb': 6,
  'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10,
  'B': 11, 'Cb': 11, 'B#': 0
};

/** Flat-based names for audio (matches SoundFont filenames). */
const AUDIO_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

/** Guitar open-string MIDI values (standard tuning). */
const OPEN_MIDI = { 6: 40, 5: 45, 4: 50, 3: 55, 2: 59, 1: 64 };

// ─── Core Helpers ──────────────────────────────────────────

/** Get chromatic index for a note name (0-11). Handles Unicode and double accidentals. */
export function noteCI(name) {
  const n = name.replace(/\u266F/g, '#').replace(/\u266D/g, 'b').replace(/\d+$/, '');
  if (CI_MAP[n] !== undefined) return CI_MAP[n];
  // Mathematical fallback for double accidentals (F##, Bbb, etc.)
  const letter = n[0].toUpperCase();
  const li = LETTERS.indexOf(letter);
  if (li === -1) return -1;
  let ci = LETTER_CI[li];
  for (let i = 1; i < n.length; i++) {
    if (n[i] === '#') ci = (ci + 1) % 12;
    else if (n[i] === 'b') ci = (ci + 11) % 12;
  }
  return ci;
}

/** Shortest signed interval from C to a root (-5 to +6). */
function shortInterval(rootName) {
  const ci = noteCI(rootName);
  return ci <= 6 ? ci : ci - 12;
}

/** Spell a note correctly for a degree relative to a named root (ASCII output). */
function spellNote(rootName, degree, targetCI) {
  const rootLI = LETTERS.indexOf(rootName[0]);
  const noteLI = (rootLI + degree - 1) % 7;
  const natural = LETTER_CI[noteLI];
  const diff = ((targetCI - natural) + 12) % 12;
  const letter = LETTERS[noteLI];
  if (diff === 0) return letter;
  if (diff === 1) return letter + '#';
  if (diff === 11) return letter + 'b';
  if (diff === 2) return letter + '##';
  if (diff === 10) return letter + 'bb';
  return letter;
}

/** Convert ASCII note to Unicode display: C# → C♯, Eb → E♭ */
function toUnicode(name) {
  return name
    .replace('##', '\u266F\u266F')
    .replace('#', '\u266F')
    .replace(/([A-G])bb/g, '$1\u266D\u266D')
    .replace(/([A-G])b/g, '$1\u266D');
}

// ─── Piano Transposition ───────────────────────────────────

export function transposePianoConfig(originalConfig, rootName) {
  if (rootName === 'C') return originalConfig;

  const ci = noteCI(rootName);
  const config = JSON.parse(JSON.stringify(originalConfig));
  config.rootName = rootName;
  config.rootLetterIdx = LETTERS.indexOf(rootName[0]);

  if (config.highlighted) {
    const noteMap = {};
    for (const h of config.highlighted) {
      const oldCI = noteCI(h.note);
      const newCI = (oldCI + ci) % 12;
      const oldSpelling = h.degree ? spellNote('C', h.degree, oldCI) : h.note;
      const newSpelling = h.degree ? spellNote(rootName, h.degree, newCI) : rootName;
      noteMap[oldSpelling] = newSpelling;
      h.note = newSpelling;
    }
    if (config.title) {
      config.title = transposeTitle(config.title, noteMap);
    }
  }

  return config;
}

// ─── Guitar Transposition ──────────────────────────────────

export function transposeGuitarConfig(originalConfig, rootName) {
  if (rootName === 'C') return originalConfig;

  const ci = noteCI(rootName);
  const config = JSON.parse(JSON.stringify(originalConfig));
  config.rootName = rootName;
  config.rootLetterIdx = LETTERS.indexOf(rootName[0]);

  // Choose interval: prefer shortest distance, but don't let frets go negative
  let interval = shortInterval(rootName);
  const allOrigFrets = [
    ...(config.dots || []).map(d => d.fret),
    ...(config.barres || []).map(b => b.fret)
  ];
  const minOrigFret = allOrigFrets.length ? Math.min(...allOrigFrets) : 0;
  if (minOrigFret + interval < 0) {
    interval += 12;
  }

  // Build note map for title transposition (before shifting frets)
  const noteMap = {};
  const mutedSet = new Set(config.muted || []);
  if (config.dots) {
    for (const d of config.dots) {
      if (d.degree) {
        const oldMidi = OPEN_MIDI[d.string] + d.fret;
        const oldSpelling = spellNote('C', d.degree, oldMidi % 12);
        const newCI = (oldMidi % 12 + ci) % 12;
        noteMap[oldSpelling] = spellNote(rootName, d.degree, newCI);
      }
    }
  }
  if (config.barres) {
    for (const b of config.barres) {
      if (b.degree) {
        const refStr = Math.max(b.from, b.to);
        const oldMidi = OPEN_MIDI[refStr] + b.fret;
        const oldSpelling = spellNote('C', b.degree, oldMidi % 12);
        const newCI = (oldMidi % 12 + ci) % 12;
        noteMap[oldSpelling] = spellNote(rootName, b.degree, newCI);
      }
    }
  }

  // Shift dot frets
  if (config.dots) {
    for (const d of config.dots) {
      d.fret += interval;
      if (d.label) delete d.label;
    }
  }

  // Shift barre frets, converting fret-0 barres to open dots
  if (config.barres) {
    config.barres = config.barres.filter(b => {
      b.fret += interval;
      if (b.fret === 0) {
        // Nut acts as barre — add open dots for uncovered strings
        const lo = Math.min(b.from, b.to);
        const hi = Math.max(b.from, b.to);
        for (let s = lo; s <= hi; s++) {
          if (!config.dots.some(d => d.string === s) && !mutedSet.has(s)) {
            config.dots.push({ string: s, fret: 0, degree: b.degree });
          }
        }
        return false; // remove barre
      }
      return true;
    });
  }

  // Recalculate startFret and frets to fit new positions
  const allFrets = [
    ...(config.dots || []).map(d => d.fret),
    ...(config.barres || []).map(b => b.fret)
  ];
  if (allFrets.length) {
    const minFret = Math.min(...allFrets);
    const maxFret = Math.max(...allFrets);
    config.startFret = minFret > 0 ? minFret - 1 : 0;
    config.frets = Math.max(originalConfig.frets || 4, maxFret - config.startFret);
  }

  // Transpose title
  if (config.title) {
    const hasOpen = (config.dots || []).some(d => d.fret === 0);
    const hadOpen = originalConfig.title.includes('Open Position');
    const fretMatch = originalConfig.title.match(/\((\d+)(?:st|nd|rd|th) Fret\)/);

    config.title = transposeTitle(config.title, noteMap);

    if (hadOpen && !hasOpen) {
      const minFret = Math.min(...allFrets);
      config.title = config.title.replace('Open Position',
        `Position (${ordinal(minFret)} Fret)`);
    } else if (fretMatch && hasOpen) {
      config.title = config.title.replace(
        /Barre Chord \(\d+(?:st|nd|rd|th) Fret\)/, 'Open Position');
    } else if (fretMatch && !hasOpen) {
      const newFret = parseInt(fretMatch[1]) + interval;
      config.title = config.title.replace(
        /\(\d+(?:st|nd|rd|th) Fret\)/, `(${ordinal(newFret)} Fret)`);
    }
  }

  return config;
}

// ─── Audio Note Helpers ────────────────────────────────────

/** Compute piano audio notes from config (flat-based, closest-octave). */
export function pianoAudioNotes(config) {
  if (!config.highlighted || !config.highlighted.length) return [];

  const rootName = config.rootName || 'C';
  const baseMidi = 48 + shortInterval(rootName); // C3 = MIDI 48, shifted closest

  // Track octave wraps (ascending chromatic order, wrap when CI decreases)
  let curOct = 0;
  let prevCI = -1;
  const baseOctave = Math.floor(baseMidi / 12) - 1;
  const notes = [];

  for (const h of config.highlighted) {
    const ci = noteCI(h.note);
    if (ci === -1) continue;
    if (prevCI !== -1 && ci <= prevCI) curOct++;
    notes.push(AUDIO_NAMES[ci] + (baseOctave + curOct));
    prevCI = ci;
  }

  return notes;
}

/** Compute guitar audio notes from config (string/fret based, flat names). */
export function guitarAudioNotes(config) {
  const mutedSet = new Set(config.muted || []);
  const dots = config.dots || [];
  const notes = [];
  for (let s = 6; s >= 1; s--) {
    if (mutedSet.has(s)) continue;
    const dot = dots.find(d => d.string === s);
    if (dot) {
      const midi = OPEN_MIDI[s] + dot.fret;
      notes.push(AUDIO_NAMES[midi % 12] + (Math.floor(midi / 12) - 1));
    }
  }
  return notes;
}

// ─── Title Helpers ─────────────────────────────────────────

function transposeTitle(text, noteMap) {
  // Build map with both ASCII and Unicode variants
  const fullMap = {};
  for (const [oldAscii, newAscii] of Object.entries(noteMap)) {
    const newUni = toUnicode(newAscii);
    fullMap[oldAscii] = newUni;
    const oldUni = toUnicode(oldAscii);
    if (oldUni !== oldAscii) fullMap[oldUni] = newUni;
  }

  // Sort by key length descending to match longest names first (Bb before B)
  const entries = Object.entries(fullMap).sort((a, b) => b[0].length - a[0].length);
  if (!entries.length) return text;

  const pattern = entries.map(([k]) => escRe(k)).join('|');
  const regex = new RegExp(`(?<![A-Za-z])(${pattern})(?![a-z])`, 'g');
  return text.replace(regex, m => fullMap[m] ?? m);
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ─── Root Selector HTML ────────────────────────────────────

/** Render the root selector dropdown (placed once per lesson). */
export function renderRootSelector() {
  const display = n => n
    .replace('##', '\u266F\u266F').replace('#', '\u266F')
    .replace(/([A-G])bb/g, '$1\u266D\u266D').replace(/([A-G])b/g, '$1\u266D');

  const standard = [
    'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E',
    'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'
  ];
  const rare = ['B#', 'Cb', 'E#', 'Fb'];

  let html = '<div class="root-selector">';
  html += '<label class="root-selector-label">Root ';
  html += '<select class="root-select">';
  for (const r of standard) {
    const sel = r === 'C' ? ' selected' : '';
    html += `<option value="${r}"${sel}>${display(r)}</option>`;
  }
  html += '<option disabled>\u2500\u2500\u2500</option>';
  for (const r of rare) {
    html += `<option value="${r}">${display(r)}</option>`;
  }
  html += '</select></label></div>';
  return html;
}
