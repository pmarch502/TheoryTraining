/**
 * Quiz UI component — renders questions and handles answer interactions.
 * Used by both per-lesson quizzes and the aggregate quiz page.
 */
import { generateLessonQuestion, generateRandomQuestion } from './quiz-generator.js';

// ─── Per-lesson rendering ──────────────────────────────────

/**
 * Render the collapsed quiz launch section for a lesson.
 */
export function renderQuizLaunchHTML() {
  return `<section class="quiz-section" aria-label="Quiz">
    <button class="quiz-launch-btn">Quiz Yourself</button>
    <div class="quiz-lesson-container" hidden></div>
  </section>`;
}

/**
 * Render a single question card.
 */
function renderQuestionHTML(q, index, hidden = false) {
  const escapedExplanation = escapeAttr(q.explanation);
  let html = `<div class="quiz-question" data-index="${index}" data-answer="${q.answer}" data-explanation="${escapedExplanation}"${hidden ? ' hidden' : ''}>`;
  html += `<p class="quiz-question-text">${q.question}</p>`;

  if (q.visual) {
    html += `<div class="quiz-visual">${q.visual}</div>`;
  }

  html += `<div class="quiz-options" role="radiogroup" aria-label="Answer choices">`;
  for (let j = 0; j < q.options.length; j++) {
    html += `<button class="quiz-option" role="radio" aria-checked="false" data-index="${j}">`;
    html += `<span class="quiz-radio"></span>`;
    html += `<span class="quiz-option-text">${q.options[j]}</span>`;
    html += `</button>`;
  }
  html += `</div>`;
  html += `<button class="quiz-btn quiz-check-btn" disabled>Check Answer</button>`;
  html += `<div class="quiz-feedback" hidden role="alert"></div>`;
  html += `<button class="quiz-btn quiz-next-btn" hidden>Next Question</button>`;
  html += `</div>`;
  return html;
}

// ─── Aggregate quiz rendering ──────────────────────────────

/**
 * Render the aggregate quiz page shell.
 */
export function renderQuizPageHTML(topicId, hasQuestions) {
  let html = `<div class="quiz-page">`;
  html += `<h2>Quiz Yourself</h2>`;

  if (!hasQuestions) {
    html += `<p class="quiz-empty">Complete some lessons first to unlock the quiz!</p>`;
    html += `<a href="#/topic/${topicId}" class="quiz-btn quiz-back-btn">Back to Overview</a>`;
    html += `</div>`;
    return html;
  }

  html += `<p class="quiz-subheading">Questions drawn from your completed lessons. Quiz as long as you want!</p>`;
  html += `<div class="quiz-aggregate-container"></div>`;
  html += `</div>`;
  return html;
}

// ─── Hydration — per-lesson ────────────────────────────────

/**
 * Wire up per-lesson quiz — collapsed by default, continuous mode on expand.
 */
export function hydrateQuizSection(section, lessonId, completedIds, handAuthored) {
  const launchBtn = section.querySelector('.quiz-launch-btn');
  const container = section.querySelector('.quiz-lesson-container');

  launchBtn.addEventListener('click', () => {
    launchBtn.hidden = true;
    container.hidden = false;
    loadNextLessonQuestion(container, lessonId, completedIds, handAuthored, launchBtn);
  });
}

function loadNextLessonQuestion(container, lessonId, completedIds, handAuthored, launchBtn) {
  const q = generateLessonQuestion(lessonId, completedIds, handAuthored);
  if (!q) {
    container.innerHTML = `<p class="quiz-empty">No questions available for this lesson yet.</p>`;
    return;
  }

  container.innerHTML = renderQuestionHTML(q, 0, false);
  const qEl = container.querySelector('.quiz-question');

  hydrateQuestion(qEl, () => {
    // After answering, replace the default next button with our continuous-mode buttons
    const nextBtn = qEl.querySelector('.quiz-next-btn');
    nextBtn.hidden = true;

    const btnWrap = document.createElement('div');
    btnWrap.className = 'quiz-aggregate-actions';
    btnWrap.innerHTML = `
      <button class="quiz-btn quiz-next-question-btn">Next Question</button>
      <button class="quiz-btn quiz-done-btn">I'm Done</button>
    `;
    qEl.appendChild(btnWrap);

    btnWrap.querySelector('.quiz-next-question-btn').addEventListener('click', () => {
      loadNextLessonQuestion(container, lessonId, completedIds, handAuthored, launchBtn);
      const qText = container.querySelector('.quiz-question-text');
      if (qText) qText.focus();
    });

    btnWrap.querySelector('.quiz-done-btn').addEventListener('click', () => {
      container.hidden = true;
      container.innerHTML = '';
      launchBtn.hidden = false;
      launchBtn.focus();
    });
  });
}

// ─── Hydration — aggregate quiz ────────────────────────────

/**
 * Wire up the aggregate (continuous) quiz.
 */
export function hydrateAggregateQuiz(container, completedIds, topicId) {
  function loadNext() {
    const q = generateRandomQuestion(completedIds);
    if (!q) return;

    container.innerHTML = renderQuestionHTML(q, 0, false);
    const qEl = container.querySelector('.quiz-question');

    hydrateQuestion(qEl, () => {
      // After answering, show Next/Done buttons
      const nextBtn = qEl.querySelector('.quiz-next-btn');
      nextBtn.hidden = true; // We'll use our own buttons

      const btnWrap = document.createElement('div');
      btnWrap.className = 'quiz-aggregate-actions';
      btnWrap.innerHTML = `
        <button class="quiz-btn quiz-next-question-btn">Next Question</button>
        <a href="#/topic/${topicId}" class="quiz-btn quiz-done-btn">I'm Done</a>
      `;
      qEl.appendChild(btnWrap);

      btnWrap.querySelector('.quiz-next-question-btn').addEventListener('click', () => {
        loadNext();
        const qText = container.querySelector('.quiz-question-text');
        if (qText) qText.focus();
      });
    });
  }

  loadNext();
}

// ─── Shared question hydration ─────────────────────────────

function hydrateQuestion(qEl, onAnswered) {
  const options = qEl.querySelectorAll('.quiz-option');
  const checkBtn = qEl.querySelector('.quiz-check-btn');
  const feedbackEl = qEl.querySelector('.quiz-feedback');
  const correctIndex = parseInt(qEl.dataset.answer);
  const explanation = qEl.dataset.explanation;
  let selectedIndex = -1;

  // Option selection
  options.forEach((opt) => {
    opt.addEventListener('click', () => {
      if (checkBtn.disabled === false && checkBtn.dataset.checked) return; // Already checked
      selectedIndex = parseInt(opt.dataset.index);
      options.forEach(o => {
        o.classList.remove('selected');
        o.setAttribute('aria-checked', 'false');
      });
      opt.classList.add('selected');
      opt.setAttribute('aria-checked', 'true');
      checkBtn.disabled = false;
    });

    // Keyboard support
    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        opt.click();
      }
    });
  });

  // Check answer
  checkBtn.addEventListener('click', () => {
    if (selectedIndex < 0 || checkBtn.dataset.checked) return;
    checkBtn.dataset.checked = 'true';
    checkBtn.disabled = true;

    // Disable further selection
    options.forEach(o => o.style.pointerEvents = 'none');

    const isCorrect = selectedIndex === correctIndex;

    // Mark correct/incorrect
    options[correctIndex].classList.add('correct');
    if (!isCorrect) {
      options[selectedIndex].classList.add('incorrect');
    }

    // Show feedback
    feedbackEl.hidden = false;
    feedbackEl.classList.add(isCorrect ? 'feedback-correct' : 'feedback-incorrect');
    feedbackEl.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Not quite.'}</strong> ${explanation}`;

    if (onAnswered) onAnswered();
  });
}

// ─── Helpers ───────────────────────────────────────────────

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
