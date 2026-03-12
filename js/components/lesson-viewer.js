import { state } from '../state.js';
import { linkGlossaryTerms } from './glossary-linker.js';
import { renderPianoHTML, hydratePianos } from './piano-keyboard.js';
import { renderGuitarHTML, hydrateGuitars } from './guitar-fretboard.js';

/**
 * Renders a lesson data object into the main content area.
 */
export function renderLesson(lesson, topicIndex, phaseId) {
  const main = document.getElementById('main-content');

  let html = `<article class="lesson-content">`;
  html += `<h1>Lesson ${lesson.number}: ${lesson.title}</h1>`;

  // Render content blocks
  for (const block of lesson.content) {
    html += renderBlock(block);
  }

  // Completion button
  const isComplete = state.isCompleted(lesson.id);
  html += `<div class="lesson-complete-wrap">
    <button class="lesson-complete-btn${isComplete ? ' completed' : ''}"
      data-lesson="${lesson.id}" aria-pressed="${isComplete}">
      <span class="check-icon">${isComplete ? '\u2713' : ''}</span>
      ${isComplete ? 'Completed' : 'Mark as Complete'}
    </button>
  </div>`;

  // Prev/next navigation
  html += renderLessonNav(lesson, topicIndex, phaseId);

  html += `</article>`;
  main.innerHTML = html;

  // Auto-link glossary terms in the rendered content
  const article = main.querySelector('.lesson-content');
  if (article) linkGlossaryTerms(article);

  // Hydrate interactive piano keyboards
  if (article) hydratePianos(article);

  // Hydrate interactive guitar chord diagrams
  if (article) hydrateGuitars(article);

  // Wire up completion button
  const completeBtn = main.querySelector('.lesson-complete-btn');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const nowComplete = state.toggleCompleted(lesson.id);
      completeBtn.classList.toggle('completed', nowComplete);
      completeBtn.setAttribute('aria-pressed', String(nowComplete));
      completeBtn.querySelector('.check-icon').textContent = nowComplete ? '\u2713' : '';
      completeBtn.childNodes[completeBtn.childNodes.length - 1].textContent =
        nowComplete ? ' Completed' : ' Mark as Complete';
      // Refresh sidebar to update checkmarks
      if (typeof window.__refreshSidebar === 'function') {
        window.__refreshSidebar();
      }
    });
  }

  // Mark lesson as visited
  state.markVisited(lesson.id);

  // Scroll to top
  main.scrollTop = 0;
  window.scrollTo(0, 0);
}

function renderBlock(block) {
  switch (block.type) {
    case 'paragraph':
      return `<p>${block.text}</p>`;

    case 'notation':
      return `<pre><code>${escapeHtml(block.text)}</code></pre>`;

    case 'list':
      return `<ul${block.className ? ` class="${block.className}"` : ''}>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;

    case 'image':
      return `<div class="lesson-image">
        <img src="${block.src}" alt="${block.alt}"${block.width ? ` width="${block.width}"` : ''} loading="lazy">
      </div>`;

    case 'piano':
      return renderPianoHTML(block.config);

    case 'guitar':
      return renderGuitarHTML(block.config);

    case 'divider':
      return `<hr class="lesson-divider">`;

    default:
      return '';
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Build prev/next navigation links.
 */
function renderLessonNav(lesson, topicIndex, phaseId) {
  // Build flat list of all lessons across phases
  const allLessons = [];
  for (const phase of topicIndex.phases) {
    for (const l of phase.lessons) {
      allLessons.push({ ...l, phaseId: phase.id });
    }
  }

  const currentIdx = allLessons.findIndex(l => l.id === lesson.id);
  const prev = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const next = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  let html = `<nav class="lesson-nav">`;

  if (prev) {
    html += `<a href="#/topic/${topicIndex.id}/${prev.phaseId}/${prev.id}">
      \u2190 ${prev.number}. ${prev.title}
    </a>`;
  } else {
    html += `<span></span>`;
  }

  if (next) {
    html += `<a href="#/topic/${topicIndex.id}/${next.phaseId}/${next.id}">
      ${next.number}. ${next.title} \u2192
    </a>`;
  } else {
    html += `<span></span>`;
  }

  html += `</nav>`;
  return html;
}
