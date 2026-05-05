// Endpoint header polish:
//   1. Inject a small chain-link icon next to method+path that copies the
//      deep-link to the clipboard on click (and does not toggle the accordion).
//   2. Replace empty endpoint__summary spans with a placeholder so the row
//      keeps its consistent height.

const LINK_ICON = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
`;
const CHECK_ICON = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
`;

function attachAnchor(article: HTMLElement) {
  if (article.dataset.anchorInited === '1') return;
  article.dataset.anchorInited = '1';

  const header = article.querySelector<HTMLElement>('.mp-endpoint__header');
  if (!header || !article.id) return;

  // 1. Empty-summary fallback
  const summary = article.querySelector<HTMLElement>('.mp-endpoint__summary');
  if (summary && (summary.textContent ?? '').trim() === '') {
    summary.classList.add('is-empty');
    summary.textContent = 'No description in spec';
  }

  // 2. Anchor button
  const anchor = document.createElement('button');
  anchor.type = 'button';
  anchor.className = 'mp-endpoint__anchor';
  anchor.setAttribute('aria-label', 'Copy link to endpoint');
  anchor.title = 'Copy deep-link';
  anchor.innerHTML = LINK_ICON;
  anchor.addEventListener('click', async (e) => {
    e.stopPropagation(); // do NOT toggle the accordion
    const url = `${window.location.origin}${window.location.pathname}#${article.id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {}
    anchor.classList.add('is-copied');
    anchor.innerHTML = CHECK_ICON;
    setTimeout(() => {
      anchor.classList.remove('is-copied');
      anchor.innerHTML = LINK_ICON;
    }, 1400);
  });

  // Insert after the chevron so it sits on the far right of the header.
  const chevron = header.querySelector('.mp-endpoint__chevron');
  if (chevron) chevron.before(anchor);
  else header.appendChild(anchor);
}

export function attachEndpointAnchors() {
  if (typeof document === 'undefined') return;
  document
    .querySelectorAll<HTMLElement>('.mp-endpoint[id]')
    .forEach(attachAnchor);
}
