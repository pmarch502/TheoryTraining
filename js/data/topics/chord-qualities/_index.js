/**
 * Chord Qualities topic metadata.
 * Phases are loaded lazily — lesson data imported on demand.
 */
export const chordQualities = {
  id: 'chord-qualities',
  title: 'Chord Qualities',
  description: 'Learn how chords are built — from basic notes and scales through triads, seventh chords, extended harmony, and added tone chords.',
  phases: [
    {
      id: 'phase1',
      title: 'Phase 1: Foundation',
      subtitle: 'Notes, intervals, scales, and keys',
      dataModule: './phase1.js',
      lessons: [
        { id: 'cq-1',  number: 1,  title: 'Notes A-G' },
        { id: 'cq-2',  number: 2,  title: 'Sharps and Flats' },
        { id: 'cq-3',  number: 3,  title: 'Octaves' },
        { id: 'cq-4',  number: 4,  title: 'Intervals — Whole/Half Steps' },
        { id: 'cq-5',  number: 5,  title: 'The Major Scale Formula' },
        { id: 'cq-6',  number: 6,  title: 'What Is a Key?' },
        { id: 'cq-7',  number: 7,  title: 'Circle of Fifths — Sharps' },
        { id: 'cq-8',  number: 8,  title: 'Circle of Fifths — Flats' },
      ]
    },
    {
      id: 'phase2',
      title: 'Phase 2: Triads',
      subtitle: 'Major, minor, diminished, augmented, and suspended chords',
      dataModule: './phase2.js',
      lessons: [
        { id: 'cq-9',  number: 9,  title: 'What Is a Chord?' },
        { id: 'cq-10', number: 10, title: 'Major Triad' },
        { id: 'cq-11', number: 11, title: 'Minor Triad' },
        { id: 'cq-12', number: 12, title: 'Diminished Triad' },
        { id: 'cq-13', number: 13, title: 'Scale Degree Triads' },
        { id: 'cq-14', number: 14, title: 'Augmented Triad' },
        { id: 'cq-15', number: 15, title: 'Suspended 4 Chord' },
        { id: 'cq-16', number: 16, title: 'Suspended 2 Chord' },
      ]
    },
    {
      id: 'phase3',
      title: 'Phase 3: Seventh Chords',
      subtitle: 'Major, dominant, minor, and diminished sevenths',
      dataModule: './phase3.js',
      lessons: [
        { id: 'cq-17', number: 17, title: 'What Is a Seventh?' },
        { id: 'cq-18', number: 18, title: 'Major Seventh' },
        { id: 'cq-19', number: 19, title: 'Dominant Seventh' },
        { id: 'cq-20', number: 20, title: 'Minor Seventh' },
        { id: 'cq-21', number: 21, title: 'Half-Diminished Seventh' },
        { id: 'cq-22', number: 22, title: 'The Sevenths in a Key' },
        { id: 'cq-23', number: 23, title: 'Diminished Seventh' },
        { id: 'cq-24', number: 24, title: 'Minor-Major Seventh' },
      ]
    },
    {
      id: 'phase4',
      title: 'Phase 4: Ninth Chords',
      subtitle: 'Major, dominant, and minor ninths',
      dataModule: './phase4.js',
      lessons: [
        { id: 'cq-25', number: 25, title: 'What Is a Ninth?' },
        { id: 'cq-26', number: 26, title: 'Major Ninth' },
        { id: 'cq-27', number: 27, title: 'Dominant Ninth' },
        { id: 'cq-28', number: 28, title: 'Minor Ninth' },
      ]
    },
    {
      id: 'phase5',
      title: 'Phase 5: Eleventh Chords',
      subtitle: 'Major, dominant, and minor elevenths',
      dataModule: './phase5.js',
      lessons: [
        { id: 'cq-29', number: 29, title: 'What Is an Eleventh?' },
        { id: 'cq-30', number: 30, title: 'Major Eleventh' },
        { id: 'cq-31', number: 31, title: 'Dominant Eleventh' },
        { id: 'cq-32', number: 32, title: 'Minor Eleventh' },
      ]
    },
    {
      id: 'phase6',
      title: 'Phase 6: Thirteenth Chords',
      subtitle: 'Major, dominant, and minor thirteenths',
      dataModule: './phase6.js',
      lessons: [
        { id: 'cq-33', number: 33, title: 'What Is a Thirteenth?' },
        { id: 'cq-34', number: 34, title: 'Major Thirteenth' },
        { id: 'cq-35', number: 35, title: 'Dominant Thirteenth' },
        { id: 'cq-36', number: 36, title: 'Minor Thirteenth' },
      ]
    },
    {
      id: 'phase7',
      title: 'Phase 7: Added & Sixth Chords',
      subtitle: 'Add9, sixth, minor sixth, and six-nine',
      dataModule: './phase7.js',
      lessons: [
        { id: 'cq-37', number: 37, title: 'Added Ninth' },
        { id: 'cq-38', number: 38, title: 'Sixth' },
        { id: 'cq-39', number: 39, title: 'Minor Sixth' },
        { id: 'cq-40', number: 40, title: 'Six-Nine' },
      ]
    },
    {
      id: 'phase8',
      title: 'Phase 8: Altered Chords',
      subtitle: 'Altered fifths, ninths, and exotic dominant voicings',
      dataModule: './phase8.js',
      lessons: [
        { id: 'cq-41', number: 41, title: 'Augmented Seventh' },
        { id: 'cq-42', number: 42, title: 'Seven Flat Five' },
        { id: 'cq-43', number: 43, title: 'Seven Sharp Nine' },
        { id: 'cq-44', number: 44, title: 'Seven Flat Nine' },
        { id: 'cq-45', number: 45, title: 'Seven Flat Five Flat Nine' },
        { id: 'cq-46', number: 46, title: 'Seven Flat Five Sharp Nine' },
        { id: 'cq-47', number: 47, title: 'Seven Sharp Five Flat Nine' },
        { id: 'cq-48', number: 48, title: 'Seven Sharp Five Sharp Nine' },
        { id: 'cq-49', number: 49, title: 'Major Seven Sharp Eleventh' },
        { id: 'cq-50', number: 50, title: 'Seven Flat Thirteenth' },
        { id: 'cq-51', number: 51, title: 'Augmented Major Seventh' },
        { id: 'cq-52', number: 52, title: 'Altered Dominant' },
      ]
    },
    {
      id: 'finale',
      title: 'Final Words',
      subtitle: 'A closing thought on rules, creativity, and being you',
      dataModule: './finale.js',
      lessons: [
        { id: 'cq-53', number: 53, title: 'Final Words' },
      ]
    },
  ]
};
