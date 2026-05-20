<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue';
import { usePageData } from 'vuepress/client';
import {
  parseOperations,
  groupOperations,
  serverUrl,
  type OpenApiDoc,
  type ParsedOperation,
} from '../composables/useOpenApi';
import { getSpec, subscribe as subscribeToSpec } from '../composables/useSpecCache';
import { buildCodeSamples, type CodeSample } from '../composables/useCodeSamples';
import { apiMeta } from '../api-meta';
import MpSchemaTable from './MpSchemaTable.vue';
import {
  loadProse,
  loadOverviewProse,
  loadScenarios,
  renderMarkdown,
  type Scenario,
} from '../composables/useApiProse';
const props = defineProps<{
  specUrl: string;
  // Optional fallback server URL used in code samples if the spec omits one.
  fallbackServer?: string;
}>();

const spec = ref<OpenApiDoc | null>(null);
const error = ref<string | null>(null);
const loading = ref(true);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    spec.value = await getSpec(props.specUrl);
  } catch (e: any) {
    error.value = e?.message ?? String(e);
  } finally {
    loading.value = false;
  }
}

onMounted(load);
watch(() => props.specUrl, load);

// Auto-refresh: when the cache layer detects this spec has changed (visibility
// change, periodic poll, manual refresh), swap our local ref to the fresh doc
// and Vue re-renders the parsed operations + groups via computeds.
let unsubscribe: (() => void) | null = null;
onMounted(() => {
  unsubscribe = subscribeToSpec((url, fresh) => {
    if (url === props.specUrl) spec.value = fresh;
  });
});
onBeforeUnmount(() => { unsubscribe?.(); });

const page = usePageData();
const overrides = computed(() => apiMeta[page.value.path]?.groupOverrides ?? []);
const currentSlug = computed(() => apiMeta[page.value.path]?.slug ?? '');

const baseUrl = computed(() => spec.value ? serverUrl(spec.value, props.fallbackServer ?? '') : '');
const operations = computed<ParsedOperation[]>(() => spec.value ? parseOperations(spec.value, overrides.value) : []);
const groups = computed(() => groupOperations(operations.value, overrides.value));

const overviewProse = computed(() => {
  const slug = currentSlug.value;
  return slug ? loadOverviewProse(slug) : null;
});
const overviewProseHtml = computed(() => overviewProse.value ? renderMarkdown(overviewProse.value) : '');

watch(operations, async () => {
  await nextTick();
  if (typeof window === 'undefined') return;
  const refreshers = await Promise.all([
    import('../composables/useApiInteractions'),
    import('../composables/useApiAnchors'),
    import('../composables/useCodeCopy'),
    import('../composables/useApiTables'),
    import('../composables/useApiToc'),
    import('../composables/useApiKeyboard'),
  ]);
  refreshers[0].initApiPage();
  refreshers[1].attachEndpointAnchors();
  refreshers[2].attachCopyButtons();
  refreshers[3].tidyParamsTables();
  refreshers[4].buildApiToc();
  refreshers[5].refreshApiKeyboard();
});

function codeSamples(op: ParsedOperation): CodeSample[] {
  return buildCodeSamples(op, baseUrl.value || props.fallbackServer || '');
}

function proseFor(op: ParsedOperation): string {
  const slug = currentSlug.value;
  if (!slug) return '';
  const raw = loadProse(slug, op.anchor);
  return raw ? renderMarkdown(raw) : '';
}

function scenariosFor(op: ParsedOperation): Scenario[] {
  const slug = currentSlug.value;
  return slug ? loadScenarios(slug, op.anchor) : [];
}

function renderDesc(text: string): string {
  if (!text) return '';
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
}
function formatJson(v: any): string {
  if (v === undefined || v === null) return '';
  try { return JSON.stringify(v, null, 2); }
  catch { return String(v); }
}
</script>

<template>
  <div>
    <section class="mp-ref-section">
      <!-- Optional per-API overview prose, sourced from api-prose/<slug>/_overview.md -->
      <div v-if="overviewProseHtml" class="mp-prose mp-prose--overview" v-html="overviewProseHtml" />

      <div class="mp-ref-section__head">
        <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
        <p class="mp-ref-section__sub">
          Auto-generated from <code>{{ specUrl.replace(/^https?:\/\//, '') }}</code>.
          Click an endpoint to see its parameters and code samples.
        </p>
      </div>

      <div v-if="error" class="mp-spec-error" role="alert">
        <strong>Could not load the live OpenAPI spec.</strong>
        <code>{{ error }}</code>
        <button type="button" class="mp-btn mp-btn--secondary" @click="load">Retry</button>
      </div>

      <template v-if="loading && !error">
        <div class="mp-endpoint-skeleton" v-for="n in 5" :key="n">
          <div class="mp-endpoint-skeleton__header">
            <span class="mp-endpoint-skeleton__method"></span>
            <span class="mp-endpoint-skeleton__path"></span>
            <span class="mp-endpoint-skeleton__summary"></span>
          </div>
        </div>
      </template>

      <template v-if="!loading && !error">
        <template v-for="(group, gi) in groups" :key="group.key">
          <div
            class="mp-section-label"
            :style="gi === 0 ? '' : 'margin-top:var(--mp-space-8);'"
          >{{ group.label }}</div>

          <article
            v-for="op in group.ops"
            :key="op.anchor"
            class="mp-endpoint"
            :id="op.anchor"
          >
            <header class="mp-endpoint__header" data-toggle>
              <span :class="['mp-method', `mp-method--${op.method}`, 'mp-method--lg']">{{ op.methodUpper }}</span>
              <span class="mp-endpoint__path">{{ op.path }}</span>
              <span class="mp-endpoint__summary">{{ op.summary }}</span>
              <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </header>
            <div class="mp-endpoint__body mp-endpoint__body--split">
              <div class="mp-endpoint__info">
                <p class="mp-endpoint__desc" v-html="renderDesc(op.description)"></p>

                <!-- Sidecar prose for narrative use-case context. -->
                <div v-if="proseFor(op)" class="mp-prose mp-prose--endpoint" v-html="proseFor(op)" />

                <template v-if="op.parameters.length">
                  <div class="mp-params-label">Parameters</div>
                  <table class="mp-params">
                    <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                    <tbody>
                      <template v-for="p in op.parameters" :key="p.name + p.in">
                        <tr>
                          <td>
                            <span class="mp-params__name">{{ p.name }}</span>
                            <span v-if="p.required" class="mp-schema-required">required</span>
                          </td>
                          <td><span class="mp-params__type">{{ p.type }}</span></td>
                          <td class="mp-params__desc" v-html="renderDesc(p.description)"></td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                  <!-- For object-typed params (like /orders' `filter`), surface the nested shape. -->
                  <template v-for="p in op.parameters" :key="'fields:' + p.name">
                    <MpSchemaTable
                      v-if="p.schemaFields.length"
                      :title="`${p.name} fields`"
                      :fields="p.schemaFields"
                    />
                  </template>
                </template>

                <!-- Request body schema -->
                <template v-if="op.requestBodyFields.length">
                  <div class="mp-params-label" style="margin-top:var(--mp-space-5);">
                    Request body
                    <span v-if="op.requestBodyRequired" class="mp-schema-required">required</span>
                  </div>
                  <p v-if="op.requestBodyDescription" class="mp-params__desc" style="margin: 4px 0 8px 0;">
                    {{ op.requestBodyDescription }}
                  </p>
                  <MpSchemaTable :fields="op.requestBodyFields" />
                </template>

                <div
                  class="mp-params-label"
                  :style="(op.parameters.length || op.requestBodyFields.length) ? 'margin-top:var(--mp-space-5);' : ''"
                >Responses</div>
                <table class="mp-params">
                  <thead><tr><th>Status</th><th>Description</th></tr></thead>
                  <tbody>
                    <tr v-for="r in op.responses" :key="r.status">
                      <td><span class="mp-params__name">{{ r.status }}</span></td>
                      <td class="mp-params__desc">{{ r.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mp-endpoint__code">
                <div class="mp-code-header">
                  <span>Request</span>
                  <span class="mp-code-status">{{ op.methodUpper }} {{ op.path }}</span>
                </div>
                <div class="mp-code-group" data-code-tabs>
                  <div class="mp-code-langswitch">
                    <button
                      type="button"
                      class="mp-code-langswitch__toggle"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                    >
                      <span class="mp-code-langswitch__current">cURL</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    <ul class="mp-code-langswitch__menu" role="listbox" aria-label="Programming language">
                      <li
                        v-for="(s, i) in codeSamples(op)"
                        :key="s.lang"
                        role="none"
                      >
                        <button
                          type="button"
                          role="option"
                          :class="['mp-code-tab', i === 0 && 'mp-code-tab--active']"
                          :data-lang="s.lang"
                        >{{ s.label }}</button>
                      </li>
                    </ul>
                  </div>
                  <div
                    v-for="(s, i) in codeSamples(op)"
                    :key="s.lang"
                    :class="['mp-code-panel', i === 0 && 'mp-code-panel--active']"
                    :data-lang="s.lang"
                    role="tabpanel"
                  >
                    <pre class="mp-code-block" :data-lang="s.highlight"><code :class="`language-${s.highlight}`">{{ s.source }}</code></pre>
                  </div>
                </div>
                <div class="mp-code-header"><span>Response</span><span class="mp-code-status">{{ op.responseStatus }}</span></div>
                <pre class="mp-code-block" data-lang="json"><code class="language-json">{{ formatJson(op.responseExample) }}</code></pre>

                <!-- Sidecar scenarios — concrete real-world request/response pairs. -->
                <template v-if="scenariosFor(op).length">
                  <div class="mp-code-header mp-code-header--scenarios">
                    <span>Scenarios</span>
                    <span class="mp-code-status">{{ scenariosFor(op).length }}</span>
                  </div>
                  <details
                    v-for="(sc, i) in scenariosFor(op)"
                    :key="'sc' + i"
                    class="mp-scenario"
                    :open="i === 0"
                  >
                    <summary class="mp-scenario__summary">
                      <span class="mp-scenario__title">{{ sc.title }}</span>
                      <svg class="mp-scenario__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <p v-if="sc.description" class="mp-scenario__desc">{{ sc.description }}</p>
                    <div v-if="sc.request" class="mp-code-header"><span>Request body</span></div>
                    <pre v-if="sc.request" class="mp-code-block" data-lang="json"><code class="language-json">{{ formatJson(sc.request.body ?? sc.request) }}</code></pre>
                    <div v-if="sc.response" class="mp-code-header"><span>Response</span><span class="mp-code-status">{{ sc.response.status ?? 200 }}</span></div>
                    <pre v-if="sc.response" class="mp-code-block" data-lang="json"><code class="language-json">{{ formatJson(sc.response.body ?? sc.response) }}</code></pre>
                  </details>
                </template>
              </div>
            </div>
          </article>
        </template>
      </template>
    </section>
  </div>
</template>

<style scoped>
.mp-spec-error {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid #d97757;
  background: #fdf2eb;
  border-radius: 12px;
  color: #6b3920;
  font-size: 14px;
}
.mp-spec-error code {
  background: rgba(0,0,0,0.06);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  word-break: break-word;
}
.mp-spec-error .mp-btn {
  align-self: flex-start;
}

/* Per-API overview prose, placed above the endpoints list */
.mp-prose {
  font-size: 14px;
  line-height: 1.65;
  color: var(--mp-text, inherit);
}
.mp-prose--overview {
  margin-bottom: var(--mp-space-8, 32px);
  padding: 20px 22px;
  background: var(--mp-bg-subtle, rgba(15, 120, 89, 0.05));
  border-left: 3px solid var(--mp-fresh, #0F7859);
  border-radius: 0 12px 12px 0;
}
.mp-prose--endpoint {
  margin-top: var(--mp-space-4, 12px);
  padding: 14px 16px;
  background: var(--mp-bg-subtle, rgba(0,0,0,0.02));
  border-radius: 8px;
}
.mp-prose :deep(h3),
.mp-prose :deep(h4),
.mp-prose :deep(h5) {
  margin: 1.2em 0 0.4em 0;
  font-size: 15px;
  font-weight: 600;
}
.mp-prose :deep(h3):first-child,
.mp-prose :deep(h4):first-child {
  margin-top: 0;
}
.mp-prose :deep(p) {
  margin: 0.5em 0;
}
.mp-prose :deep(ul) {
  padding-left: 1.4em;
  margin: 0.5em 0;
}
.mp-prose :deep(li) {
  margin: 0.25em 0;
}
.mp-prose :deep(code) {
  font-family: var(--mp-mono, ui-monospace, monospace);
  font-size: 0.9em;
  padding: 1px 5px;
  background: var(--mp-bg, rgba(0,0,0,0.05));
  border-radius: 4px;
}
.mp-prose :deep(pre) {
  margin: 0.6em 0;
  font-size: 12px;
}

/* Scenario expanders within the code rail */
.mp-code-header--scenarios {
  margin-top: var(--mp-space-5, 20px);
}
.mp-scenario {
  margin: 4px 0;
  border: 1px solid var(--mp-border-soft, #ecefed);
  border-radius: 8px;
  background: var(--mp-bg, #fff);
}
[data-theme="dark"] .mp-scenario {
  border-color: rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
}
.mp-scenario__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  list-style: none;
}
.mp-scenario__summary::-webkit-details-marker { display: none; }
.mp-scenario__caret {
  transition: transform 0.15s;
}
.mp-scenario[open] .mp-scenario__caret {
  transform: rotate(180deg);
}
.mp-scenario__desc {
  margin: 0 12px 8px 12px;
  font-size: 12px;
  color: var(--mp-text-muted, #5e7973);
  line-height: 1.5;
}
.mp-scenario .mp-code-header {
  margin-top: 0;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 11px;
}
.mp-scenario pre {
  margin: 0;
  border-radius: 0 0 8px 8px;
  font-size: 12px;
}

/* Required badge — also used in the parameters table now */
.mp-schema-required {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 6px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #b03a2e;
  background: rgba(176, 58, 46, 0.08);
  border-radius: 4px;
  text-transform: uppercase;
  vertical-align: middle;
}
</style>
