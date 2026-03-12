/**
 * Centralized app state and progress tracking via localStorage.
 */
const STORAGE_KEY = 'theorytraining_progress';

class State {
  constructor() {
    this._data = this._load();
    this.currentRoute = null;
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to load progress:', e);
    }
    return { version: 1, lessons: {} };
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }

  /** Mark a lesson as visited. */
  markVisited(lessonId) {
    if (!this._data.lessons[lessonId]) {
      this._data.lessons[lessonId] = {};
    }
    this._data.lessons[lessonId].visited = true;
    this._data.lessons[lessonId].lastVisit = new Date().toISOString();
    this._save();
  }

  /** Mark a lesson as completed. */
  markCompleted(lessonId) {
    if (!this._data.lessons[lessonId]) {
      this._data.lessons[lessonId] = {};
    }
    this._data.lessons[lessonId].completed = true;
    this._save();
  }

  /** Toggle a lesson's completed state; returns new state. */
  toggleCompleted(lessonId) {
    if (!this._data.lessons[lessonId]) {
      this._data.lessons[lessonId] = {};
    }
    const next = !this._data.lessons[lessonId].completed;
    this._data.lessons[lessonId].completed = next;
    this._save();
    return next;
  }

  /** Check if a lesson has been visited. */
  isVisited(lessonId) {
    return !!this._data.lessons[lessonId]?.visited;
  }

  /** Check if a lesson has been completed. */
  isCompleted(lessonId) {
    return !!this._data.lessons[lessonId]?.completed;
  }

  /** Get progress summary for a topic. */
  getTopicProgress(topicIndex) {
    let total = 0;
    let completed = 0;
    for (const phase of topicIndex.phases) {
      for (const lesson of phase.lessons) {
        total++;
        if (this.isCompleted(lesson.id)) completed++;
      }
    }
    return { total, completed, percent: total ? Math.round((completed / total) * 100) : 0 };
  }

  /** Get array of all completed lesson IDs. */
  getCompletedIds() {
    const ids = [];
    for (const [id, data] of Object.entries(this._data.lessons)) {
      if (data.completed) ids.push(id);
    }
    return ids;
  }

  /** Export all progress data (for future sync). */
  exportData() {
    return JSON.stringify(this._data);
  }

  /** Import progress data (for future sync). */
  importData(json) {
    try {
      this._data = JSON.parse(json);
      this._save();
    } catch (e) {
      console.error('Failed to import progress:', e);
    }
  }
}

export const state = new State();
