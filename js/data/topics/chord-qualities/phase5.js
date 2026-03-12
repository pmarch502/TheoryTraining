export const phase5 = [
  {
    id: 'cq-29',
    number: 29,
    title: 'What Is an Eleventh?',
    content: [
      {
        type: 'paragraph',
        text: "Like the seventh and ninth chords, <strong>eleventh chords</strong> are going to add another triad to the stack (triads stacked 3, sevenths stacked 4, ninths stack 5, and elevenths stack 6). Eleventh chords have been described as adding richly colored, often suspended sonorities that enhance tension, depth, and atmospheric quality."
      },
      {
        type: 'paragraph',
        text: "Like ninth chords, eleventh chords build on the foundation of the seventh chords, but the number of options is limited. For elevenths, we only have major, dominant, and minor. As mentioned, an eleventh chord is simply a group of <strong>six notes stacked in thirds</strong>. (Yep, just like ninths, but one more third on top!)"
      },
      {
        type: 'paragraph',
        text: "What does \"stacked in thirds\" mean for an eleventh? Let's go back to our C major scale. If you start from any note (the chord's root), you skip every other note to build up an eleventh chord. Here's that C major scale with some notes highlighted:"
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8   9  10  11  12  13\nC   D   E   F   G   A   B   C   D   E   F   G   A\n^       ^       ^       ^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "Start on C (the root). Skip D to E (third), skip F to G (fifth), skip A to B (seventh), skip C to D (ninth), skip E to F (eleventh). Boom—we've created an eleventh chord. (In this case, a C major eleventh chord: <strong>C - E - G - B - D - F</strong>.)"
      },
      {
        type: 'paragraph',
        text: "If we picked a different starting point, we could create a different eleventh chord. This is how all basic eleventh chords of any key/scale are built. Although, what kind of eleventh chord you've built takes a little more explanation. We'll sort all of that out in the upcoming lessons."
      },
      {
        type: 'paragraph',
        text: "One interesting thing to notice is that, in a major scale, there are only seven notes. If you only have seven, how do you add an eleventh? As you can see in the diagram, we simply repeat the notes and continue the numbering. As it turns out, the 11 is really just the 4 we skipped when we were building the triad (though, we are careful to call it the eleventh - why? Because we are stacking thirds.)"
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8   9  10  11  12  13  14  15\nC   D   E   F   G   A   B   C   D   E   F   G   A   B   C\n            *                           *"
      }
    ]
  },
  {
    id: 'cq-30',
    number: 30,
    title: 'Major Eleventh',
    content: [
      {
        type: 'paragraph',
        text: "We now have a basic idea of what eleventh chords are and how to build them from a scale using stacked thirds. So, let's get specific—let's talk about the <strong>major eleventh</strong>. To our ears, it's bright yet suspended, ethereal, and somewhat ambiguous."
      },
      {
        type: 'paragraph',
        text: "The actual major eleventh formula is defined as (for our purposes, an octave is equal to three major thirds):"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, (W+W). E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major seventh</strong> above root: an interval of 11 half steps, a major third + a minor third + major third, (W+W)+(W+H)+(W+W). (We might also call it a perfect fifth + a major third.) E.g., C to B.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W). E.g., C to D.",
          "<strong>Perfect eleventh</strong> above root: an interval of 17 half steps, an octave + perfect fourth, (Wx6)+(W+W+H). E.g., C to F."
        ]
      },
      {
        type: 'paragraph',
        text: "Just as with triads, this definition is very important because it is very precise - it has an important purpose in defining and naming chords. But, for us and for now, we'll just keep thinking of it as the stacked thirds."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a major eleventh:"
      },
      {
        type: 'notation',
        text: "C major eleventh: C - E - G - B - D - F\n\n1   2   3   4   5   6   7   8   9  10  11\nC   D   E   F   G   A   B   C   D   E   F\n^       ^       ^       ^       ^       ^"
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
            { note: 'F', degree: 4 }
          ],
          labels: 'highlighted',
          title: 'C Major Eleventh: C – E – G – B – D – F'
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
            { string: 1, fret: 1, degree: 4 }
          ],
          muted: [6],
          title: 'CMaj11 — Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a major eleventh appears on a chord chart, it may appear with various chord quality decorations: CM11, CMaj11, Cmaj11, C<sup>Δ</sup>11"
      },
      {
        type: 'paragraph',
        text: "When we talk about a major eleventh according to scale degrees, we would call it a 1-3-5-7-9-11. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-31',
    number: 31,
    title: 'Dominant Eleventh',
    content: [
      {
        type: 'paragraph',
        text: "Just as with sevenths and ninths, you might have thought that the next logical chord after the major eleventh would be the minor eleventh. That's good thinking, but it would be better for us to make a slight detour to the dominant eleventh first."
      },
      {
        type: 'paragraph',
        text: "The <strong>dominant eleventh</strong> brings a mildly dissonant, open, and floating character."
      },
      {
        type: 'paragraph',
        text: "The actual dominant eleventh formula is defined as (for our purposes, an octave is equal to three major thirds):"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, (W+W). E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B♭.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W).  E.g., C to D.",
          "<strong>Perfect eleventh</strong> above root: an interval of 17 half steps, an octave + perfect fourth, (Wx6)+(W+W+H).  E.g., C to F."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a dominant eleventh:"
      },
      {
        type: 'notation',
        text: "C dominant eleventh: C - E - G - B♭ - D - F\n\n1   2   3   4   5   6   7   8   9  10  11\nC   D   E   F   G   A   B   C   D   E   F\n^       ^       ^       ♭       ^       ^"
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
            { note: 'F', degree: 4 }
          ],
          labels: 'highlighted',
          title: 'C Dominant Eleventh: C – E – G – B♭ – D – F'
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
            { string: 2, fret: 3, degree: 2 },
            { string: 1, fret: 1, degree: 4 }
          ],
          muted: [6],
          title: 'C11 — Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a dominant eleventh appears on a chord chart, it only appears with one chord quality decoration: C11 (we have a major triad (no decoration) and it's not including the 7 - it's the ♭7 (no decoration))"
      },
      {
        type: 'paragraph',
        text: "When we talk about a dominant eleventh according to scale degrees, we would call it a 1-3-5-♭7-9-11 (or, 1-3-5-7♭-9-11 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-32',
    number: 32,
    title: 'Minor Eleventh',
    content: [
      {
        type: 'paragraph',
        text: "Next is the <strong>minor eleventh</strong>. The minor eleventh sounds warm, complex, lush, and deeply atmospheric—it's common in worship for adding velvety or cinematic atmosphere."
      },
      {
        type: 'paragraph',
        text: "The actual minor eleventh formula is defined as (for our purposes, an octave is equal to three major thirds):"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., C to E♭.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B♭.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W).  E.g., C to D.",
          "<strong>Perfect eleventh</strong> above root: an interval of 17 half steps, an octave + perfect fourth, (Wx6)+(W+W+H).  E.g., C to F."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a minor eleventh:"
      },
      {
        type: 'notation',
        text: "C minor eleventh: C - E♭ - G - B♭ - D - F\n\n1   2   3   4   5   6   7   8   9  10  11\nC   D   E   F   G   A   B   C   D   E   F\n^       ♭       ^       ♭       ^       ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'Eb', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'Bb', degree: 7 },
            { note: 'D', degree: 2 },
            { note: 'F', degree: 4 }
          ],
          labels: 'highlighted',
          title: 'C Minor Eleventh: C – E♭ – G – B♭ – D – F'
        }
      },
      {
        type: 'guitar',
        config: {
          startFret: 0, frets: 4,
          dots: [
            { string: 5, fret: 3, degree: 1 },
            { string: 4, fret: 1, degree: 3 },
            { string: 3, fret: 3, degree: 7 },
            { string: 2, fret: 3, degree: 2 },
            { string: 1, fret: 1, degree: 4 }
          ],
          muted: [6],
          title: 'Cm11 — Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a minor eleventh appears on a chord chart, it may appear with various chord quality decorations: Cm11, Cmin11, Cmi11, C-11 (we have a minor triad ('m') and it's not including the 7 - it's the ♭7 (no decoration))."
      },
      {
        type: 'paragraph',
        text: "When we talk about a minor eleventh according to scale degrees, we would call it a 1-♭3-5-♭7-9-11 (or, 1-3♭-5-7♭-9-11 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  }
];
