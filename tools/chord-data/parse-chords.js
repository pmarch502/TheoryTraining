/**
 * Parse all downloaded hakwright chord .txt files into a single JSON file.
 *
 * Usage:  node parse-chords.js
 * Output: guitar-chords.json
 *
 * JSON structure:
 * {
 *   "A": {
 *     "major": { spelling: "1, 3, 5", voicings: { barre: [...], moveable: [...], open: [...] } },
 *     "m":     { spelling: "1, b3, 5", voicings: { ... } },
 *     ...
 *   },
 *   ...
 * }
 *
 * Each voicing: [s6, s5, s4, s3, s2, s1] where -1 = muted, 0 = open, n = fret
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = join(__dirname, 'raw');
const OUT_FILE = join(__dirname, 'guitar-chords.json');

// Map filename roots to canonical note names
const ROOT_MAP = {
  'A': 'A', 'Asharp': 'A#', 'B': 'B', 'C': 'C', 'Csharp': 'C#',
  'D': 'D', 'Dsharp': 'D#', 'E': 'E', 'F': 'F', 'Fsharp': 'F#',
  'G': 'G', 'Gsharp': 'G#'
};

// Parse a filename like "Cm7.txt" or "Asharp.B.txt" into { root, suffix }
function parseFilename(fname) {
  const base = fname.replace('.txt', '');

  // Try each root (longest first to match "Asharp" before "A")
  const roots = Object.keys(ROOT_MAP).sort((a, b) => b.length - a.length);
  for (const fileRoot of roots) {
    if (base.startsWith(fileRoot)) {
      const rest = base.slice(fileRoot.length);
      const root = ROOT_MAP[fileRoot];

      if (rest === '') return { root, suffix: 'major' };
      if (rest === 'm') return { root, suffix: 'm' };

      // Slash chords: "C.A" → suffix "slash_A", "Cm.Asharp" → suffix "m_slash_A#"
      if (rest.startsWith('.')) {
        const slashPart = rest.slice(1);
        const slashNote = ROOT_MAP[slashPart];
        if (slashNote) return { root, suffix: `slash_${slashNote}` };
      }
      if (rest.startsWith('m.')) {
        const slashPart = rest.slice(2);
        const slashNote = ROOT_MAP[slashPart];
        if (slashNote) return { root, suffix: `m_slash_${slashNote}` };
      }

      // Standard suffixes: "7", "maj7", "m7", "dim", etc.
      return { root, suffix: rest };
    }
  }
  return null;
}

// Parse a single .txt file into { spelling, voicings: { barre, moveable, open } }
function parseChordFile(text) {
  const lines = text.split('\n');
  let spelling = '';
  let section = null;
  const voicings = { barre: [], moveable: [], open: [] };

  for (const raw of lines) {
    const line = raw.trim();

    // Extract spelling
    if (line.startsWith('Spelling:')) {
      spelling = line.replace('Spelling:', '').trim();
      continue;
    }

    // Detect section headers
    if (line.startsWith('MOVEABLE BAR CHORD SHAPES')) { section = 'barre'; continue; }
    if (line.startsWith('OTHER MOVEABLE SHAPES')) { section = 'moveable'; continue; }
    if (line.startsWith('CHORD SHAPES USING OPEN STRINGS')) { section = 'open'; continue; }

    // Skip headers, dividers, blank lines, metadata
    if (!section || line === '' || line.startsWith('-') || line.startsWith('Number of')
        || line.startsWith('Chord shapes generated') || /^=+$/.test(line)) continue;

    // Skip the chord name line at the top (single word, no spaces with digits)
    if (/^[A-G]/.test(line) && !line.includes(' ')) continue;

    // Parse fret line: space-separated values, x = muted
    const parts = line.split(/\s+/).filter(Boolean);
    if (parts.length === 6 && parts.every(p => p === 'x' || /^\d+$/.test(p))) {
      const frets = parts.map(p => p === 'x' ? -1 : parseInt(p, 10));
      voicings[section].push(frets);
    }
  }

  return { spelling, voicings };
}

// Main
const db = {};
const files = readdirSync(RAW_DIR).filter(f => f.endsWith('.txt'));

let parsed = 0;
let skipped = 0;

for (const fname of files) {
  const info = parseFilename(fname);
  if (!info) { skipped++; continue; }

  const text = readFileSync(join(RAW_DIR, fname), 'utf-8');
  const chord = parseChordFile(text);

  if (!db[info.root]) db[info.root] = {};
  db[info.root][info.suffix] = chord;
  parsed++;
}

// Sort roots chromatically
const CHROM_ORDER = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const sorted = {};
for (const root of CHROM_ORDER) {
  if (db[root]) {
    // Sort suffixes alphabetically within each root
    const suffixes = Object.keys(db[root]).sort();
    sorted[root] = {};
    for (const s of suffixes) sorted[root][s] = db[root][s];
  }
}

writeFileSync(OUT_FILE, JSON.stringify(sorted, null, 2));

// Stats
const totalVoicings = Object.values(sorted).reduce((sum, root) =>
  sum + Object.values(root).reduce((s2, chord) =>
    s2 + chord.voicings.barre.length + chord.voicings.moveable.length + chord.voicings.open.length, 0), 0);

console.log(`Parsed: ${parsed} files, Skipped: ${skipped}`);
console.log(`Roots: ${Object.keys(sorted).length}`);
console.log(`Total chord types: ${parsed}`);
console.log(`Total voicings: ${totalVoicings}`);
console.log(`Written to: ${OUT_FILE}`);
