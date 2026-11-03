import { ref } from 'vue';

export type Theme = 'light' | 'dark';

// Use the same key the VuePress default theme manages, so its post-hydration
// runtime stays in sync with whatever our toggle writes. Otherwise the
// default theme's reactive color-mode would clobber our value on every
// reload.
const STORAGE_KEY = 'vuepress-color-scheme';
const theme = ref<Theme>('light');

if (typeof window !== 'undefined') {
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'dark') theme.value = 'dark';
  } catch {}

  // The default theme can still set data-theme after hydration (a stored
  // "auto" with a dark OS preference), so follow the attribute rather than
  // only the stored value. Otherwise the toggle's label describes the wrong
  // theme.
  const readDom = () => {
    theme.value = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  };
  readDom();
  new MutationObserver(readDom).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
}

function apply(next: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', next);
}

export function useTheme() {
  return {
    theme,
    toggleTheme() {
      const next: Theme = theme.value === 'dark' ? 'light' : 'dark';
      theme.value = next;
      apply(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    },
    syncFromDom() {
      if (typeof document === 'undefined') return;
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      theme.value = current as Theme;
    },
  };
}
