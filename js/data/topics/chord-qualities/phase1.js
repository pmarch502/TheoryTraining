export const phase1 = [
  {
    id: 'cq-1',
    number: 1,
    title: 'Notes A-G',
    content: [
      {
        type: 'paragraph',
        text: "You've probably heard people say things like \"It's in the key of G\" or \"It's in A.\" You may even have said things like that, yourself. But, what exactly is a <strong>key</strong> and what does it mean to be in one and why do I care?"
      },
      {
        type: 'paragraph',
        text: "First, we should probably talk about <strong>notes</strong>. In modern western music, we use a twelve-tone equal temperament tuning. This means that within a single octave, there are twelve notes or pitches. <em>(On a piano keyboard, an octave is every key from one C up to (or down to), but not including, the next C.)</em> We name them with letters of the alphabet:"
      },
      {
        type: 'notation',
        text: "A   B   C   D   E   F   G"
      },
      {
        type: 'paragraph',
        text: "You may have noticed, there are only seven names - but, we just said there are twelve notes. This is because the letters, when they appear without any additional information (like a \u266F or a \u266D), are referring to <strong>natural</strong> notes. We can identify these, for the most part, with the white keys on a piano. The additional names will be discussed in Lesson 2."
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          highlighted: [
            { note: 'C', color: 'primary' },
            { note: 'D', color: 'primary' },
            { note: 'E', color: 'primary' },
            { note: 'F', color: 'primary' },
            { note: 'G', color: 'primary' },
            { note: 'A', color: 'primary' },
            { note: 'B', color: 'primary' }
          ],
          labels: 'highlighted',
          title: 'Piano White Keys \u2014 Natural Notes'
        }
      }
    ]
  },
  {
    id: 'cq-2',
    number: 2,
    title: 'Sharps and Flats',
    content: [
      {
        type: 'paragraph',
        text: "As we noticed in Lesson 1, there are only seven alphabet letter names\u2014but there are twelve notes. We also have names for the notes between the <strong>natural</strong> notes. We use the words <strong>sharp</strong> and <strong>flat</strong> (and their corresponding symbols <strong>\u266F</strong> and <strong>\u266D</strong>) to name the notes that are in between the alphabet names. For example, there is a note between C and D (if you are familiar with a piano keyboard, it's one of the black keys). We call that C sharp (C\u266F). We also call it D flat (D\u266D). Yep, it has two names. Right now, that probably seems confusing, but there is actually a good reason for it (that'll have to wait). When a note has two different names for the same pitch, we call them enharmonic notes. So, here are all twelve names\u2014the natural and the enharmonic:"
      },
      {
        type: 'notation',
        text: "A   A\u266F/B\u266D   B   C   C\u266F/D\u266D   D   D\u266F/E\u266D   E   F   F\u266F/G\u266D   G   G\u266F/A\u266D"
      },
      {
        type: 'piano',
        config: {
          octaves: 1,
          labels: 'all',
          title: 'Piano Keyboard \u2014 All 12 Notes'
        }
      }
    ]
  },
  {
    id: 'cq-3',
    number: 3,
    title: 'Octaves',
    content: [
      {
        type: 'paragraph',
        text: "We briefly mentioned in Lesson 1 about octaves. In real life, there are a couple of things you need to know about them."
      },
      {
        type: 'paragraph',
        text: "First, if you look at a piano keyboard, you will see that the keys are in a repeating pattern: seven white keys with five black keys interspersed within. They are the twelve tones we spoke of in Lesson 1. Each set of twelve tones on the piano keyboard is one octave. (A piano has more than seven octaves! The guitar has, at most, four.)"
      },
      {
        type: 'piano',
        config: {
          octaves: 2,
          labels: 'all',
          title: 'Two Octaves \u2014 Repeating Pattern'
        }
      },
      {
        type: 'paragraph',
        text: "Second, if you were to play the piano, you would see that each octave (as you move to the right) is higher in pitch than the one preceding it. In fact, in terms of frequency, it is exactly double. Again, to our ears, it just sounds 'higher'."
      },
      {
        type: 'paragraph',
        text: "We may be asked to play or sing in a different octave, \"Hey, can you play that down an octave?\". This simply means, \"Can you play that using lower pitches?\" The inverse would be true for 'up an octave'."
      }
    ]
  },
  {
    id: 'cq-4',
    number: 4,
    title: 'Intervals \u2014 Whole/Half Steps',
    content: [
      {
        type: 'paragraph',
        text: "When we talk about different notes, we are often interested in how far apart they are. This is referred to as an interval. There is much to know about intervals, but for our purposes at this point, we're going to focus on a very small part."
      },
      {
        type: 'paragraph',
        text: "We are going to talk about whole steps and half steps. The whole step is represented by a W. The half step is represented by an H (it is also referred to as a semitone). Let's look again at the list of all twelve tones:"
      },
      {
        type: 'notation',
        text: "A   A\u266F/B\u266D   B   C   C\u266F/D\u266D   D   D\u266F/E\u266D   E   F   F\u266F/G\u266D   G   G\u266F/A\u266D"
      },
      {
        type: 'paragraph',
        text: "The 'distance' between each of these notes is called a half step. So, from A to A\u266F is one half step (H). From A to B is a whole step (W)\u2014 i.e. two half steps makes a whole. From E to F is only a half step (H). From E to F\u266F is a whole step (W)."
      }
    ]
  },
  {
    id: 'cq-5',
    number: 5,
    title: 'The Major Scale Formula',
    content: [
      {
        type: 'paragraph',
        text: "Now that we know what an interval is, you might be wondering what it is used for. They actually have many purposes, but we will focus on using intervals to define a scale. A scale is a subset of the twelve notes used as the foundational pitches for melodies, harmonies, and chords."
      },
      {
        type: 'paragraph',
        text: "The idea is this: by picking a subset of notes, we limit the notes and chords that should be used and this makes for things that always sound good together. We'll see how this works as we continue through the lessons."
      },
      {
        type: 'paragraph',
        text: "What we are going to focus on is a collection of intervals that represent the major scale\u2014 i.e. a formula for making a major scale. You would likely recognize a major scale as the universally recognizable Do, Re, Mi, Fa, So, La, Ti, Do."
      },
      {
        type: 'paragraph',
        text: "The major scale follows this simple formula:"
      },
      {
        type: 'notation',
        text: "W   W   H   W   W   W   H"
      },
      {
        type: 'paragraph',
        text: "The W stands for a whole step. The H stands for a half step. Let's look again at the list of all twelve tones:"
      },
      {
        type: 'notation',
        text: "A   A\u266F/B\u266D   B   C   C\u266F/D\u266D   D   D\u266F/E\u266D   E   F   F\u266F/G\u266D   G   G\u266F/A\u266D"
      },
      {
        type: 'paragraph',
        text: "As before, the distance between adjacent notes is a half step. (See Lesson 4 for examples.)"
      },
      {
        type: 'paragraph',
        text: "So, how do we define the notes in a scale? First, you pick your starting point. Let's start with a C major scale. Let's use our twelve names (imagine it repeats itself forever) and our major scale formula to create the C major scale:"
      },
      {
        type: 'notation',
        text: "A   A\u266F/B\u266D   B   C   C\u266F/D\u266D   D   D\u266F/E\u266D   E   F   F\u266F/G\u266D   G   G\u266F/A\u266D\n                    W       W       H   W       W       W   H"
      },
      {
        type: 'paragraph',
        text: "Since this is the C major scale, we'll start on C. The formula says to go a whole step up for the next note (two half steps). That would be a D. Then, the formula says to go a whole step up again. That would be an E. Then, the formula says to go up a half step. That would be an F. If we go through to the end, it would look like this:"
      },
      {
        type: 'paragraph',
        text: "C <sup>+W</sup> D <sup>+W</sup> E <sup>+H</sup> F <sup>+W</sup> G <sup>+W</sup> A <sup>+W</sup> B <sup>+H</sup> C"
      },
      {
        type: 'paragraph',
        text: "So, there it is. The C major scale is:"
      },
      {
        type: 'notation',
        text: "C   D   E   F   G   A   B   C"
      },
      {
        type: 'paragraph',
        text: "This formula could be applied to any starting point. For example, here is the G major scale:"
      },
      {
        type: 'paragraph',
        text: "G <sup>+W</sup> A <sup>+W</sup> B <sup>+H</sup> C <sup>+W</sup> D <sup>+W</sup> E <sup>+W</sup> F\u266F <sup>+H</sup> G"
      },
      {
        type: 'paragraph',
        text: "The G major scale is:"
      },
      {
        type: 'notation',
        text: "G   A   B   C   D   E   F\u266F   G"
      }
    ]
  },
  {
    id: 'cq-6',
    number: 6,
    title: 'What Is a Key?',
    content: [
      {
        type: 'paragraph',
        text: "When we started Lesson 1, we said: You've probably heard people say things like \"It's in the key of G\" or \"It's in A.\" You may even have said things like that yourself. But, what exactly is a <strong>key</strong> and what does it mean to be in one and why do I care?"
      },
      {
        type: 'paragraph',
        text: "Finally, we are going to be able to answer that question. When we say we are in the key of C, we are saying that the notes and chords we play should all come from the C major scale. <em>(There are exceptions, but that's a story for another day.)</em>"
      },
      {
        type: 'paragraph',
        text: "If we used our formula and determined that the D major scale is:"
      },
      {
        type: 'notation',
        text: "D   E   F\u266F   G   A   B   C\u266F   D"
      },
      {
        type: 'paragraph',
        text: "Then, when we say we are in the key of D, we are saying that the notes and chords we play should all come from notes of the D major scale."
      },
      {
        type: 'paragraph',
        text: "If we played an F\u266F while in the key of C, it would sound weird, off, bad. But, if we play an F\u266F in the key of D, it sounds normal, on, good."
      },
      {
        type: 'paragraph',
        text: "So, we know what all the notes are and we know how we might go about figuring out what subset of those notes are in a key. We could do this for every one of the twelve notes. But, surely someone has done all this work for us, right? Figured out all of the keys? Yes, and we can use a tool that has been around a long time to see them (the tool is good for many additional things, too). The name of this tool won't seem relevant for what we're doing, but it's a good name\u2014 you'll just have to trust me. This tool is called the <strong>Circle of Fifths</strong>. Here's what it looks like:"
      },
      {
        type: 'image',
        src: 'assets/svg/circle-of-fifths.svg',
        alt: 'Circle of Fifths Diagram Showing Major Keys',
        width: 500
      },
      {
        type: 'paragraph',
        text: "<strong>Wow</strong>\u2014that's kinda scary-looking. But, we will only use it for a few points. Without explaining these points (yet), let's just list some things that the Circle of Fifths is telling us. For now, we'll just trust they are true."
      },
      {
        type: 'list',
        items: [
          "Keys can be represented in a key signature (a shortcut way of defining which notes are sharp or flat\u2014 i.e. not natural)",
          "There are only 15 major key <em>names</em> total (12 unique pitch collections) (there are relative minor keys, too)",
          "There is only one major key that has no sharps or flats - C",
          "There are seven major keys that have sharps",
          "There are seven major keys that have flats"
        ]
      },
      {
        type: 'paragraph',
        text: "You might be thinking, \"there are only twelve notes, shouldn't there only be 12 keys?\" It's a good question. If you look again at the Circle of Fifths, you will notice that some of the keys have two, for example: C\u266F and D\u266D. We talked before about how the same pitch (the same key on the piano) might have two different names - they are enharmonic. Well, we also have enharmonic keys. Just as a note might sound the same, but we call it two different things, the key sounds the same to our ears, but we talk about it in two different ways. If we are in the key of D\u266D (one of the flat keys), we refer to the 6th as a B\u266Dm. However, if we are in the key of C\u266F (one of the sharp keys), we refer to the 6th as an A\u266Fm. They both have the same notes and they sound the same, but we name them according to the key."
      }
    ]
  },
  {
    id: 'cq-7',
    number: 7,
    title: 'Circle of Fifths \u2014 Sharps',
    content: [
      {
        type: 'image',
        src: 'assets/svg/circle-of-fifths.svg',
        alt: 'Circle of Fifths',
        width: 500
      },
      {
        type: 'paragraph',
        text: "At the top of the Circle of Fifths, we have the Key of C. This key is unique because it's the only one with no sharps and no flats. Around the right side of the circle, we have the keys that contain only sharps. <em>(No key will ever contain sharps <strong>and</strong> flats.)</em> If this were a clock, the sharps would go clockwise until about 7. When you go clockwise, you are jumping a fifth away - e.g. from C to G is a fifth. That's where the name comes from. <em>(This may not mean much to you, but it's a good bit of information just the same.)</em>"
      },
      {
        type: 'paragraph',
        text: "You may also notice you are adding a single sharp each time. C has 0, G has 1, D has 2, etc\u2026 Here is a little trick for reading a key signature with sharps and quickly determining what the key is. Whatever the rightmost sharp is in the key signature, just add a half step and that is your key. For example, the key signature for the key of G has 1 sharp - F\u266F. If we add a half-step to F\u266F, we are at G - the key of the song."
      },
      {
        type: 'paragraph',
        text: "If you take the time to figure it out, you'll notice that there are a few of the enharmonic names that don't get their own key. The names in bold have no associated major key:"
      },
      {
        type: 'paragraph',
        text: "A | <strong>A\u266F</strong>/B\u266D | B | C | C\u266F/D\u266D | D | <strong>D\u266F</strong>/E\u266D | E | F | F\u266F/G\u266D | G | <strong>G\u266F</strong>/A\u266D"
      },
      {
        type: 'paragraph',
        text: "The reason goes back to the Circle of Fifths. It has one key with no sharps or flats, seven keys that range from 1 to 7 sharps, and seven keys that range from 1 to 7 flats. These three just don't fit the pattern."
      }
    ]
  },
  {
    id: 'cq-8',
    number: 8,
    title: 'Circle of Fifths \u2014 Flats',
    content: [
      {
        type: 'image',
        src: 'assets/svg/circle-of-fifths.svg',
        alt: 'Circle of Fifths',
        width: 500
      },
      {
        type: 'paragraph',
        text: "Again, at the top of the Circle of Fifths, we have the Key of C. This key is unique because it's the only one with no sharps and no flats. Around the left side of the circle, we have the keys that contain only flats. <em>(No key will ever contain sharps <strong>and</strong> flats.)</em> If this were a clock, the flats would go counter-clockwise until about 5. When you go counter-clockwise, you are jumping a fourth away - e.g. from C to F is a fourth. <em>(This may not mean much to you, but it's a good bit of information just the same.)</em>"
      },
      {
        type: 'paragraph',
        text: "You may also notice you are adding a single flat each time. C has 0, F has 1, B\u266D has 2, etc\u2026 Here is a little trick for reading a key signature with flats and quickly determining what the key is. First, you just have to memorize: F (one flat) is the key of F. For the rest, whatever the second from the right (i.e. penultimate) flat is in the key signature, that is your key. For example, the key signature for the key of E\u266D has 3 flats - B\u266D, E\u266D, A\u266D. Just look at the next to last flat (E\u266D), that's the key of the song."
      },
      {
        type: 'paragraph',
        text: "Unlike the sharps, all of the enharmonic flats get their own key. It's not favoritism, they just happen to fit the pattern."
      },
      {
        type: 'paragraph',
        text: "So, we know how to name the natural notes and the sharps and flats (even as enharmonics). We also know how to construct a major scale from the notes using the major scale formula. And, we know that the notes of a major scale define the notes and chords of a key. That's a lot of information, but it is foundational for everything we will be doing with chord qualities."
      }
    ]
  }
];
