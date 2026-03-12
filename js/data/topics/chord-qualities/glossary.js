/**
 * Central glossary of music theory terms.
 * Each key is a slug used for linking; value has title, def, category.
 */
export const glossary = {
  'augmented-fifth': {
    title: 'Augmented Fifth',
    def: 'Interval of eight half steps, creating an unstable, ambiguous sound (e.g., C to G♯).',
    category: 'interval'
  },
  'augmented-chord': {
    title: 'Augmented Chord',
    def: 'A triad with major third and augmented fifth (1-3-♯5), creating intense tension and ambiguity, often used for chromatic passing or dramatic effect.',
    category: 'chord'
  },
  'dominant-eleventh-chord': {
    title: 'Dominant Eleventh Chord',
    def: 'Eleventh chord with major third, perfect fifth, minor seventh, major ninth, perfect eleventh (1-3-5-♭7-9-11), funky and tense, common in jazz/funk.',
    category: 'chord'
  },
  'dominant-ninth-chord': {
    title: 'Dominant Ninth Chord',
    def: 'Ninth chord with major third, perfect fifth, minor seventh, major ninth (1-3-5-♭7-9), bluesy tension leading to resolution (e.g., C9: C-E-G-B♭-D).',
    category: 'chord'
  },
  'dominant-seventh-chord': {
    title: 'Dominant Seventh Chord',
    def: 'Seventh chord with major third, perfect fifth, minor seventh (1-3-5-♭7), strongly tense and resolving, the V7 in major keys (e.g., G7: G-B-D-F).',
    category: 'chord'
  },
  'dominant-thirteenth-chord': {
    title: 'Dominant Thirteenth Chord',
    def: 'A thirteenth chord with major third, perfect fifth, minor seventh, major ninth, perfect eleventh, and major thirteenth (1-3-5-♭7-9-11-13), creating elegance, tension-release potential, and harmonic fullness.',
    category: 'chord'
  },
  'chord': {
    title: 'Chord',
    def: 'The simultaneous sounding of three or more distinct pitches (notes), typically arranged in stacked intervals (most commonly thirds), forming a harmonic unit that provides vertical structure and support within a musical composition.',
    category: 'chord'
  },
  'major-eleventh-chord': {
    title: 'Major Eleventh Chord',
    def: 'Eleventh chord with major third, perfect fifth, major seventh, major ninth, perfect eleventh (1-3-5-7-9-11), open and suspended, lush extensions.',
    category: 'chord'
  },
  'major-ninth-chord': {
    title: 'Major Ninth Chord',
    def: 'Ninth chord with major third, perfect fifth, major seventh, major ninth (1-3-5-7-9), rich and spacious, dreamy color (e.g., Cmaj9: C-E-G-B-D).',
    category: 'chord'
  },
  'major-seventh-chord': {
    title: 'Major Seventh Chord',
    def: 'Seventh chord with major third, perfect fifth, major seventh (1-3-5-7), bright and expansive tension, stable yet floating (e.g., Cmaj7: C-E-G-B).',
    category: 'chord'
  },
  'major-thirteenth-chord': {
    title: 'Major Thirteenth Chord',
    def: 'Thirteenth chord with major third, perfect fifth, major seventh, major ninth, perfect eleventh, major thirteenth (1-3-5-7-9-11-13), warm/lush/gospel fullness (e.g., Cmaj13: C-E-G-B-D-F-A).',
    category: 'chord'
  },
  'major-chord': {
    title: 'Major Chord',
    def: 'Triad with major third and perfect fifth (1-3-5), bright/happy/stable, foundation of major keys and pop/worship (e.g., C: C-E-G).',
    category: 'chord'
  },
  'circle-of-fifths-flats': {
    title: 'Circle of Fifths — Flats',
    def: 'Clockwise progression of keys adding flats (F, B♭, E♭, A♭, D♭, G♭, C♭), aiding key relationships, modulation, and chord progressions in flat-heavy music.',
    category: 'scale-key'
  },
  'circle-of-fifths-sharps': {
    title: 'Circle of Fifths — Sharps',
    def: 'Counter-clockwise progression of keys adding sharps (G, D, A, E, B, F♯, C♯), showing key relationships and facilitating modulation/transposition.',
    category: 'scale-key'
  },
  'diminished-seventh-chord': {
    title: 'Diminished Seventh Chord',
    def: 'A seventh chord with diminished third, diminished fifth, and diminished seventh (1-♭3-♭5-♭♭7), highly tense/symmetrical, used for leading tones.',
    category: 'chord'
  },
  'diminished-chord': {
    title: 'Diminished Chord',
    def: 'A triad with minor third and diminished fifth (1-♭3-♭5), tense and unstable, often leading to resolution.',
    category: 'chord'
  },
  'half-diminished-seventh-chord': {
    title: 'Half-Diminished Seventh Chord',
    def: 'Seventh chord with minor third, diminished fifth, minor seventh (1-♭3-♭5-♭7), moody/tensive, common in iiø7 in major keys.',
    category: 'chord'
  },
  'minor-eleventh-chord': {
    title: 'Minor Eleventh Chord',
    def: 'Eleventh chord with minor third, perfect fifth, minor seventh, major ninth, perfect eleventh (1-♭3-5-♭7-9-11), atmospheric and tense.',
    category: 'chord'
  },
  'minor-major-seventh-chord': {
    title: 'Minor Major Seventh Chord',
    def: 'Seventh chord with minor third, perfect fifth, major seventh (1-♭3-5-7), bittersweet/melancholic, rare but expressive.',
    category: 'chord'
  },
  'minor-ninth-chord': {
    title: 'Minor Ninth Chord',
    def: 'Ninth chord with minor third, perfect fifth, minor seventh, major ninth (1-♭3-5-♭7-9), melancholic and smooth (e.g., Cm9: C-E♭-G-B♭-D).',
    category: 'chord'
  },
  'minor-seventh-chord': {
    title: 'Minor Seventh Chord',
    def: 'Seventh chord with minor third, perfect fifth, minor seventh (1-♭3-5-♭7), smooth/melancholic/jazzy, ii7/V7alt (e.g., Cm7: C-E♭-G-B♭).',
    category: 'chord'
  },
  'minor-thirteenth-chord': {
    title: 'Minor Thirteenth Chord',
    def: 'Thirteenth chord with minor third, perfect fifth, minor seventh, major ninth, perfect eleventh, major thirteenth (1-♭3-5-♭7-9-11-13), velvety/atmospheric/cinematic (e.g., Cm13: C-E♭-G-B♭-D-F-A).',
    category: 'chord'
  },
  'minor-chord': {
    title: 'Minor Chord',
    def: 'Triad with minor third and perfect fifth (1-♭3-5), sad/introspective, foundation for minor keys.',
    category: 'chord'
  },
  'eleventh': {
    title: 'Eleventh',
    def: 'A compound interval (exceeding one octave) of seventeen or eighteen half steps (perfect or augmented eleventh) above the root, adding a more suspended and tense character to a triad when included in an eleventh chord.',
    category: 'interval'
  },
  'flat': {
    title: 'Flat',
    def: 'Symbol (♭) lowering a note by one half step (semitone), used to alter pitch in scales, keys, and chords for expressive or modal purposes.',
    category: 'note-pitch'
  },
  'harmony': {
    title: 'Harmony',
    def: 'The simultaneous combination of tones, particularly the use of chords and their progression, to create a structured and pleasing vertical aspect of music.',
    category: 'other'
  },
  'interval': {
    title: 'Interval',
    def: 'The distance in pitch between two notes. This distance is measured both quantitatively (by the number of scale steps or semitones) and qualitatively (by the specific sound or character of the interval).',
    category: 'interval'
  },
  'key': {
    title: 'Key',
    def: 'Refers to the tonal center or scale upon which a musical composition is primarily based. It establishes the tonic (the central note) and defines the set of pitches, intervals, and chords that predominate in the piece, providing a sense of hierarchy, resolution, and harmonic framework.',
    category: 'scale-key'
  },
  'major-ninth': {
    title: 'Major Ninth',
    def: 'Interval of fourteen half steps (octave + major second), creating a rich, spacious, and often dreamy or ethereal timbre (e.g., C to D).',
    category: 'interval'
  },
  'major-seventh': {
    title: 'Major Seventh',
    def: 'Interval of eleven half steps (major third + perfect fifth), creating a bright, expansive tension (e.g., C to B).',
    category: 'interval'
  },
  'major-third': {
    title: 'Major Third',
    def: 'Interval of four half steps (two whole steps), producing a bright, open sound (e.g., C to E).',
    category: 'interval'
  },
  'major-thirteenth': {
    title: 'Major Thirteenth',
    def: 'Interval of twenty-one half steps (octave + major sixth), creating a consonant, warm, and open sound (e.g., C to A).',
    category: 'interval'
  },
  'minor-seventh': {
    title: 'Minor Seventh',
    def: 'Interval of ten half steps (perfect fifth + minor third), offering smooth, melancholic resolution (e.g., D to C).',
    category: 'interval'
  },
  'minor-third': {
    title: 'Minor Third',
    def: 'Interval of three half steps (one whole and one half), producing a somber, narrow sound (e.g., A to C).',
    category: 'interval'
  },
  'ninth': {
    title: 'Ninth',
    def: 'A compound interval (exceeding one octave) of thirteen or fourteen half steps (minor or major ninth) above the root, adding a more spacious and less immediately dissonant character to a triad when included in a ninth chord.',
    category: 'interval'
  },
  'note': {
    title: 'Note',
    def: 'A fundamental unit representing a single musical sound with specific characteristics. It encompasses both the acoustic properties of the sound and its symbolic representation in notation.',
    category: 'note-pitch'
  },
  'octave': {
    title: 'Octave',
    def: 'The interval between two pitches where the higher pitch has exactly twice the frequency of the lower pitch, resulting in notes that share the same letter name (e.g., C to the next C) but differ in register.',
    category: 'interval'
  },
  'perfect-eleventh': {
    title: 'Perfect Eleventh',
    def: 'Interval of one octave + five half steps with a numeric size of an eleventh, classified as perfect due to its consonant, stable, and acoustically pure quality.',
    category: 'interval'
  },
  'perfect-fifth': {
    title: 'Perfect Fifth',
    def: 'Interval of seven half steps, providing stability and consonance (e.g., C to G).',
    category: 'interval'
  },
  'perfect-fourth': {
    title: 'Perfect Fourth',
    def: 'Interval of five half steps with a numeric size of a fourth, classified as perfect due to its consonant, stable, and acoustically pure quality.',
    category: 'interval'
  },
  'pitch': {
    title: 'Pitch',
    def: 'The perceived highness or lowness of a musical sound, primarily determined by the frequency of its sound wave vibrations.',
    category: 'note-pitch'
  },
  'root': {
    title: 'Root',
    def: 'The foundational note of a chord upon which the other notes are built, defining the chord\'s name and function; typically the lowest note in root position.',
    category: 'other'
  },
  'scale': {
    title: 'Scale',
    def: 'An ordered sequence of notes, typically spanning an octave, arranged in ascending or descending order according to a specific pattern of intervals. It serves as the foundational pitch collection for melodies, harmonies, and improvisation.',
    category: 'scale-key'
  },
  'sharp': {
    title: 'Sharp',
    def: 'Symbol (♯) raising a note by one half step (semitone), used to alter pitch in scales, keys, and chords.',
    category: 'note-pitch'
  },
  'suspended-2-chord': {
    title: 'Suspended 2 Chord',
    def: 'Triad replacing third with major second (1-2-5), open/ambiguous, common in worship for uplift.',
    category: 'chord'
  },
  'suspended-4-chord': {
    title: 'Suspended 4 Chord',
    def: 'Triad replacing third with perfect fourth (1-4-5), suspended tension, resolves to major/minor.',
    category: 'chord'
  },
  'seventh': {
    title: 'Seventh',
    def: 'An interval of ten or eleven half steps (minor or major seventh) above the root, adding tension, color, and extension to a triad when included in a seventh chord.',
    category: 'interval'
  },
  'tetrad': {
    title: 'Tetrad',
    def: 'A four-note chord consisting of a root, third, fifth, and seventh.',
    category: 'chord'
  },
  'third': {
    title: 'Third',
    def: 'An interval of three or four half steps (minor or major third) spanning the first, second, and third scale degrees or equivalent.',
    category: 'interval'
  },
  'triad': {
    title: 'Triad',
    def: 'A three-note chord consisting of a root, third, and fifth, forming the basic building block of harmony.',
    category: 'chord'
  },
  'augmented-eleventh': {
    title: 'Augmented Eleventh',
    def: 'Interval of 18 half steps (octave + augmented fourth), extreme compound dissonance (e.g., C to F♯).',
    category: 'interval'
  },
  'augmented-fourth': {
    title: 'Augmented Fourth',
    def: 'Interval of 6 half steps, dissonant tension (also called tritone; e.g., C to F♯).',
    category: 'interval'
  },
  'augmented-unison': {
    title: 'Augmented Unison',
    def: 'Interval of 1 half step, dissonant near-unison clash (e.g., C to C♯).',
    category: 'interval'
  },
  'compound-tritone': {
    title: 'Compound Tritone',
    def: 'Interval of 18 half steps (octave + tritone), amplified instability (e.g., C to F♯).',
    category: 'interval'
  },
  'diminished-fifth': {
    title: 'Diminished Fifth',
    def: 'Interval of 6 half steps, highly dissonant (equiv. to tritone or A4; e.g., C to G♭).',
    category: 'interval'
  },
  'diminished-twelfth': {
    title: 'Diminished Twelfth',
    def: 'Interval of 18 half steps (octave + diminished fifth), compound ambiguity (e.g., C to G♭).',
    category: 'interval'
  },
  'major-fourteenth': {
    title: 'Major Fourteenth',
    def: 'Interval of 23 half steps (octave + major seventh), expansive compound tension (e.g., C to B).',
    category: 'interval'
  },
  'major-second': {
    title: 'Major Second',
    def: 'Interval of 2 half steps (whole step), smooth stepwise connection (e.g., C to D).',
    category: 'interval'
  },
  'major-sixth': {
    title: 'Major Sixth',
    def: 'Interval of 9 half steps, sweet consonance (e.g., C to A).',
    category: 'interval'
  },
  'major-tenth': {
    title: 'Major Tenth',
    def: 'Interval of 16 half steps (octave + major third), bright compound major third (e.g., C to E).',
    category: 'interval'
  },
  'minor-fourteenth': {
    title: 'Minor Fourteenth',
    def: 'Interval of 22 half steps (octave + minor seventh), deep melancholic smoothness (e.g., C to B♭).',
    category: 'interval'
  },
  'minor-ninth': {
    title: 'Minor Ninth',
    def: 'Interval of 13 half steps (octave + minor second), tense compound crunch (e.g., C to D♭).',
    category: 'interval'
  },
  'minor-second': {
    title: 'Minor Second',
    def: 'Interval of 1 half step, sharp dissonant tension (e.g., C to D♭).',
    category: 'interval'
  },
  'minor-sixth': {
    title: 'Minor Sixth',
    def: 'Interval of 8 half steps, warm melancholic consonance (e.g., C to A♭).',
    category: 'interval'
  },
  'minor-tenth': {
    title: 'Minor Tenth',
    def: 'Interval of 15 half steps (octave + minor third), somber compound minor third (e.g., C to E♭).',
    category: 'interval'
  },
  'minor-thirteenth': {
    title: 'Minor Thirteenth',
    def: 'Interval of 20 half steps (octave + minor sixth), lush atmospheric depth (e.g., C to A♭).',
    category: 'interval'
  },
  'perfect-fifteenth': {
    title: 'Perfect Fifteenth',
    def: 'Interval of 24 half steps (two perfect octaves), total registral consonance (e.g., C to C).',
    category: 'interval'
  },
  'perfect-octave': {
    title: 'Perfect Octave',
    def: 'Interval of 12 half steps (frequency doubled), perfect unity across registers (e.g., C to next C).',
    category: 'interval'
  },
  'perfect-twelfth': {
    title: 'Perfect Twelfth',
    def: 'Interval of 19 half steps (octave + perfect fifth), strong compound power (e.g., C to G).',
    category: 'interval'
  },
  'perfect-unison': {
    title: 'Perfect Unison',
    def: 'Interval of 0 semitones, identical pitches in perfect consonance (e.g., C to C).',
    category: 'interval'
  },
  'tritone': {
    title: 'Tritone',
    def: 'Interval of 6 half steps, the most dissonant simple interval (equiv. A4/D5; e.g., C to F♯).',
    category: 'interval'
  },
  'altered-dominant-chord': {
    title: 'Altered Dominant Chord',
    def: 'Dominant seventh (1-3-♭7) with altered extensions (♭9, ♯9, ♯11, ♭5, ♯5, ♭13), maximum tension for resolution, jazz/superlocrian (e.g., C7alt).',
    category: 'chord'
  },
  'augmented-major-seventh-chord': {
    title: 'Augmented Major Seventh Chord',
    def: 'Major seventh with augmented fifth (1-3-♯5-7), shimmering ambiguity, chromatic color (e.g., Cmaj7♯5: C-E-G♯-B).',
    category: 'chord'
  },
  'augmented-seventh-chord': {
    title: 'Augmented Seventh Chord',
    def: 'Dominant seventh with augmented fifth (1-3-♯5-♭7), intense symmetric tension (e.g., Caug7: C-E-G♯-B♭).',
    category: 'chord'
  },
  'flat-thirteenth-chord': {
    title: 'Flat Thirteenth Chord',
    def: 'Dominant thirteenth with flat thirteenth (1-3-5-♭7-9-11-♭13), exotic dissonant tension (e.g., C13♭13: C-E-G-B♭-D-F-A♭).',
    category: 'chord'
  },
  'minor-sixth-chord': {
    title: 'Minor Sixth Chord',
    def: 'Minor triad with added major sixth (1-♭3-5-6), melancholic warmth, common in bossa/latin (e.g., Cm6: C-E♭-G-A).',
    category: 'chord'
  },
  'seven-flat-five-chord': {
    title: 'Seven Flat Five Chord',
    def: 'Dominant seventh with diminished fifth (1-3-♭5-♭7), tritone-heavy ambiguity, whole-tone scale (e.g., C7♭5: C-E-G♭-B♭).',
    category: 'chord'
  },
  'seven-flat-five-flat-nine-chord': {
    title: 'Seven Flat Five Flat Nine Chord',
    def: 'Dominant seventh ♭5 ♭9 (1-3-♭5-♭7-♭9), dark altered depth (e.g., C7♭5♭9: C-E-G♭-B♭-D♭).',
    category: 'chord'
  },
  'seven-flat-five-sharp-nine-chord': {
    title: 'Seven Flat Five Sharp Nine Chord',
    def: 'Dominant seventh ♭5 ♯9 (1-3-♭5-♭7-♯9), gritty altered dissonance (e.g., C7♭5♯9: C-E-G♭-B♭-D♯).',
    category: 'chord'
  },
  'seven-flat-nine-chord': {
    title: 'Seven Flat Nine Chord',
    def: 'Dominant ninth with flat ninth (1-3-5-♭7-♭9), tense smooth jazz tension (e.g., C7♭9: C-E-G-B♭-D♭).',
    category: 'chord'
  },
  'seven-sharp-five-chord': {
    title: 'Seven Sharp Five Chord',
    def: 'Dominant seventh with augmented fifth (1-3-♯5-♭7), golden lydian tension (e.g., C7♯5: C-E-G♯-B♭).',
    category: 'chord'
  },
  'seven-sharp-five-flat-nine-chord': {
    title: 'Seven Sharp Five Flat Nine Chord',
    def: 'Dominant seventh ♯5 ♭9 (1-3-♯5-♭7-♭9), bright-dark clash (e.g., C7♯5♭9: C-E-G♯-B♭-D♭).',
    category: 'chord'
  },
  'seven-sharp-five-sharp-nine-chord': {
    title: 'Seven Sharp Five Sharp Nine Chord',
    def: 'Dominant seventh ♯5 ♯9 (1-3-♯5-♭7-♯9), explosive tension (e.g., C7♯5♯9: C-E-G♯-B♭-D♯).',
    category: 'chord'
  },
  'seven-sharp-nine-chord': {
    title: 'Seven Sharp Nine Chord',
    def: 'Dominant ninth with sharp ninth (1-3-5-♭7-♯9), Hendrix blues crunch (e.g., C7♯9: C-E-G-B♭-D♯).',
    category: 'chord'
  },
  'sharp-eleventh-chord': {
    title: 'Sharp Eleventh Chord',
    def: 'Dominant eleventh with sharp eleventh (♯11 instead of 11), lydian dominant sparkle (e.g., C9♯11: C-E-G-B♭-D-F♯-G).',
    category: 'chord'
  },
  'sixth-chord': {
    title: 'Sixth Chord',
    def: 'Major triad with added major sixth (1-3-5-6), sweet vocal color (e.g., C6: C-E-G-A).',
    category: 'chord'
  },
  'six-nine-chord': {
    title: 'Six-Nine Chord',
    def: 'Major sixth chord with added major ninth (1-3-6-9; 5 optional), lush jazzy gospel smoothness (e.g., C6/9: C-E-A-D).',
    category: 'chord'
  },
  'half-step': {
    title: 'Half Step',
    def: 'The smallest interval in standard Western music, equal to one semitone — the distance from one key to the very next key on a piano (e.g., C to C♯, or E to F).',
    category: 'interval'
  },
  'whole-step': {
    title: 'Whole Step',
    def: 'An interval of two half steps (two semitones), equivalent to one tone (e.g., C to D, or E to F♯).',
    category: 'interval'
  },
  'major-scale': {
    title: 'Major Scale',
    def: 'A seven-note scale following the interval pattern W-W-H-W-W-W-H (whole, whole, half, whole, whole, whole, half), producing the familiar bright, resolved sound of "do-re-mi."',
    category: 'scale-key'
  },
  'circle-of-fifths': {
    title: 'Circle of Fifths',
    def: 'A visual diagram arranging all twelve keys in a circle by ascending perfect fifths (clockwise for sharps, counter-clockwise for flats), revealing key signature relationships and aiding transposition.',
    category: 'scale-key'
  },
  'scale-degree': {
    title: 'Scale Degree',
    def: 'A number (1–7) indicating a note\'s position within a scale, used to describe chord construction and harmonic function relative to the key.',
    category: 'scale-key'
  },
  'thirteenth': {
    title: 'Thirteenth',
    def: 'A compound interval (exceeding one octave) of twenty or twenty-one half steps (minor or major thirteenth) above the root, adding the widest extension to a chord.',
    category: 'interval'
  }
};

/**
 * Category display labels.
 */
export const categoryLabels = {
  'interval': 'Interval',
  'chord': 'Chord',
  'scale-key': 'Scale / Key',
  'note-pitch': 'Note / Pitch',
  'other': 'General'
};
