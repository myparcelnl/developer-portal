// Make the right code rail user-resizable. Inserts a thin vertical handle
// on the rail's left edge; mousedown + drag adjusts the column width.
// Persists user preference in localStorage so the choice survives reloads.

const STORAGE_KEY = 'mp-code-rail-width';
const MIN_PX = 320;
const MAX_PX = 720;
const DEFAULT_PX = 440;

function clamp(n: number): number {
  return Math.max(MIN_PX, Math.min(MAX_PX, n));
}

function setWidth(px: number) {
  const v = clamp(px);
  document.documentElement.style.setProperty('--mp-code-rail-width', `${v}px`);
  try { localStorage.setItem(STORAGE_KEY, String(v)); } catch {}
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

export function initApiRail() {
  if (typeof document === 'undefined') return;
  // Restore stored preference on first call
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && Number(stored) > 0) {
      document.documentElement.style.setProperty(
        '--mp-code-rail-width',
        `${clamp(Number(stored))}px`,
      );
    }
  } catch {}

  document.querySelectorAll<HTMLElement>('aside.mp-code-rail').forEach(injectHandle);
}
