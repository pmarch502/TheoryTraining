/**
 * Interactive SVG Guitar Chord Diagram component.
 * Generates inline SVG chord diagrams with configurable dot highlighting.
 * Dots display note names and use scale-degree colors when specified.
 */

// ─── Layout Constants (viewBox units) ───────────────────────

const STR_GAP  = 20;   // horizontal gap between strings
const FRET_GAP = 24;   // vertical gap between frets
const DOT_R    = 8.5;  // fretted-dot radius
const OPEN_R   = 5;    // open-string indicator radius (no label)
const OPEN_R_L = 8.5;  // open-string indicator radius (with label)
const NUT_H    = 4;    // nut bar thickness

// ─── Guitar Tuning (for audio playback) ─────────────────────

const OPEN_MIDI = { 6: 40, 5: 45, 4: 50, 3: 55, 2: 59, 1: 64 };
const CHROMATIC = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

/** Map string + fret to note name with octave (e.g., string 6, fret 0 → "E2"). */
function guitarNoteName(string, fret) {
  const midi = OPEN_MIDI[string] + fret;
  return CHROMATIC[midi % 12] + (Math.floor(midi / 12) - 1);
}

/** Get just the note letter (no octave) for a string/fret, display-ready. */
function noteLabel(string, fret) {
  const midi = OPEN_MIDI[string] + fret;
  const name = CHROMATIC[midi % 12];
  return name.replace(/([A-G])b$/i, '$1\u266D').replace('#', '\u266F');
}

// ─── Helpers ────────────────────────────────────────────────

/** X position for a given string number (6 = leftmost, 1 = rightmost). */
function strX(gridX, s) {
  return gridX + (6 - s) * STR_GAP;
}

/** Y center of a fret space (1-based position within the diagram). */
function fretCY(gridY, pos) {
  return gridY + (pos - 0.5) * FRET_GAP;
}

function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Build color class string from a dot's degree or legacy color. */
function dotColorCls(d) {
  if (d.degree) return ` guitar-dot--deg-${d.degree}`;
  if (d.color) return ` guitar-dot--${d.color}`;
  return '';
}

// ─── SVG Builder ────────────────────────────────────────────

function buildChordSVG(config) {
  const numFrets  = config.frets     || 4;
  const startFret = config.startFret || 0;
  const showNut   = startFret === 0;
  const dots      = config.dots      || [];
  const mutedSet  = new Set(config.muted || []);
  const barres    = config.barres    || [];

  // Partition dots into open vs fretted
  const openDots = dots.filter(d => d.fret === 0);
  const fretDots = dots.filter(d => d.fret > 0);
  const openMap  = new Map(openDots.map(d => [d.string, d]));

  // Grid dimensions
  const gridW = 5 * STR_GAP;
  const gridH = numFrets * FRET_GAP;

  const markerH  = 16; // space above grid for X/O markers
  const leftPad  = 14 + (showNut ? 0 : 24);
  const rightPad = 14;
  const botPad   = 6;

  const gridX = leftPad;
  const gridY = markerH + (showNut ? NUT_H : 0) + 2;
  const totalW = leftPad + gridW + rightPad;
  const totalH = gridY + gridH + botPad;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}" `
          + `class="guitar-svg" role="img" aria-label="${esc(config.title || 'Guitar chord diagram')}">`;

  // ── Nut or fret-position label ──
  if (showNut) {
    svg += `<rect x="${gridX - 1}" y="${gridY - NUT_H}" width="${gridW + 2}" height="${NUT_H}" class="guitar-nut"/>`;
  } else {
    svg += `<text x="${gridX - 8}" y="${gridY + FRET_GAP * 0.5 + 4}" text-anchor="end" class="guitar-fret-num">${startFret + 1}fr</text>`;
  }

  // ── Fret lines (horizontal) ──
  for (let f = 0; f <= numFrets; f++) {
    const y = gridY + f * FRET_GAP;
    svg += `<line x1="${gridX}" y1="${y}" x2="${gridX + gridW}" y2="${y}" class="guitar-fret-line"/>`;
  }

  // ── String lines (vertical) ──
  for (let s = 1; s <= 6; s++) {
    const x = strX(gridX, s);
    const cls = s >= 4 ? 'guitar-string guitar-string--bass' : 'guitar-string';
    svg += `<line x1="${x}" y1="${gridY}" x2="${x}" y2="${gridY + gridH}" class="${cls}"/>`;
  }

  // ── X / O markers above the grid ──
  const markerY = gridY - (showNut ? NUT_H : 0) - 6;
  for (let s = 1; s <= 6; s++) {
    const x = strX(gridX, s);

    if (mutedSet.has(s)) {
      const sz = 3.5;
      svg += `<line x1="${x - sz}" y1="${markerY - sz}" x2="${x + sz}" y2="${markerY + sz}" class="guitar-marker-x"/>`
           + `<line x1="${x + sz}" y1="${markerY - sz}" x2="${x - sz}" y2="${markerY + sz}" class="guitar-marker-x"/>`;
    } else if (openMap.has(s)) {
      const d = openMap.get(s);
      const cls = dotColorCls(d);
      const hasLabel = d.degree || d.label;
      const r = hasLabel ? OPEN_R_L : OPEN_R;
      svg += `<circle cx="${x}" cy="${markerY}" r="${r}" class="guitar-open-dot${cls}"/>`;
      if (hasLabel) {
        const label = d.label || noteLabel(s, 0);
        const darkText = d.degree === 3;
        svg += `<text x="${x}" y="${markerY + 3}" class="guitar-dot-label${darkText ? ' guitar-dot-label--dark' : ''}">${esc(label)}</text>`;
      }
    }
  }

  // ── Barres ──
  for (const b of barres) {
    const pos = b.fret - startFret;
    const y   = fretCY(gridY, pos);
    const hi  = Math.max(b.from, b.to);
    const lo  = Math.min(b.from, b.to);
    const x1  = strX(gridX, hi);
    const x2  = strX(gridX, lo);
    const cls = b.degree ? ` guitar-dot--deg-${b.degree}` : (b.color ? ` guitar-dot--${b.color}` : '');
    svg += `<rect x="${x1}" y="${y - DOT_R}" width="${x2 - x1}" height="${DOT_R * 2}" rx="${DOT_R}" class="guitar-barre${cls}"/>`;
  }

  // ── Fretted dots ──
  for (const d of fretDots) {
    const x   = strX(gridX, d.string);
    const pos = d.fret - startFret;
    const y   = fretCY(gridY, pos);
    const cls = dotColorCls(d);
    const darkText = d.degree === 3;
    svg += `<circle cx="${x}" cy="${y}" r="${DOT_R}" class="guitar-dot${cls}"/>`;
    const label = d.label || noteLabel(d.string, d.fret);
    svg += `<text x="${x}" y="${y + 3.5}" class="guitar-dot-label${darkText ? ' guitar-dot-label--dark' : ''}">${esc(label)}</text>`;
  }

  svg += `</svg>`;
  return svg;
}

// ─── Exports ────────────────────────────────────────────────

/**
 * Returns an HTML string containing the guitar chord diagram SVG.
 * Called by renderBlock() in lesson-viewer.js.
 *
 * Config shape:
 *   { startFret: 0, frets: 4,
 *     dots: [{ string: 5, fret: 3, degree: 1 }, ...],
 *     muted: [6],
 *     barres: [{ fret: 1, from: 1, to: 6, degree: 1 }],
 *     title: 'C Major — Open Position' }
 *
 * Each dot can specify:
 *   degree: 1-7 (scale degree → mapped to degree colors)
 *   color: 'root'|'primary'|'secondary' (legacy fallback)
 *   label: 'C' (override auto-computed note name)
 *
 * String numbering: 6 = low E (left), 1 = high E (right).
 * Fret numbering: absolute (0 = open, 1 = first fret, etc.).
 */
export function renderGuitarHTML(config) {
  const svg = buildChordSVG(config);
  const caption = config.title
    ? `<div class="guitar-caption">${esc(config.title)}</div>`
    : '';

  // Compute playable notes (low string → high string) for audio
  const mutedSet = new Set(config.muted || []);
  const dots = config.dots || [];
  const notes = [];
  for (let s = 6; s >= 1; s--) {
    if (mutedSet.has(s)) continue;
    const dot = dots.find(d => d.string === s);
    if (dot) notes.push(guitarNoteName(s, dot.fret));
  }
  const notesAttr = notes.length ? ` data-notes="${notes.join(',')}"` : '';

  return `<div class="guitar-chord"${notesAttr}>${svg}${caption}</div>`;
}

/**
 * Post-render hook — attaches audio strum playback to guitar diagrams.
 * Adds a "Strum" button that plays the chord with a staggered strum effect.
 */
export function hydrateGuitars(container) {
  import('../audio/audio-engine.js').then(audio => {
    const guitars = container.querySelectorAll('.guitar-chord');
    for (const guitar of guitars) {
      const notesData = guitar.dataset.notes;
      if (!notesData) continue;

      const btn = document.createElement('button');
      btn.className = 'audio-play-btn';
      btn.innerHTML = '\u25B6 Play';
      btn.setAttribute('aria-label', 'Play chord');
      btn.addEventListener('click', async () => {
        if (btn.classList.contains('audio-loading')) return;
        btn.classList.add('audio-loading');
        btn.setAttribute('aria-busy', 'true');
        try {
          const notes = notesData.split(',');
          await audio.playStrum('guitar', notes);
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
      guitar.appendChild(btn);

      // Preload samples
      audio.preload('guitar', notesData.split(','));
    }
  }).catch(e => console.warn('[guitar] Audio not available:', e));
}
