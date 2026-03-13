export const phase8 = [
  {
    id: 'cq-41',
    number: 41,
    title: 'Augmented Seventh',
    content: [
      {
        type: 'paragraph',
        text: "So far, we've built chords by stacking thirds using the natural notes of a scale—major, minor, dominant, diminished, augmented triads and sevenths, extended ninths through thirteenths, and added tone chords. Now we're entering the world of <strong>altered chords</strong>. Altered chords take a familiar chord structure (usually a dominant seventh) and <em>modify</em>—sharpen or flatten—one or more of its tones to create new colors and tensions. These are the chords that give jazz, fusion, gospel, and modern worship their most expressive, unexpected moments."
      },
      {
        type: 'paragraph',
        text: "The first altered chord we'll look at is the <strong>augmented seventh</strong>, also commonly called the \"seven sharp five\" (7♯5). It takes a dominant seventh chord (1-3-5-♭7) and raises the fifth by a half step. The result is a chord with a bright, expansive tension—the augmented fifth pushes outward while the flat seventh pulls toward resolution. It's unstable in a beautiful way."
      },
      {
        type: 'paragraph',
        text: "The augmented seventh formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Augmented fifth</strong> above root: an interval of 8 half steps, two major thirds, (W+W)+(W+W). E.g., C to G♯.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭."
        ]
      },
      {
        type: 'paragraph',
        text: "Notice that this is essentially a dominant seventh chord with one change: the perfect fifth (G) has been raised to an augmented fifth (G♯). Everything else—the root, major third, and flat seventh—stays the same."
      },
      {
        type: 'paragraph',
        text: "Here is one example of an augmented seventh:"
      },
      {
        type: 'notation',
        text: "C augmented seventh: C - E - G♯ - B♭\n\n1   2   3   4   5   6   7\nC   D   E   F   G   A   B\n^       ^       ♯       ♭"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 },
            { note: 'Bb', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Augmented Seventh: C – E – G♯ – B♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7sharp5' }
      },
      {
        type: 'paragraph',
        text: "When an augmented seventh appears on a chord chart, it may appear as: C7♯5, C+7, C7+5, C7aug5"
      },
      {
        type: 'paragraph',
        text: "When we talk about an augmented seventh according to scale degrees, we would call it a 1-3-♯5-♭7 (or, 1-3-5♯-7♭ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-42',
    number: 42,
    title: 'Seven Flat Five',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven flat five</strong> (7♭5) is the mirror image of the augmented seventh. Instead of raising the fifth, we <em>lower</em> it by a half step. This takes a dominant seventh chord (1-3-5-♭7) and replaces the perfect fifth with a diminished fifth—also known as a tritone from the root."
      },
      {
        type: 'paragraph',
        text: "The result is a tense, unstable chord with a distinctly dissonant edge. The 7♭5 contains two tritones: root to ♭5, and major third to ♭7. This double tension makes it an effective passing chord or substitution in jazz and gospel progressions. In worship, it can create a moment of dramatic tension before a satisfying resolution."
      },
      {
        type: 'paragraph',
        text: "The seven flat five formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Diminished fifth</strong> above root: an interval of 6 half steps, also called a tritone, (W+W)+(W). E.g., C to G♭.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭."
        ]
      },
      {
        type: 'paragraph',
        text: "<strong>Don't confuse 7♭5 with half-diminished (m7♭5).</strong> The half-diminished chord has a <em>minor</em> third (1-♭3-♭5-♭7), while the 7♭5 keeps the <em>major</em> third (1-3-♭5-♭7). That major third gives the 7♭5 a dominant quality rather than a diminished one."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven flat five:"
      },
      {
        type: 'notation',
        text: "C seven flat five: C - E - G♭ - B♭\n\n1   2   3   4   5   6   7\nC   D   E   F   G   A   B\n^       ^       ♭       ♭"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'Bb', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Seven Flat Five: C – E – G♭ – B♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b5' }
      },
      {
        type: 'paragraph',
        text: "When a seven flat five appears on a chord chart, it may appear as: C7♭5, C7(♭5), C7(-5)"
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven flat five according to scale degrees, we would call it a 1-3-♭5-♭7 (or, 1-3-5♭-7♭ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-43',
    number: 43,
    title: 'Seven Sharp Nine',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven sharp nine</strong> (7♯9) is one of the most iconic altered chords in popular music. Often called the \"Hendrix chord\" (after Jimi Hendrix's famous use of it in \"Purple Haze\" and other songs), this chord has a raw, bluesy, electrifying sound that practically defines rock and blues-influenced harmony."
      },
      {
        type: 'paragraph',
        text: "The 7♯9 takes a dominant seventh chord (1-3-5-♭7) and adds a sharp nine on top. Here's what makes it so interesting: the sharp nine (D♯ in the key of C) is enharmonically the same pitch as a minor third (E♭). So this chord contains <em>both</em> a major third (E) and what sounds like a minor third (D♯/E♭) at the same time. That clash between major and minor is what gives it its gritty, ambiguous character."
      },
      {
        type: 'paragraph',
        text: "The seven sharp nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Augmented ninth</strong> above root: an interval of 15 half steps, an octave + augmented second, (Wx6)+(W+H). E.g., C to D♯."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven sharp nine:"
      },
      {
        type: 'notation',
        text: "C seven sharp nine: C - E - G - B♭ - D♯\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ^       ♭       ♯"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D#', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Seven Sharp Nine: C – E – G – B♭ – D♯'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7sharp9' }
      },
      {
        type: 'paragraph',
        text: "When a seven sharp nine appears on a chord chart, it may appear as: C7♯9, C7(♯9), C7(+9)"
      },
      {
        type: 'paragraph',
        text: "In worship and contemporary music, the 7♯9 can be used sparingly for moments of gritty intensity—think of a bridge build-up or a raw, emotional passage. A little goes a long way."
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven sharp nine according to scale degrees, we would call it a 1-3-5-♭7-♯9 (or, 1-3-5-7♭-9♯ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-44',
    number: 44,
    title: 'Seven Flat Nine',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven flat nine</strong> (7♭9) is one of the most important altered dominant chords. Where the 7♯9 is gritty and bluesy, the 7♭9 is dark, tense, and cinematic. It creates a strong pull toward resolution—making it a powerful tool for dramatic chord changes."
      },
      {
        type: 'paragraph',
        text: "The 7♭9 takes a dominant seventh chord and adds a flattened ninth. The interval between the major third and the flat nine creates an intense dissonance. In classical harmony, this chord appears naturally as the V7♭9 in minor keys, which is why it often evokes a minor-key darkness even when used in major-key contexts."
      },
      {
        type: 'paragraph',
        text: "The seven flat nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Minor ninth</strong> above root: an interval of 13 half steps, an octave + minor second, (Wx6)+(H). E.g., C to D♭."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven flat nine:"
      },
      {
        type: 'notation',
        text: "C seven flat nine: C - E - G - B♭ - D♭\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ^       ♭       ♭"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'Db', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Seven Flat Nine: C – E – G – B♭ – D♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b9' }
      },
      {
        type: 'paragraph',
        text: "When a seven flat nine appears on a chord chart, it may appear as: C7♭9, C7(♭9), C7(-9)"
      },
      {
        type: 'paragraph',
        text: "The 7♭9 is extremely common in jazz, gospel, and worship music. When you want a dominant chord to feel urgent, dramatic, or deeply emotional, the ♭9 delivers. It resolves beautifully to either major or minor chords."
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven flat nine according to scale degrees, we would call it a 1-3-5-♭7-♭9 (or, 1-3-5-7♭-9♭ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-45',
    number: 45,
    title: 'Seven Flat Five Flat Nine',
    content: [
      {
        type: 'paragraph',
        text: "Now we enter the world of <strong>double alterations</strong>—chords that modify two tones at once. The <strong>seven flat five flat nine</strong> (7♭5♭9) combines both the diminished fifth and the flattened ninth with a dominant seventh chord. The result is a chord dripping with tension from every angle."
      },
      {
        type: 'paragraph',
        text: "Think of it this way: you already know the 7♭5 (dark and dissonant) and the 7♭9 (tense and cinematic). The 7♭5♭9 stacks both of those alterations together, creating a chord that practically demands resolution. It's a favorite in jazz for dominant chords that resolve to minor keys."
      },
      {
        type: 'paragraph',
        text: "The seven flat five flat nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Diminished fifth</strong> above root: an interval of 6 half steps, a tritone, (W+W)+(W). E.g., C to G♭.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Minor ninth</strong> above root: an interval of 13 half steps, an octave + minor second, (Wx6)+(H). E.g., C to D♭."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven flat five flat nine:"
      },
      {
        type: 'notation',
        text: "C seven flat five flat nine: C - E - G♭ - B♭ - D♭\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ♭       ♭       ♭"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'Db', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Seven Flat Five Flat Nine: C – E – G♭ – B♭ – D♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b5b9' }
      },
      {
        type: 'paragraph',
        text: "When a seven flat five flat nine appears on a chord chart, it may appear as: C7♭5♭9, C7(♭5♭9), C7(♭5)(♭9)"
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven flat five flat nine according to scale degrees, we would call it a 1-3-♭5-♭7-♭9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-46',
    number: 46,
    title: 'Seven Flat Five Sharp Nine',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven flat five sharp nine</strong> (7♭5♯9) is another double alteration, this time combining the diminished fifth with the sharpened ninth. While the 7♭5♭9 was all darkness and inward tension, the 7♭5♯9 has a wilder, more unpredictable character—the sharp nine adds a bluesy bite to the already-dissonant flat five."
      },
      {
        type: 'paragraph',
        text: "This chord is a staple in jazz improvisation and fusion. When a musician sees \"7alt\" on a chart, this voicing is one of the options they might reach for. The combination of ♭5 and ♯9 creates a complex, ambiguous sound that can be used for colorful passing chords or moments of heightened expression."
      },
      {
        type: 'paragraph',
        text: "The seven flat five sharp nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Diminished fifth</strong> above root: an interval of 6 half steps, a tritone, (W+W)+(W). E.g., C to G♭.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Augmented ninth</strong> above root: an interval of 15 half steps, an octave + augmented second, (Wx6)+(W+H). E.g., C to D♯."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven flat five sharp nine:"
      },
      {
        type: 'notation',
        text: "C seven flat five sharp nine: C - E - G♭ - B♭ - D♯\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ♭       ♭       ♯"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D#', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Seven Flat Five Sharp Nine: C – E – G♭ – B♭ – D♯'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b5sharp9' }
      },
      {
        type: 'paragraph',
        text: "When a seven flat five sharp nine appears on a chord chart, it may appear as: C7♭5♯9, C7(♭5♯9), C7(♭5)(♯9)"
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven flat five sharp nine according to scale degrees, we would call it a 1-3-♭5-♭7-♯9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-47',
    number: 47,
    title: 'Seven Sharp Five Flat Nine',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven sharp five flat nine</strong> (7♯5♭9) combines the augmented fifth with the flattened ninth over a dominant seventh chord. This is one of the most dramatically tense altered chords—the ♯5 pushes outward while the ♭9 pulls inward, creating a chord that feels like it's stretching in opposite directions at once."
      },
      {
        type: 'paragraph',
        text: "This voicing is extremely common in jazz as a dominant chord resolving to a minor tonic. If you're playing a V–i progression in a minor key and want maximum tension before the resolution, this is your chord. In worship settings, it can add a profound sense of yearning or anticipation before a moment of arrival."
      },
      {
        type: 'paragraph',
        text: "The seven sharp five flat nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Augmented fifth</strong> above root: an interval of 8 half steps, two major thirds, (W+W)+(W+W). E.g., C to G♯.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Minor ninth</strong> above root: an interval of 13 half steps, an octave + minor second, (Wx6)+(H). E.g., C to D♭."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven sharp five flat nine:"
      },
      {
        type: 'notation',
        text: "C seven sharp five flat nine: C - E - G♯ - B♭ - D♭\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ♯       ♭       ♭"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'Db', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Seven Sharp Five Flat Nine: C – E – G♯ – B♭ – D♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7sharp5b9' }
      },
      {
        type: 'paragraph',
        text: "When a seven sharp five flat nine appears on a chord chart, it may appear as: C7♯5♭9, C7(♯5♭9), C7(♯5)(♭9), C+7♭9"
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven sharp five flat nine according to scale degrees, we would call it a 1-3-♯5-♭7-♭9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-48',
    number: 48,
    title: 'Seven Sharp Five Sharp Nine',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven sharp five sharp nine</strong> (7♯5♯9) is the last of our four double-alteration dominant chords. It raises both the fifth and the ninth, creating a chord that is bright, aggressive, and intensely colorful. Where the 7♯5♭9 creates opposing tensions, the 7♯5♯9 pushes everything upward—both altered tones are sharpened, giving the chord an almost explosive forward energy."
      },
      {
        type: 'paragraph',
        text: "This chord appears in jazz, funk, and fusion, often used as a dominant chord with maximum \"outside\" color. Like its double-alteration siblings, it's one of the voicings a musician might play when they see \"7alt\" on a chord chart."
      },
      {
        type: 'paragraph',
        text: "The seven sharp five sharp nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Augmented fifth</strong> above root: an interval of 8 half steps, two major thirds, (W+W)+(W+W). E.g., C to G♯.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Augmented ninth</strong> above root: an interval of 15 half steps, an octave + augmented second, (Wx6)+(W+H). E.g., C to D♯."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven sharp five sharp nine:"
      },
      {
        type: 'notation',
        text: "C seven sharp five sharp nine: C - E - G♯ - B♭ - D♯\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ♯       ♭       ♯"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D#', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Seven Sharp Five Sharp Nine: C – E – G♯ – B♭ – D♯'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7sharp5sharp9' }
      },
      {
        type: 'paragraph',
        text: "When a seven sharp five sharp nine appears on a chord chart, it may appear as: C7♯5♯9, C7(♯5♯9), C7(♯5)(♯9), C+7♯9"
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven sharp five sharp nine according to scale degrees, we would call it a 1-3-♯5-♭7-♯9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-49',
    number: 49,
    title: 'Major Seven Sharp Eleventh',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>major seven sharp eleventh</strong> (M7♯11) is a strikingly beautiful chord that stands apart from the dominant alterations we've been exploring. This chord is built on a <em>major</em> seventh (not dominant), and it sharpens the eleventh instead of the fifth or ninth. The ♯11 is what gives the Lydian mode its distinctive dreamy, floating quality—and this chord captures that sound perfectly."
      },
      {
        type: 'paragraph',
        text: "Why sharpen the eleventh? In a standard major eleventh chord (1-3-5-7-9-11), the natural eleventh (F in the key of C) clashes harshly with the major third (E)—they're only a half step apart. Raising the eleventh to F♯ eliminates that clash and creates a spacious, luminous sound instead. This is why many arrangers and worship leaders prefer the ♯11 over the natural 11 in major contexts."
      },
      {
        type: 'paragraph',
        text: "The major seven sharp eleventh formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major seventh</strong> above root: an interval of 11 half steps, (W+W)+(W+H)+(W+W). E.g., C to B.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W). E.g., C to D.",
          "<strong>Augmented eleventh</strong> above root: an interval of 18 half steps, an octave + augmented fourth, (Wx6)+(W+W+W). E.g., C to F♯."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a major seven sharp eleventh:"
      },
      {
        type: 'notation',
        text: "C major seven sharp eleventh: C - E - G - B - D - F♯\n\n1   2   3   4   5   6   7   8   9  10  11\nC   D   E   F   G   A   B   C   D   E   F\n^       ^       ^       ^       ^       ♯"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'B', degree: 7 },
            { note: 'D', degree: 2 },
            { note: 'F#', degree: 4 }
          ],
          labels: 'highlighted',
          title: 'C Major Seven Sharp Eleventh: C – E – G – B – D – F♯'
        }
      },
      {
        type: 'guitar',
        config: { suffix: 'maj7sharp11' }
      },
      {
        type: 'paragraph',
        text: "When a major seven sharp eleven appears on a chord chart, it may appear as: CM7♯11, Cmaj7♯11, C<sup>Δ</sup>7♯11, Cmaj7(♯11)"
      },
      {
        type: 'paragraph',
        text: "The M7♯11 is incredibly popular in modern worship. It works beautifully as a tonic chord—try it on the I chord of a key for that ethereal, open sound. It's also the signature sound of the Lydian mode."
      },
      {
        type: 'paragraph',
        text: "When we talk about a major seven sharp eleventh according to scale degrees, we would call it a 1-3-5-7-9-♯11 (or, 1-3-5-7-9-11♯ - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-50',
    number: 50,
    title: 'Seven Flat Thirteenth',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>seven flat thirteenth</strong> (7♭13) takes a dominant thirteenth chord and lowers the thirteenth by a half step. This creates a dark, brooding version of the rich thirteenth sound—think of it as adding a shadow to an already complex chord. The ♭13 introduces a distinctly minor-key color to a dominant chord."
      },
      {
        type: 'paragraph',
        text: "An interesting detail: the ♭13 (A♭ in the key of C) is enharmonically the same pitch as a ♯5 (G♯). However, the two are used in different contexts. When the chord includes a natural fifth alongside the altered tone, we call it a ♭13 because both the fifth and the thirteenth are present as separate voices. When the fifth itself is replaced, we call it a ♯5. In the 7♭13, the natural fifth is typically included."
      },
      {
        type: 'paragraph',
        text: "The seven flat thirteenth formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W). E.g., C to D.",
          "<strong>Perfect eleventh</strong> above root: an interval of 17 half steps, an octave + perfect fourth, (Wx6)+(W+W+H). E.g., C to F.",
          "<strong>Minor thirteenth</strong> above root: an interval of 20 half steps, an octave + minor sixth, (Wx6)+(W+W+W+W). E.g., C to A♭."
        ]
      },
      {
        type: 'paragraph',
        text: "In practice, the fifth and eleventh are frequently omitted, leaving a voicing of 1-3-♭7-9-♭13. Even in this reduced form, the ♭13 gives the chord its characteristic dark shimmer."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a seven flat thirteenth:"
      },
      {
        type: 'notation',
        text: "C seven flat thirteenth: C - E - G - B♭ - D - F - A♭\n\n1   2   3   4   5   6   7   8   9  10  11  12  13\nC   D   E   F   G   A   B   C   D   E   F   G   A\n^       ^       ^       ♭       ^       ^       ♭"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D', degree: 2 },
            { note: 'F', degree: 4 },
            { note: 'Ab', degree: 6 }
          ],
          labels: 'highlighted',
          title: 'C Seven Flat Thirteenth: C – E – G – B♭ – D – F – A♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b13' }
      },
      {
        type: 'paragraph',
        text: "When a seven flat thirteenth appears on a chord chart, it may appear as: C7♭13, C7(♭13)"
      },
      {
        type: 'paragraph',
        text: "When we talk about a seven flat thirteenth according to scale degrees, we would call it a 1-3-5-♭7-9-11-♭13. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-51',
    number: 51,
    title: 'Augmented Major Seventh',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>augmented major seventh</strong> (M7♯5) combines an augmented triad with a major seventh. Unlike the augmented seventh (7♯5) we covered earlier—which uses a <em>flat</em> seventh—this chord keeps the <em>natural</em> major seventh. The result is a dreamy, mysterious, otherworldly sound—less urgent than the dominant augmented seventh, more ethereal and suspended."
      },
      {
        type: 'paragraph',
        text: "This chord is a favorite in film scores and impressionistic music. In worship, it can evoke a sense of wonder or transcendence. The augmented fifth creates an upward pull while the major seventh adds brightness and openness. Together, they produce a chord that seems to float without fully resolving."
      },
      {
        type: 'paragraph',
        text: "The augmented major seventh formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Augmented fifth</strong> above root: an interval of 8 half steps, two major thirds, (W+W)+(W+W). E.g., C to G♯.",
          "<strong>Major seventh</strong> above root: an interval of 11 half steps, (W+W)+(W+H)+(W+W). E.g., C to B."
        ]
      },
      {
        type: 'paragraph',
        text: "Notice the difference from the augmented seventh (lesson 41): here we have a <em>major</em> seventh (B natural), not a <em>minor</em> seventh (B♭). That one note makes a big difference in character—the major seventh version sounds more serene and contemplative, while the dominant version sounds more restless and urgent."
      },
      {
        type: 'paragraph',
        text: "Here is one example of an augmented major seventh:"
      },
      {
        type: 'notation',
        text: "C augmented major seventh: C - E - G♯ - B\n\n1   2   3   4   5   6   7\nC   D   E   F   G   A   B\n^       ^       ♯       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 },
            { note: 'B', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Augmented Major Seventh: C – E – G♯ – B'
        }
      },
      {
        type: 'guitar',
        config: { suffix: 'maj7sharp5' }
      },
      {
        type: 'paragraph',
        text: "When an augmented major seventh appears on a chord chart, it may appear as: CM7♯5, Cmaj7♯5, CM7+5, Cmaj7+5, C<sup>Δ</sup>7♯5, C+M7"
      },
      {
        type: 'paragraph',
        text: "When we talk about an augmented major seventh according to scale degrees, we would call it a 1-3-♯5-7 (or, 1-3-5♯-7 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-52',
    number: 52,
    title: 'Altered Dominant',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>altered dominant</strong> (7alt) isn't a single specific chord—it's a <em>category</em>. When you see \"alt\" written on a chord chart, it means: \"play a dominant seventh chord with some combination of altered fifths and/or ninths.\" The specific alterations are left to the performer's taste, the musical context, and what sounds best in the moment."
      },
      {
        type: 'paragraph',
        text: "The altered dominant concept comes from the <strong>altered scale</strong> (also called the \"super Locrian\" or seventh mode of melodic minor). This scale contains all four possible alterations of the fifth and ninth: ♭5, ♯5, ♭9, and ♯9. Any dominant seventh chord that uses one or more of these altered tones qualifies as an altered dominant."
      },
      {
        type: 'paragraph',
        text: "The general altered dominant formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>♭5 or ♯5</strong> (or both): the fifth is altered—lowered, raised, or omitted entirely.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, (W+W)+(W+H)+(W+H). E.g., C to B♭.",
          "<strong>♭9 or ♯9</strong> (or both): the ninth is altered—lowered, raised, or both may appear."
        ]
      },
      {
        type: 'paragraph',
        text: "In practice, when a musician sees \"C7alt\" on a chart, they might play any of these voicings (among others):"
      },
      {
        type: 'notation',
        text: "C7♭5♭9:  C - E - G♭ - B♭ - D♭  (both tones lowered)\nC7♯5♯9:  C - E - G♯ - B♭ - D♯  (both tones raised)\nC7♯5♭9:  C - E - G♯ - B♭ - D♭  (mixed alterations)\nC7♭5♯9:  C - E - G♭ - B♭ - D♯  (mixed alterations)"
      },
      {
        type: 'paragraph',
        text: "Here are all four double-alteration dominant voicings on piano and guitar:"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'Db', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C7♭5♭9: C – E – G♭ – B♭ – D♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b5b9' }
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D#', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C7♯5♯9: C – E – G♯ – B♭ – D♯'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7sharp5sharp9' }
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G#', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'Db', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C7♯5♭9: C – E – G♯ – B♭ – D♭'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7sharp5b9' }
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D#', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C7♭5♯9: C – E – G♭ – B♭ – D♯'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '7b5sharp9' }
      },
      {
        type: 'paragraph',
        text: "When an altered dominant appears on a chord chart, it may appear as: C7alt, Calt, C7(alt)"
      },
      {
        type: 'paragraph',
        text: "The beauty of \"alt\" is its flexibility. The performer gets to choose which alterations best serve the music. In worship, this means a skilled musician can color a dominant chord differently each time—keeping the harmony fresh and expressive without needing a different chord symbol for every variation."
      },
      {
        type: 'paragraph',
        text: "If you've been following along through this phase, you've already learned all four of the double-alteration chords that fall under the \"alt\" umbrella: 7♭5♭9, 7♭5♯9, 7♯5♭9, and 7♯5♯9. The single-alteration chords (7♭5, 7♯5, 7♭9, 7♯9) can also be considered altered dominants, though they're usually written with their specific alteration rather than just \"alt.\""
      },
      {
        type: 'paragraph',
        text: "When we talk about an altered dominant according to scale degrees, we would call it a 1-3-[♭5 or ♯5]-♭7-[♭9 or ♯9]. The brackets indicate that the performer chooses the specific alterations. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  }
];
