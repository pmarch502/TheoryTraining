/**
 * Interactive SVG Piano Keyboard component.
 * Generates inline SVG keyboards with configurable note highlighting.
 * Highlighted notes are shown as colored dots (with note name inside)
 * rather than coloring entire keys.
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

// ─── Dot dimensions ─────────────────────────────────────────

const DOT_R_W = 10;  // dot radius on white keys
const DOT_R_B = 7;   // dot radius on black keys
const DEG_H = 18;    // degree label area below keys

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

/** Build a list of placed highlights from config.highlighted.
 *  Each note appears exactly once, assigned to an ascending octave.
 *  Returns { items: [{oct, idx, degree, color, label}], placed: Set<"oct:idx"> }
 */
function buildHighlights(arr) {
  const items = [];
  const placed = new Set();
  if (!arr || !arr.length) return { items, placed };
  let curOct = 0;
  let prevIdx = -1;
  for (const h of arr) {
    const idx = noteIndex(h.note);
    if (idx === -1) continue;
    if (prevIdx !== -1 && idx <= prevIdx) curOct++;
    items.push({ oct: curOct, idx, degree: h.degree, color: h.color, label: h.note });
    placed.add(`${curOct}:${idx}`);
    prevIdx = idx;
  }
  return { items, placed };
}

// ─── SVG Builder ─────────────────────────────────────────────

function buildPianoSVG(config) {
  const oct = config.octaves || 1;
  const labels = config.labels || 'none';
  const { items: hlItems, placed: hlPlaced } = buildHighlights(config.highlighted);

  // Label area only needed for 'all' mode (highlighted keys use dots now)
  const hasLabelArea = labels === 'all';
  const hasDegrees = hlItems.some(h => h.degree);
  const degH = hasDegrees ? DEG_H : 0;

  const totalWhite = oct * 7;
  const svgW = totalWhite * KW;
  const svgH = TOP + KH + degH + (hasLabelArea ? LABEL_H : 0);
  const ariaLabel = config.title || 'Piano keyboard';

  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" `;
  s += `role="img" aria-label="${esc(ariaLabel)}" class="piano-svg" style="height:150px">`;

  // Top decorative bar
  s += `<rect x="0" y="0" width="${svgW}" height="${TOP}" class="piano-topbar"/>`;

  // ── White keys (never filled with highlight color) ──
  for (let o = 0; o < oct; o++) {
    for (const note of WHITES) {
      const x = (o * 7 + note.w) * KW;
      s += `<rect x="${x + 0.5}" y="${TOP}" width="${KW - 1}" height="${KH}" `;
      s += `rx="${RAD}" ry="${RAD}" class="piano-key piano-key--white" data-note="${note.names[0]}" data-octave="${o}"/>`;

      // Label below for non-highlighted white keys in 'all' mode
      if (hasLabelArea && !hlPlaced.has(`${o}:${note.i}`)) {
        const text = displayName(note.names[0]);
        const lx = x + KW / 2;
        const ly = TOP + KH + degH + LABEL_H - 5;
        s += `<text x="${lx}" y="${ly}" text-anchor="middle" `;
        s += `class="piano-label piano-label--white">${esc(text)}</text>`;
      }
    }
  }

  // ── Black keys (drawn on top, never filled with highlight color) ──
  for (let o = 0; o < oct; o++) {
    for (const note of BLACKS) {
      const x = (o * 7 + note.after + 1) * KW - BW / 2;
      s += `<rect x="${x}" y="${TOP}" width="${BW}" height="${BH}" `;
      s += `rx="${RAD}" ry="${RAD}" class="piano-key piano-key--black" data-note="${note.names.join(',')}" data-octave="${o}"/>`;

      // Labels on body for non-highlighted black keys in 'all' mode
      if (labels === 'all' && !hlPlaced.has(`${o}:${note.i}`)) {
        const lx = x + BW / 2;
        s += `<text x="${lx}" y="${TOP + BH - 20}" text-anchor="middle" `;
        s += `class="piano-label piano-label--black">${esc(displayName(note.names[0]))}</text>`;
        if (note.names.length > 1) {
          s += `<text x="${lx}" y="${TOP + BH - 8}" text-anchor="middle" `;
          s += `class="piano-label piano-label--black">${esc(displayName(note.names[1]))}</text>`;
        }
      }
    }
  }

  // ── Dots on highlighted keys (each note once, in formula order) ──
  for (const h of hlItems) {
    const note = NOTES.find(n => n.i === h.idx);
    if (!note || h.oct >= oct) continue;

    // Degree-based color class, with fallback to named color
    const degCls = h.degree
      ? ` piano-dot--deg-${h.degree}`
      : (h.color ? ` piano-dot--${h.color}` : '');
    const darkText = h.degree === 3; // yellow needs dark text

    if (note.white) {
      const cx = (h.oct * 7 + note.w) * KW + KW / 2;
      const cy = TOP + KH - 16;
      s += `<circle cx="${cx}" cy="${cy}" r="${DOT_R_W}" class="piano-dot${degCls}"/>`;
      s += `<text x="${cx}" y="${cy + 3.5}" class="piano-dot-label${darkText ? ' piano-dot-label--dark' : ''}">${esc(displayName(h.label))}</text>`;
    } else {
      const cx = (h.oct * 7 + note.after + 1) * KW;
      const cy = TOP + BH - 14;
      s += `<circle cx="${cx}" cy="${cy}" r="${DOT_R_B}" class="piano-dot piano-dot--on-black${degCls}"/>`;
      s += `<text x="${cx}" y="${cy + 2.5}" class="piano-dot-label piano-dot-label--sm${darkText ? ' piano-dot-label--dark' : ''}">${esc(displayName(h.label))}</text>`;
    }
  }

  // ── Degree labels below keys ──
  if (hasDegrees) {
    // Compare each note against the root's major scale to detect accidentals
    const MAJOR_SCALE = [0, 0, 2, 4, 5, 7, 9, 11]; // index 0 unused, degrees 1-7
    const rootItem = hlItems.find(h => h.degree === 1);
    const rootIdx = rootItem ? rootItem.idx : 0;

    for (const h of hlItems) {
      const note = NOTES.find(n => n.i === h.idx);
      if (!note || h.oct >= oct || !h.degree) continue;

      const cx = note.white
        ? (h.oct * 7 + note.w) * KW + KW / 2
        : (h.oct * 7 + note.after + 1) * KW;
      // Show extended interval (9/11/13) when note wraps to a higher octave
      const displayDeg = (h.oct > 0 && (h.degree === 2 || h.degree === 4 || h.degree === 6))
        ? h.degree + 7
        : h.degree;
      // Detect sharp/flat by comparing to the major scale of the root
      const expectedIdx = (rootIdx + MAJOR_SCALE[h.degree]) % 12;
      const diff = ((h.idx - expectedIdx) + 12) % 12;
      const accidental = diff === 1 ? '\u266F' : diff === 11 ? '\u266D' : '';
      const degCls = ` piano-deg--deg-${h.degree}`;
      s += `<text x="${cx}" y="${TOP + KH + degH - 4}" text-anchor="middle" class="piano-deg-label${degCls}">${accidental}${displayDeg}</text>`;
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
 *     highlighted: [{ note: 'C', degree: 1 }, ...],
 *     title: 'C Major Chord' }
 *
 * Each highlighted note can specify:
 *   degree: 1-7 (scale degree → mapped to degree colors)
 *   color: 'root'|'primary'|'secondary' (legacy fallback)
 */
export function renderPianoHTML(config) {
  const svg = buildPianoSVG(config);
  const caption = config.title
    ? `<div class="piano-caption">${esc(config.title)}</div>`
    : '';
  // Store highlighted notes with octaves for audio playback
  const { items: hlItems } = buildHighlights(config.highlighted);
  const hlNotes = hlItems.map(h => h.label + (3 + h.oct));
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
            const notes = hlData.split(',').map(n => audio.normalizeNote(n));
            await audio.playStrum('piano', notes);
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
        audio.preload('piano', hlData.split(',').map(n => audio.normalizeNote(n)));
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
