/**
 * Chord voicing library — loads the hakwright guitar chord database
 * and provides lookup/conversion for real chord voicings.
 */

const OPEN_MIDI = { 6: 40, 5: 45, 4: 50, 3: 55, 2: 59, 1: 64 };

/** Map enharmonic root names to the 12 keys in the library. */
const ROOT_TO_LIB = {
  'C': 'C', 'C#': 'C#', 'Db': 'C#', 'D': 'D', 'D#': 'D#', 'Eb': 'D#',
  'E': 'E', 'Fb': 'E', 'E#': 'F', 'F': 'F', 'F#': 'F#', 'Gb': 'F#',
  'G': 'G', 'G#': 'G#', 'Ab': 'G#', 'A': 'A', 'A#': 'A#', 'Bb': 'A#',
  'B': 'B', 'Cb': 'B', 'B#': 'C'
};

/** Display name for chord suffix in titles. */
const SUFFIX_DISPLAY = {
  'major': ' Major', 'm': ' Minor', 'dim': ' Diminished', 'aug': ' Augmented',
  'sus4': 'sus4', 'sus2': 'sus2',
  'maj7': 'Maj7', '7': '7', 'm7': 'm7', 'm7b5': '\u00F87', 'dim7': 'dim7',
  'mmaj7': 'mM7',
  'maj9': 'Maj9', '9': '9', 'm9': 'm9',
  'maj11': 'Maj11', '11': '11', 'm11': 'm11',
  'maj13': 'Maj13', '13': '13', 'm13': 'm13',
  '7b5': '7♭5', '7b9': '7♭9', '7sharp5': '7♯5', '7sharp9': '7♯9',
  '9sharp5': '9♯5', 'maj7b5': 'Maj7♭5', 'maj7sharp5': 'Maj7♯5',
  'maj7sharp11': 'Maj7♯11', '7b13': '7♭13',
  '7b5b9': '7♭5♭9', '7b5sharp9': '7♭5♯9',
  '7sharp5b9': '7♯5♭9', '7sharp5sharp9': '7♯5♯9'
};

/**
 * Fallback map for suffixes not in the guitar chord database.
 * Maps to a close base suffix with optional fret alteration for the 5th.
 */
const SUFFIX_FALLBACK = {
  'maj7sharp11':    { base: 'maj7b5',    spelling: '1, 3, #11, 7' },
  '7b13':           { base: '9sharp5',   spelling: '1, 3, b13, b7, 9' },
  '7b5b9':          { base: '7b9',       spelling: '1, 3, b5, b7, b9',  alter: { 7: -1 } },
  '7b5sharp9':      { base: '7sharp9',   spelling: '1, 3, b5, b7, #9',  alter: { 7: -1 } },
  '7sharp5b9':      { base: '7b9',       spelling: '1, 3, #5, b7, b9',  alter: { 7: +1 } },
  '7sharp5sharp9':  { base: '7sharp9',   spelling: '1, 3, #5, b7, #9',  alter: { 7: +1 } },
};

/** Parse a spelling string like "1, b3, (5), b7" into interval→degree map. */
const DEGREE_INTERVALS = {
  '1': 0, 'b2': 1, '2': 2, '#2': 3, 'b3': 3, '3': 4, '4': 5, '#4': 6,
  'b5': 6, '5': 7, '#5': 8, 'b6': 8, '6': 9, 'bb7': 9, 'b7': 10, '7': 11,
  'b9': 1, '9': 2, '#9': 3, '11': 5, '#11': 6, 'b13': 8, '13': 9
};
const DEGREE_NUMBER = {
  '1': 1, 'b2': 2, '2': 2, '#2': 2, 'b3': 3, '3': 3, '4': 4, '#4': 4,
  'b5': 5, '5': 5, '#5': 5, 'b6': 6, '6': 6, 'bb7': 7, 'b7': 7, '7': 7,
  'b9': 2, '9': 2, '#9': 2, '11': 4, '#11': 4, 'b13': 6, '13': 6
};

function parseSpelling(str) {
  // Returns Map<chromaticInterval, degreeNumber>
  const map = new Map();
  const tokens = str.replace(/[()]/g, '').split(',').map(s => s.trim());
  for (const t of tokens) {
    const interval = DEGREE_INTERVALS[t];
    const degree = DEGREE_NUMBER[t];
    if (interval !== undefined && degree !== undefined) {
      map.set(interval, degree);
    }
  }
  return map;
}

// ─── Database Loading ────────────────────────────────────────

let _db = null;
let _loading = null;

export function ensureLoaded() {
  if (_db) return Promise.resolve();
  if (_loading) return _loading;
  _loading = fetch(new URL('./guitar-chords.json', import.meta.url))
    .then(r => r.json())
    .then(data => { _db = data; })
    .catch(e => { console.warn('[chord-library] Failed to load:', e); _loading = null; });
  return _loading;
}

// ─── Voicing Selection ───────────────────────────────────────

/** Score a voicing for playability (higher = better).
 *  Prefers: more strings played, genuine open position, lower frets, compact span.
 *  Penalises: isolated open strings flanked by fretted notes, interior muted strings. */
function scoreVoicing(frets) {
  let played = 0, open = 0, maxFret = 0, minFret = Infinity;
  for (const f of frets) {
    if (f >= 0) { played++; if (f === 0) open++; }
    if (f > maxFret) maxFret = f;
    if (f > 0 && f < minFret) minFret = f;
  }
  const span = maxFret - (minFret === Infinity ? 0 : minFret);

  let s = played * 8 - maxFret * 3 - span * 2;

  // Bonus for genuine open-position chords (2+ open strings, low frets)
  if (open >= 2 && maxFret <= 4) s += open * 3;

  // Penalise isolated open strings: an open string not adjacent to another open,
  // but sitting between fretted (>0) strings on both sides — unusual fingering
  for (let i = 0; i < 6; i++) {
    if (frets[i] !== 0) continue;
    if ((i > 0 && frets[i - 1] === 0) || (i < 5 && frets[i + 1] === 0)) continue;
    let lo = false, hi = false;
    for (let j = 0; j < i; j++) if (frets[j] > 0) { lo = true; break; }
    for (let j = i + 1; j < 6; j++) if (frets[j] > 0) { hi = true; break; }
    if (lo && hi) s -= 7;
  }

  // Penalise interior muted strings (gaps between played strings)
  let first = -1, last = -1;
  for (let i = 0; i < 6; i++) {
    if (frets[i] >= 0) { if (first < 0) first = i; last = i; }
  }
  if (first >= 0) {
    for (let i = first + 1; i < last; i++) {
      if (frets[i] < 0) s -= 5;
    }
  }

  return s;
}

function bestVoicing(voicings) {
  // Search all categories together — let the score decide
  let best = null, bestScore = -Infinity;
  for (const cat of ['open', 'barre', 'moveable']) {
    const list = voicings[cat];
    if (!list) continue;
    for (const v of list) {
      const s = scoreVoicing(v);
      if (s > bestScore) { best = v; bestScore = s; }
    }
  }
  return best;
}

// ─── Voicing → Config Conversion ─────────────────────────────

function detectBarre(frets) {
  // Find strings played at the minimum non-zero fret
  const played = [];
  for (let i = 0; i < 6; i++) {
    if (frets[i] > 0) played.push({ idx: i, string: 6 - i, fret: frets[i] });
  }
  if (played.length < 2) return null;

  const minFret = Math.min(...played.map(p => p.fret));
  const atMin = played.filter(p => p.fret === minFret);
  if (atMin.length < 2) return null;

  const strings = atMin.map(p => p.string);
  const lo = Math.min(...strings);
  const hi = Math.max(...strings);
  if (hi - lo < 2) return null;

  return { fret: minFret, from: lo, to: hi };
}

function voicingToConfig(frets, rootCI, spelling, rootName, suffix, originalTitle) {
  const intervalMap = parseSpelling(spelling);
  const dots = [];
  const muted = [];
  const fretValues = [];

  for (let i = 0; i < 6; i++) {
    const string = 6 - i;
    const f = frets[i];
    if (f === -1) { muted.push(string); continue; }

    const midi = OPEN_MIDI[string] + f;
    const interval = ((midi % 12) - rootCI + 12) % 12;
    const degree = intervalMap.get(interval) || 1;
    dots.push({ string, fret: f, degree });
    if (f > 0) fretValues.push(f);
  }

  // Barre detection
  const barreInfo = detectBarre(frets);
  const barres = [];
  if (barreInfo) {
    const barreDot = dots.find(d => d.fret === barreInfo.fret && d.string === barreInfo.to);
    barreInfo.degree = barreDot ? barreDot.degree : 1;
    barres.push(barreInfo);
  }

  // Compute startFret and frets — show nut (startFret 0) when all fretted
  // notes fit within 4 frets of it, otherwise shift the window up
  const maxFret = fretValues.length ? Math.max(...fretValues) : 0;
  const minFret = fretValues.length ? Math.min(...fretValues) : 0;
  const startFret = maxFret <= 4 ? 0 : minFret - 1;
  const numFrets = Math.max(4, maxFret - startFret);

  // Build title
  const title = buildTitle(rootName, suffix, dots, fretValues);

  const config = {
    startFret, frets: numFrets, dots, muted, title, suffix,
    rootName, rootLetterIdx: 'CDEFGAB'.indexOf(rootName[0])
  };
  if (barres.length) config.barres = barres;
  return config;
}

function buildTitle(rootName, suffix, dots, fretValues) {
  const uniRoot = rootName
    .replace('##', '\u266F\u266F').replace('#', '\u266F')
    .replace(/([A-G])bb/g, '$1\u266D\u266D').replace(/([A-G])b/g, '$1\u266D');
  const suffixDisplay = SUFFIX_DISPLAY[suffix] || suffix;
  const chordName = uniRoot + suffixDisplay;

  const hasOpen = dots.some(d => d.fret === 0);
  if (hasOpen) return chordName + ' \u2014 Open Position';

  const minFret = fretValues.length ? Math.min(...fretValues) : 1;
  const ord = ordinal(minFret);
  return chordName + ' \u2014 ' + ord + ' Position';
}

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ─── Fallback Fret Alteration ────────────────────────────────

/**
 * Alter frets for notes at specific chromatic intervals from root.
 * alter is a map of { chromaticInterval: fretDelta }, e.g. { 7: -1 }
 * means: any note a perfect 5th (7 semitones) from root gets shifted down 1 fret.
 * If shifted fret goes below 0, mute that string (omit rather than wrong).
 */
function alterFrets(frets, rootCI, alter) {
  if (!alter) return [...frets];
  const result = [...frets];
  for (let i = 0; i < 6; i++) {
    if (result[i] === -1) continue;
    const string = 6 - i;
    const midi = OPEN_MIDI[string] + result[i];
    const interval = ((midi % 12) - rootCI + 12) % 12;
    if (alter[interval] !== undefined) {
      result[i] += alter[interval];
      if (result[i] < 0) result[i] = -1; // mute if below nut
    }
  }
  return result;
}

// ─── Public API ──────────────────────────────────────────────

const CI_LOOKUP = { 'C':0,'C#':1,'D':2,'D#':3,'E':4,'F':5,'F#':6,'G':7,'G#':8,'A':9,'A#':10,'B':11 };

/**
 * Look up a real guitar voicing for the given root and suffix.
 * Returns a config object in the same format as lesson data, or null.
 */
export function getTransposedConfig(rootName, originalConfig) {
  if (!_db || !originalConfig.suffix) return null;

  const libRoot = ROOT_TO_LIB[rootName];
  if (!libRoot) return null;

  const rootCI = CI_LOOKUP[libRoot];
  const suffix = originalConfig.suffix;

  // Direct lookup
  const entry = _db[libRoot]?.[suffix];
  if (entry) {
    const frets = bestVoicing(entry.voicings);
    if (!frets) return null;
    return voicingToConfig(frets, rootCI, entry.spelling, rootName, suffix, originalConfig.title);
  }

  // Fallback lookup
  const fb = SUFFIX_FALLBACK[suffix];
  if (!fb) return null;

  const baseEntry = _db[libRoot]?.[fb.base];
  if (!baseEntry) return null;

  const baseFrets = bestVoicing(baseEntry.voicings);
  if (!baseFrets) return null;

  const altered = alterFrets(baseFrets, rootCI, fb.alter);
  return voicingToConfig(altered, rootCI, fb.spelling, rootName, suffix, originalConfig.title);
}

/**
 * Return ALL voicing configs for a root + suffix, sorted best-first.
 * Each config is a full fretboard config (dots, barres, title, etc.).
 */
export function getAllVoicingConfigs(rootName, suffix) {
  if (!_db) return null;

  const libRoot = ROOT_TO_LIB[rootName];
  if (!libRoot) return null;

  const rootCI = CI_LOOKUP[libRoot];

  // Direct lookup
  const entry = _db[libRoot]?.[suffix];
  if (entry) {
    const all = [];
    for (const cat of ['open', 'barre', 'moveable']) {
      const list = entry.voicings[cat];
      if (!list) continue;
      for (const v of list) {
        all.push({ frets: v, score: scoreVoicing(v) });
      }
    }
    all.sort((a, b) => b.score - a.score);
    return all.map(({ frets }) =>
      voicingToConfig(frets, rootCI, entry.spelling, rootName, suffix)
    );
  }

  // Fallback lookup
  const fb = SUFFIX_FALLBACK[suffix];
  if (!fb) return null;

  const baseEntry = _db[libRoot]?.[fb.base];
  if (!baseEntry) return null;

  const all = [];
  for (const cat of ['open', 'barre', 'moveable']) {
    const list = baseEntry.voicings[cat];
    if (!list) continue;
    for (const v of list) {
      const altered = alterFrets(v, rootCI, fb.alter);
      all.push({ frets: altered, score: scoreVoicing(altered) });
    }
  }
  all.sort((a, b) => b.score - a.score);
  return all.map(({ frets }) =>
    voicingToConfig(frets, rootCI, fb.spelling, rootName, suffix)
  );
}
