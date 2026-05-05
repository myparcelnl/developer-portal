import { ref } from 'vue';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'mp-theme';
const theme = ref<Theme>('light');

if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      theme.value = stored;
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark';
    }
  } catch {}
}

function apply(next: Theme) {
  if (typeof document === 'undefined') return;
  if (next === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
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
