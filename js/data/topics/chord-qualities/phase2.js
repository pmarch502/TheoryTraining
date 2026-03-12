export const phase2 = [
  {
    id: 'cq-9',
    number: 9,
    title: 'What Is a Chord?',
    content: [
      {
        type: 'paragraph',
        text: "Now that we know about notes, scales, and keys, we can start talking about <strong>chords</strong>. Chords are the foundation of harmony in music—they're what make songs feel full and supportive under melodies or vocals in worship."
      },
      {
        type: 'paragraph',
        text: "It is common for people to talk about \"singing harmony\". What they usually mean is something like performing vocal parts that complement the melody by singing different pitches that create richness or fullness. That is definitely harmony."
      },
      {
        type: 'paragraph',
        text: "We rarely think of the chords that make up a song as harmony. If two guitar players are talking on stage about a new song, you will probably hear one of them say, \"what are the chords?\" You probably won't hear one of them say, \"what's the harmony?\" We don't need to change the way we talk, but we do need to recognize that the chords of a song are true and classic harmony."
      },
      {
        type: 'paragraph',
        text: "But, we're still left with our question - what is a chord? A chord is simply a group of notes played together. Specifically, we're going to (first) focus on <strong>triads</strong>, which are chords made of <strong>three notes stacked in thirds</strong>. Wow, that escalated quickly. (For what it's worth, two notes (the infamous power chord or a 5, e.g. C5) are technically just an interval or dyad.)"
      },
      {
        type: 'paragraph',
        text: "What does \"stacked in thirds\" mean? Let's go back to our C major scale. If you start from any note (we'll call that the chord's root and how we'll name the chord), you skip every other note in the scale to build up a triad. Here's that C major scale with some notes highlighted:"
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "Start on C (the root). Skip D to land on E (a third from C). Skip F to land on G (a third from E). Boom—that's a C triad: <strong>C - E - G</strong>."
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n    ^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "This is how all of the basic triads of any key/scale are built. Let's start on D (the root). Skip E to land on F (a third from D). Skip G to land on A (a third from F). Boom—that's a Dm triad: <strong>D - F - A</strong>."
      },
      {
        type: 'paragraph',
        text: "So, a C triad is just another way of saying C chord. A Dm triad is just another way of saying Dm chord. Triads are the most basic chords. Without even breaking a sweat, you've just figured out two of the chords that are in the key of C. (If you continued this exercise, you could figure out the other five triads in the key of C.)"
      }
    ]
  },
  {
    id: 'cq-10',
    number: 10,
    title: 'Major Triad',
    content: [
      {
        type: 'paragraph',
        text: "So, we know what triads are and how to build them from a scale using stacked thirds. Now, let's build on that—let's talk about the <strong>major triad</strong>. To our ears, it's bright and happy. It is, by far, the most common in pop, rock, worship, etc."
      },
      {
        type: 'paragraph',
        text: "Let's get technical for a moment. The actual major triad formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G."
        ]
      },
      {
        type: 'paragraph',
        text: "This definition is very important because it is very precise - it has an important purpose in defining and naming chords. But, for us and for now, we'll just keep thinking of it as the stacked thirds."
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       ^       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 }
          ],
          labels: 'highlighted',
          title: 'C Major Triad: C \u2013 E \u2013 G'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 2, degree: 3 },
            { string: 3, fret: 0, degree: 5 },
            { string: 2, fret: 1, degree: 1 },
            { string: 1, fret: 0, degree: 3 }
          ],
          muted: [6],
          title: 'C Major \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "If you were playing a song in the key of C, you would find that these major triads were very common:"
      },
      {
        type: 'notation',
        text: "C major: C - E - G\nF major: F - A - C\nG major: G - B - D"
      },
      {
        type: 'paragraph',
        text: "When a major triad appears on a chord chart, it may appear with various chord quality decorations: C, CMaj, Cmaj, CM"
      },
      {
        type: 'paragraph',
        text: "When we talk about chords, we sometimes refer to them by scale degrees. We would call a major triad a 1-3-5. (from the major scale built on the chord's root, <strong>not</strong> the song's key)"
      }
    ]
  },
  {
    id: 'cq-11',
    number: 11,
    title: 'Minor Triad',
    content: [
      {
        type: 'paragraph',
        text: "Since we've got that major triad under our belts, let's continue and talk about the <strong>minor triad</strong>. To our ears, it's a little sad or introspective. It is also pretty common, but more often used as a complement or spice as opposed to the main \"feel\"."
      },
      {
        type: 'paragraph',
        text: "Here's the technical bit. The actual minor triad formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., D to F.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., D to A."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords. But, for us and for now, we'll just keep thinking of it as the stacked thirds."
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n    ^       ^       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'D', degree: 1 },
            { note: 'F', degree: 3 },
            { note: 'A', degree: 5 }
          ],
          labels: 'highlighted',
          title: 'D Minor Triad: D \u2013 F \u2013 A'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 4, fret: 0, degree: 1 },
            { string: 3, fret: 2, degree: 5 },
            { string: 2, fret: 3, degree: 1 },
            { string: 1, fret: 1, degree: 3 }
          ],
          muted: [6, 5],
          title: 'D Minor \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "If you were playing a song in the key of C, you would find that these minor triads were very common:"
      },
      {
        type: 'notation',
        text: "D minor: D - F - A\nE minor: E - G - B\nA minor: A - C - E"
      },
      {
        type: 'paragraph',
        text: "When a minor triad appears on a chord chart, it may appear with various chord quality decorations: Cm, Cmi, Cmin, C-"
      },
      {
        type: 'paragraph',
        text: "When we talk about a minor triad according to scale degrees, we would call it a 1-♭3-5 (or, 1-3♭-5 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-12',
    number: 12,
    title: 'Diminished Triad',
    content: [
      {
        type: 'paragraph',
        text: "Although there are more triads, we're only going to talk about one more, for now—the <strong>diminished triad</strong>. To our ears, it's a little tense or unstable. It feels like it is begging to be resolved (to the key's root). It is not very common in popular music, but it sometimes adds the perfect touch."
      },
      {
        type: 'paragraph',
        text: "Here's the technical bit. The actual diminished triad formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., B to D.",
          "<strong>Diminished fifth</strong> above root: an interval of 6 half steps, a minor third + a minor third, (W+H)+(W+H). E.g., B to F."
        ]
      },
      {
        type: 'paragraph',
        text: "One more time, this definition is very important because it is very precise—it has an important purpose in defining and naming chords. But, for us and for now, we'll just keep thinking of it as the stacked thirds."
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8   9   10  11  12  13  14  15\nC   D   E   F   G   A   B   C   D   E   F   G   A   B   C\n                        ^       ^       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'B', degree: 1 },
            { note: 'D', degree: 3 },
            { note: 'F', degree: 5 }
          ],
          labels: 'highlighted',
          title: 'B Diminished Triad: B \u2013 D \u2013 F'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 2, degree: 1 },
            { string: 4, fret: 3, degree: 5 },
            { string: 3, fret: 4, degree: 1 },
            { string: 2, fret: 3, degree: 3 }
          ],
          muted: [6, 1],
          title: 'B Diminished'
        }
      },
      {
        type: 'paragraph',
        text: "If you were playing a song in the key of C, you would only find this one diminished triad (and not very often):"
      },
      {
        type: 'notation',
        text: "B diminished: B - D - F"
      },
      {
        type: 'paragraph',
        text: "When a diminished triad appears on a chord chart, it may appear with various chord quality decorations: Cdim, C°"
      },
      {
        type: 'paragraph',
        text: "When we talk about a diminished triad according to scale degrees, we would call it a 1-♭3-♭5 (or, 1-3♭-5♭ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-13',
    number: 13,
    title: 'Scale Degree Triads',
    content: [
      {
        type: 'paragraph',
        text: "In any key (scale), triads can be built on each scale degree. Again, we can do this with any key (scale), but let's keep using the key of C major (C major scale) so we can see the pattern."
      },
      {
        type: 'paragraph',
        text: "Here are all of the triads:"
      },
      {
        type: 'notation',
        text: "     C major:  C   D   E   F   G   A   B   C\n               ^       ^       ^\n     D minor:  C   D   E   F   G   A   B   C\n                   ^       ^       ^\n     E minor:  C   D   E   F   G   A   B   C\n                       ^       ^       ^\n     F major:  C   D   E   F   G   A   B   C\n                           ^       ^       ^\n     G major:  C   D   E   F   G   A   B   C   D\n                               ^       ^       ^\n     A minor:  C   D   E   F   G   A   B   C   D   E\n                                   ^       ^       ^\nB diminished:  C   D   E   F   G   A   B   C   D   E   F\n                                       ^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "These are sometimes expressed as Roman numerals where uppercase=Major, and lowercase=minor:"
      },
      {
        type: 'notation',
        text: "I       ii      iii     IV      V       vi      vii°\nC maj   D min   E min   F maj   G maj   A min   B dim"
      },
      {
        type: 'paragraph',
        text: "Or, even in our common Arabic numerals (popularly known as the Nashville Number System):"
      },
      {
        type: 'notation',
        text: "1       2       3       4       5       6       7\nC maj   D min   E min   F maj   G maj   A min   B dim"
      },
      {
        type: 'paragraph',
        text: "FYI - With Arabic numerals, there isn't a standard way to write them. Some will simply write a '2' and expect the reader to know that it is representing a minor triad. Others will write '2m' to be explicit and remove any chance for confusion."
      }
    ]
  },
  {
    id: 'cq-14',
    number: 14,
    title: 'Augmented Triad',
    content: [
      {
        type: 'paragraph',
        text: "We've looked at all of the triads that are built from stacking thirds in a scale. However, there are some other triads that don't neatly fit into that formula. First, we have the <strong>Augmented triad</strong>. To our ears, it might sound symmetrical or unbalanced. Like the diminished triad, it is rare, but when used appropriately, it can be fun or even exotic."
      },
      {
        type: 'paragraph',
        text: "Here's the technical bit. The actual augmented triad formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Augmented fifth</strong> above root: an interval of 8 half steps, a major third + a major third, (W+W)+(W+W). E.g., C to G♯."
        ]
      },
      {
        type: 'paragraph',
        text: "This doesn't fit as nicely into the key (scale) as all of our previous triads have. I mean, how did that G♯ get in there? The augmented triad is more about the symmetry (a major third + a major third). It's the complement of a diminished triad (a minor third + a minor third). It is often used to pass between chords: V - Vaug - I, V - Vaug - vi, I - Iaug - vi, IV - IVaug - V."
      },
      {
        type: 'paragraph',
        text: "Here is one example of an augmented triad:"
      },
      {
        type: 'notation',
        text: "C augmented: C - E - G♯\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       ^       ♯"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 }
          ],
          labels: 'highlighted',
          title: 'C Augmented Triad: C \u2013 E \u2013 G\u266F'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 2, degree: 3 },
            { string: 3, fret: 1, degree: 5 },
            { string: 2, fret: 1, degree: 1 },
            { string: 1, fret: 0, degree: 3 }
          ],
          muted: [6],
          title: 'C Augmented \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When an augmented triad appears on a chord chart, it may appear with various chord quality decorations: Caug, C+, C+5"
      },
      {
        type: 'paragraph',
        text: "When we talk about an augmented triad according to scale degrees, we would call it a 1-3-♯5 (or, 1-3-5♯ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-15',
    number: 15,
    title: 'Suspended 4 Chord',
    content: [
      {
        type: 'paragraph',
        text: "Next on our tour of misfit triads, we have the <strong>Suspended 4 triad</strong>. To our ears, it might sound open, floating, ambiguous, and unresolved. Unlike the diminished and augmented triads, it is quite common. It often adds the perfect touch of tension to bring excitement to a chord progression. When used, it most commonly soon resolves to its major counterpart, e.g. Csus4 - C."
      },
      {
        type: 'paragraph',
        text: "Here's the technical bit. The actual suspended 4 triad formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Perfect Fourth</strong> above root: an interval of 5 half steps, W+W+H. E.g., C to F.",
          "<strong>Perfect Fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G."
        ]
      },
      {
        type: 'paragraph',
        text: "This triad does fit nicely into the key (scale) like most of our previous triads have. However, it doesn't fit well with the idea of stacking thirds. I mean, how did that fourth get in there? The suspended triads are more about <strong>replacing</strong> the third. For example, in a C major triad (C - E - G) we want to replace the E. In a suspended 4, we replace the third (E) with the fourth (F)."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a suspended 4 triad:"
      },
      {
        type: 'notation',
        text: "C suspended 4: C - F - G\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^           ^   ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'F', degree: 4 },
            { note: 'G', degree: 5 }
          ],
          labels: 'highlighted',
          title: 'C Suspended 4: C \u2013 F \u2013 G'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 3, degree: 4 },
            { string: 3, fret: 0, degree: 5 },
            { string: 2, fret: 1, degree: 1 },
            { string: 1, fret: 1, degree: 4 }
          ],
          muted: [6],
          title: 'Csus4 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a suspended 4 triad appears on a chord chart, it may appear with various chord quality decorations: Csus4, Csus, C4"
      },
      {
        type: 'paragraph',
        text: "When we talk about a suspended 4 triad according to scale degrees, we would call it a 1-4-5. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-16',
    number: 16,
    title: 'Suspended 2 Chord',
    content: [
      {
        type: 'paragraph',
        text: "As our last stop on our tour of misfit triads, we have the <strong>Suspended 2 triad</strong>. To our ears, it might sound open, neutral, dreamy, floating, and ambiguous - but, it doesn't have an unresolved quality (like suspended 4). Like the suspended 4 triad, it is quite common. It often adds the perfect touch of color to bring excitement to a chord progression."
      },
      {
        type: 'paragraph',
        text: "Here's the technical bit. The actual suspended 2 triad formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major second</strong> above root: an interval of 2 half steps, W. E.g., C to D.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G."
        ]
      },
      {
        type: 'paragraph',
        text: "Like the suspended 4 triad, it fits nicely into the key (scale), just as most of our previous triads do. Additionally, it doesn't fit well with the idea of stacking thirds. I mean, how did that second get in there? The suspended triads are more about <strong>replacing</strong> the third. For example, in a C major triad (C - E - G) we want to replace the E. In a suspended 2, we replace the third (E) with the second (D)."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a suspended 2 triad:"
      },
      {
        type: 'notation',
        text: "C suspended 2: C - D - G\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^   ^           ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'D', degree: 2 },
            { note: 'G', degree: 5 }
          ],
          labels: 'highlighted',
          title: 'C Suspended 2: C \u2013 D \u2013 G'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 0, degree: 2 },
            { string: 3, fret: 0, degree: 5 },
            { string: 2, fret: 3, degree: 2 },
            { string: 1, fret: 3, degree: 5 }
          ],
          muted: [6],
          title: 'Csus2 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a suspended 2 triad appears on a chord chart, it may appear with various chord quality decorations: Csus2, C2"
      },
      {
        type: 'paragraph',
        text: "When we talk about a suspended 2 triad according to scale degrees, we would call it a 1-2-5. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  }
];
