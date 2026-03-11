/**
 * Interactive SVG Piano Keyboard component.
 * Generates inline SVG keyboards with configurable note highlighting.
 */

// ─── Note Data ───────────────────────────────────────────────

const NOTES = [
  { i: 0,  white: true,  names: ['C'],          w: 0 },
  { i: 1,  white: false, names: ['C#', 'Db'],   after: 0 },
  { i: 2,  white: true,  names: ['D'],           w: 1 },
  { i: 3,  white: false, names: ['D#', 'Eb'],   after: 1 },
  { i: 4,  white: true,  names: ['E'],           w: 2 },
  { i: 5,  white: true,  names: ['F'],           w: 3 },
  { i: 6,  white: false, names: ['F#', 'Gb'],   after: 3 },
  { i: 7,  white: true,  names: ['G'],           w: 4 },
  { i: 8,  white: false, names: ['G#', 'Ab'],   after: 4 },
  { i: 9,  white: true,  names: ['A'],           w: 5 },
  { i: 10, white: false, names: ['A#', 'Bb'],   after: 5 },
  { i: 11, white: true,  names: ['B'],           w: 6 },
];

const WHITES = NOTES.filter(n => n.white);
const BLACKS = NOTES.filter(n => !n.white);

// ─── Dimensions (viewBox units) ──────────────────────────────

const KW = 30;    // white key width
const KH = 88;    // white key height
const BW = 18;    // black key width
const BH = 56;    // black key height
const LABEL_H = 20; // label area below keys
const TOP = 3;    // decorative top bar
const RAD = 3;    // corner radius

// ─── Helpers ─────────────────────────────────────────────────

/** Map a note name (e.g. 'C#', 'Db', 'G♯') to its chromatic index. */
function noteIndex(name) {
  const n = name.replace(/\u266F/g, '#').replace(/\u266D/g, 'b').replace(/\d+$/, '');
  for (const note of NOTES) {
    if (note.names.some(nm => nm.toLowerCase() === n.toLowerCase())) return note.i;
  }
  return -1;
}

/** Convert ASCII note name to display form: C# → C♯, Db → D♭ */
function displayName(name) {
  return name.replace('#', '\u266F').replace(/([A-Ga-g])b$/i, '$1\u266D');
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Build a map of chromatic index → { color, label } from config.highlighted. */
function buildHighlights(arr) {
  const map = {};
  if (!arr) return map;
  for (const h of arr) {
    const idx = noteIndex(h.note);
    if (idx !== -1) map[idx] = { color: h.color || 'primary', label: h.note };
  }
  return map;
}

// ─── SVG Builder ─────────────────────────────────────────────

function buildPianoSVG(config) {
  const oct = config.octaves || 1;
  const labels = config.labels || 'none';
  const hl = buildHighlights(config.highlighted);
  const hasLabels = labels !== 'none';

  const totalWhite = oct * 7;
  const svgW = totalWhite * KW;
  const svgH = TOP + KH + (hasLabels ? LABEL_H : 0);
  const ariaLabel = config.title || 'Piano keyboard';

  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" `;
  s += `role="img" aria-label="${esc(ariaLabel)}" class="piano-svg">`;

  // Top decorative bar
  s += `<rect x="0" y="0" width="${svgW}" height="${TOP}" class="piano-topbar"/>`;

  // ── White keys ──
  for (let o = 0; o < oct; o++) {
    for (const note of WHITES) {
      const x = (o * 7 + note.w) * KW;
      const h = hl[note.i];
      const cls = `piano-key piano-key--white${h ? ` piano-key--hl-${h.color}` : ''}`;

      s += `<rect x="${x + 0.5}" y="${TOP}" width="${KW - 1}" height="${KH}" `;
      s += `rx="${RAD}" ry="${RAD}" class="${cls}" data-note="${note.names[0]}" data-octave="${o}"/>`;

      // White key label (below the key in the label area)
      if (hasLabels && (labels === 'all' || (labels === 'highlighted' && h))) {
        const text = displayName(h ? h.label : note.names[0]);
        const lx = x + KW / 2;
        const ly = TOP + KH + LABEL_H - 5;
        s += `<text x="${lx}" y="${ly}" text-anchor="middle" `;
        s += `class="piano-label piano-label--white">${esc(text)}</text>`;
      }
    }
  }

  // ── Black keys (drawn on top) ──
  for (let o = 0; o < oct; o++) {
    for (const note of BLACKS) {
      const x = (o * 7 + note.after + 1) * KW - BW / 2;
      const h = hl[note.i];
      const cls = `piano-key piano-key--black${h ? ` piano-key--hl-${h.color}` : ''}`;

      s += `<rect x="${x}" y="${TOP}" width="${BW}" height="${BH}" `;
      s += `rx="${RAD}" ry="${RAD}" class="${cls}" data-note="${note.names.join(',')}" data-octave="${o}"/>`;

      // Black key labels (on the key body)
      if (labels === 'all') {
        const lx = x + BW / 2;
        // Two lines: sharp name, then flat name
        s += `<text x="${lx}" y="${TOP + BH - 20}" text-anchor="middle" `;
        s += `class="piano-label piano-label--black">${esc(displayName(note.names[0]))}</text>`;
        if (note.names.length > 1) {
          s += `<text x="${lx}" y="${TOP + BH - 8}" text-anchor="middle" `;
          s += `class="piano-label piano-label--black">${esc(displayName(note.names[1]))}</text>`;
        }
      } else if (labels === 'highlighted' && h) {
        const lx = x + BW / 2;
        s += `<text x="${lx}" y="${TOP + BH - 12}" text-anchor="middle" `;
        s += `class="piano-label piano-label--black piano-label--hl">${esc(displayName(h.label))}</text>`;
      }
    }
  }

  s += `</svg>`;
  return s;
}

// ─── Exports ─────────────────────────────────────────────────

/**
 * Returns an HTML string containing the piano keyboard SVG.
 * Called by renderBlock() in lesson-viewer.js.
 *
 * Config shape:
 *   { octaves: 1, labels: 'all'|'highlighted'|'none',
 *     highlighted: [{ note: 'C', color: 'root' }, ...],
 *     title: 'C Major Chord' }
 */
export function renderPianoHTML(config) {
  const svg = buildPianoSVG(config);
  const caption = config.title
    ? `<div class="piano-caption">${esc(config.title)}</div>`
    : '';
  // Store highlighted notes for audio playback
  const hlNotes = (config.highlighted || []).map(h => h.note);
  const hlAttr = hlNotes.length ? ` data-highlighted="${esc(hlNotes.join(','))}"` : '';
  return `<div class="piano-keyboard"${hlAttr}>${svg}${caption}</div>`;
}

/**
 * Post-render hook — attaches audio playback to piano elements.
 * Adds a "Play" button for highlighted chords and click-to-play on keys.
 */
export function hydratePianos(container) {
  import('../audio/audio-engine.js').then(audio => {
    const pianos = container.querySelectorAll('.piano-keyboard');
    for (const piano of pianos) {
      const hlData = piano.dataset.highlighted;

      // "Play" button for highlighted chord
      if (hlData) {
        const btn = document.createElement('button');
        btn.className = 'audio-play-btn';
        btn.innerHTML = '\u25B6 Play';
        btn.setAttribute('aria-label', 'Play chord');
        btn.addEventListener('click', async () => {
          if (btn.classList.contains('audio-loading')) return;
          btn.classList.add('audio-loading');
          btn.setAttribute('aria-busy', 'true');
          try {
            const notes = hlData.split(',').map(n => audio.normalizeNote(n) + '4');
            await audio.playChord('piano', notes);
            btn.classList.remove('audio-loading');
            btn.classList.add('audio-playing');
            btn.setAttribute('aria-busy', 'false');
            setTimeout(() => btn.classList.remove('audio-playing'), 1500);
          } catch {
            btn.classList.remove('audio-loading');
            btn.classList.add('audio-error');
            btn.setAttribute('aria-busy', 'false');
            btn.innerHTML = '\u25B6 Unavailable';
          }
        });
        piano.appendChild(btn);

        // Preload highlighted notes
        audio.preload('piano', hlData.split(',').map(n => audio.normalizeNote(n) + '4'));
      }

      // Individual key clicks
      const keys = piano.querySelectorAll('.piano-key');
      for (const key of keys) {
        key.addEventListener('click', async (e) => {
          e.stopPropagation();
          const noteName = key.dataset.note.split(',')[0];
          const octave = 4 + parseInt(key.dataset.octave || '0');
          const fullNote = audio.normalizeNote(noteName) + octave;
          key.classList.add('piano-key--playing');
          await audio.playNote('piano', fullNote);
          setTimeout(() => key.classList.remove('piano-key--playing'), 300);
        });
      }
    }
  }).catch(e => console.warn('[piano] Audio not available:', e));
}
