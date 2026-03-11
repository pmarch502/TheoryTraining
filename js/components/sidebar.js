import { state } from '../state.js';

let sidebarRendered = false;

/**
 * Renders the sidebar navigation for all topics (once),
 * then only updates active lesson highlight on subsequent calls.
 */
export function renderSidebar(allTopics, activeId) {
  const sidebar = document.getElementById('sidebar');

  if (!sidebarRendered) {
    buildSidebar(sidebar, allTopics);
    sidebarRendered = true;
  }

  // Update active highlight + completion state
  updateSidebarState(sidebar, allTopics, activeId);
}

function buildSidebar(sidebar, allTopics) {
  let html = '';
  for (const topic of allTopics) {
    const comingSoon = topic.comingSoon;
    html += `<div class="sidebar-section">`;
    html += `<div class="sidebar-topic-header">`;
    html += `<a href="#/topic/${topic.id}" class="sidebar-topic-link">${topic.title}${comingSoon ? ' <span class="sidebar-coming-soon">Coming Soon</span>' : ''}</a>`;
    html += `<button class="sidebar-topic-toggle" aria-expanded="false" aria-label="Toggle ${topic.title} section"><span class="chevron">\u25B6</span></button>`;
    html += `</div>`;

    html += `<div class="sidebar-phases" style="display:none">`;
    if (!comingSoon) {
      for (const phase of topic.phases) {
        html += `<div class="sidebar-phase">`;
        html += `<a href="#/topic/${topic.id}/${phase.id}" class="sidebar-phase-title">${phase.title}</a>`;
        html += `<div class="sidebar-lessons">`;
        for (const lesson of phase.lessons) {
          html += `<a href="#/topic/${topic.id}/${phase.id}/${lesson.id}"
            class="sidebar-lesson-link" data-lesson-id="${lesson.id}">
            <span class="sidebar-check-slot"></span><span class="lesson-number">${lesson.number}.</span>
            ${lesson.title}
          </a>`;
        }
        html += `</div></div>`;
      }
      html += `<div class="sidebar-glossary">
        <a href="#/glossary" class="sidebar-phase-title">Glossary</a>
      </div>`;
    } else {
      for (const phase of topic.phases) {
        html += `<div class="sidebar-phase sidebar-phase--disabled">`;
        html += `<span class="sidebar-phase-title">${phase.title}</span>`;
        html += `</div>`;
      }
    }
    html += `</div>`; // close sidebar-phases
    html += `</div>`; // close sidebar-section
  }

  sidebar.innerHTML = html;

  // Toggle topic collapse — only via chevron button
  sidebar.querySelectorAll('.sidebar-topic-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const header = btn.closest('.sidebar-topic-header');
      const isExpanded = header.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', String(isExpanded));
      const phases = header.nextElementSibling;
      phases.style.display = isExpanded ? '' : 'none';
    });
  });
}

function updateSidebarState(sidebar, allTopics, activeId) {
  // Clear all active states
  sidebar.querySelectorAll('.sidebar-lesson-link').forEach(link => {
    link.classList.remove('active');

    const lessonId = link.dataset.lessonId;
    const visited = state.isVisited(lessonId);
    const done = state.isCompleted(lessonId);

    link.classList.toggle('visited', visited);
    link.classList.toggle('completed', done);

    const slot = link.querySelector('.sidebar-check-slot');
    if (slot) {
      slot.textContent = done ? '\u2713' : '';
      slot.className = done ? 'sidebar-check-slot sidebar-check' : 'sidebar-check-slot';
    }

    if (lessonId === activeId) {
      link.classList.add('active');
    }
  });
}

/** Set up mobile sidebar toggle behavior. */
export function initSidebarToggle() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener('click', closeSidebar);

  // Close sidebar on navigation (mobile)
  sidebar.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar-lesson-link') || e.target.closest('.sidebar-phase-title') || e.target.closest('.sidebar-topic-link')) {
      closeSidebar();
    }
  });
}
