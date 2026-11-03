// Make a right-hand column user-resizable: the code rail on API pages and the
// "On this page" outline on guide and platform pages. Inserts a thin vertical
// handle on the column's left edge; mousedown + drag adjusts the width.
// Persists user preference in localStorage so the choice survives reloads.

interface RailConfig {
  /** Column(s) that get a handle. */
  selector: string;
  /** Custom property the grid reads the column width from. */
  cssVar: string;
  storageKey: string;
  minPx: number;
  maxPx: number;
  defaultPx: number;
  /** Never let the rail squeeze the middle column below this. */
  minContentPx: number;
  /** Accessible name of the handle, also the i18n key. */
  label: string;
}

const API_RAIL: RailConfig = {
  selector: 'aside.mp-code-rail',
  cssVar: '--mp-code-rail-width',
  storageKey: 'mp-code-rail-width',
  minPx: 320,
  maxPx: 720,
  defaultPx: 440,
  minContentPx: 380,
  label: 'Resize code panel',
};

const DOCS_TOC: RailConfig = {
  selector: 'aside.mp-docs-toc',
  cssVar: '--mp-docs-toc-width',
  storageKey: 'mp-docs-toc-width',
  minPx: 200,
  maxPx: 480,
  defaultPx: 240,
  minContentPx: 480,
  label: 'Resize table of contents',
};

function cssVar(name: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}

function stored(cfg: RailConfig): number {
  try {
    return Number(localStorage.getItem(cfg.storageKey)) || 0;
  } catch {
    return 0;
  }
}

/** Upper bound for the rail on this viewport, so the content column survives. */
function maxAllowed(cfg: RailConfig): number {
  const sidebar = cssVar('--mp-sidebar-width', 260);
  return Math.min(cfg.maxPx, window.innerWidth - sidebar - cfg.minContentPx);
}

function clamp(cfg: RailConfig, n: number): number {
  return Math.max(cfg.minPx, Math.min(maxAllowed(cfg), n));
}

/** Apply a width; `persist` false for automatic corrections (e.g. on resize),
 *  so shrinking the window never overwrites the width the user chose. */
function applyWidth(cfg: RailConfig, px: number, persist = true) {
  const v = clamp(cfg, px);
  document.documentElement.style.setProperty(cfg.cssVar, `${v}px`);
  if (persist) {
    try { localStorage.setItem(cfg.storageKey, String(v)); } catch {}
  }
  return v;
}

function injectHandle(cfg: RailConfig, rail: HTMLElement) {
  if (rail.querySelector(':scope > .mp-rail-resize')) return;
  const handle = document.createElement('div');
  handle.className = 'mp-rail-resize';
  handle.setAttribute('role', 'separator');
  handle.setAttribute('aria-orientation', 'vertical');
  handle.setAttribute('aria-labelledby', `${cfg.storageKey}-label`);
  handle.tabIndex = 0;
  // The name lives in a hidden span so the runtime translator reaches it.
  handle.innerHTML = `
    <span id="${cfg.storageKey}-label" class="mp-sr-only" data-i18n="${cfg.label}">${cfg.label}</span>
    <span class="mp-rail-resize__grip" aria-hidden="true">
      <svg width="10" height="20" viewBox="0 0 10 20" aria-hidden="true">
        <circle cx="3" cy="4"  r="1.2"/>
        <circle cx="7" cy="4"  r="1.2"/>
        <circle cx="3" cy="10" r="1.2"/>
        <circle cx="7" cy="10" r="1.2"/>
        <circle cx="3" cy="16" r="1.2"/>
        <circle cx="7" cy="16" r="1.2"/>
      </svg>
    </span>
    <span class="mp-rail-resize__label" aria-hidden="true" data-i18n="Drag to resize">Drag to resize</span>
  `;

  const setWidth = (px: number) => applyWidth(cfg, px, true);
  let startX = 0;
  let startWidth = 0;

  // Mouse moves left → rail grows, right → rail shrinks
  const onMove = (e: MouseEvent) => setWidth(startWidth + startX - e.clientX);
  const onUp = () => {
    document.body.classList.remove('mp-rail-dragging');
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
  };

  handle.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    startWidth = rail.getBoundingClientRect().width;
    document.body.classList.add('mp-rail-dragging');
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    e.preventDefault();
  });

  // Keyboard resize: ←/→ change width by 16px
  handle.addEventListener('keydown', (e) => {
    const cur = rail.getBoundingClientRect().width;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setWidth(cur + 16);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setWidth(cur - 16);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setWidth(cfg.defaultPx);
    }
  });

  // Double-click resets to default
  handle.addEventListener('dblclick', () => setWidth(cfg.defaultPx));

  rail.prepend(handle);
}

const resizeBound = new Set<RailConfig>();

function initRail(cfg: RailConfig) {
  if (typeof document === 'undefined') return;
  // Restore stored preference. Clamped, so a wide rail saved on a large
  // screen does not swallow the content column on a smaller one.
  const pref = stored(cfg);
  if (pref > 0) applyWidth(cfg, pref, false);

  // Re-clamp when the window changes: the ceiling depends on the viewport.
  if (!resizeBound.has(cfg)) {
    resizeBound.add(cfg);
    window.addEventListener('resize', () => {
      applyWidth(cfg, stored(cfg) || cssVar(cfg.cssVar, cfg.defaultPx), false);
    });
  }

  document.querySelectorAll<HTMLElement>(cfg.selector).forEach((rail) => injectHandle(cfg, rail));
}

export function initApiRail() {
  initRail(API_RAIL);
}

export function initDocsTocRail() {
  initRail(DOCS_TOC);
}
