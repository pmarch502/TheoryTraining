import { state } from '../state.js';
import { linkGlossaryTerms } from './glossary-linker.js';
import { renderPianoHTML, hydratePianos, updatePianoSVG, hydrateSinglePiano } from './piano-keyboard.js';
import { renderGuitarHTML, hydrateGuitars, updateGuitarSVG, hydrateSingleGuitar, setupVoicingNav } from './guitar-fretboard.js';
import {
  renderRootSelector, transposePianoConfig, transposeGuitarConfig,
  pianoAudioNotes, guitarAudioNotes
} from './transposer.js';

/**
 * Renders a lesson data object into the main content area.
 */
export async function renderLesson(lesson, topicIndex, phaseId) {
  const main = document.getElementById('main-content');

  // Expand slim guitar configs (suffix-only) into full configs from chord library
  await expandGuitarConfigs(lesson.content);

  let html = `<article class="lesson-content">`;
  html += `<h1>Lesson ${lesson.number}: ${lesson.title}</h1>`;

  const hasInstruments = lesson.content.some(b => b.type === 'piano' || b.type === 'guitar');

  // Render content blocks — inject root selector into the first piano block only
  const selectorHTML = hasInstruments ? renderRootSelector() : '';
  let selectorPlaced = false;
  for (const block of lesson.content) {
    if (!selectorPlaced && block.type === 'piano') {
      block._rootSelector = selectorHTML;
      selectorPlaced = true;
    }
    html += renderBlock(block);
    if (block._rootSelector) delete block._rootSelector;
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

  // Hydrate voicing navigation for library-backed guitar chords
  if (article) hydrateVoicingNavs(article);

  // Wire up root selector for transposition
  if (article && hasInstruments) setupRootSelector(article);

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
      return renderPianoHTML(block.config, { rootSelector: block._rootSelector || '' });

    case 'guitar':
      return renderGuitarHTML(block.config, { rootSelector: block._rootSelector || '' });

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

/**
 * Expand slim guitar configs (suffix-only) into full configs via the chord library.
 */
async function expandGuitarConfigs(blocks) {
  const slim = blocks.filter(b => b.type === 'guitar' && b.config.suffix && !b.config.dots);
  if (!slim.length) return;

  const lib = await import('../data/chord-library.js');
  await lib.ensureLoaded();

  for (const block of slim) {
    const full = lib.getTransposedConfig('C', block.config);
    if (full) block.config = full;
  }
}

/**
 * Set up voicing navigation on all library-backed guitar diagrams.
 */
async function hydrateVoicingNavs(article) {
  const guitars = article.querySelectorAll('.guitar-chord');
  // Find guitars that have a suffix in their original config (library-backed)
  const libraryGuitars = [...guitars].filter(g => {
    try {
      const config = JSON.parse(g.dataset.originalConfig);
      return !!config.suffix;
    } catch { return false; }
  });
  if (!libraryGuitars.length) return;

  const [audio, chordLib] = await Promise.all([
    import('../audio/audio-engine.js'),
    import('../data/chord-library.js')
  ]);
  await chordLib.ensureLoaded();

  for (const guitar of libraryGuitars) {
    const config = JSON.parse(guitar.dataset.originalConfig);
    const rootName = config.rootName || 'C';
    const allConfigs = chordLib.getAllVoicingConfigs(rootName, config.suffix);
    if (allConfigs) setupVoicingNav(guitar, allConfigs, audio);
  }
}

/**
 * Wire up the root selector dropdown to transpose all piano/guitar blocks.
 */
function setupRootSelector(article) {
  const select = article.querySelector('.root-select');
  if (!select)  return;

  async function handleRootChange(rootName) {
    try {
      const [audio, chordLib] = await Promise.all([
        import('../audio/audio-engine.js'),
        import('../data/chord-library.js')
      ]);
      await chordLib.ensureLoaded();

      // Transpose all pianos
      for (const piano of article.querySelectorAll('.piano-keyboard')) {
        const config = JSON.parse(piano.dataset.originalConfig);
        const newConfig = transposePianoConfig(config, rootName);
        updatePianoSVG(piano, newConfig);
        piano.dataset.highlighted = pianoAudioNotes(newConfig).join(',');
        hydrateSinglePiano(piano, audio);
      }

      // Transpose all guitars — use chord library for real voicings, fallback to fret shifting
      for (const guitar of article.querySelectorAll('.guitar-chord')) {
        const config = JSON.parse(guitar.dataset.originalConfig);
        const newConfig = (rootName !== 'C' && chordLib.getTransposedConfig(rootName, config))
          || transposeGuitarConfig(config, rootName);
        updateGuitarSVG(guitar, newConfig);
        guitar.dataset.notes = guitarAudioNotes(newConfig).join(',');
        hydrateSingleGuitar(guitar, audio);

        // Re-initialize voicing navigation for the new root
        if (config.suffix) {
          const targetRoot = rootName === 'C' ? 'C' : rootName;
          const allConfigs = chordLib.getAllVoicingConfigs(targetRoot, config.suffix);
          setupVoicingNav(guitar, allConfigs, audio);
        }
      }
    } catch (e) {
      console.warn('[transposer] Error:', e);
    }
  }

  select.addEventListener('change', () => handleRootChange(select.value));
}
