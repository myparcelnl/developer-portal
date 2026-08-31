<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import MpBreadcrumb from '../components/MpBreadcrumb.vue';
import { integrationGroups, type Integration, type Market } from '../integrations';
import { isLocalizedPath, BASE, type Lang } from '../sidebar';
import { lang as uiLang } from '../composables/useI18n';
import markUrl from '../../images/myparcel-mark.svg?url';

// Vite has to see the logo directory statically, otherwise the files never
// make it into the production bundle. `import.meta.glob` gives us a
// filename -> hashed-URL map that works in dev and in a build alike.
const logoModules = import.meta.glob('../../images/integrations/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const logoUrls: Record<string, string> = Object.fromEntries(
  Object.entries(logoModules).map(([path, url]) => [path.split('/').pop() as string, url]),
);

/** Resolved URL for an integration logo, or an empty string if it is missing. */
function logo(file: string): string {
  return logoUrls[file] ?? '';
}

type MarketFilter = 'all' | Market;

// SSR renders the unfiltered English page. Everything that depends on the
// visitor's stored language (doc links, the pre-selected market) is only
// applied after mount, so the server HTML and the first client render match.
const mounted = ref(false);
const market = ref<MarketFilter>('all');
const query = ref('');

onMounted(() => {
  mounted.value = true;
  // An Italian visitor almost certainly wants the Italian market, so start
  // there. Every other language starts on the full list.
  if (uiLang.value === 'it') market.value = 'it';
});

const linkLang = computed<Lang>(() => (mounted.value ? (uiLang.value as Lang) : 'en'));

/** Resolve an integration link to a real href, localised where we can. */
function href(link: Integration['links'][number]): string {
  if (link.external) return link.url;
  const prefix = isLocalizedPath(link.url, linkLang.value) ? `/${linkLang.value}` : '';
  return BASE + prefix + link.url;
}

const trimmedQuery = computed(() => query.value.trim().toLowerCase());

function matchesQuery(item: Integration): boolean {
  return trimmedQuery.value === '' || item.name.toLowerCase().includes(trimmedQuery.value);
}

function matchesMarket(item: Integration, m: MarketFilter): boolean {
  return m === 'all' || item.markets.includes(m);
}

function isVisible(item: Integration): boolean {
  return matchesMarket(item, market.value) && matchesQuery(item);
}

/**
 * Everything on a card that is not its name or its links, joined into one
 * quiet line. Market is deliberately absent: that is what the filter is for,
 * and repeating it on every card only competes with the platform name.
 */
function meta(item: Integration): string[] {
  const out: string[] = [];
  if (item.connection) out.push(item.connection);
  if (item.eol) out.push('End of life');
  return out;
}

// Only two chips: every integration works in the Dutch and Belgian market, so
// a 'Netherlands & Belgium' filter returned the exact same 63 items as 'All
// markets'. The one real question is whether something works in Italy.
const marketFilters: { value: MarketFilter; label: string }[] = [
  { value: 'all', label: 'All markets' },
  { value: 'it', label: 'Italy' },
];

const allItems = computed(() => integrationGroups.flatMap((g) => g.items));

/** Per-chip counts, so you can see what a market holds before switching. */
const marketCounts = computed(() =>
  Object.fromEntries(
    marketFilters.map((f) => [
      f.value,
      allItems.value.filter((i) => matchesMarket(i, f.value) && matchesQuery(i)).length,
    ]),
  ) as Record<MarketFilter, number>,
);

const visibleCount = computed(() => allItems.value.filter(isVisible).length);

const groupCounts = computed(() =>
  Object.fromEntries(
    integrationGroups.map((g) => [g.id, g.items.filter(isVisible).length]),
  ) as Record<string, number>,
);

const breadcrumbTrail = [{ text: 'Home', link: '/' }, { text: 'Integrations' }];
</script>

<template>
  <MpHeader />

  <main class="mp-standalone mp-integrations">
    <MpBreadcrumb :trail="breadcrumbTrail" />

    <h1 class="mp-docs-content__title" data-i18n="Integrations">Integrations</h1>
    <p class="mp-docs-content__lede" data-i18n="Every way to connect a shop, a warehouse or your own code to MyParcel: plug-ins, SDKs, Backoffice API integrations and utilities. Not every integration is available in every market, so filter by the market you ship in.">
      Every way to connect a shop, a warehouse or your own code to MyParcel:
      plug-ins, SDKs, Backoffice API integrations and utilities. Not every
      integration is available in every market, so filter by the market you
      ship in.
    </p>

    <!-- ============================================================
         TOOLBAR — sticks under the navbar, because the catalogue is
         long enough that you want to filter without scrolling back up.
    ============================================================ -->
    <div class="mp-int-toolbar">
      <div class="mp-int-chips" role="group" aria-label="Filter by market">
        <button
          v-for="f in marketFilters"
          :key="f.value"
          type="button"
          class="mp-int-chip"
          :class="{ 'is-active': market === f.value }"
          :aria-pressed="market === f.value"
          @click="market = f.value"
        >
          <span :data-i18n="f.label">{{ f.label }}</span>
          <ClientOnly><span class="mp-int-chip__count">{{ marketCounts[f.value] }}</span></ClientOnly>
        </button>
      </div>

      <label class="mp-int-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <input
          v-model="query"
          type="search"
          placeholder="Filter integrations…"
          data-i18n-placeholder="Filter integrations…"
          aria-label="Filter integrations by name"
        />
      </label>
    </div>

    <p v-if="market === 'it'" class="mp-int-note">
      <span data-i18n="Only what is available in Italy: the plug-ins and sales channels built for that market, plus everything that talks to our API directly.">Only what is available in Italy: the plug-ins and sales channels built for that market, plus everything that talks to our API directly.</span>
    </p>

    <!-- ============================================================
         GROUPS — every card stays mounted so the runtime translator
         never has to re-walk a freshly created subtree. Filtering is
         done with v-show.
    ============================================================ -->
    <section
      v-for="group in integrationGroups"
      :key="group.id"
      v-show="groupCounts[group.id] > 0"
      class="mp-int-group"
    >
      <h2 :id="group.id" class="mp-int-group__title">
        <span :data-i18n="group.label">{{ group.label }}</span>
        <ClientOnly><span class="mp-int-group__count">{{ groupCounts[group.id] }}</span></ClientOnly>
      </h2>
      <p class="mp-int-group__intro" :data-i18n="group.intro">{{ group.intro }}</p>

      <div class="mp-int-grid">
        <article
          v-for="item in group.items"
          :key="item.name"
          v-show="isVisible(item)"
          class="mp-int-card"
          :class="{ 'is-eol': item.eol }"
        >
          <div
            class="mp-int-card__logo"
            :class="{ 'is-tinted': !!item.logoBg }"
            :style="item.logoBg ? { background: item.logoBg } : undefined"
          >
            <img :src="logo(item.logo)" :alt="`${item.name} logo`" loading="lazy" />

            <!-- Built by MyParcel: the mark instead of a text badge, so the
                 card stays quiet and our own integrations still stand out. -->
            <span
              v-if="item.byMyParcel"
              class="mp-int-card__mark"
              title="Built by MyParcel"
              data-i18n-title="Built by MyParcel"
            >
              <img :src="markUrl" alt="" width="17" height="18" />
              <span class="mp-sr-only" data-i18n="Built by MyParcel">Built by MyParcel</span>
            </span>
          </div>

          <div class="mp-int-card__body">
            <h3 class="mp-int-card__name">{{ item.name }}</h3>

            <p v-if="meta(item).length" class="mp-int-card__meta">
              <template v-for="(bit, i) in meta(item)" :key="bit">
                <span v-if="i > 0" class="mp-int-card__meta-sep" aria-hidden="true">·</span>
                <span :data-i18n="bit">{{ bit }}</span>
              </template>
            </p>

            <div v-if="item.links.length" class="mp-int-card__links">
              <a
                v-for="link in item.links"
                :key="link.label + link.url"
                class="mp-int-link"
                :class="`mp-int-link--${link.label.toLowerCase()}`"
                :href="href(link)"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener' : undefined"
              >
                <span :data-i18n="link.label">{{ link.label }}</span>
                <!-- Only on docs that leave the portal. GitHub and Website are
                     obviously external, an arrow there is just noise. -->
                <svg v-if="link.external && link.label === 'Documentation'" class="mp-int-link__ext" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
            <p v-else class="mp-int-card__nolinks" data-i18n="No documentation link yet">
              No documentation link yet
            </p>
          </div>
        </article>
      </div>
    </section>

    <p v-show="visibleCount === 0" class="mp-int-empty" data-i18n="No integrations match this filter.">
      No integrations match this filter.
    </p>

    <!-- ============================================================
         BUILD YOUR OWN
    ============================================================ -->
    <section class="mp-int-cta">
      <h2 data-i18n="Missing your platform?">Missing your platform?</h2>
      <p data-i18n="Build your own integration on our API and share it with us. Start with the getting started guide, pick an SDK and you can create your first label the same day.">
        Build your own integration on our API and share it with us. Start with
        the getting started guide, pick an SDK and you can create your first
        label the same day.
      </p>
      <div class="mp-int-cta__actions">
        <a class="mp-btn mp-btn--primary" :href="`${BASE}/guides/getting-started.html`" data-i18n="Getting started">Getting started</a>
        <a class="mp-btn mp-btn--tertiary" :href="`${BASE}/contact.html`" data-i18n="Tell us about it">Tell us about it</a>
      </div>
    </section>
  </main>

  <MpFooter />
</template>
