import { ref, watchEffect } from 'vue';
import nl from '../translations/nl.json';
import it from '../translations/it.json';

export type Lang = 'en' | 'nl' | 'it';

const dictionaries: Record<Lang, Record<string, string>> = {
  en: {},
  nl: nl as Record<string, string>,
  it: it as Record<string, string>,
};

export const lang = ref<Lang>('en');

if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem('mp-lang') as Lang | null;
    if (stored && stored in dictionaries) lang.value = stored;
  } catch {}
}

export function setLang(l: Lang) {
  lang.value = l;
  if (typeof window !== 'undefined') {
    try { localStorage.setItem('mp-lang', l); } catch {}
    document.documentElement.setAttribute('lang', l);
  }
}

/**
 * Walk the DOM and translate every element with `data-i18n` /
 * `data-i18n-placeholder` attributes. API reference pages are skipped
 * so endpoint paths/parameters keep their canonical English names.
 */
export function applyTranslationsTo(scope: ParentNode = document) {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const isApiRef = /-api\.html$/.test(path) && path !== '/api/';
  const dict = dictionaries[lang.value] ?? {};

  for (const el of scope.querySelectorAll<HTMLElement>('[data-i18n]')) {
    if (isApiRef && el.closest('.mp-ref-content__body, .mp-ref-content > *:not(.mp-ref-hub)')) {
      // Endpoint body of an API page → leave alone
      continue;
    }
    const key = el.getAttribute('data-i18n');
    if (!key) continue;
    const original = el.getAttribute('data-i18n-original') ?? el.textContent ?? '';
    if (!el.hasAttribute('data-i18n-original')) {
      el.setAttribute('data-i18n-original', original);
    }
    el.textContent = dict[key] ?? original;
  }

  for (const el of scope.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]')) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) continue;
    const original = el.getAttribute('data-i18n-placeholder-original') ?? el.placeholder;
    if (!el.hasAttribute('data-i18n-placeholder-original')) {
      el.setAttribute('data-i18n-placeholder-original', original);
    }
    el.placeholder = dict[key] ?? original;
  }
}

if (typeof window !== 'undefined') {
  watchEffect(() => {
    document.documentElement.setAttribute('lang', lang.value);
    // Defer so DOM updates from route navigation are settled.
    setTimeout(() => applyTranslationsTo(), 0);
  });
}
