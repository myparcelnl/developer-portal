// Make the right code rail user-resizable. Inserts a thin vertical handle
// on the rail's left edge; mousedown + drag adjusts the column width.
// Persists user preference in localStorage so the choice survives reloads.

const STORAGE_KEY = 'mp-code-rail-width';
const MIN_PX = 320;
const MAX_PX = 720;
const DEFAULT_PX = 440;
/** Never let the rail squeeze the endpoint column below this. */
const MIN_CONTENT_PX = 380;

function cssVar(name: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}

/** Upper bound for the rail on this viewport, so the content column survives. */
function maxAllowed(): number {
  const sidebar = cssVar('--mp-sidebar-width', 260);
  return Math.min(MAX_PX, window.innerWidth - sidebar - MIN_CONTENT_PX);
}

function clamp(n: number): number {
  return Math.max(MIN_PX, Math.min(maxAllowed(), n));
}

/** Apply a width; `persist` false for automatic corrections (e.g. on resize),
 *  so shrinking the window never overwrites the width the user chose. */
function applyWidth(px: number, persist = true) {
  const v = clamp(px);
  document.documentElement.style.setProperty('--mp-code-rail-width', `${v}px`);
  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, String(v)); } catch {}
  }
  return v;
}

function setWidth(px: number) {
  applyWidth(px, true);
}

function injectHandle(rail: HTMLElement) {
  if (rail.querySelector(':scope > .mp-code-rail__resize')) return;
  const handle = document.createElement('div');
  handle.className = 'mp-code-rail__resize';
  handle.setAttribute('role', 'separator');
  handle.setAttribute('aria-orientation', 'vertical');
  handle.setAttribute('aria-label', 'Resize code panel');
  handle.tabIndex = 0;
  handle.innerHTML = `
    <span class="mp-code-rail__resize-grip" aria-hidden="true">
      <svg width="10" height="20" viewBox="0 0 10 20" aria-hidden="true">
        <circle cx="3" cy="4"  r="1.2"/>
        <circle cx="7" cy="4"  r="1.2"/>
        <circle cx="3" cy="10" r="1.2"/>
        <circle cx="7" cy="10" r="1.2"/>
        <circle cx="3" cy="16" r="1.2"/>
        <circle cx="7" cy="16" r="1.2"/>
      </svg>
    </span>
    <span class="mp-code-rail__resize-label">Drag to resize</span>
  `;

  let dragging = false;
  let startX = 0;
  let startWidth = 0;

  handle.addEventListener('mousedown', (e) => {
    dragging = true;
    startX = e.clientX;
    startWidth = rail.getBoundingClientRect().width;
    document.body.classList.add('mp-rail-dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    // Mouse moves left → rail grows, right → rail shrinks
    const delta = startX - e.clientX;
    setWidth(startWidth + delta);
  });
  document.addEventListener('mouseup', () => {
    if (dragging) {
      dragging = false;
      document.body.classList.remove('mp-rail-dragging');
    }
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
      setWidth(DEFAULT_PX);
    }
  });

  // Double-click resets to default
  handle.addEventListener('dblclick', () => setWidth(DEFAULT_PX));

  rail.prepend(handle);
}

let resizeBound = false;

export function initApiRail() {
  if (typeof document === 'undefined') return;
  // Restore stored preference on first call. Clamped, so a wide rail saved on
  // a large screen does not swallow the content column on a smaller one.
  let stored = 0;
  try {
    stored = Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {}
  if (stored > 0) applyWidth(stored, false);

  // Re-clamp when the window changes: the ceiling depends on the viewport.
  if (!resizeBound) {
    resizeBound = true;
    window.addEventListener('resize', () => {
      let pref = 0;
      try {
        pref = Number(localStorage.getItem(STORAGE_KEY)) || 0;
      } catch {}
      applyWidth(pref || cssVar('--mp-code-rail-width', DEFAULT_PX), false);
    });
  }

  document.querySelectorAll<HTMLElement>('aside.mp-code-rail').forEach(injectHandle);
}
