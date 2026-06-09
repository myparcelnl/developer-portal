<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { apiMeta } from '../api-meta';

interface SpecLink {
  name: string;
  host: string;
  href: string;
  filename: string;
}

const NAME_BY_PATH: Record<string, string> = {
  '/api/myparcel.html':       'Shipment API',
  '/api/order.html':          'Order API',
  '/api/rule.html':           'Rule API',
  '/api/address.html':        'Address API',
  '/api/printing.html':       'Printing API',
  '/api/product.html':        'Product API',
  '/api/purchase-order.html': 'Purchase Order API',
};

// Spec file to offer for download per API. Defaults to "openapi.yaml".
// The Shipment API serves a bundled/distributable spec at openapi.dist.yaml
// that's better suited for downloading. This only affects the download link;
// the rendered reference still uses the spec-url in api-meta.ts / the body.
const SPEC_FILE_BY_PATH: Record<string, string> = {
  '/api/myparcel.html': 'openapi.dist.yaml',
};

const specs: SpecLink[] = Object.entries(apiMeta)
  .filter(([, meta]) => meta.host && meta.endpoints !== '—')
  .map(([path, meta]) => {
    const slug = meta.host.split('.')[0];
    const specFile = SPEC_FILE_BY_PATH[path] ?? 'openapi.yaml';
    return {
      name: NAME_BY_PATH[path] ?? path,
      host: meta.host,
      href: `https://${meta.host}/${specFile}`,
      filename: `${slug}.${specFile}`,
    };
  });

const open = ref(false);
const root = ref<HTMLElement | null>(null);

function onDocClick(e: MouseEvent) {
  if (!root.value) return;
  if (!root.value.contains(e.target as Node)) open.value = false;
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false;
}
onMounted(() => {
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onKeydown);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
  document.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <div ref="root" class="mp-download-specs" :class="{ 'is-open': open }">
    <button
      type="button"
      class="mp-btn mp-btn--secondary mp-download-specs__toggle"
      @click="open = !open"
      :aria-expanded="open"
      aria-haspopup="menu"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span data-i18n="Download OpenAPI specs">Download OpenAPI specs</span>
      <svg class="mp-download-specs__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>

    <div v-if="open" class="mp-download-specs__menu" role="menu">
      <div class="mp-download-specs__hint" data-i18n="Each API publishes its own openapi.yaml. Pick a spec to download — opens in a new tab if your browser previews YAML.">
        Each API publishes its own <code>openapi.yaml</code>. Pick a spec to download — opens in a new tab if your browser previews YAML.
      </div>
      <ul>
        <li v-for="s in specs" :key="s.host">
          <a
            :href="s.href"
            :download="s.filename"
            target="_blank"
            rel="noopener"
            role="menuitem"
            class="mp-download-specs__item"
          >
            <span class="mp-download-specs__name">{{ s.name }}</span>
            <span class="mp-download-specs__host"><code>{{ s.host }}</code></span>
            <svg class="mp-download-specs__icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.mp-download-specs {
  position: relative;
  display: inline-block;
}
.mp-download-specs__toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.mp-download-specs__caret {
  transition: transform 0.15s;
}
.mp-download-specs.is-open .mp-download-specs__caret {
  transform: rotate(180deg);
}
.mp-download-specs__menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 50;
  width: min(420px, calc(100vw - 32px));
  background: var(--mp-bg, #fff);
  border: 1px solid var(--mp-border, #e1e6e4);
  border-radius: 12px;
  box-shadow: 0 16px 48px rgb(0 38 33 / 18%);
  overflow: hidden;
  animation: mp-pop 0.14s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes mp-pop {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.mp-download-specs__hint {
  padding: 12px 14px;
  font-size: 12px;
  color: var(--mp-text-muted, #5e7973);
  border-bottom: 1px solid var(--mp-border-soft, #ecefed);
  background: var(--mp-bg-subtle, #f7faf9);
  line-height: 1.5;
}
.mp-download-specs__hint code {
  background: var(--mp-bg, #fff);
  padding: 1px 5px;
  border-radius: 4px;
  border: 1px solid var(--mp-border, #e1e6e4);
  font-size: 11px;
}
.mp-download-specs__menu ul {
  list-style: none;
  margin: 0;
  padding: 6px;
  max-height: 320px;
  overflow-y: auto;
}
.mp-download-specs__item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4px 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--mp-deep, #002621) !important;
  text-decoration: none !important;
  transition: background 0.08s;
}
.mp-download-specs__item:hover,
.mp-download-specs__item:focus-visible {
  background: var(--mp-mint, #E6F1EE);
  outline: none;
}
.mp-download-specs__name {
  font-weight: 600;
  font-size: 14px;
  grid-column: 1;
}
.mp-download-specs__host {
  grid-column: 1;
  grid-row: 2;
}
.mp-download-specs__host code {
  font-family: var(--mp-mono, ui-monospace, monospace);
  font-size: 11px;
  color: var(--mp-text-muted, #5e7973);
  background: transparent;
  padding: 0;
}
.mp-download-specs__icon {
  grid-column: 2;
  grid-row: 1 / span 2;
  color: var(--mp-fresh, #0F7859);
  align-self: center;
}
</style>
