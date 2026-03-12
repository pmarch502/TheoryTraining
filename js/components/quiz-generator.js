import { quizRegistry } from '../data/quiz-registry.js';

/* ── Helpers ─────────────────────────────────────────────────────────── */

/** Fisher-Yates shuffle — returns a new array. */
function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Pick `count` distractors from `pool` that differ from `correct`.
 * Returns an array of strings.
 */
function pickDistractors(correct, pool, count = 3) {
  const candidates = pool.filter(v => v !== correct);
  const shuffled = shuffle(candidates);
  return shuffled.slice(0, count);
}

/** Return all chord-type registry entries whose lessonId is in the given set. */
function getChordPool(completedIds) {
  return quizRegistry.filter(
    e => e.type === 'chord' && completedIds.has(e.lessonId)
  );
}

/**
 * Display-safe version of a chord symbol.
 * Empty string → user-friendly label in options / questions.
 */
function displaySymbol(sym) {
  return sym === '' ? '(none)' : sym;
}

function displaySymbolInQuestion(sym) {
  return sym === '' ? '(none)' : sym;
}

function displaySymbolInOption(sym) {
  return sym === '' ? 'none (just the letter)' : sym;
}

/* ── Chord question templates ────────────────────────────────────────── */

const CHORD_TEMPLATES = [
  // 1 — Name → Formula
  (entry, pool) => {
    const wrongs = pickDistractors(entry.formula, pool.map(e => e.formula));
    if (wrongs.length < 3) return null;
    return {
      question: `What is the formula for a ${entry.name} chord?`,
      correct: entry.formula,
      wrongs,
      explanation: `The ${entry.name} chord uses the formula ${entry.formula}.`,
    };
  },
  // 2 — Formula → Name
  (entry, pool) => {
    const wrongs = pickDistractors(entry.name, pool.map(e => e.name));
    if (wrongs.length < 3) return null;
    return {
      question: `Which chord quality uses the formula ${entry.formula}?`,
      correct: entry.name,
      wrongs,
      explanation: `The formula ${entry.formula} belongs to the ${entry.name} chord.`,
    };
  },
  // 3 — Name → Symbol
  (entry, pool) => {
    const correctDisplay = displaySymbolInOption(entry.symbol);
    const wrongs = pickDistractors(
      correctDisplay,
      pool.map(e => displaySymbolInOption(e.symbol))
    );
    if (wrongs.length < 3) return null;
    return {
      question: `What is the chord symbol suffix for ${entry.name}?`,
      correct: correctDisplay,
      wrongs,
      explanation: `The ${entry.name} chord uses the symbol suffix "${entry.symbol || '(none)'}".`,
    };
  },
  // 4 — Symbol → Name
  (entry, pool) => {
    const wrongs = pickDistractors(entry.name, pool.map(e => e.name));
    if (wrongs.length < 3) return null;
    return {
      question: `What chord type does the suffix '${displaySymbolInQuestion(entry.symbol)}' indicate?`,
      correct: entry.name,
      wrongs,
      explanation: `The suffix "${displaySymbol(entry.symbol)}" indicates a ${entry.name} chord.`,
    };
  },
  // 5 — Note count
  (entry, _pool) => {
    const correct = String(entry.noteCount);
    const allCounts = ['3', '4', '5', '6', '7'];
    const wrongs = pickDistractors(correct, allCounts);
    if (wrongs.length < 3) return null;
    return {
      question: `How many different notes are in a ${entry.name} chord?`,
      correct,
      wrongs,
      explanation: `A ${entry.name} chord has ${entry.noteCount} notes (${entry.formula}).`,
    };
  },
  // 6 — Category identification
  (entry, _pool) => {
    const correct =
      entry.category.charAt(0).toUpperCase() + entry.category.slice(1);
    const allCategories = [
      'Triad', 'Seventh', 'Ninth', 'Eleventh',
      'Thirteenth', 'Added', 'Altered',
    ];
    const wrongs = pickDistractors(correct, allCategories);
    if (wrongs.length < 3) return null;
    return {
      question: `What category does the ${entry.name} chord belong to?`,
      correct,
      wrongs,
      explanation: `The ${entry.name} chord is a ${entry.category} chord.`,
    };
  },
];

/* ── Core generation logic ───────────────────────────────────────────── */

/**
 * Build the chord pool for a given lesson, preferring same-category chords.
 * Falls back to nearby lessons when the pool is too small.
 */
function buildChordPool(entry, completedIds) {
  const idSet = new Set(completedIds);
  idSet.add(entry.lessonId);

  let pool = getChordPool(idSet);

  // Prefer same-category distractors when there are enough
  const sameCategory = pool.filter(
    e => e.category === entry.category && e.name !== entry.name
  );
  if (sameCategory.length >= 3) {
    // Use same-category pool but keep the full pool as a fallback reference
    return { primary: sameCategory, full: pool };
  }

  // If the pool is too small, widen by including nearby lesson IDs
  if (pool.length < 4) {
    const numericId = parseInt(entry.lessonId.replace(/\D/g, ''), 10) || 0;
    const nearby = quizRegistry.filter(e => {
      if (e.type !== 'chord') return false;
      const eid = parseInt(e.lessonId.replace(/\D/g, ''), 10) || 0;
      return Math.abs(eid - numericId) <= 6;
    });
    pool = [...new Map([...pool, ...nearby].map(e => [e.name, e])).values()];
  }

  return { primary: pool, full: pool };
}

/**
 * Generate a single chord-type question from a random template.
 * Returns { question, options, answer, explanation } or null.
 */
function generateChordQuestion(entry, completedIds) {
  const { primary, full } = buildChordPool(entry, completedIds);
  const pool = primary.length >= 3 ? primary : full;

  const templateOrder = shuffle([...CHORD_TEMPLATES.keys()]);
  for (const idx of templateOrder) {
    const raw = CHORD_TEMPLATES[idx](entry, pool);
    if (!raw) continue;

    const options = shuffle([raw.correct, ...raw.wrongs]);
    return {
      question: raw.question,
      options,
      answer: options.indexOf(raw.correct),
      explanation: raw.explanation,
      _templateIdx: idx, // used by recentHistory tracking
    };
  }
  return null;
}

/**
 * Generate questions from a foundation entry (fact-based).
 * Each fact becomes one question with shuffled options.
 */
function generateFoundationQuestions(entry) {
  return entry.facts.map(fact => {
    const options = shuffle([fact.a, ...fact.wrong]);
    return {
      question: fact.q,
      options,
      answer: options.indexOf(fact.a),
      explanation: `The answer is ${fact.a}.`,
    };
  });
}

/* ── Public API ───────────────────────────────────────────────────────── */

/** Per-lesson history to avoid immediate repeats in continuous mode. */
const lessonHistory = [];
const MAX_LESSON_HISTORY = 8;

/**
 * Generate a single random question for a specific lesson (continuous mode).
 *
 * @param {string}   lessonId      — the lesson to quiz on
 * @param {string[]} completedIds  — IDs the learner has finished
 * @param {Array}    handAuthored  — pre-built question objects (already shaped)
 * @returns {object|null} a question object, or null if nothing available
 */
export function generateLessonQuestion(lessonId, completedIds, handAuthored = []) {
  const idSet = completedIds instanceof Set
    ? completedIds
    : new Set(completedIds);
  idSet.add(lessonId);

  const entry = quizRegistry.find(e => e.lessonId === lessonId);

  // Try hand-authored questions first (shuffled), then generated
  const candidates = shuffle([...handAuthored]);

  // Try each hand-authored question against history
  for (const q of candidates) {
    const key = `lesson:${lessonId}:hand:${q.question}`;
    if (!lessonHistory.includes(key)) {
      lessonHistory.push(key);
      if (lessonHistory.length > MAX_LESSON_HISTORY) lessonHistory.shift();
      return q;
    }
  }

  if (entry) {
    if (entry.type === 'chord') {
      // Try multiple times to find a non-repeated question
      for (let attempt = 0; attempt < 10; attempt++) {
        const q = generateChordQuestion(entry, idSet);
        if (!q) continue;
        const key = `lesson:${lessonId}:${q._templateIdx}`;
        if (!lessonHistory.includes(key)) {
          lessonHistory.push(key);
          if (lessonHistory.length > MAX_LESSON_HISTORY) lessonHistory.shift();
          const { _templateIdx, ...clean } = q;
          return clean;
        }
      }
      // All in history — clear and return any question
      lessonHistory.length = 0;
      const q = generateChordQuestion(entry, idSet);
      if (q) {
        const { _templateIdx, ...clean } = q;
        return clean;
      }
    } else if (entry.type === 'foundation') {
      const questions = shuffle(generateFoundationQuestions(entry));
      for (const q of questions) {
        const key = `lesson:${lessonId}:found:${q.question}`;
        if (!lessonHistory.includes(key)) {
          lessonHistory.push(key);
          if (lessonHistory.length > MAX_LESSON_HISTORY) lessonHistory.shift();
          return q;
        }
      }
      // All in history — clear and return any
      lessonHistory.length = 0;
      if (questions.length > 0) return questions[0];
    }
  }

  // Final fallback: return any hand-authored question
  if (candidates.length > 0) {
    lessonHistory.length = 0;
    return candidates[0];
  }

  return null;
}

/** Module-level history to avoid repeats in random mode. */
const recentHistory = [];
const MAX_HISTORY = 10;

/**
 * Generate a single random question from any completed lesson.
 *
 * @param {string[]} completedIds — IDs the learner has finished
 * @returns {object|null} a question object, or null if nothing available
 */
export function generateRandomQuestion(completedIds) {
  const idSet = completedIds instanceof Set
    ? completedIds
    : new Set(completedIds);

  // Find eligible registry entries
  const eligible = quizRegistry.filter(e => idSet.has(e.lessonId));
  if (eligible.length === 0) return null;

  const shuffled = shuffle(eligible);

  for (const entry of shuffled) {
    let question = null;
    let templateIdx = -1;

    if (entry.type === 'chord') {
      const q = generateChordQuestion(entry, idSet);
      if (!q) continue;
      templateIdx = q._templateIdx;
      const { _templateIdx, ...clean } = q;
      question = clean;
    } else if (entry.type === 'foundation') {
      const questions = generateFoundationQuestions(entry);
      if (questions.length === 0) continue;
      question = questions[Math.floor(Math.random() * questions.length)];
    }

    if (!question) continue;

    // Check recent history to avoid repeats
    const historyKey = `${entry.lessonId}:${templateIdx}`;
    if (recentHistory.includes(historyKey)) continue;

    // Record in history
    recentHistory.push(historyKey);
    if (recentHistory.length > MAX_HISTORY) {
      recentHistory.shift();
    }

    return question;
  }

  // If everything was in history, clear it and try once more
  recentHistory.length = 0;
  const fallback = shuffled[0];
  if (fallback.type === 'chord') {
    const q = generateChordQuestion(fallback, idSet);
    if (q) {
      const { _templateIdx, ...clean } = q;
      return clean;
    }
  } else if (fallback.type === 'foundation') {
    const questions = generateFoundationQuestions(fallback);
    if (questions.length > 0) {
      return questions[Math.floor(Math.random() * questions.length)];
    }
  }

  return null;
}
