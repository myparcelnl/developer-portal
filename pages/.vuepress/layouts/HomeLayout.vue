<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import { fetchStatus, type StatusSummary } from '../composables/useStatusPage';
import { apiList } from '../api-meta';
import { docsSidebar } from '../sidebar';
import { integrationGroups, integrationCount } from '../integrations';

const CARRIER_LOGOS = 'https://assets.myparcel.nl/skin/general-images/carrier-logos/svg';

// Dynamic logo paths need the glob, see AGENTS.md "Assets".
const localCarrierLogos = import.meta.glob('../../images/carriers/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const localLogo = (file: string) => localCarrierLogos[`../../images/carriers/${file}`];

const integrationLogos = import.meta.glob('../../images/integrations/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

// --- The parcel route ---------------------------------------------------------
// A parcel travels from the webshop, through the Shipment API and the carrier,
// to the front door. The request body follows the getting started guide, the
// status codes and barcode come from the shipments and webhooks guides.

const routeCarriers = [
  { id: 1, name: 'PostNL', logo: `${CARRIER_LOGOS}/postnl.svg` },
  { id: 9, name: 'DHL For You', logo: `${CARRIER_LOGOS}/dhl.svg` },
  { id: 4, name: 'DPD', logo: `${CARRIER_LOGOS}/dpd.svg` },
  { id: 2, name: 'bpost', logo: `${CARRIER_LOGOS}/bpost.svg` },
  { id: 15, name: 'BRT', logo: localLogo('brt.svg') },
];
const routePaths = [
  'M96 432 C 150 360, 196 300, 262 268',
  'M262 268 C 330 236, 370 380, 444 352',
  'M444 352 C 520 324, 530 210, 566 150',
];
const BARCODE = '3SMYPA749883621';
const SHIPMENT_ID = 123456;

const current = ref(0);
const carrier = computed(() => routeCarriers[current.value]);

// 0 idle, 1 request, 2 label, 3 carrier, 4 delivered, 5 fading out
const step = ref(0);
const responded = ref(false);

const scene = ref<HTMLElement | null>(null);
const parcel = ref<SVGGElement | null>(null);
const segments = ref<SVGPathElement[]>([]);
const trails = ref<SVGPathElement[]>([]);

let token = 0;
let autoplay = true;
let inView = true;
let reduce = false;
let observer: IntersectionObserver | null = null;
let revealObserver: IntersectionObserver | null = null;

const sleep = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

async function waitVisible(run: number) {
  while (run === token && (!inView || document.hidden)) await sleep(400);
}

function placeParcel(x: number, y: number) {
  parcel.value?.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
}

function setTrail(i: number, t: number) {
  const el = trails.value[i];
  if (!el) return;
  const len = el.getTotalLength();
  el.style.strokeDasharray = `${len}`;
  el.style.strokeDashoffset = `${len * (1 - t)}`;
}

function travel(i: number, run: number, duration = 1500) {
  const seg = segments.value[i];
  if (!seg) return Promise.resolve();
  const len = seg.getTotalLength();
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  return new Promise<void>((resolve) => {
    const start = performance.now();
    const frame = (now: number) => {
      if (run !== token) return resolve();
      const t = Math.min(1, (now - start) / duration);
      const p = seg.getPointAtLength(len * ease(t));
      placeParcel(p.x, p.y);
      setTrail(i, ease(t));
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
}

function resetRoute() {
  const first = segments.value[0]?.getPointAtLength(0);
  if (first) placeParcel(first.x, first.y);
  trails.value.forEach((_, i) => setTrail(i, 0));
}

function showFinished() {
  const last = segments.value[segments.value.length - 1];
  if (last) {
    const p = last.getPointAtLength(last.getTotalLength());
    placeParcel(p.x, p.y);
  }
  trails.value.forEach((_, i) => setTrail(i, 1));
  responded.value = true;
  step.value = 4;
}

async function play() {
  const run = ++token;
  if (reduce) {
    showFinished();
    return;
  }
  while (run === token) {
    step.value = 0;
    responded.value = false;
    resetRoute();
    await sleep(350);
    await waitVisible(run);
    if (run !== token) return;
    step.value = 1;
    await sleep(1300);
    if (run !== token) return;
    responded.value = true;
    await sleep(600);
    await travel(0, run);
    if (run !== token) return;
    step.value = 2;
    await sleep(1400);
    await travel(1, run);
    if (run !== token) return;
    step.value = 3;
    await sleep(1100);
    await travel(2, run);
    if (run !== token) return;
    step.value = 4;
    await sleep(3200);
    if (run !== token) return;
    if (!autoplay) return;
    step.value = 5;
    await sleep(500);
    await waitVisible(run);
    if (run !== token) return;
    current.value = (current.value + 1) % routeCarriers.length;
  }
}

function choose(i: number) {
  autoplay = false;
  current.value = i;
  play();
}

function onCarrierKey(e: KeyboardEvent, i: number) {
  const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
  if (!dir) return;
  e.preventDefault();
  const n = (i + dir + routeCarriers.length) % routeCarriers.length;
  choose(n);
  scene.value?.parentElement?.querySelectorAll<HTMLButtonElement>('.mp-route__chip')[n]?.focus();
}

// --- Live status ---------------------------------------------------------------
const status = ref<StatusSummary | null>(null);
const statusTone = computed<'operational' | 'degraded' | 'down' | 'loading'>(() => {
  const ind = status.value?.indicator;
  if (!ind) return 'loading';
  if (ind === 'none') return 'operational';
  if (ind === 'minor' || ind === 'maintenance') return 'degraded';
  return 'down';
});

onMounted(async () => {
  reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('mp-home-js');

  if (scene.value) {
    observer = new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0.2 });
    observer.observe(scene.value);
  }
  play();

  revealObserver = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      revealObserver?.unobserve(e.target);
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.mp-reveal').forEach((el) => revealObserver?.observe(el));

  try {
    status.value = await fetchStatus();
  } catch {
    // No status: the line keeps pointing at the status page.
  }
});

onBeforeUnmount(() => {
  token++;
  observer?.disconnect();
  revealObserver?.disconnect();
  document.documentElement.classList.remove('mp-home-js');
});

// --- Feature fragments ----------------------------------------------------------
const labelFormat = ref<'A4' | 'A6'>('A4');
const labelPosition = ref(1);
const delivery = ref('standard');
const sdk = ref<'php' | 'js'>('php');
const deliveryTypes = [
  ['standard', 'Standard delivery'],
  ['morning', 'Morning delivery'],
  ['evening', 'Evening delivery'],
  ['pickup', 'Pickup point'],
];

// --- APIs -------------------------------------------------------------------------
const apiDescriptions: Record<string, string> = {
  myparcel: 'Shipments, labels, delivery options, pickup locations, track & trace and webhooks.',
  order: 'Orders, packages, picklists, packing slips and assignment flows.',
  rule: 'Order rule groups that automate fulfilment decisions per shop.',
  address: 'Look up and validate addresses against postal data.',
  printing: 'Printers, printer groups and their sync status.',
  product: 'Create, update and query products and manage inventory.',
  'purchase-order': 'Purchase orders: creation, receipts and inventory intake.',
};
const apis = [...apiList].sort((a, b) => (a.slug === 'myparcel' ? -1 : b.slug === 'myparcel' ? 1 : 0));

// --- Carriers and platforms -----------------------------------------------------
const carrierTiles = [
  { name: 'PostNL', logo: `${CARRIER_LOGOS}/postnl.svg` },
  { name: 'DHL', logo: `${CARRIER_LOGOS}/dhl.svg` },
  { name: 'DPD', logo: `${CARRIER_LOGOS}/dpd.svg` },
  { name: 'UPS', logo: `${CARRIER_LOGOS}/ups.svg` },
  { name: 'bpost', logo: `${CARRIER_LOGOS}/bpost.svg` },
  { name: 'GLS', logo: `${CARRIER_LOGOS}/gls.svg` },
  { name: 'Trunkrs', logo: `${CARRIER_LOGOS}/trunkrs.svg` },
  { name: 'Cheap Cargo', logo: `${CARRIER_LOGOS}/cheapcargo.svg` },
  { name: 'BRT', logo: localLogo('brt.svg') },
  { name: 'InPost', logo: localLogo('inpost.svg') },
  { name: 'Poste Italiane', logo: localLogo('poste-italiane.svg') },
];

const platforms = (docsSidebar.find((g) => g.label === 'Platform integrations')?.items ?? [])
  .filter((item) => item.link !== '/integrations.html')
  .map((item) => {
    for (const group of integrationGroups) {
      const hit =
        group.items.find((i) => i.links.some((l) => l.url === item.link)) ??
        group.items.find((i) => i.name === item.text);
      if (hit) {
        return {
          name: item.text,
          link: item.link,
          logo: integrationLogos[`../../images/integrations/${hit.logo}`],
          logoBg: hit.logoBg,
        };
      }
    }
    return { name: item.text, link: item.link, logo: undefined, logoBg: undefined };
  });

const guideCount = docsSidebar.find((g) => g.label === 'Documentation')?.items.length ?? 0;
const sdkCount = docsSidebar.find((g) => g.label === 'SDKs')?.items.length ?? 0;
</script>

<template>
  <MpHeader />

  <main id="mp-main" class="mp-home" tabindex="-1">
    <!-- ============================================================
         HERO: a parcel travels from your webshop to the door
    ============================================================ -->
    <section class="mp-hx" aria-labelledby="mp-hx-title">
      <div class="mp-hx__inner">
        <div class="mp-hx__copy">
          <h1 id="mp-hx-title" class="mp-hx__title">
            <span class="mp-hx__line"><span data-i18n="Ship parcels">Ship parcels</span></span>
            <span class="mp-hx__line"><span data-i18n="from your code.">from your code.</span></span>
          </h1>
          <p class="mp-hx__sub" data-i18n="One API request creates a shipment and its label, for PostNL, DHL, bpost, DPD and ten more carrier services. Guides, SDKs, plug-ins and the full API reference live here.">
            One API request creates a shipment and its label, for PostNL, DHL, bpost, DPD and ten more carrier services. Guides, SDKs, plug-ins and the full API reference live here.
          </p>
          <div class="mp-hx__actions">
            <a href="/guides/getting-started.html" class="mp-btn mp-btn--primary mp-hx__go">
              <span data-i18n="Send your first shipment">Send your first shipment</span>
            </a>
            <a href="/api/" class="mp-btn mp-hx__ghost" data-i18n="Browse the API reference">Browse the API reference</a>
          </div>
          <a class="mp-hx__status" :class="`mp-hx__status--${statusTone}`" href="https://status.myparcel.nl/" target="_blank" rel="noopener">
            <span class="mp-hx__status-dot" aria-hidden="true"></span>
            <span v-show="statusTone === 'loading'" data-i18n="API status">API status</span>
            <span v-show="statusTone !== 'loading'">{{ status?.description }}</span>
          </a>
          <a class="mp-hx__mcp mp-arrow-link" href="https://mcp.myparcel.ai/beta"><span data-i18n="Connect your AI assistant with the MCP beta">Connect your AI assistant with the MCP beta</span></a>
        </div>

        <div class="mp-route">
          <div ref="scene" class="mp-route__scene" :class="`is-step-${step}`" data-ui>
            <svg class="mp-route__map" viewBox="0 0 640 520" aria-hidden="true">
              <!-- Dashed track, then the trail the parcel leaves behind it -->
              <g class="mp-route__track">
                <path v-for="d in routePaths" :key="d" ref="segments" :d="d" />
              </g>
              <g class="mp-route__trail">
                <path v-for="d in routePaths" :key="d" ref="trails" :d="d" />
              </g>
            </svg>

            <!-- Stops -->
            <span class="mp-route__stop mp-route__stop--shop" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9M9 20v-6h6v6"/></svg>
            </span>
            <span class="mp-route__stop mp-route__stop--api" aria-hidden="true">
              <img src="/images/myparcel-mark.svg" alt="" width="28" height="28" />
            </span>
            <span class="mp-route__stop mp-route__stop--carrier" aria-hidden="true">
              <img :src="carrier.logo" alt="" width="40" height="40" />
            </span>
            <span class="mp-route__stop mp-route__stop--home" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
            </span>

            <svg class="mp-route__layer" viewBox="0 0 640 520" aria-hidden="true">
              <!-- The parcel: a cardboard box with tape and a label -->
              <g ref="parcel" class="mp-route__parcel" transform="translate(96 432)">
                <ellipse class="mp-route__shadow" cx="0" cy="26" rx="34" ry="8" />
                <g class="mp-route__box">
                  <polygon points="0,-50 36,-33 0,-16 -36,-33" fill="#e3b77d" />
                  <polygon points="-36,-33 0,-16 0,22 -36,5" fill="#c9925a" />
                  <polygon points="0,-16 36,-33 36,5 0,22" fill="#b47d45" />
                  <polygon points="-22,-40 -14,-44 22,-27 14,-23" fill="#f2d5a2" />
                  <polygon points="6,-12 30,-23 30,-7 6,4" fill="#ffffff" />
                  <polygon points="9,-9 16,-12 16,-9 9,-6" fill="#ff8c00" />
                  <path d="M10 -2 L10 -6 M12 -3 L12 -7 M15 -4 L15 -8 M17 -5 L17 -9 M20 -6 L20 -10 M23 -8 L23 -12 M26 -9 L26 -13" stroke="#002621" stroke-width="1" />
                </g>
              </g>
            </svg>

            <!-- Cards that open at each stop -->
            <div class="mp-route__card mp-route__card--req" :class="{ 'is-on': step >= 1 && step < 5 }">
              <div class="mp-route__req-head"><code class="mp-route__verb">POST</code><code>/shipments</code></div>
<pre class="mp-route__code"><code><span class="l" style="--i:0"><b>"carrier"</b>: <i>{{ carrier.id }}</i>,</span>
<span class="l" style="--i:1"><b>"recipient"</b>: { <b>"cc"</b>: <em>"NL"</em>, … },</span>
<span class="l" style="--i:2"><b>"options"</b>: { <b>"package_type"</b>: <i>1</i> }</span></code></pre>
              <div class="mp-route__resp" :class="{ 'is-on': responded }"><code>201 Created</code> <code class="mp-route__soft">"id": {{ SHIPMENT_ID }}</code></div>
            </div>

            <div class="mp-route__card mp-route__card--label" :class="{ 'is-on': step >= 2 && step < 5 }">
              <div class="mp-route__label">
                <div class="mp-route__label-top">
                  <img :src="carrier.logo" :alt="carrier.name" width="64" height="24" />
                  <strong>NL</strong>
                </div>
                <span class="mp-route__label-to">J. de Vries</span>
                <span class="mp-route__label-addr">Antareslaan 31, 2132JE Hoofddorp</span>
                <span class="mp-route__bars" aria-hidden="true"></span>
                <code class="mp-route__label-code">{{ BARCODE }}</code>
              </div>
            </div>

            <div class="mp-route__card mp-route__card--status" :class="{ 'is-on': step >= 3 && step < 5 }">
              <span class="mp-route__badge">3</span>
              <span>
                <strong data-i18n="Handed to carrier">Handed to carrier</strong>
                <small>{{ carrier.name }}</small>
              </span>
            </div>

            <div class="mp-route__card mp-route__card--done" :class="{ 'is-on': step === 4 }">
              <span class="mp-route__check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
              </span>
              <span>
                <strong data-i18n="Delivered">Delivered</strong>
                <small><span data-i18n="Status">Status</span> 7</small>
              </span>
            </div>
          </div>

          <div class="mp-route__chips" role="radiogroup" aria-label="Carrier">
            <button
              v-for="(c, i) in routeCarriers"
              :key="c.id"
              type="button"
              role="radio"
              class="mp-route__chip"
              :aria-checked="i === current"
              :tabindex="i === current ? 0 : -1"
              @click="choose(i)"
              @keydown="onCarrierKey($event, i)"
            >{{ c.name }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         TWO WAYS IN
    ============================================================ -->
    <section class="mp-ways" aria-label="Start here">
      <article class="mp-way mp-reveal">
        <span class="mp-tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
        </span>
        <h2 class="mp-way__title" data-i18n="Documentation">Documentation</h2>
        <p data-i18n="Guides for every step, from your API key to your first label and the webhooks after it.">Guides for every step, from your API key to your first label and the webhooks after it.</p>
        <ul class="mp-checks">
          <li><span>{{ guideCount }}</span>&nbsp;<span data-i18n="guides, from authentication to webhooks">guides, from authentication to webhooks</span></li>
          <li><span data-i18n="SDKs for PHP and JavaScript">SDKs for PHP and JavaScript</span></li>
          <li><span>{{ platforms.length }}</span>&nbsp;<span data-i18n="platform manuals">platform manuals</span></li>
        </ul>
        <a class="mp-arrow-link" href="/guides/getting-started.html"><span data-i18n="Open the documentation">Open the documentation</span></a>
      </article>
      <article class="mp-way mp-reveal">
        <span class="mp-tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </span>
        <h2 class="mp-way__title" data-i18n="API reference">API reference</h2>
        <p data-i18n="Every endpoint, parameter and schema, generated from the published OpenAPI spec of each API.">Every endpoint, parameter and schema, generated from the published OpenAPI spec of each API.</p>
        <ul class="mp-checks">
          <li><span>{{ apis.length }}</span>&nbsp;<span data-i18n="APIs on one account">APIs on one account</span></li>
          <li><span data-i18n="Code samples for every request">Code samples for every request</span></li>
          <li><span data-i18n="OpenAPI specs to download">OpenAPI specs to download</span></li>
        </ul>
        <a class="mp-arrow-link" href="/api/"><span data-i18n="Open the API reference">Open the API reference</span></a>
      </article>
    </section>

    <!-- ============================================================
         FEATURES: alternating rows, a working piece of the product each
    ============================================================ -->
    <section class="mp-feats" aria-labelledby="mp-feats-title">
      <h2 id="mp-feats-title" class="mp-home__h2 mp-home__h2--center mp-reveal" data-i18n="Everything after the order">Everything after the order</h2>

      <div class="mp-feat mp-reveal">
        <div class="mp-feat__art">
          <div class="mp-float mp-frag" data-ui>
            <div class="mp-frag__seg" role="radiogroup" aria-label="Format">
              <button v-for="f in ['A4', 'A6']" :key="f" type="button" role="radio" :aria-checked="labelFormat === f" @click="labelFormat = f as 'A4' | 'A6'">{{ f }}</button>
            </div>
            <div class="mp-frag__sheet" :class="{ 'is-a6': labelFormat === 'A6' }">
              <button
                v-for="p in 4"
                :key="p"
                type="button"
                class="mp-frag__pos"
                :aria-pressed="labelPosition === p"
                :aria-label="`Position ${p}`"
                :disabled="labelFormat === 'A6'"
                @click="labelPosition = p"
              ><span v-if="labelFormat === 'A4' && p >= labelPosition" class="mp-frag__mini"></span></button>
            </div>
            <code class="mp-frag__query">?format={{ labelFormat }}<template v-if="labelFormat === 'A4'">&amp;positions={{ labelPosition }}</template></code>
          </div>
        </div>
        <div class="mp-feat__text">
          <span class="mp-tile" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          </span>
          <h3 class="mp-feat__title" data-i18n="Labels in A4 or A6">Labels in A4 or A6</h3>
          <p data-i18n="Fetch one label or a hundred as one PDF. On A4 you choose where the first label goes.">Fetch one label or a hundred as one PDF. On A4 you choose where the first label goes.</p>
          <a class="mp-arrow-link" href="/guides/shipments.html#labels"><span data-i18n="Read about labels">Read about labels</span></a>
        </div>
      </div>

      <div class="mp-feat mp-feat--flip mp-reveal">
        <div class="mp-feat__art">
          <div class="mp-float mp-frag" data-ui>
            <fieldset class="mp-frag__choices">
              <legend data-i18n="Delivery">Delivery</legend>
              <label v-for="d in deliveryTypes" :key="d[0]" class="mp-frag__choice">
                <input v-model="delivery" type="radio" name="mp-delivery" :value="d[0]" />
                <span :data-i18n="d[1]">{{ d[1] }}</span>
              </label>
            </fieldset>
          </div>
          <span class="mp-float mp-float--logo mp-float--a" aria-hidden="true"><img :src="`${CARRIER_LOGOS}/postnl.svg`" alt="" width="40" height="40" /></span>
          <span class="mp-float mp-float--logo mp-float--b" aria-hidden="true"><img :src="`${CARRIER_LOGOS}/dhl.svg`" alt="" width="40" height="40" /></span>
        </div>
        <div class="mp-feat__text">
          <span class="mp-tile" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <h3 class="mp-feat__title" data-i18n="Delivery options at checkout">Delivery options at checkout</h3>
          <p data-i18n="A widget that shows your customer the carriers, delivery moments and pickup points you allow.">A widget that shows your customer the carriers, delivery moments and pickup points you allow.</p>
          <a class="mp-arrow-link" href="/platforms/delivery-options.html"><span data-i18n="Add delivery options">Add delivery options</span></a>
        </div>
      </div>

      <div class="mp-feat mp-reveal">
        <div class="mp-feat__art">
          <div class="mp-float mp-frag mp-frag--code" data-ui>
<pre><code><span class="c">X-MyParcel-Hook: shipment_status_change</span>
{ "data": { "hooks": [{
  <b>"shipment_id"</b>: <i>123456</i>,
  <b>"status"</b>: <i>2</i>,
  <b>"barcode"</b>: <em>"3SMYPA749883621"</em>
}] } }</code></pre>
          </div>
          <div class="mp-float mp-float--note mp-float--c" aria-hidden="true">
            <span class="mp-route__badge">2</span>
            <strong data-i18n="Registered">Registered</strong>
          </div>
        </div>
        <div class="mp-feat__text">
          <span class="mp-tile" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </span>
          <h3 class="mp-feat__title" data-i18n="Webhooks, not polling">Webhooks, not polling</h3>
          <p data-i18n="Subscribe once. MyParcel posts every status change of a shipment to your URL.">Subscribe once. MyParcel posts every status change of a shipment to your URL.</p>
          <a class="mp-arrow-link" href="/guides/webhooks.html"><span data-i18n="Set up webhooks">Set up webhooks</span></a>
        </div>
      </div>

      <div class="mp-feat mp-feat--flip mp-reveal">
        <div class="mp-feat__art">
          <div class="mp-float mp-frag mp-frag--term" data-ui>
            <div class="mp-frag__tabs" role="tablist" aria-label="SDK">
              <button type="button" role="tab" :aria-selected="sdk === 'php'" @click="sdk = 'php'">PHP</button>
              <button type="button" role="tab" :aria-selected="sdk === 'js'" @click="sdk = 'js'">JavaScript</button>
            </div>
            <pre><code><span class="p">$</span> {{ sdk === 'php' ? 'composer require myparcelnl/sdk:^11.0' : 'npm install @myparcel-dev/sdk' }}</code></pre>
          </div>
        </div>
        <div class="mp-feat__text">
          <span class="mp-tile" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/></svg>
          </span>
          <h3 class="mp-feat__title" data-i18n="SDKs for PHP and JavaScript">SDKs for PHP and JavaScript</h3>
          <p data-i18n="Skip the raw HTTP. Install the SDK and create shipments with typed objects.">Skip the raw HTTP. Install the SDK and create shipments with typed objects.</p>
          <a class="mp-arrow-link" :href="sdk === 'php' ? '/guides/php-sdk-v11.html' : '/guides/javascript-sdk.html'"><span data-i18n="Install an SDK">Install an SDK</span></a>
        </div>
      </div>
    </section>

    <!-- ============================================================
         APIS on a mint band
    ============================================================ -->
    <section class="mp-band" aria-labelledby="mp-apis-title">
      <div class="mp-band__inner">
        <h2 id="mp-apis-title" class="mp-home__h2 mp-reveal" data-i18n="Seven APIs, one account">Seven APIs, one account</h2>
        <div class="mp-apis">
          <a v-for="a in apis" :key="a.slug" class="mp-api mp-reveal" :href="`/api/${a.slug}.html`">
            <span class="mp-api__name">{{ a.name }}</span>
            <code class="mp-api__host">{{ a.host }}</code>
            <span class="mp-api__desc">{{ apiDescriptions[a.slug] }}</span>
            <span class="mp-api__meta">{{ a.endpoints }} <span data-i18n="endpoints">endpoints</span></span>
          </a>
          <a class="mp-api mp-api--all mp-reveal" href="/api/">
            <span class="mp-api__name" data-i18n="All APIs">All APIs</span>
            <span class="mp-api__desc" data-i18n="Download the OpenAPI specs or browse every endpoint in one place.">Download the OpenAPI specs or browse every endpoint in one place.</span>
            <span class="mp-arrow-link" data-i18n="API overview">API overview</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================================
         CARRIERS AND PLATFORMS
    ============================================================ -->
    <section class="mp-net" aria-labelledby="mp-net-title">
      <div class="mp-net__text mp-reveal">
        <h2 id="mp-net-title" class="mp-home__h2" data-i18n="One integration, every carrier">One integration, every carrier</h2>
        <p data-i18n="Build against MyParcel once and ship with the carriers your contract covers. Or install a plug-in for your platform and skip the code.">Build against MyParcel once and ship with the carriers your contract covers. Or install a plug-in for your platform and skip the code.</p>
        <ul class="mp-checks">
          <li><span data-i18n="Carrier IDs in the data types guide">Carrier IDs in the data types guide</span></li>
          <li><span>{{ sdkCount }}</span>&nbsp;<span data-i18n="SDK guides">SDK guides</span></li>
          <li><span>{{ integrationCount }}</span>&nbsp;<span data-i18n="integrations in the catalogue">integrations in the catalogue</span></li>
        </ul>
        <div class="mp-net__links">
          <a class="mp-arrow-link" href="/guides/data-types.html"><span data-i18n="See carrier IDs">See carrier IDs</span></a>
          <a class="mp-arrow-link" href="/integrations.html"><span data-i18n="See all integrations">See all integrations</span></a>
        </div>
      </div>
      <div class="mp-net__art mp-reveal">
        <div class="mp-net__group">
          <span class="mp-net__label" data-i18n="Carriers">Carriers</span>
          <div class="mp-net__tiles">
            <span v-for="c in carrierTiles" :key="c.name" class="mp-logo-tile" :title="c.name">
              <img :src="c.logo" :alt="c.name" width="44" height="44" loading="lazy" />
            </span>
          </div>
        </div>
        <div class="mp-net__group">
          <span class="mp-net__label" data-i18n="Platforms">Platforms</span>
          <div class="mp-net__tiles">
            <a v-for="p in platforms" :key="p.link" class="mp-logo-tile" :href="p.link" :title="p.name" :style="p.logoBg ? { background: p.logoBg } : undefined">
              <img v-if="p.logo" :src="p.logo" :alt="p.name" width="44" height="44" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         HELP
    ============================================================ -->
    <section class="mp-help" aria-labelledby="mp-help-title">
      <div class="mp-help__panel mp-reveal">
        <h2 id="mp-help-title" class="mp-home__h2" data-i18n="Stuck? Ask the developers.">Stuck? Ask the developers.</h2>
        <div class="mp-help__cards">
          <a class="mp-help__card" href="/contact.html">
            <span class="mp-tile" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </span>
            <strong data-i18n="Contact">Contact</strong>
            <span data-i18n="Send us your question about the API or a plug-in.">Send us your question about the API or a plug-in.</span>
          </a>
          <a class="mp-help__card" href="https://github.com/myparcelnl" target="_blank" rel="noopener">
            <span class="mp-tile" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
            </span>
            <strong>GitHub</strong>
            <span data-i18n="Read the source of our plug-ins and SDKs, and open an issue.">Read the source of our plug-ins and SDKs, and open an issue.</span>
          </a>
          <a class="mp-help__card" href="https://status.myparcel.nl" target="_blank" rel="noopener">
            <span class="mp-tile" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </span>
            <strong data-i18n="Status page">Status page</strong>
            <span data-i18n="See whether the APIs are up, and read about incidents.">See whether the APIs are up, and read about incidents.</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <MpFooter />
</template>
