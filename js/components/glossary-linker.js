import { glossary } from '../data/topics/chord-qualities/glossary.js';

/**
 * Build a lookup from display title (lowercased) → slug, sorted longest-first
 * so "major third" matches before "third".
 */
const termEntries = Object.entries(glossary)
  .map(([slug, entry]) => ({
    slug,
    title: entry.title,
    lower: entry.title.toLowerCase(),
    len: entry.title.length
  }))
  .sort((a, b) => b.len - a.len);

// Elements to skip when linking
const SKIP_TAGS = new Set(['PRE', 'CODE', 'DT', 'A', 'BUTTON', 'H1', 'SVG', 'svg']);

/**
 * Walk the DOM inside a container and auto-link every occurrence of
 * glossary terms as clickable highlights.
 */
export function linkGlossaryTerms(container) {
  // Walk text nodes
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        // Skip if inside excluded elements or already-linked terms
        let parent = node.parentElement;
        while (parent && parent !== container) {
          if (SKIP_TAGS.has(parent.tagName) || parent.classList.contains('glossary-term')) {
            return NodeFilter.FILTER_REJECT;
          }
          parent = parent.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  // Collect text nodes first (modifying DOM during walk is unsafe)
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  for (const textNode of textNodes) {
    replaceTermsInTextNode(textNode);
  }
}

function replaceTermsInTextNode(textNode) {
  const text = textNode.textContent;
  if (!text.trim()) return;

  const lower = text.toLowerCase();

  // Find the first (longest) matching term in this text node
  for (const entry of termEntries) {
    const idx = indexOfWholeWord(lower, entry.lower);
    if (idx === -1) continue;

    // Found a match — split the text node and wrap the match
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + entry.len);
    const after = text.slice(idx + entry.len);

    const parent = textNode.parentNode;
    const frag = document.createDocumentFragment();

    if (before) {
      frag.appendChild(document.createTextNode(before));
    }

    const span = document.createElement('span');
    span.className = 'glossary-term';
    span.dataset.term = entry.slug;
    span.setAttribute('tabindex', '0');
    span.setAttribute('role', 'button');
    span.setAttribute('aria-label', `Definition: ${entry.title}`);
    span.textContent = match;
    frag.appendChild(span);

    if (after) {
      frag.appendChild(document.createTextNode(after));
    }

    parent.replaceChild(frag, textNode);

    // Recursively process the "before" and "after" text nodes
    // so multiple occurrences in the same original text get linked
    if (before) {
      const beforeNode = span.previousSibling;
      if (beforeNode && beforeNode.nodeType === Node.TEXT_NODE) {
        replaceTermsInTextNode(beforeNode);
      }
    }
    if (after) {
      const afterNode = span.nextSibling;
      if (afterNode && afterNode.nodeType === Node.TEXT_NODE) {
        replaceTermsInTextNode(afterNode);
      }
    }
    return; // This text node has been replaced; stop processing it
  }
}

/**
 * Find index of a whole-word match (case-insensitive).
 * "whole word" means bounded by non-letter/non-hyphen characters.
 */
function indexOfWholeWord(haystack, needle) {
  let start = 0;
  while (true) {
    const idx = haystack.indexOf(needle, start);
    if (idx === -1) return -1;

    const before = idx > 0 ? haystack[idx - 1] : ' ';
    const after = idx + needle.length < haystack.length ? haystack[idx + needle.length] : ' ';

    // Word boundary: not a letter, digit, or hyphen
    const boundaryRe = /[^a-z0-9-]/;
    if (boundaryRe.test(before) && boundaryRe.test(after)) {
      return idx;
    }

    start = idx + 1;
  }
}
