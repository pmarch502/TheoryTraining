import { glossary, categoryLabels } from '../data/topics/chord-qualities/glossary.js';

let popup = null;

/**
 * Initialize the glossary popup system.
 * Listens for clicks on .glossary-term elements and shows a definition popup.
 */
export function initGlossaryPopup() {
  // Create popup element once
  popup = document.createElement('div');
  popup.className = 'glossary-popup';
  popup.setAttribute('role', 'tooltip');
  popup.hidden = true;
  document.body.appendChild(popup);

  // Event delegation on the document
  document.addEventListener('click', (e) => {
    const term = e.target.closest('.glossary-term');
    if (term) {
      e.preventDefault();
      showPopup(term);
      return;
    }
    // Click outside closes
    if (!e.target.closest('.glossary-popup')) {
      hidePopup();
    }
  });

  // Escape closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hidePopup();
  });
}

function showPopup(termEl) {
  const slug = termEl.dataset.term;
  const entry = glossary[slug];
  if (!entry) { hidePopup(); return; }

  const cat = categoryLabels[entry.category] || entry.category;

  popup.innerHTML = `
    <button class="glossary-popup-close" aria-label="Close definition">&times;</button>
    <div class="glossary-popup-header">
      <span class="glossary-popup-title">${entry.title}</span>
      <span class="glossary-popup-cat">${cat}</span>
    </div>
    <p class="glossary-popup-def">${entry.def}</p>
  `;
  popup.querySelector('.glossary-popup-close').addEventListener('click', (e) => {
    e.stopPropagation();
    hidePopup();
  });
  popup.hidden = false;

  // Position near the term
  const rect = termEl.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  // Default: below the term
  let top = rect.bottom + scrollY + 8;
  let left = rect.left + scrollX;

  // If popup would go off right edge, align right
  if (left + popupRect.width > window.innerWidth - 16) {
    left = window.innerWidth - popupRect.width - 16 + scrollX;
  }

  // If popup would go off bottom, show above
  if (rect.bottom + popupRect.height + 8 > window.innerHeight) {
    top = rect.top + scrollY - popupRect.height - 8;
  }

  // Ensure not off left edge
  if (left < 8 + scrollX) {
    left = 8 + scrollX;
  }

  popup.style.top = `${top}px`;
  popup.style.left = `${left}px`;
}

function hidePopup() {
  if (popup) {
    popup.hidden = true;
  }
}
