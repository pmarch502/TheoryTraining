export const phase4 = [
  {
    id: 'cq-25',
    number: 25,
    title: 'What Is a Ninth?',
    content: [
      {
        type: 'paragraph',
        text: "Like the seventh chords, <strong>ninth chords</strong> are going to add another triad to the stack (triads stacked 3, sevenths stacked 4, and ninths stack 5). Ninth chords have been described as adding elegance, luminosity, and emotional nuance to harmonic structure."
      },
      {
        type: 'paragraph',
        text: "Ninth chords build on the foundation of the seventh chords, but the number of options is limited. For ninths, we only have major, dominant, and minor. As mentioned, a ninth chord is simply a group of <strong>five notes stacked in thirds</strong>. (Yep, just like sevenths, but one more third on top!)"
      },
      {
        type: 'paragraph',
        text: "What does \"stacked in thirds\" mean for a ninth? Let's go back to our C major scale. If you start from any note (the chord's root), you skip every other note to build up a ninth chord. Here's that C major scale with some notes highlighted:"
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8   9  10  11  12  13\nC   D   E   F   G   A   B   C   D   E   F   G   A\n^       ^       ^       ^       ^"
      },
      {
        type: 'paragraph',
        text: "Start on C (the root). Skip D to E (third), skip F to G (fifth), skip A to B (seventh), skip C to D (ninth). Boom\u2014we've created a ninth chord. (In this case, a C major ninth chord: <strong>C - E - G - B - D</strong>.)"
      },
      {
        type: 'paragraph',
        text: "If we picked a different starting point, we could create a different ninth chord. This is how all basic ninth chords of any key/scale are built. Although, what kind of ninth chord you've built takes a little more explanation. We'll sort all of that out in the upcoming lessons."
      },
      {
        type: 'paragraph',
        text: "One interesting thing to notice is that, in a major scale, there are only seven notes. If you only have seven, how do you add a ninth? As you can see in the diagram, we simply repeat the notes and continue the numbering. As it turns out, the 9 is really just the 2 we skipped when we were building the triad (though, we are careful to call it the ninth - why? Because we are stacking thirds.)"
      },
      {
        type: 'notation',
        text: "1   2   3   4   5   6   7   8   9  10  11  12  13  14  15\nC   D   E   F   G   A   B   C   D   E   F   G   A   B   C\n    *                           *"
      }
    ]
  },
  {
    id: 'cq-26',
    number: 26,
    title: 'Major Ninth',
    content: [
      {
        type: 'paragraph',
        text: "We now have a basic idea of what ninth chords are and how to build them from a scale using stacked thirds. So, let's get specific\u2014let's talk about the <strong>major ninth</strong>. To our ears, it's bright, open, airy, and luminous\u2014perfect for worship warmth or emotional elevation."
      },
      {
        type: 'paragraph',
        text: "The actual major ninth formula is defined as (for our purposes, an octave is equal to three major thirds):"
      },
      {
        type: 'list',
        items: [
          "Root",
          "<strong>Major third</strong> above root: an interval of 4 half steps, (W+W). E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major seventh</strong> above root: an interval of 11 half steps, a major third + a minor third + major third, (W+W)+(W+H)+(W+W). (We might also call it a perfect fifth + a major third.) E.g., C to B.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W).  E.g., C to D."
        ]
      },
      {
        type: 'paragraph',
        text: "Just as with triads, this definition is very important because it is very precise\u2014it has an important purpose in defining and naming chords. But, for us and for now, we'll just keep thinking of it as the stacked thirds."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a major ninth:"
      },
      {
        type: 'notation',
        text: "C major ninth: C - E - G - B - D\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ^       ^       ^"
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
            { note: 'D', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Major Ninth: C \u2013 E \u2013 G \u2013 B \u2013 D'
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
            { string: 2, fret: 0, degree: 7 },
            { string: 1, fret: 0, degree: 3 }
          ],
          muted: [6],
          title: 'CMaj9 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a major ninth appears on a chord chart, it may appear with various chord quality decorations: CM9, CMaj9, Cmaj9, C<sup>\u0394</sup>9"
      },
      {
        type: 'paragraph',
        text: "When we talk about a major ninth according to scale degrees, we would call it a 1-3-5-7-9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-27',
    number: 27,
    title: 'Dominant Ninth',
    content: [
      {
        type: 'paragraph',
        text: "Just as with sevenths, you might have thought that the next logical chord after the major ninth would be the minor ninth. That's good thinking, but it would be better for us to make a slight detour to the dominant ninth first."
      },
      {
        type: 'paragraph',
        text: "The <strong>dominant ninth</strong> brings a mellow tension and pull\u2014warmly leading back to I in worship choruses (ii-V9-I)."
      },
      {
        type: 'paragraph',
        text: "The actual dominant ninth formula is defined as (for our purposes, an octave is equal to three major thirds):"
      },
      {
        type: 'list',
        items: [
          "Root",
          "<strong>Major third</strong> above root: an interval of 4 half steps, (W+W). E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., D to A.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B\u266D.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W).  E.g., C to D."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a dominant ninth:"
      },
      {
        type: 'notation',
        text: "C dominant ninth: C - E - G - B\u266D - D\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ^       \u266D       ^"
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
            { note: 'D', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Dominant Ninth: C \u2013 E \u2013 G \u2013 B\u266D \u2013 D'
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
            { string: 1, fret: 0, degree: 3 }
          ],
          muted: [6],
          title: 'C9 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a dominant ninth appears on a chord chart, it only appears with one chord quality decoration: C9 (we have a major triad (no decoration) and it's not including the 7 - it's the \u266D7 (no decoration))"
      },
      {
        type: 'paragraph',
        text: "When we talk about a dominant ninth according to scale degrees, we would call it a 1-3-5-\u266D7-9 (or, 1-3-5-7\u266D-9 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-28',
    number: 28,
    title: 'Minor Ninth',
    content: [
      {
        type: 'paragraph',
        text: "Next is the <strong>minor ninth</strong>. The minor ninth sounds darkly romantic or bittersweet\u2014it's common in worship for adding sophistication and lushness."
      },
      {
        type: 'paragraph',
        text: "The actual minor ninth formula is defined as (for our purposes, an octave is equal to three major thirds):"
      },
      {
        type: 'list',
        items: [
          "Root",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., D to F.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., D to A.",
          "<strong>Minor seventh</strong> above root: an interval of 10 half steps, a major third + a minor third + minor third, (W+W)+(W+H)+(W+H). (We might also call it a perfect fifth + a minor third.) E.g., C to B\u266D.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W).  E.g., C to D."
        ]
      },
      {
        type: 'paragraph',
        text: "Again, this definition is very important because it is very precise - it has an important purpose in defining and naming chords."
      },
      {
        type: 'paragraph',
        text: "Here is one example of a minor ninth:"
      },
      {
        type: 'notation',
        text: "C minor ninth: C - E\u266D - G - B\u266D - D\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       \u266D       ^       \u266D       ^"
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
            { note: 'D', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Minor Ninth: C \u2013 E\u266D \u2013 G \u2013 B\u266D \u2013 D'
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
            { string: 1, fret: 3, degree: 5 }
          ],
          muted: [6],
          title: 'Cm9 \u2014 Open Position'
        }
      },
      {
        type: 'paragraph',
        text: "When a minor ninth appears on a chord chart, it may appear with various chord quality decorations: Cm9, Cmin9, Cmi9, C-9 (we have a minor triad ('m') and it's not including the 7 - it's the \u266D7 (no decoration))."
      },
      {
        type: 'paragraph',
        text: "When we talk about a minor ninth according to scale degrees, we would call it a 1-\u266D3-5-\u266D7-9 (or, 1-3\u266D-5-7\u266D-9 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  }
];
