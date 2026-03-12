/**
 * Quiz Registry — maps each lesson to its testable concepts.
 *
 * Two entry shapes:
 *   foundation  – hand-curated Q&A facts (Phase 1 + intro/concept lessons)
 *   chord       – uniform chord data for auto-generated questions
 */

export const quizRegistry = [

  /* ===================================================================
   *  FOUNDATION ENTRIES
   * =================================================================== */

  // ── Phase 1: Music Fundamentals ────────────────────────────────────

  {
    lessonId: 'cq-1',
    type: 'foundation',
    subtype: 'notes',
    facts: [
      {
        q: 'How many notes are in modern western music?',
        a: '12',
        wrong: ['7', '8', '10']
      },
      {
        q: 'How many natural notes are there?',
        a: '7',
        wrong: ['5', '12', '10']
      },
      {
        q: 'What are the natural notes represented by?',
        a: 'Letters A through G',
        wrong: ['Numbers 1 through 7', 'Symbols', 'Roman numerals']
      },
      {
        q: 'Which keys on a piano represent natural notes?',
        a: 'White keys',
        wrong: ['Black keys', 'All keys', 'Sharp keys']
      }
    ]
  },

  {
    lessonId: 'cq-2',
    type: 'foundation',
    subtype: 'sharps-flats',
    facts: [
      {
        q: 'What symbol represents a sharp?',
        a: '\u266F',
        wrong: ['\u266D', '\u266E', '\u00B0']
      },
      {
        q: 'What symbol represents a flat?',
        a: '\u266D',
        wrong: ['\u266F', '\u266E', '+']
      },
      {
        q: 'What are notes with two different names for the same pitch called?',
        a: 'Enharmonic',
        wrong: ['Chromatic', 'Diatonic', 'Harmonic']
      },
      {
        q: 'How many total note names are there including sharps and flats?',
        a: '12',
        wrong: ['7', '14', '24']
      }
    ]
  },

  {
    lessonId: 'cq-3',
    type: 'foundation',
    subtype: 'octaves',
    facts: [
      {
        q: 'How many tones are in one octave?',
        a: '12',
        wrong: ['7', '8', '10']
      },
      {
        q: 'Moving up one octave means the frequency is...?',
        a: 'Doubled',
        wrong: ['Tripled', 'Halved', 'The same']
      },
      {
        q: 'How many octaves does a standard piano have?',
        a: 'More than 7',
        wrong: ['4', '5', '6']
      }
    ]
  },

  {
    lessonId: 'cq-4',
    type: 'foundation',
    subtype: 'intervals',
    facts: [
      {
        q: 'How many half steps in a whole step?',
        a: '2',
        wrong: ['1', '3', '4']
      },
      {
        q: 'What is another name for a half step?',
        a: 'Semitone',
        wrong: ['Whole tone', 'Quarter tone', 'Tritone']
      },
      {
        q: 'From E to F is what kind of step?',
        a: 'Half step',
        wrong: ['Whole step', 'No step', 'Double step']
      },
      {
        q: 'From A to B is what kind of step?',
        a: 'Whole step',
        wrong: ['Half step', 'Minor step', 'Major step']
      }
    ]
  },

  {
    lessonId: 'cq-5',
    type: 'foundation',
    subtype: 'major-scale',
    facts: [
      {
        q: 'What is the major scale formula?',
        a: 'W W H W W W H',
        wrong: ['W H W W H W W', 'W W W H W W H', 'H W W W H W W']
      },
      {
        q: 'The major scale sounds like...?',
        a: 'Do Re Mi Fa Sol La Ti Do',
        wrong: ['A chromatic run', 'A blues scale', 'A pentatonic scale']
      },
      {
        q: 'In the C major scale, what note comes after E?',
        a: 'F',
        wrong: ['F\u266F', 'E\u266F', 'G']
      },
      {
        q: 'What note is a whole step above C?',
        a: 'D',
        wrong: ['C\u266F', 'E', 'B']
      }
    ]
  },

  {
    lessonId: 'cq-6',
    type: 'foundation',
    subtype: 'keys',
    facts: [
      {
        q: "Being 'in the key of C' means using notes from which scale?",
        a: 'C major scale',
        wrong: ['C minor scale', 'Chromatic scale', 'C pentatonic scale']
      },
      {
        q: 'How many major key names are there total?',
        a: '15',
        wrong: ['12', '7', '24']
      },
      {
        q: 'How many unique pitch collections do the 15 key names represent?',
        a: '12',
        wrong: ['15', '7', '24']
      },
      {
        q: 'Which major key has no sharps or flats?',
        a: 'C',
        wrong: ['G', 'F', 'D']
      }
    ]
  },

  {
    lessonId: 'cq-7',
    type: 'foundation',
    subtype: 'circle-sharps',
    facts: [
      {
        q: 'Going clockwise on the Circle of Fifths, each key adds one more...?',
        a: 'Sharp',
        wrong: ['Flat', 'Natural', 'Note']
      },
      {
        q: 'How many sharps does the key of G have?',
        a: '1',
        wrong: ['0', '2', '3']
      },
      {
        q: 'How many sharps does the key of D have?',
        a: '2',
        wrong: ['1', '3', '4']
      },
      {
        q: 'To find the key from a sharp key signature, take the last sharp and go up a...?',
        a: 'Half step',
        wrong: ['Whole step', 'Fifth', 'Third']
      }
    ]
  },

  {
    lessonId: 'cq-8',
    type: 'foundation',
    subtype: 'circle-flats',
    facts: [
      {
        q: 'Going counter-clockwise on the Circle of Fifths, each key adds one more...?',
        a: 'Flat',
        wrong: ['Sharp', 'Natural', 'Note']
      },
      {
        q: 'How many flats does the key of F have?',
        a: '1',
        wrong: ['0', '2', '3']
      },
      {
        q: 'How many flats does the key of Bb have?',
        a: '2',
        wrong: ['1', '3', '4']
      },
      {
        q: 'To find the key from a flat key signature (with 2+ flats), look at the...?',
        a: 'Second to last flat',
        wrong: ['Last flat', 'First flat', 'Last sharp']
      }
    ]
  },

  // ── Intro / Concept Lessons ────────────────────────────────────────

  {
    lessonId: 'cq-9',
    type: 'foundation',
    subtype: 'chord-basics',
    facts: [
      {
        q: 'A triad is a chord made of how many notes?',
        a: '3',
        wrong: ['2', '4', '5']
      },
      {
        q: 'What does "stacked in thirds" mean when building chords?',
        a: 'Skip every other note in the scale',
        wrong: ['Play three notes in a row', 'Play the 1st, 3rd, and 5th frets', 'Stack three octaves']
      },
      {
        q: 'What is a two-note chord technically called?',
        a: 'Interval or dyad',
        wrong: ['Triad', 'Chord', 'Fifth']
      },
      {
        q: 'In the key of C, a triad built on C uses which notes?',
        a: 'C - E - G',
        wrong: ['C - D - E', 'C - F - G', 'C - E - F']
      }
    ]
  },

  {
    lessonId: 'cq-13',
    type: 'foundation',
    subtype: 'scale-degree-triads',
    facts: [
      {
        q: 'In a major key, what quality is the I chord?',
        a: 'Major',
        wrong: ['Minor', 'Diminished', 'Augmented']
      },
      {
        q: 'In a major key, what quality is the ii chord?',
        a: 'Minor',
        wrong: ['Major', 'Diminished', 'Augmented']
      },
      {
        q: 'In a major key, what quality is the vii\u00B0 chord?',
        a: 'Diminished',
        wrong: ['Minor', 'Major', 'Augmented']
      },
      {
        q: 'In a major key, what quality is the V chord?',
        a: 'Major',
        wrong: ['Minor', 'Diminished', 'Dominant']
      }
    ]
  },

  {
    lessonId: 'cq-17',
    type: 'foundation',
    subtype: 'seventh-basics',
    facts: [
      {
        q: 'A seventh chord is made of how many notes?',
        a: '4',
        wrong: ['3', '5', '7']
      },
      {
        q: 'A seventh chord adds what to a triad?',
        a: 'One more third on top',
        wrong: ['A note below the root', 'An octave', 'A second note']
      },
      {
        q: 'In the key of C, stacking thirds from C gives which seventh chord?',
        a: 'C - E - G - B',
        wrong: ['C - D - E - F', 'C - E - G - Bb', 'C - F - G - B']
      }
    ]
  },

  {
    lessonId: 'cq-22',
    type: 'foundation',
    subtype: 'diatonic-sevenths',
    facts: [
      {
        q: 'In a major key, what type of seventh is built on the I?',
        a: 'Major seventh',
        wrong: ['Dominant seventh', 'Minor seventh', 'Diminished seventh']
      },
      {
        q: 'In a major key, what type of seventh is built on the V?',
        a: 'Dominant seventh',
        wrong: ['Major seventh', 'Minor seventh', 'Half-diminished seventh']
      },
      {
        q: 'In a major key, what type of seventh is built on the ii?',
        a: 'Minor seventh',
        wrong: ['Major seventh', 'Dominant seventh', 'Diminished seventh']
      },
      {
        q: 'In a major key, what type of seventh is built on the vii?',
        a: 'Half-diminished seventh',
        wrong: ['Diminished seventh', 'Minor seventh', 'Dominant seventh']
      }
    ]
  },

  {
    lessonId: 'cq-25',
    type: 'foundation',
    subtype: 'ninth-basics',
    facts: [
      {
        q: 'A ninth chord is made of how many notes?',
        a: '5',
        wrong: ['4', '6', '9']
      },
      {
        q: 'The ninth is really the same as which scale degree?',
        a: '2nd',
        wrong: ['4th', '9th', '7th']
      },
      {
        q: 'For ninths, how many varieties are there?',
        a: '3 (major, dominant, minor)',
        wrong: ['4', '7', '2']
      }
    ]
  },

  {
    lessonId: 'cq-29',
    type: 'foundation',
    subtype: 'eleventh-basics',
    facts: [
      {
        q: 'An eleventh chord is made of how many notes?',
        a: '6',
        wrong: ['5', '7', '11']
      },
      {
        q: 'The eleventh is really the same as which scale degree?',
        a: '4th',
        wrong: ['2nd', '11th', '6th']
      },
      {
        q: 'For elevenths, how many varieties are there?',
        a: '3 (major, dominant, minor)',
        wrong: ['4', '7', '2']
      }
    ]
  },

  {
    lessonId: 'cq-33',
    type: 'foundation',
    subtype: 'thirteenth-basics',
    facts: [
      {
        q: 'A thirteenth chord is made of how many notes?',
        a: '7',
        wrong: ['6', '5', '13']
      },
      {
        q: 'The thirteenth is really the same as which scale degree?',
        a: '6th',
        wrong: ['4th', '13th', '7th']
      },
      {
        q: 'A thirteenth chord represents the full harmonized...?',
        a: 'Diatonic major scale',
        wrong: ['Chromatic scale', 'Pentatonic scale', 'Blues scale']
      }
    ]
  },

  {
    lessonId: 'cq-52',
    type: 'foundation',
    subtype: 'altered-dominant',
    facts: [
      {
        q: "What does '7alt' mean on a chord chart?",
        a: 'Play a dominant seventh with altered fifths and/or ninths',
        wrong: ['Play an alternate voicing', 'Play the chord in a different key', 'Play a different chord']
      },
      {
        q: 'The altered scale contains how many possible alterations?',
        a: '4 (\u266D5, \u266F5, \u266D9, \u266F9)',
        wrong: ['2', '3', '6']
      },
      {
        q: 'Which scale is the altered scale derived from?',
        a: 'Seventh mode of melodic minor',
        wrong: ['Major scale', 'Natural minor scale', 'Whole tone scale']
      }
    ]
  },

  /* ===================================================================
   *  CHORD ENTRIES
   * =================================================================== */

  // ── Triads ─────────────────────────────────────────────────────────

  {
    lessonId: 'cq-10',
    type: 'chord',
    name: 'Major',
    symbol: '',
    formula: '1-3-5',
    semitones: [0, 4, 7],
    noteCount: 3,
    category: 'triad'
  },
  {
    lessonId: 'cq-11',
    type: 'chord',
    name: 'Minor',
    symbol: 'm',
    formula: '1-\u266D3-5',
    semitones: [0, 3, 7],
    noteCount: 3,
    category: 'triad'
  },
  {
    lessonId: 'cq-12',
    type: 'chord',
    name: 'Diminished',
    symbol: 'dim',
    formula: '1-\u266D3-\u266D5',
    semitones: [0, 3, 6],
    noteCount: 3,
    category: 'triad'
  },
  {
    lessonId: 'cq-14',
    type: 'chord',
    name: 'Augmented',
    symbol: 'aug',
    formula: '1-3-\u266F5',
    semitones: [0, 4, 8],
    noteCount: 3,
    category: 'triad'
  },
  {
    lessonId: 'cq-15',
    type: 'chord',
    name: 'Suspended 4',
    symbol: 'sus4',
    formula: '1-4-5',
    semitones: [0, 5, 7],
    noteCount: 3,
    category: 'triad'
  },
  {
    lessonId: 'cq-16',
    type: 'chord',
    name: 'Suspended 2',
    symbol: 'sus2',
    formula: '1-2-5',
    semitones: [0, 2, 7],
    noteCount: 3,
    category: 'triad'
  },

  // ── Sevenths ───────────────────────────────────────────────────────

  {
    lessonId: 'cq-18',
    type: 'chord',
    name: 'Major Seventh',
    symbol: 'maj7',
    formula: '1-3-5-7',
    semitones: [0, 4, 7, 11],
    noteCount: 4,
    category: 'seventh'
  },
  {
    lessonId: 'cq-19',
    type: 'chord',
    name: 'Dominant Seventh',
    symbol: '7',
    formula: '1-3-5-\u266D7',
    semitones: [0, 4, 7, 10],
    noteCount: 4,
    category: 'seventh'
  },
  {
    lessonId: 'cq-20',
    type: 'chord',
    name: 'Minor Seventh',
    symbol: 'm7',
    formula: '1-\u266D3-5-\u266D7',
    semitones: [0, 3, 7, 10],
    noteCount: 4,
    category: 'seventh'
  },
  {
    lessonId: 'cq-21',
    type: 'chord',
    name: 'Half-Diminished Seventh',
    symbol: 'm7\u266D5',
    formula: '1-\u266D3-\u266D5-\u266D7',
    semitones: [0, 3, 6, 10],
    noteCount: 4,
    category: 'seventh'
  },
  {
    lessonId: 'cq-23',
    type: 'chord',
    name: 'Diminished Seventh',
    symbol: 'dim7',
    formula: '1-\u266D3-\u266D5-\u266D\u266D7',
    semitones: [0, 3, 6, 9],
    noteCount: 4,
    category: 'seventh'
  },
  {
    lessonId: 'cq-24',
    type: 'chord',
    name: 'Minor-Major Seventh',
    symbol: 'mMaj7',
    formula: '1-\u266D3-5-7',
    semitones: [0, 3, 7, 11],
    noteCount: 4,
    category: 'seventh'
  },

  // ── Ninths ─────────────────────────────────────────────────────────

  {
    lessonId: 'cq-26',
    type: 'chord',
    name: 'Major Ninth',
    symbol: 'maj9',
    formula: '1-3-5-7-9',
    semitones: [0, 4, 7, 11, 14],
    noteCount: 5,
    category: 'ninth'
  },
  {
    lessonId: 'cq-27',
    type: 'chord',
    name: 'Dominant Ninth',
    symbol: '9',
    formula: '1-3-5-\u266D7-9',
    semitones: [0, 4, 7, 10, 14],
    noteCount: 5,
    category: 'ninth'
  },
  {
    lessonId: 'cq-28',
    type: 'chord',
    name: 'Minor Ninth',
    symbol: 'm9',
    formula: '1-\u266D3-5-\u266D7-9',
    semitones: [0, 3, 7, 10, 14],
    noteCount: 5,
    category: 'ninth'
  },

  // ── Elevenths ──────────────────────────────────────────────────────

  {
    lessonId: 'cq-30',
    type: 'chord',
    name: 'Major Eleventh',
    symbol: 'maj11',
    formula: '1-3-5-7-9-11',
    semitones: [0, 4, 7, 11, 14, 17],
    noteCount: 6,
    category: 'eleventh'
  },
  {
    lessonId: 'cq-31',
    type: 'chord',
    name: 'Dominant Eleventh',
    symbol: '11',
    formula: '1-3-5-\u266D7-9-11',
    semitones: [0, 4, 7, 10, 14, 17],
    noteCount: 6,
    category: 'eleventh'
  },
  {
    lessonId: 'cq-32',
    type: 'chord',
    name: 'Minor Eleventh',
    symbol: 'm11',
    formula: '1-\u266D3-5-\u266D7-9-11',
    semitones: [0, 3, 7, 10, 14, 17],
    noteCount: 6,
    category: 'eleventh'
  },

  // ── Thirteenths ────────────────────────────────────────────────────

  {
    lessonId: 'cq-34',
    type: 'chord',
    name: 'Major Thirteenth',
    symbol: 'maj13',
    formula: '1-3-5-7-9-11-13',
    semitones: [0, 4, 7, 11, 14, 17, 21],
    noteCount: 7,
    category: 'thirteenth'
  },
  {
    lessonId: 'cq-35',
    type: 'chord',
    name: 'Dominant Thirteenth',
    symbol: '13',
    formula: '1-3-5-\u266D7-9-11-13',
    semitones: [0, 4, 7, 10, 14, 17, 21],
    noteCount: 7,
    category: 'thirteenth'
  },
  {
    lessonId: 'cq-36',
    type: 'chord',
    name: 'Minor Thirteenth',
    symbol: 'm13',
    formula: '1-\u266D3-5-\u266D7-9-11-13',
    semitones: [0, 3, 7, 10, 14, 17, 21],
    noteCount: 7,
    category: 'thirteenth'
  },

  // ── Added-tone Chords ──────────────────────────────────────────────

  {
    lessonId: 'cq-37',
    type: 'chord',
    name: 'Added Ninth',
    symbol: 'add9',
    formula: '1-3-5-9',
    semitones: [0, 4, 7, 14],
    noteCount: 4,
    category: 'added'
  },
  {
    lessonId: 'cq-38',
    type: 'chord',
    name: 'Sixth',
    symbol: '6',
    formula: '1-3-5-6',
    semitones: [0, 4, 7, 9],
    noteCount: 4,
    category: 'added'
  },
  {
    lessonId: 'cq-39',
    type: 'chord',
    name: 'Minor Sixth',
    symbol: 'm6',
    formula: '1-\u266D3-5-6',
    semitones: [0, 3, 7, 9],
    noteCount: 4,
    category: 'added'
  },
  {
    lessonId: 'cq-40',
    type: 'chord',
    name: 'Six-Nine',
    symbol: '6/9',
    formula: '1-3-5-6-9',
    semitones: [0, 4, 7, 9, 14],
    noteCount: 5,
    category: 'added'
  },

  // ── Altered Chords ─────────────────────────────────────────────────

  {
    lessonId: 'cq-41',
    type: 'chord',
    name: 'Augmented Seventh',
    symbol: '7\u266F5',
    formula: '1-3-\u266F5-\u266D7',
    semitones: [0, 4, 8, 10],
    noteCount: 4,
    category: 'altered'
  },
  {
    lessonId: 'cq-42',
    type: 'chord',
    name: 'Seven Flat Five',
    symbol: '7\u266D5',
    formula: '1-3-\u266D5-\u266D7',
    semitones: [0, 4, 6, 10],
    noteCount: 4,
    category: 'altered'
  },
  {
    lessonId: 'cq-43',
    type: 'chord',
    name: 'Seven Sharp Nine',
    symbol: '7\u266F9',
    formula: '1-3-5-\u266D7-\u266F9',
    semitones: [0, 4, 7, 10, 15],
    noteCount: 5,
    category: 'altered'
  },
  {
    lessonId: 'cq-44',
    type: 'chord',
    name: 'Seven Flat Nine',
    symbol: '7\u266D9',
    formula: '1-3-5-\u266D7-\u266D9',
    semitones: [0, 4, 7, 10, 13],
    noteCount: 5,
    category: 'altered'
  },
  {
    lessonId: 'cq-45',
    type: 'chord',
    name: 'Seven Flat Five Flat Nine',
    symbol: '7\u266D5\u266D9',
    formula: '1-3-\u266D5-\u266D7-\u266D9',
    semitones: [0, 4, 6, 10, 13],
    noteCount: 5,
    category: 'altered'
  },
  {
    lessonId: 'cq-46',
    type: 'chord',
    name: 'Seven Flat Five Sharp Nine',
    symbol: '7\u266D5\u266F9',
    formula: '1-3-\u266D5-\u266D7-\u266F9',
    semitones: [0, 4, 6, 10, 15],
    noteCount: 5,
    category: 'altered'
  },
  {
    lessonId: 'cq-47',
    type: 'chord',
    name: 'Seven Sharp Five Flat Nine',
    symbol: '7\u266F5\u266D9',
    formula: '1-3-\u266F5-\u266D7-\u266D9',
    semitones: [0, 4, 8, 10, 13],
    noteCount: 5,
    category: 'altered'
  },
  {
    lessonId: 'cq-48',
    type: 'chord',
    name: 'Seven Sharp Five Sharp Nine',
    symbol: '7\u266F5\u266F9',
    formula: '1-3-\u266F5-\u266D7-\u266F9',
    semitones: [0, 4, 8, 10, 15],
    noteCount: 5,
    category: 'altered'
  },
  {
    lessonId: 'cq-49',
    type: 'chord',
    name: 'Major Seven Sharp Eleventh',
    symbol: 'maj7\u266F11',
    formula: '1-3-5-7-9-\u266F11',
    semitones: [0, 4, 7, 11, 14, 18],
    noteCount: 6,
    category: 'altered'
  },
  {
    lessonId: 'cq-50',
    type: 'chord',
    name: 'Seven Flat Thirteenth',
    symbol: '7\u266D13',
    formula: '1-3-5-\u266D7-9-11-\u266D13',
    semitones: [0, 4, 7, 10, 14, 17, 20],
    noteCount: 7,
    category: 'altered'
  },
  {
    lessonId: 'cq-51',
    type: 'chord',
    name: 'Augmented Major Seventh',
    symbol: 'maj7\u266F5',
    formula: '1-3-\u266F5-7',
    semitones: [0, 4, 8, 11],
    noteCount: 4,
    category: 'altered'
  }
];
