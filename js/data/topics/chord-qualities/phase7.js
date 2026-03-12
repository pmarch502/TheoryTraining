export const phase7 = [
  {
    id: 'cq-37',
    number: 37,
    title: 'Added Ninth',
    content: [
      {
        type: 'paragraph',
        text: "Up to this point, we've built all of our chords by stacking thirds—triads, sevenths, ninths, elevenths, and thirteenths. Now, we're going to explore a different approach: <strong>added tone chords</strong>. Instead of stacking thirds all the way up, these chords take a simple triad and add one or two specific color tones—skipping the seventh entirely."
      },
      {
        type: 'paragraph',
        text: "The first added tone chord we'll look at is the <strong>added ninth</strong> (add9). The add9 takes a major triad (1-3-5) and adds the ninth on top—but with no seventh in between. This gives it a bright, shimmering, open sound that's extremely popular in worship and contemporary music. It has more color than a plain major triad but without the jazz complexity of a full ninth chord."
      },
      {
        type: 'paragraph',
        text: "The add9 formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W). E.g., C to D."
        ]
      },
      {
        type: 'paragraph',
        text: "Notice: there is no seventh. That's the whole point of \"add\"—we are adding just the ninth directly to the triad, skipping the seventh that would normally come in between when stacking thirds."
      },
      {
        type: 'paragraph',
        text: "Here is one example of an added ninth:"
      },
      {
        type: 'notation',
        text: "C add9: C - E - G - D\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ^               ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'D', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Added Ninth: C – E – G – D'
        }
      },
      {
        type: 'guitar',
        config: { suffix: 'add9' }
      },
      {
        type: 'paragraph',
        text: "When an added ninth appears on a chord chart, it may appear as: Cadd9, C(add9)"
      },
      {
        type: 'paragraph',
        text: "<strong>Important:</strong> Cadd9 is NOT the same as C9. C9 is a dominant ninth (1-3-5-♭7-9), which includes the flat seventh. Cadd9 specifically means the ninth is added to the triad with no seventh."
      },
      {
        type: 'paragraph',
        text: "When we talk about an added ninth according to scale degrees, we would call it a 1-3-5-9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-38',
    number: 38,
    title: 'Sixth',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>sixth chord</strong> is another added tone chord. It takes a major triad and adds the sixth scale degree—again, with no seventh. Sixth chords have a warm, sweet, nostalgic quality. They were a staple of jazz standards and big band music, and they appear frequently in worship for adding gentle warmth to a progression."
      },
      {
        type: 'paragraph',
        text: "The sixth chord formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major sixth</strong> above root: an interval of 9 half steps, a perfect fifth + a whole step, (W+W)+(W+H)+(W). E.g., C to A."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a sixth chord:"
      },
      {
        type: 'notation',
        text: "C sixth: C - E - G - A\n\n1   2   3   4   5   6   7\nC   D   E   F   G   A   B\n^       ^       ^   ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'A', degree: 6 }
          ],
          labels: 'highlighted',
          title: 'C Sixth: C – E – G – A'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '6' }
      },
      {
        type: 'paragraph',
        text: "When a sixth chord appears on a chord chart, it appears as: C6"
      },
      {
        type: 'paragraph',
        text: "An interesting thing to notice: C6 contains the exact same notes as Am7 (A-C-E-G). The difference is which note is treated as the root. Context—the bass note, surrounding chords, and the key of the song—determines which name is correct."
      },
      {
        type: 'paragraph',
        text: "When we talk about a sixth chord according to scale degrees, we would call it a 1-3-5-6. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-39',
    number: 39,
    title: 'Minor Sixth',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>minor sixth</strong> takes a minor triad and adds the sixth scale degree. Here's the thing that trips people up: even though the chord is \"minor,\" the added sixth is a <em>natural</em> (major) sixth—not a flatted one. The \"minor\" in the name refers to the minor triad underneath, not to the sixth interval."
      },
      {
        type: 'paragraph',
        text: "Minor sixth chords have a dark, bittersweet, mysterious quality. They're common in film scores and can add a haunting beauty to worship passages—think of those introspective moments before a big build."
      },
      {
        type: 'paragraph',
        text: "The minor sixth formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Minor third</strong> above root: an interval of 3 half steps, W+H. E.g., C to E♭.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a minor third + a major third, (W+H)+(W+W). E.g., C to G.",
          "<strong>Major sixth</strong> above root: an interval of 9 half steps, a perfect fifth + a whole step, (W+H)+(W+W)+(W). E.g., C to A."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a minor sixth:"
      },
      {
        type: 'notation',
        text: "C minor sixth: C - E♭ - G - A\n\n1   2   3   4   5   6   7\nC   D   E   F   G   A   B\n^       ♭       ^   ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'Eb', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'A', degree: 6 }
          ],
          labels: 'highlighted',
          title: 'C Minor Sixth: C – E♭ – G – A'
        }
      },
      {
        type: 'guitar',
        config: { suffix: 'm6' }
      },
      {
        type: 'paragraph',
        text: "When a minor sixth appears on a chord chart, it may appear as: Cm6, C-6"
      },
      {
        type: 'paragraph',
        text: "When we talk about a minor sixth according to scale degrees, we would call it a 1-♭3-5-6 (or, 1-3♭-5-6 - people say it both ways). (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  },
  {
    id: 'cq-40',
    number: 40,
    title: 'Six-Nine',
    content: [
      {
        type: 'paragraph',
        text: "The <strong>six-nine chord</strong> combines both the sixth and the ninth with a major triad. It's essentially a sixth chord and an add9 chord merged together—and, like those chords, there is still no seventh."
      },
      {
        type: 'paragraph',
        text: "Six-nine chords have a lush, open, sophisticated quality. They're favorites for ending chords in jazz and worship, providing a sense of resolution with rich color. If you want a final chord that sounds complete and warm without being overly complex, the six-nine is a go-to choice."
      },
      {
        type: 'paragraph',
        text: "The six-nine formula is:"
      },
      {
        type: 'list',
        className: 'formula-list',
        items: [
          "<strong>Root</strong>",
          "<strong>Major third</strong> above root: an interval of 4 half steps, W+W. E.g., C to E.",
          "<strong>Perfect fifth</strong> above root: an interval of 7 half steps, a major third + a minor third, (W+W)+(W+H). E.g., C to G.",
          "<strong>Major sixth</strong> above root: an interval of 9 half steps, a perfect fifth + a whole step, (W+W)+(W+H)+(W). E.g., C to A.",
          "<strong>Major ninth</strong> above root: an interval of 14 half steps, an octave + major second, (Wx6)+(W). E.g., C to D."
        ]
      },
      {
        type: 'paragraph',
        text: "Here is one example of a six-nine chord:"
      },
      {
        type: 'notation',
        text: "C six-nine: C - E - G - A - D\n\n1   2   3   4   5   6   7   8   9\nC   D   E   F   G   A   B   C   D\n^       ^       ^   ^           ^"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          highlighted: [
            { note: 'C', degree: 1 },
            { note: 'E', degree: 3 },
            { note: 'G', degree: 5 },
            { note: 'A', degree: 6 },
            { note: 'D', degree: 2 }
          ],
          labels: 'highlighted',
          title: 'C Six-Nine: C – E – G – A – D'
        }
      },
      {
        type: 'guitar',
        config: { suffix: '6.9' }
      },
      {
        type: 'paragraph',
        text: "When a six-nine chord appears on a chord chart, it appears as: C6/9"
      },
      {
        type: 'paragraph',
        text: "Like the other added tone chords in this phase, there is no seventh. The six-nine sits in a sweet spot between simple triads and complex extended chords, making it incredibly versatile in worship settings."
      },
      {
        type: 'paragraph',
        text: "When we talk about a six-nine according to scale degrees, we would call it a 1-3-5-6-9. (Remember - these numbers are scale degrees from the major scale of the root of the chord.)"
      }
    ]
  }
];
