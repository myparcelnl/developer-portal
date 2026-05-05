// Two enhancements for the API endpoint sidebar:
//
//   1. **Filter input** — a small search box at the top of the active API
//      block. Typing hides non-matching .mp-sidebar__item entries (matched
//      against method + summary). Group-labels with no remaining matches
//      are hidden too.
//
//   2. **Scroll-spy** — IntersectionObserver watches every .mp-endpoint
//      article in the page and applies the active class to the matching
//      sidebar item as the user scrolls.

const FILTER_HTML = `
  <div class="mp-sidebar-filter__input-wrap">
    <span class="mp-sidebar-filter__icon" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    </span>
    <input type="search" placeholder="Filter endpoints…" aria-label="Filter endpoints" data-i18n-placeholder="Filter endpoints…">
    <button type="button" class="mp-sidebar-filter__clear" aria-label="Clear filter" hidden>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18M6 6l12 12"/>
      </svg>
    </button>
  </div>
  <div class="mp-sidebar-filter__count" data-mp-filter-count></div>
`;

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string),
  );
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(item: HTMLElement, query: string) {
  // Cache the original innerHTML once per item so we can restore it.
  if (!item.dataset.originalHtml) {
    item.dataset.originalHtml = item.innerHTML;
  }
  if (!query) {
    item.innerHTML = item.dataset.originalHtml;
    return;
  }
  // Walk text nodes inside the summary span only, leave the method badge alone.
  const summary = item.querySelector<HTMLElement>('span:last-child');
  if (!summary) return;
  const re = new RegExp(`(${escapeRegex(query)})`, 'ig');
  const text = summary.textContent ?? '';
  summary.innerHTML = escapeHtml(text).replace(re, '<mark>$1</mark>');
}

function applyFilter(scope: HTMLElement, query: string) {
  const q = query.trim().toLowerCase();
  const items = scope.querySelectorAll<HTMLElement>('.mp-sidebar__item');

  let total = 0;
  let matched = 0;
  items.forEach((item) => {
    if (item.classList.contains('mp-sidebar__back')) return;
    total += 1;
    const text = (item.textContent ?? '').toLowerCase();
    const match = !q || text.includes(q);
    item.style.display = match ? '' : 'none';
    highlight(item, q);
    if (match) matched += 1;
  });

  // Update the result counter pill
  const counter = scope.querySelector<HTMLElement>('[data-mp-filter-count]');
  if (counter) {
    if (!q) {
      counter.textContent = `${total} endpoints`;
      counter.classList.remove('is-empty');
    } else if (matched === 0) {
      counter.textContent = `No matches for "${query}"`;
      counter.classList.add('is-empty');
    } else {
      counter.textContent = `${matched} of ${total} match`;
      counter.classList.remove('is-empty');
    }
  }

  // Hide group labels whose siblings (until next group label) are all hidden.
  const labels = scope.querySelectorAll<HTMLElement>('.mp-sidebar__group-label');
  labels.forEach((label) => {
    let anyVisible = false;
    let n: Element | null = label.nextElementSibling;
    while (n && !n.classList.contains('mp-sidebar__group-label')) {
      if (
        n.classList.contains('mp-sidebar__item') &&
        (n as HTMLElement).style.display !== 'none'
      ) {
        anyVisible = true;
        break;
      }
      n = n.nextElementSibling;
    }
    label.style.display = q && !anyVisible ? 'none' : '';
  });

  // Also dim/hide the API <details> blocks that have no remaining matches.
  const details = scope.querySelectorAll<HTMLDetailsElement>('details.mp-sidebar__api');
  details.forEach((d) => {
    const visibleItems = d.querySelectorAll<HTMLElement>(
      '.mp-sidebar__item:not([style*="display: none"])',
    );
    if (q && visibleItems.length === 0) {
      d.style.display = 'none';
    } else {
      d.style.display = '';
      // Auto-open when filtering so matches are visible
      if (q) d.open = true;
    }
  });
}

function injectFilter(sidebar: HTMLElement) {
  if (sidebar.querySelector('.mp-sidebar-filter')) return;
  const wrap = document.createElement('div');
  wrap.className = 'mp-sidebar-filter';
  wrap.innerHTML = FILTER_HTML;
  const input = wrap.querySelector('input') as HTMLInputElement;
  const clear = wrap.querySelector('.mp-sidebar-filter__clear') as HTMLButtonElement;

  input.addEventListener('input', () => {
    applyFilter(sidebar, input.value);
    clear.hidden = input.value.length === 0;
  });
  clear.addEventListener('click', () => {
    input.value = '';
    clear.hidden = true;
    applyFilter(sidebar, '');
    input.focus();
  });

  // Insert after the back-button if present, otherwise as the first child.
  const back = sidebar.querySelector('.mp-sidebar__back');
  if (back && back.parentNode === sidebar) {
    back.after(wrap);
  } else {
    sidebar.prepend(wrap);
  }
  // Populate the result counter on first paint
  applyFilter(sidebar, '');
}

// ---- Scroll-spy ------------------------------------------------------------

let observer: IntersectionObserver | null = null;
const observed = new WeakSet<Element>();

function setActiveSidebarItem(slug: string) {
  document
    .querySelectorAll<HTMLElement>('.mp-sidebar__item.mp-sidebar__item--active')
    .forEach((el) => el.classList.remove('mp-sidebar__item--active'));

  const matches = document.querySelectorAll<HTMLAnchorElement>(
    `.mp-sidebar__item[href$="#${slug}"]`,
  );
  matches.forEach((el) => el.classList.add('mp-sidebar__item--active'));

  // Auto-scroll the first match into the visible area of its sidebar.
  const first = matches[0];
  if (!first) return;
  const sidebar = first.closest('.mp-sidebar') as HTMLElement | null;
  if (!sidebar) return;

  const itemBox = first.getBoundingClientRect();
  const barBox = sidebar.getBoundingClientRect();
  if (itemBox.top < barBox.top + 40 || itemBox.bottom > barBox.bottom - 40) {
    first.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function ensureObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      // Pick the entry closest to top of viewport that is intersecting.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length === 0) return;
      const target = visible[0].target as HTMLElement;
      const slug = target.id;
      if (slug) setActiveSidebarItem(slug);

      // Mirror the visible endpoint's code into the sticky rail so the user
      // never has to scroll back up to see the example for the section
      // they're currently reading.
      import('./useApiInteractions').then((m) => m.updateRail(target));
    },
    {
      // Active when an endpoint occupies the upper third of the viewport
      rootMargin: '-80px 0px -55% 0px',
      threshold: 0,
    },
  );
  return observer;
}

function refreshScrollSpy() {
  const obs = ensureObserver();
  document
    .querySelectorAll<HTMLElement>('.mp-endpoint[id]')
    .forEach((el) => {
      if (observed.has(el)) return;
      observed.add(el);
      obs.observe(el);
    });
}

// ---- Public init -----------------------------------------------------------

export function initApiSidebar() {
  if (typeof document === 'undefined') return;

  document
    .querySelectorAll<HTMLElement>('.mp-sidebar')
    .forEach(injectFilter);

  refreshScrollSpy();
}
