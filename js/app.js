import { Router } from './router.js';
import { state } from './state.js';
import { chordQualities } from './data/topics/chord-qualities/_index.js';
import { rhythm } from './data/topics/rhythm/_index.js';
import { renderSidebar, initSidebarToggle } from './components/sidebar.js';
import { renderLesson } from './components/lesson-viewer.js';
import { initGlossaryPopup } from './components/glossary-popup.js';
import { glossary, categoryLabels } from './data/topics/chord-qualities/glossary.js';
import { renderQuizPageHTML, hydrateAggregateQuiz } from './components/quiz.js';

// Topic registry — add new topics here
const topics = {
  'chord-qualities': chordQualities,
  'rhythm': rhythm
};

const allTopics = Object.values(topics);

// Cache for loaded phase data
const phaseCache = {};

/**
 * Dynamically load phase lesson data.
 */
async function loadPhaseData(topicId, phaseId) {
  const key = `${topicId}/${phaseId}`;
  if (phaseCache[key]) return phaseCache[key];

  const topic = topics[topicId];
  if (!topic) return null;

  const phase = topic.phases.find(p => p.id === phaseId);
  if (!phase) return null;

  try {
    const module = await import(`./data/topics/${topicId}/${phaseId}.js`);
    phaseCache[key] = module[phaseId];
    return module[phaseId];
  } catch (e) {
    console.error(`Failed to load phase data: ${key}`, e);
    return null;
  }
}

/**
 * Find which phase a lesson belongs to.
 */
function findLessonPhase(topicIndex, lessonId) {
  for (const phase of topicIndex.phases) {
    if (phase.lessons.some(l => l.id === lessonId)) {
      return phase;
    }
  }
  return null;
}

/** Get progress for a single phase. */
function getPhaseProgress(phase) {
  let total = 0, completed = 0;
  for (const lesson of phase.lessons) {
    total++;
    if (state.isCompleted(lesson.id)) completed++;
  }
  return { total, completed, percent: total ? Math.round((completed / total) * 100) : 0 };
}

// ─── Page renderers ───────────────────────────────────────────

function renderHome() {
  const main = document.getElementById('main-content');

  let html = `<div class="home-container">`;
  html += `<h2>Theory Training</h2>`;
  html += `<p class="subtitle">Music theory for worship teams — learn at your own pace.</p>`;

  for (const topic of allTopics) {
    const progress = state.getTopicProgress(topic);
    const comingSoon = topic.comingSoon;
    html += `<a href="#/topic/${topic.id}" class="topic-card${comingSoon ? ' topic-card--coming-soon' : ''}">
      <h3>${topic.title}${comingSoon ? ' <span class="coming-soon-badge">Coming Soon</span>' : ''}</h3>
      <p>${topic.description}</p>
      <span class="topic-meta">${topic.phases.reduce((sum, p) => sum + p.lessons.length, 0)} lessons across ${topic.phases.length} phases</span>
      ${!comingSoon && progress.completed > 0 ? `<div class="progress-bar"><div class="progress-bar-fill" style="width:${progress.percent}%"></div></div>` : ''}
      ${!comingSoon ? `<button class="quiz-launch-btn" data-topic="${topic.id}">Quiz Yourself</button>` : ''}
    </a>`;
  }

  html += `</div>`;
  main.innerHTML = html;

  // Wire up quiz launch buttons inside topic cards (stop propagation so the <a> doesn't navigate)
  main.querySelectorAll('.quiz-launch-btn[data-topic]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      location.hash = `#/topic/${btn.dataset.topic}/quiz`;
    });
  });

  renderSidebar(allTopics, null);
}

function renderTopicOverview(topicId) {
  const topic = topics[topicId];
  if (!topic) { renderNotFound(); return; }

  const main = document.getElementById('main-content');
  let html = `<div class="topic-overview">`;
  html += `<h2>${topic.title}${topic.comingSoon ? ' <span class="coming-soon-badge">Coming Soon</span>' : ''}</h2>`;
  html += `<p class="topic-desc">${topic.description}</p>`;

  if (!topic.comingSoon) {
    html += `<div class="quiz-launch-wrap"><button class="quiz-launch-btn" data-topic="${topic.id}">Quiz Yourself</button></div>`;
  }

  for (const phase of topic.phases) {
    if (topic.comingSoon) {
      html += `<div class="phase-card phase-card--disabled">`;
      html += `<div class="phase-card-header"><h3>${phase.title}</h3></div>`;
      if (phase.subtitle) {
        html += `<p class="topic-desc">${phase.subtitle}</p>`;
      }
      html += `<div class="phase-lesson-list">`;
      for (const lesson of phase.lessons) {
        html += `<span class="phase-lesson-link phase-lesson-link--disabled">
          <span class="lesson-num">${lesson.number}.</span> ${lesson.title}
        </span>`;
      }
      html += `</div></div>`;
    } else {
      const phaseProgress = getPhaseProgress(phase);
      html += `<div class="phase-card">`;
      html += `<div class="phase-card-header"><h3>${phase.title}</h3>`;
      if (phaseProgress.completed > 0) {
        html += `<span class="phase-progress-label">${phaseProgress.completed}/${phaseProgress.total}</span>`;
      }
      html += `</div>`;
      if (phaseProgress.completed > 0) {
        html += `<div class="progress-bar"><div class="progress-bar-fill" style="width:${phaseProgress.percent}%"></div></div>`;
      }
      if (phase.subtitle) {
        html += `<p class="topic-desc">${phase.subtitle}</p>`;
      }
      html += `<div class="phase-lesson-list">`;
      for (const lesson of phase.lessons) {
        const done = state.isCompleted(lesson.id);
        html += `<a href="#/topic/${topicId}/${phase.id}/${lesson.id}" class="phase-lesson-link${done ? ' completed' : ''}">
          ${done ? '<span class="phase-check">\u2713</span>' : ''}<span class="lesson-num">${lesson.number}.</span> ${lesson.title}
        </a>`;
      }
      html += `</div></div>`;
    }
  }

  if (!topic.comingSoon) {
    html += `<div class="phase-card glossary-card">
      <h3><a href="#/glossary">Glossary</a></h3>
      <p class="topic-desc">Browse all terms and definitions for this module.</p>
    </div>`;
  }

  html += `</div>`;
  main.innerHTML = html;

  // Wire up quiz launch button on topic overview
  const quizBtn = main.querySelector('.quiz-launch-btn[data-topic]');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      location.hash = `#/topic/${quizBtn.dataset.topic}/quiz`;
    });
  }

  renderSidebar(allTopics, null);
}

function renderPhaseOverview(topicId, phaseId) {
  const topic = topics[topicId];
  if (!topic) { renderNotFound(); return; }

  const phase = topic.phases.find(p => p.id === phaseId);
  if (!phase) { renderNotFound(); return; }

  const main = document.getElementById('main-content');
  const phaseProgress = getPhaseProgress(phase);
  let html = `<div class="topic-overview">`;
  html += `<h2>${phase.title}</h2>`;
  if (phaseProgress.completed > 0) {
    html += `<div class="phase-progress-summary">${phaseProgress.completed} of ${phaseProgress.total} lessons complete</div>`;
    html += `<div class="progress-bar"><div class="progress-bar-fill" style="width:${phaseProgress.percent}%"></div></div>`;
  }
  if (phase.subtitle) {
    html += `<p class="topic-desc">${phase.subtitle}</p>`;
  }
  html += `<div class="phase-lesson-list">`;
  for (const lesson of phase.lessons) {
    const done = state.isCompleted(lesson.id);
    html += `<a href="#/topic/${topicId}/${phaseId}/${lesson.id}" class="phase-lesson-link${done ? ' completed' : ''}">
      ${done ? '<span class="phase-check">\u2713</span>' : ''}<span class="lesson-num">${lesson.number}.</span> ${lesson.title}
    </a>`;
  }
  html += `</div></div>`;
  main.innerHTML = html;
  renderSidebar(allTopics, null);
}

async function renderLessonPage(topicId, phaseId, lessonId) {
  const topic = topics[topicId];
  if (!topic) { renderNotFound(); return; }

  const lessons = await loadPhaseData(topicId, phaseId);
  if (!lessons) { renderNotFound(); return; }

  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) { renderNotFound(); return; }

  await renderLesson(lesson, topic, phaseId);
  renderSidebar(allTopics, lessonId);

  // Expose sidebar refresh so completion button can update checkmarks
  window.__refreshSidebar = () => renderSidebar(allTopics, lessonId);
}

function renderGlossaryPage() {
  const main = document.getElementById('main-content');

  const categories = ['all', ...Object.keys(categoryLabels)];
  const entries = Object.entries(glossary)
    .map(([slug, entry]) => ({ slug, ...entry }))
    .sort((a, b) => a.title.localeCompare(b.title));

  let html = `<div class="glossary-page">`;
  html += `<h2>Glossary</h2>`;
  html += `<p class="subtitle">${entries.length} terms across music theory fundamentals.</p>`;

  // Search
  html += `<label for="glossary-search" class="sr-only">Search glossary terms</label>`;
  html += `<input type="text" class="glossary-search" placeholder="Search terms\u2026" id="glossary-search">`;

  // Category filters
  html += `<div class="glossary-filters">`;
  for (const cat of categories) {
    const label = cat === 'all' ? 'All' : categoryLabels[cat];
    const pressed = cat === 'all' ? ' aria-pressed="true"' : ' aria-pressed="false"';
    html += `<button class="glossary-filter-btn${cat === 'all' ? ' active' : ''}" data-cat="${cat}"${pressed}>${label}</button>`;
  }
  html += `</div>`;

  // Term list
  html += `<div class="glossary-list" id="glossary-list">`;
  for (const entry of entries) {
    const catLabel = categoryLabels[entry.category] || entry.category;
    html += `<div class="glossary-entry" data-category="${entry.category}" data-title="${entry.title.toLowerCase()}">
      <div class="glossary-entry-header">
        <span class="glossary-entry-title">${entry.title}</span>
        <span class="glossary-entry-cat">${catLabel}</span>
      </div>
      <p class="glossary-entry-def">${entry.def}</p>
    </div>`;
  }
  html += `</div></div>`;

  main.innerHTML = html;

  // Filter + search interactivity
  const list = document.getElementById('glossary-list');
  const search = document.getElementById('glossary-search');
  let activeCategory = 'all';

  function filterEntries() {
    const query = search.value.toLowerCase().trim();
    const items = list.querySelectorAll('.glossary-entry');
    let visible = 0;

    for (const item of items) {
      const matchCat = activeCategory === 'all' || item.dataset.category === activeCategory;
      const matchSearch = !query || item.dataset.title.includes(query) || item.textContent.toLowerCase().includes(query);
      const show = matchCat && matchSearch;
      item.style.display = show ? '' : 'none';
      if (show) visible++;
    }

    // Show empty state
    let empty = list.querySelector('.glossary-empty');
    if (visible === 0) {
      if (!empty) {
        empty = document.createElement('p');
        empty.className = 'glossary-empty';
        empty.textContent = 'No matching terms found.';
        list.appendChild(empty);
      }
      empty.style.display = '';
    } else if (empty) {
      empty.style.display = 'none';
    }
  }

  search.addEventListener('input', filterEntries);

  main.querySelector('.glossary-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.glossary-filter-btn');
    if (!btn) return;
    main.querySelectorAll('.glossary-filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    activeCategory = btn.dataset.cat;
    filterEntries();
  });

  renderSidebar(allTopics, null);
  main.scrollTop = 0;
  window.scrollTo(0, 0);
}

function renderQuizPage(topicId) {
  const topic = topics[topicId];
  if (!topic) { renderNotFound(); return; }

  const main = document.getElementById('main-content');
  const completedIds = state.getCompletedIds();
  const hasQuestions = completedIds.length > 0;

  main.innerHTML = renderQuizPageHTML(topicId, hasQuestions);

  if (hasQuestions) {
    const container = main.querySelector('.quiz-aggregate-container');
    if (container) hydrateAggregateQuiz(container, completedIds, topicId);
  }

  renderSidebar(allTopics, null);
  main.scrollTop = 0;
  window.scrollTo(0, 0);
}

function renderNotFound() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="home-container">
    <h2>Page Not Found</h2>
    <p class="subtitle">The page you're looking for doesn't exist.</p>
    <a href="#/" class="topic-card"><h3>Go Home</h3></a>
  </div>`;
}

// ─── Boot ─────────────────────────────────────────────────────

const router = new Router();

router
  .on(/^#\/?$/, renderHome)
  .on(/^#\/glossary\/?$/, renderGlossaryPage)
  .on(/^#\/topic\/([^/]+)$/, renderTopicOverview)
  .on(/^#\/topic\/([^/]+)\/quiz\/?$/, renderQuizPage)
  .on(/^#\/topic\/([^/]+)\/([^/]+)$/, renderPhaseOverview)
  .on(/^#\/topic\/([^/]+)\/([^/]+)\/([^/]+)$/, renderLessonPage)
  .onNotFound(renderNotFound);

initSidebarToggle();
initGlossaryPopup();
router.resolve();
