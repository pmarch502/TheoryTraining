export const phase3 = [
  {
    id: 'cq-17',
    number: 17,
    title: 'What Is a Seventh?',
    content: [
      {
        type: 'paragraph',
        text: "Now that we know about triads (major, minor, diminished, augmented, and even suspended), we can play a lot of songs - most songs if we aren't being too picky. But, chord harmony can be so much richer in our ears. Our next step will be to move from three note chords (triads) to four note chords. It is important to remember that when building chords, we have been stacking thirds. If we continue with this approach (and we should), we can refer to these four note chords as <strong>seventh chords</strong>. (Technically, they are called tetrads, but I don't think I've ever heard anyone use that term.)"
      },
      {
        type: 'paragraph',
        text: "Seventh chords are the foundation of more advanced harmony in music—they're what make songs feel lush, jazzy, and emotionally rich, especially in modern worship bridges or ballads. Sevenths are the most complicated group of chords the average musician will encounter (i.e., the most meaningful varieties)."
      },
      {
        type: 'paragraph',
        text: "As mentioned, a seventh chord is simply a group of <strong>four notes stacked in thirds</strong>. (Yes, just like triads, but one more third on top!)"
      },
      {
        type: 'paragraph',
        text: "What does \"stacked in thirds\" mean for a seventh? Let's go back to our C major scale. If you start from any note (the chord's root), you skip every other note to build up a seventh chord. Here's that C major scale with some notes highlighted:"
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       ^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "Start on C (the root). Skip D to E (third), skip F to G (fifth), skip A to B (seventh). Boom—we've created a seventh chord. (In this case, a C major seventh chord: <strong>C - E - G - B</strong>.)"
      },
      {
        type: 'paragraph',
        text: "If we picked a different starting point, we could create a different seventh chord. This is how all basic seventh chords of any key/scale are built. Although, what kind of seventh chord you've built gets a little more complicated. We'll sort all of that out in the upcoming lessons."
      }
    ]
  },
  {
    id: 'cq-18',
    number: 18,
    title: 'Major Seventh',
    content: [
      {
        type: 'paragraph',
        text: "We now have a basic idea of what seventh chords are and how to build them from a scale using stacked thirds. So, let's get specific—let's talk about the <strong>major seventh</strong>. To our ears, it's lush, dreamy, and open—perfect for worship builds or reflective moments."
      },
      {
        type: 'paragraph',
        text: "The actual major seventh formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major seventh</strong> above root: an interval of 11 half steps, a major third + a minor third + major third, (W+W)+(W+H)+(W+W). (We might also call it a perfect fifth + a major third.) E.g., C to B."
        ]
      },
      {
        type: 'paragraph',
        text: "Just as with triads, this definition is very important because it is very precise - it has an important purpose in defining and naming chords. But, for us and for now, we'll just keep thinking of it as the stacked thirds."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a major seventh:"
      },
      {
        type: 'notation',
        text: "C major seventh: C - E - G - B\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       ^       ^       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'B', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Major Seventh: C \u2013 E \u2013 G \u2013 B'
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
            { string: 2, fret: 0, degree: 7 },
            { string: 1, fret: 0, degree: 3 }
          ],
          muted: [6],
          title: 'CMaj7 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a major seventh appears on a chord chart, it may appear with various chord quality decorations: CM7, CMaj7, Cmaj7, C<sup>\u0394</sup>7, C<sup>\u0394</sup>"
      },
      {
        type: 'paragraph',
        text: "When we talk about a major seventh according to scale degrees, we would call it a 1-3-5-7. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-19',
    number: 19,
    title: 'Dominant Seventh',
    content: [
      {
        type: 'paragraph',
        text: "As we've been walking through these lessons, we've tried to follow a logical progression. If you've picked up on that, you might have thought that the next logical chord after the major seventh would be the minor seventh. That's good thinking, but it would be better for us to make a slight detour to the dominant seventh first."
      },
      {
        type: 'paragraph',
        text: "The <strong>dominant seventh</strong> brings tension and pull—classic for leading back to I in worship choruses (ii-V7-I)."
      },
      {
        type: 'paragraph',
        text: "The actual dominant seventh formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., D to A.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B\u266D."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords. You may have a question, though - if the dominant seventh formula has a minor seventh interval in it, why isn't it called a minor seventh? That's a great question!"
      },
      {
        type: 'divider'
      },
      {
        type: 'paragraph',
        text: "Remember back when we learned triads, we had major chords and minor chords? We discovered that when we had a major chord, it was just kind of assumed - we didn't need to say major. But, when we said 'minor' we were specifically talking about a \u266D3. On a chord chart, a C major most commonly appears as simply 'C'. But, a C minor gets the decoration 'Cm'. So, that 'm' (lowercase) decoration needs to mean only one thing - a \u266D3. If we tried to also use 'm' in relation to a seventh chord, we'd never know which was which! So, when you see an 'm', it is always talking about the \u266D3."
      },
      {
        type: 'paragraph',
        text: "But, we're talking about seventh chords now. Remember in the last lesson we said a major seventh chord might look like this: CM7. The 'M' (uppercase) is specifically referring to the 7 (not the 3). So, major triads don't use the 'M' (normally) because it's reserved for the seventh - specifically designating the 7 of the chord root's major scale. When it is the \u266D7 (like in the dominant seventh), we use no decoration at all."
      },
      {
        type: 'paragraph',
        text: "This may be a little confusing, but it is actually quite smart - at least as far as creating an unambiguous naming convention for chord qualities. A lower case 'm' means a \u266D3 and an upper case 'M' means a major 7. Our next lesson will, hopefully, help make this a little clearer."
      },
      {
        type: 'divider'
      },
      {
        type: 'paragraph',
        text: "Here is one example of a dominant seventh:"
      },
      {
        type: 'notation',
        text: "C dominant seventh: C - E - G - B\u266D\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       ^       ^       \u266D"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'Bb', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Dominant Seventh: C \u2013 E \u2013 G \u2013 B\u266D'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 2, degree: 3 },
            { string: 3, fret: 3, degree: 7 },
            { string: 2, fret: 1, degree: 1 },
            { string: 1, fret: 0, degree: 3 }
          ],
          muted: [6],
          title: 'C7 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a dominant seventh appears on a chord chart, it only appears with one chord quality decoration: C7 (we have a major triad (no decoration) and it's not the 7 - it's the \u266D7 (no decoration))"
      },
      {
        type: 'paragraph',
        text: "When we talk about a dominant seventh according to scale degrees, we would call it a 1-3-5-\u266D7 (or, 1-3-5-7\u266D - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-20',
    number: 20,
    title: 'Minor Seventh',
    content: [
      {
        type: 'paragraph',
        text: "Next is the <strong>minor seventh</strong>. The minor seventh sounds smooth, soulful—it's common in worship for vi or ii chords, adding depth without tension."
      },
      {
        type: 'paragraph',
        text: "The actual minor seventh formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., D to F.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., D to A.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B\u266D."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a minor seventh:"
      },
      {
        type: 'notation',
        text: "C minor seventh: C - E\u266D - G - B\u266D\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       \u266D       ^       \u266D"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'Eb', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'Bb', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Minor Seventh: C \u2013 E\u266D \u2013 G \u2013 B\u266D'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 2, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 5, degree: 5 },
            { string: 3, fret: 3, degree: 7 },
            { string: 2, fret: 4, degree: 3 },
            { string: 1, fret: 3, degree: 5 }
          ],
          muted: [6],
          title: 'Cm7 \u2014 3rd Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a minor seventh appears on a chord chart, it may appear with various chord quality decorations: Cm7, Cmin7, Cmi7, C-7 (we have a minor triad ('m') and it's not the 7 - it's the \u266D7 (no decoration))."
      },
      {
        type: 'paragraph',
        text: "When we talk about a minor seventh according to scale degrees, we would call it a 1-\u266D3-5-\u266D7 (or, 1-3\u266D-5-7\u266D - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-21',
    number: 21,
    title: 'Half-Diminished Seventh',
    content: [
      {
        type: 'paragraph',
        text: "Much like the diminished triad in an earlier lesson, we now come to a seventh you won't see very often. (But, when it's used well, it's so good\u2026) The <strong>half-diminished seventh</strong> adds subtle tension in major keys, common in jazz or in worship modulations."
      },
      {
        type: 'paragraph',
        text: "The actual half-diminished seventh formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., D to F.",
          "<strong>Diminished fifth</strong> above root: an interval of 6 half steps, a minor third + a minor third, (W+H)+(W+H). E.g., B to F.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + a minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B\u266D."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a half-diminished seventh:"
      },
      {
        type: 'notation',
        text: "C half-diminished seventh: C - E\u266D - G\u266D - B\u266D\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       \u266D       \u266D       \u266D"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'Eb', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'Bb', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Half-Diminished Seventh: C \u2013 E\u266D \u2013 G\u266D \u2013 B\u266D'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 2, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 4, degree: 5 },
            { string: 3, fret: 3, degree: 7 },
            { string: 2, fret: 4, degree: 3 }
          ],
          muted: [6, 1],
          title: 'C\u00F87 \u2014 3rd Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a half-diminished seventh appears on a chord chart, it may appear with various chord quality decorations: C\u00F87, C\u00F8, Cm7\u266D5, C-7\u266D5. The proper symbol may be the '\u00F87', but that's pretty hard to type on a normal keyboard. That's where the 'm7\u266D5' comes in. Not only is it a completely accurate and unambiguous name, it can be typed as plain text (which has made it quite popular for chord charts)."
      },
      {
        type: 'paragraph',
        text: "When we talk about a half-diminished seventh according to scale degrees, we would call it a 1-\u266D3-\u266D5-\u266D7 (or, 1-3\u266D-5\u266D-7\u266D - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-22',
    number: 22,
    title: 'The Sevenths in a Key',
    content: [
      {
        type: 'paragraph',
        text: "We haven't covered all of the sevenths, but we now know enough to talk about all of the sevenths in a major key. In any key (scale), sevenths can be built on each scale degree - i.e. the <strong>diatonic seventh chords</strong>. Let's keep using the key of C major (C major scale) so we can see the pattern."
      },
      {
        type: 'paragraph',
        text: "Here are all of the diatonic sevenths for a major key. Also, notice how the 'M' and 'm' are used to avoid confusion."
      },
      {
        type: 'notation',
        text: "CM7:  C   D   E   F   G   A   B   C\n      ^       ^       ^       ^\nDm7:  C   D   E   F   G   A   B   C\n          ^       ^       ^       ^\nEm7:  C   D   E   F   G   A   B   C   D\n              ^       ^       ^       ^\nFM7:  C   D   E   F   G   A   B   C   D   E\n                  ^       ^       ^       ^\nG7:  C   D   E   F   G   A   B   C   D   E   F\n                     ^       ^       ^       ^\nAm7:  C   D   E   F   G   A   B   C   D   E   F   G\n                          ^       ^       ^       ^\nB\u00F87:  C   D   E   F   G   A   B   C   D   E   F   G   A\n                              ^       ^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "These are sometimes expressed as Roman numerals where uppercase=major triad, and lowercase=minor triad (no 'm' used because the lowercase roman numeral says it):"
      },
      {
        type: 'notation',
        text: "IM7      ii7      iii7     IVM7     V7       vi7      vii\u00F87\nC maj7   D min7   E min7   F maj7   G dom7   A min7   B half-dim7"
      },
      {
        type: 'paragraph',
        text: "Or, even in our common Arabic numerals (popularly known as the Nashville Number System). The 'M' and 'm' are used explicitly here."
      },
      {
        type: 'notation',
        text: "1M7      2m7      3m7      4M7      57       6m7      7\u00F87\nC maj7   D min7   E min7   F maj7   G dom7   A min7   B half-dim7"
      },
      {
        type: 'paragraph',
        text: "As noted before, with Arabic numerals, there isn't a standard way to write them. Some will simply write a '2' and expect the reader to know that it is representing a minor triad. Others will write '2m' to be explicit and remove any chance for confusion."
      }
    ]
  },
  {
    id: 'cq-23',
    number: 23,
    title: 'Diminished Seventh',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>diminished seventh</strong> (sometimes called the fully diminished seventh) is tense, symmetrical—rare in worship but is an important part of the sevenths family, used for dramatic shifts."
      },
      {
        type: 'paragraph',
        text: "The actual diminished seventh formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., D to F.",
          "<strong>Diminished fifth</strong> above root: an interval of 6 half steps, a minor third + a minor third, (W+H)+(W+H). E.g., B to F.",
          "<strong>Diminished seventh</strong> above root: an interval of 9 half steps, a minor third + a minor third + minor third, (W+H)+(W+H)+(W+H). (We might also call it a diminished fifth + a minor third.) E.g., C to B\u266D\u266D (yep, that's a real thing - a double flat)."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords. If you remember back to when we talked about scales and keys, we said that every scale degree had to be a new letter name. In the key of C, the seventh degree must be some kind of a 'B'. Even though a B\u266D\u266D is the same pitch as an 'A', we can't call it some kind of an 'A' because then it would be a sixth. That's how we end up with things like a B\u266D\u266D (pronounced 'B double flat')."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a diminished seventh:"
      },
      {
        type: 'notation',
        text: "C diminished seventh: C - E\u266D - G\u266D - B\u266D\u266D\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       \u266D       \u266D       \u266D\u266D"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'Eb', degree: 3 },
            { note: 'Gb', degree: 5 },
            { note: 'A', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Diminished Seventh: C \u2013 E\u266D \u2013 G\u266D \u2013 B\u266D\u266D'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 1, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 4, degree: 5 },
            { string: 3, fret: 2, degree: 7 },
            { string: 2, fret: 4, degree: 3 }
          ],
          muted: [6, 1],
          title: 'Cdim7 \u2014 2nd Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a diminished seventh appears on a chord chart, it may appear with various chord quality decorations: C\u00B07, Co7, Cdim7. The proper symbol may be the '\u00B07', but that's pretty hard to type on a normal keyboard. That's where the 'o7' comes in. It is a reasonable plain text substitute."
      },
      {
        type: 'paragraph',
        text: "When we talk about a diminished seventh according to scale degrees, we would call it a 1-\u266D3-\u266D5-\u266D\u266D7 (or, 1-3\u266D-5\u266D-7\u266D\u266D - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-24',
    number: 24,
    title: 'Minor-Major Seventh',
    content: [
      {
        type: 'paragraph',
        text: "Now, all that stuff about how an 'm' applies to the 3 but an 'M' applies to the 7 is really going to make some sense (I hope). Let's talk about the <strong>minor-major seventh</strong>. To our ears, it's exotic, mysterious, and tense—it provides a sense of anticipation."
      },
      {
        type: 'paragraph',
        text: "The actual minor-major seventh formula is defined as:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., D to F.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major seventh</strong> above root: an interval of 11 half steps, a major third + a minor third + major third, (W+W)+(W+H)+(W+W). (We might also call it a perfect fifth + a major third.) E.g., C to B."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise\u2014it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a minor major seventh:"
      },
      {
        type: 'notation',
        text: "C minor major seventh: C - E\u266D - G - B\n\n1   2   3   4   5   6   7   8\nC   D   E   F   G   A   B   C\n^       \u266D       ^       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'Eb', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'B', degree: 7 }
          ],
          labels: 'highlighted',
          title: 'C Minor-Major Seventh: C \u2013 E\u266D \u2013 G \u2013 B'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 1, degree: 3 },
            { string: 3, fret: 0, degree: 5 },
            { string: 2, fret: 0, degree: 7 }
          ],
          muted: [6, 1],
          title: 'CmM7 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a minor-major seventh appears on a chord chart, it may appear with various chord quality decorations: CmM7, C-M7, Cmin(maj7), Cm<sup>\u0394</sup>7, Cm<sup>\u0394</sup>"
      },
      {
        type: 'paragraph',
        text: "When we talk about a minor-major seventh according to scale degrees, we would call it a 1-3\u266D-5-7. (Remember\u2014these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  }
];
