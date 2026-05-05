// Add a small chain-link icon next to every h2/h3/h4 inside docs / standalone
// content. Same pattern as the API endpoint anchors — hidden until the
// heading is hovered, click copies the deep-link URL.

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

const SCOPE_SELECTORS = [
  '.mp-docs-content__body h2',
  '.mp-docs-content__body h3',
  '.mp-docs-content__body h4',
  '.mp-standalone .mp-docs-content h2',
  '.mp-standalone .mp-docs-content h3',
  '.mp-standalone .mp-docs-content h4',
];

function attach(heading: HTMLElement) {
  if (heading.dataset.anchorInited === '1') return;
  if (!heading.id) return;
  heading.dataset.anchorInited = '1';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mp-heading-anchor';
  btn.setAttribute('aria-label', 'Copy link to section');
  btn.title = 'Copy deep-link';
  btn.innerHTML = LINK_ICON;
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {}
    btn.classList.add('is-copied');
    btn.innerHTML = CHECK_ICON;
    setTimeout(() => {
      btn.classList.remove('is-copied');
      btn.innerHTML = LINK_ICON;
    }, 1400);
  });
  heading.appendChild(btn);
}

export function attachDocsAnchors() {
  if (typeof document === 'undefined') return;
  document.querySelectorAll<HTMLElement>(SCOPE_SELECTORS.join(', '))
    .forEach(attach);
}
