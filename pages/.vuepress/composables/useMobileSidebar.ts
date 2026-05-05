// On small viewports, prepend a "Menu" toggle to each sidebar so they can
// be collapsed by default — otherwise the long endpoint list pushes the
// content far below the fold.

const TOGGLE_HTML = `
  <span><span data-mobile-toggle-label>Menu</span></span>
  <svg class="mp-sidebar-mobile-toggle__icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
`;

function labelFor(sidebar: Element): string {
  if (sidebar.classList.contains('mp-sidebar')) {
    // API reference page → endpoints
    return 'Endpoints menu';
  }
  return 'Documentation menu';
}

function ensureToggle(sidebar: HTMLElement) {
  if (sidebar.dataset.mobileInited === '1') return;
  sidebar.dataset.mobileInited = '1';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mp-sidebar-mobile-toggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = TOGGLE_HTML;
  const lbl = btn.querySelector('[data-mobile-toggle-label]');
  if (lbl) lbl.textContent = labelFor(sidebar);

  btn.addEventListener('click', () => {
    const open = sidebar.classList.toggle('is-mobile-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the sidebar when the user picks an item.
  sidebar.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest('.mp-sidebar-mobile-toggle')) return;
    if (target.closest('a')) {
      sidebar.classList.remove('is-mobile-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  sidebar.prepend(btn);
}

export function initMobileSidebars() {
  if (typeof document === 'undefined') return;
  document
    .querySelectorAll<HTMLElement>('.mp-docs-sidebar, .mp-sidebar')
    .forEach(ensureToggle);
}
