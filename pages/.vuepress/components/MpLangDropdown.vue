<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { usePageData } from 'vuepress/client';
import { lang, setLang, type Lang } from '../composables/useI18n';
import { detectLang, localizeCurrentPath } from '../sidebar';

const page = usePageData();

const flags: Record<Lang, string> = {
  en: `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>
    <path d="M0 0 L60 30" stroke="#C8102E" stroke-width="2" stroke-dasharray="30,30"/>
    <path d="M60 0 L0 30" stroke="#C8102E" stroke-width="2" stroke-dasharray="30,30"/>
    <rect x="25" width="10" height="30" fill="#fff"/>
    <rect y="10" width="60" height="10" fill="#fff"/>
    <rect x="27" width="6" height="30" fill="#C8102E"/>
    <rect y="12" width="60" height="6" fill="#C8102E"/>
  </svg>`,
  nl: `<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="9" height="2" y="0" fill="#AE1C28"/>
    <rect width="9" height="2" y="2" fill="#FFFFFF"/>
    <rect width="9" height="2" y="4" fill="#21468B"/>
  </svg>`,
  it: `<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="3" height="6" x="0" fill="#009246"/>
    <rect width="3" height="6" x="3" fill="#FFFFFF"/>
    <rect width="3" height="6" x="6" fill="#CE2B37"/>
  </svg>`,
  fr: `<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="3" height="6" x="0" fill="#002395"/>
    <rect width="3" height="6" x="3" fill="#FFFFFF"/>
    <rect width="3" height="6" x="6" fill="#ED2939"/>
  </svg>`,
};

const labels: Record<Lang, string> = {
  en: 'English',
  nl: 'Nederlands',
  it: 'Italiano',
  fr: 'Français',
};

const langs: Lang[] = ['en', 'nl', 'it', 'fr'];

const open = ref(false);
const root = ref<HTMLElement | null>(null);

onMounted(() => {
  document.addEventListener('click', onDocClick);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
});

function onDocClick(e: MouseEvent) {
  if (!root.value) return;
  if (!root.value.contains(e.target as Node)) open.value = false;
}

function pick(l: Lang) {
  setLang(l);
  open.value = false;
  // If the current page exists in the target locale, navigate there.
  // For pages we haven't translated, the URL stays at root; the data-i18n
  // system will still swap the chrome (sidebar labels, header) to the new lang.
  if (typeof window !== 'undefined') {
    const next = localizeCurrentPath(window.location.pathname, l);
    if (next !== window.location.pathname) {
      window.location.href = next;
    }
  }
}

// On navigation to an explicit /nl/ or /it/ URL, adopt that locale so the
// dropdown matches the page. Root-locale URLs (everything else) leave the
// user's stored preference alone — otherwise visiting a non-translated page
// like /about.html would reset NL/IT back to English.
watch(
  () => page.value.path,
  (p) => {
    const detected = detectLang(p);
    if (detected !== 'en' && detected !== lang.value) setLang(detected);
  },
  { immediate: true },
);

const currentFlag = computed(() => flags[lang.value]);
</script>

<template>
  <div ref="root" class="mp-lang-dropdown" :class="{ 'is-open': open }">
    <button
      type="button"
      class="mp-lang-dropdown__toggle"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-label="`Language: ${labels[lang]}`"
      @click="open = !open"
    >
      <span class="mp-flag mp-lang-dropdown__flag-slot" v-html="currentFlag"></span>
      <svg class="mp-lang-dropdown__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <ul v-show="open" class="mp-lang-dropdown__menu" role="listbox" aria-label="Language">
      <li v-for="l in langs" :key="l" role="none">
        <button
          type="button"
          role="option"
          class="mp-lang-btn"
          :class="{ 'mp-lang-btn--active': l === lang }"
          :aria-selected="l === lang"
          @click="pick(l)"
        >
          <span class="mp-flag" v-html="flags[l]"></span>
          <span>{{ labels[l] }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mp-lang-dropdown__menu {
  display: block;
}
</style>
