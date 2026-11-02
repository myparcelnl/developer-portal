<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import { fetchStatus, type StatusSummary } from '../composables/useStatusPage';
import { apiList } from '../api-meta';
import { docsSidebar } from '../sidebar';
import { integrationGroups, integrationCount } from '../integrations';

// --- The label machine ------------------------------------------------------
// The hero sends a real Shipment API request (the body from the getting
// started guide) and prints the label it returns. Carrier IDs, the status
// codes and the barcode come from the guides; the recipients are samples.

interface Sample {
  id: number;
  name: string;
  logo: string;
  cc: string;
  person: string;
  street: string;
  number: string;
  postal: string;
  city: string;
}

const CARRIER_LOGOS = 'https://assets.myparcel.nl/skin/general-images/carrier-logos/svg';

// Dynamic logo paths need the glob, see AGENTS.md "Assets".
const localCarrierLogos = import.meta.glob('../../images/carriers/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const localLogo = (file: string) => localCarrierLogos[`../../images/carriers/${file}`];

const samples: Sample[] = [
  { id: 1, name: 'PostNL', logo: `${CARRIER_LOGOS}/postnl.svg`, cc: 'NL', person: 'J. de Vries', street: 'Antareslaan', number: '31', postal: '2132JE', city: 'Hoofddorp' },
  { id: 9, name: 'DHL For You', logo: `${CARRIER_LOGOS}/dhl.svg`, cc: 'NL', person: 'S. Jansen', street: 'Antareslaan', number: '31', postal: '2132JE', city: 'Hoofddorp' },
  { id: 2, name: 'bpost', logo: `${CARRIER_LOGOS}/bpost.svg`, cc: 'BE', person: 'L. Peeters', street: 'Grote Markt', number: '1', postal: '2000', city: 'Antwerpen' },
  { id: 4, name: 'DPD', logo: `${CARRIER_LOGOS}/dpd.svg`, cc: 'NL', person: 'M. Bakker', street: 'Antareslaan', number: '31', postal: '2132JE', city: 'Hoofddorp' },
  { id: 15, name: 'BRT', logo: localLogo('brt.svg'), cc: 'IT', person: 'G. Rossi', street: 'Piazza del Duomo', number: '1', postal: '20122', city: 'Milano' },
];

// The webhooks guide uses this barcode; the shipment ID and reference come
// from the shipments guide.
const BARCODE = '3SMYPA749883621';
const SHIPMENT_ID = 123456;
const REFERENCE = 'ORDER-2026-01042';

const current = ref(0);
const sample = computed(() => samples[current.value]);

// Bars for the label. Purely visual: a fixed pattern seeded by the text, so
// every carrier prints a different but stable barcode.
function bars(seed: string) {
  const out: { x: number; w: number }[] = [];
  let x = 0;
  for (let i = 0; i < 44; i++) {
    const c = seed.charCodeAt(i % seed.length) + i * 7;
    const w = 1 + (c % 3);
    if (i % 2 === 0) out.push({ x, w });
    x += w + 1 + ((c >> 2) % 2);
  }
  return { bars: out, width: x };
}
const barcode = computed(() => bars(`${sample.value.name}${BARCODE}`));

const stage = ref<HTMLElement | null>(null);
let timers: number[] = [];
let autoplay = true;
let inView = true;
let reduce = false;
let observer: IntersectionObserver | null = null;

function clearTimers() {
  timers.forEach((t) => window.clearTimeout(t));
  timers = [];
}

function at(ms: number, fn: () => void) {
  timers.push(window.setTimeout(fn, ms));
}

// Every step of the run is a data attribute on the stage; the stylesheet does
// the moving. Vue never binds these, so it never resets them mid-run.
function setPhase(name: string, on = true) {
  const el = stage.value;
  if (!el) return;
  if (on) el.setAttribute(`data-${name}`, '');
  else el.removeAttribute(`data-${name}`);
}

const PHASES = ['typed', 'sent', 'printed', 'torn', 'track'];

function reset() {
  const el = stage.value;
  if (!el) return;
  el.setAttribute('data-reset', '');
  PHASES.forEach((p) => setPhase(p, false));
  el.dataset.step = '0';
  void el.offsetWidth; // flush, so the next run starts from the top
  el.removeAttribute('data-reset');
}

function finish() {
  const el = stage.value;
  if (!el) return;
  el.setAttribute('data-reset', '');
  PHASES.forEach((p) => setPhase(p));
  el.dataset.step = '4';
}

function run() {
  clearTimers();
  if (reduce) {
    finish();
    return;
  }
  reset();
  at(60, () => setPhase('typed'));
  at(1100, () => setPhase('sent'));
  at(1700, () => setPhase('printed'));
  at(3300, () => setPhase('torn'));
  [3500, 4100, 4700, 5300].forEach((ms, i) =>
    at(ms, () => {
      setPhase('track');
      if (stage.value) stage.value.dataset.step = String(i + 1);
    }),
  );
  at(9000, () => {
    if (!autoplay) return;
    if (!inView || document.hidden) {
      // Wait until someone can see it before printing the next one.
      at(1000, () => next());
      return;
    }
    next();
  });
}

function next() {
  if (!inView || document.hidden) {
    at(1000, next);
    return;
  }
  current.value = (current.value + 1) % samples.length;
  run();
}

function choose(i: number) {
  autoplay = false;
  current.value = i;
  run();
}

function onCarrierKey(e: KeyboardEvent, i: number) {
  const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
  if (!step) return;
  e.preventDefault();
  const n = (i + step + samples.length) % samples.length;
  choose(n);
  const buttons = stage.value?.querySelectorAll<HTMLButtonElement>('.mp-ship__carrier');
  buttons?.[n]?.focus();
}

// --- Section entrances -------------------------------------------------------
let revealObserver: IntersectionObserver | null = null;

// --- Live status -------------------------------------------------------------
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

  if (stage.value) {
    observer = new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0.2 });
    observer.observe(stage.value);
  }
  run();

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
  clearTimers();
  observer?.disconnect();
  revealObserver?.disconnect();
  document.documentElement.classList.remove('mp-home-js');
});

// --- Capabilities --------------------------------------------------------------
const labelFormat = ref<'A4' | 'A6'>('A4');
const labelPosition = ref(1);
const delivery = ref('standard');
const sdk = ref<'php' | 'js'>('php');

// --- API index -------------------------------------------------------------------
const apiDescriptions: Record<string, string> = {
  myparcel: 'The core shipping API: shipments, delivery options, drop-off and pickup locations, track & trace, notifications and webhooks.',
  order: 'Orders, packages, picklists, packing slips and assignment flows.',
  rule: 'Configure order rule groups to automate fulfilment decisions per shop.',
  address: 'Look up and validate addresses against postal data.',
  printing: 'Direct printing: manage printers, printer groups and sync status.',
  product: 'Product catalogue: create, update and query products and manage inventory.',
  'purchase-order': 'Manage purchase orders: creation, receipts and inventory intake.',
};
const apis = [...apiList].sort((a, b) => (a.slug === 'myparcel' ? -1 : b.slug === 'myparcel' ? 1 : 0));
const apiIndex = ref(0);
const api = computed(() => apis[apiIndex.value]);
const apiGroups = computed(() =>
  (api.value.groupOverrides ?? []).filter((g) => g.key !== 'overview').map((g) => g.label),
);

// --- Carriers and platforms -----------------------------------------------------
const carriers = [
  { id: 1, name: 'PostNL', logo: `${CARRIER_LOGOS}/postnl.svg` },
  { id: 2, name: 'bpost', logo: `${CARRIER_LOGOS}/bpost.svg` },
  { id: 3, name: 'Cheap Cargo', logo: `${CARRIER_LOGOS}/cheapcargo.svg` },
  { id: 4, name: 'DPD', logo: `${CARRIER_LOGOS}/dpd.svg` },
  { id: 9, name: 'DHL For You', logo: `${CARRIER_LOGOS}/dhl.svg` },
  { id: 10, name: 'DHL Parcel Connect', logo: `${CARRIER_LOGOS}/dhl.svg` },
  { id: 11, name: 'DHL Europlus', logo: `${CARRIER_LOGOS}/dhl.svg` },
  { id: 12, name: 'UPS Standard', logo: `${CARRIER_LOGOS}/ups.svg` },
  { id: 13, name: 'UPS Express Saver', logo: `${CARRIER_LOGOS}/ups.svg` },
  { id: 14, name: 'GLS', logo: `${CARRIER_LOGOS}/gls.svg` },
  { id: 15, name: 'BRT', logo: localLogo('brt.svg') },
  { id: 16, name: 'Trunkrs', logo: `${CARRIER_LOGOS}/trunkrs.svg` },
  { id: 17, name: 'InPost', logo: localLogo('inpost.svg') },
  { id: 18, name: 'Poste Italiane', logo: localLogo('poste-italiane.svg') },
];

const integrationLogos = import.meta.glob('../../images/integrations/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

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
          kind: hit.connection ?? group.label,
        };
      }
    }
    return { name: item.text, link: item.link, logo: undefined, logoBg: undefined, kind: '' };
  });

const guideCount = docsSidebar.find((g) => g.label === 'Documentation')?.items.length ?? 0;
</script>

<template>
  <MpHeader />

  <main id="mp-main" class="mp-home" tabindex="-1">
    <!-- ============================================================
         HERO: a request goes out, a label comes back
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="/api/" class="mp-hx__link" data-i18n="Browse the API reference">Browse the API reference</a>
          </div>
          <div class="mp-hx__meta">
            <a class="mp-hx__status" :class="`mp-hx__status--${statusTone}`" href="https://status.myparcel.nl/" target="_blank" rel="noopener">
              <span class="mp-hx__status-dot" aria-hidden="true"></span>
              <span v-show="statusTone === 'loading'" data-i18n="API status">API status</span>
              <span v-show="statusTone !== 'loading'">{{ status?.description }}</span>
            </a>
            <a class="mp-hx__mcp" href="https://mcp.myparcel.ai/beta" data-i18n="Connect your AI assistant with the MCP beta">Connect your AI assistant with the MCP beta</a>
          </div>
        </div>

        <div ref="stage" class="mp-ship" data-ui data-step="0">
          <div class="mp-ship__carriers" role="radiogroup" aria-label="Carrier">
            <button
              v-for="(s, i) in samples"
              :key="s.id"
              type="button"
              role="radio"
              class="mp-ship__carrier"
              :aria-checked="i === current"
              :tabindex="i === current ? 0 : -1"
              @click="choose(i)"
              @keydown="onCarrierKey($event, i)"
            >{{ s.name }}</button>
          </div>

          <div class="mp-ship__req">
            <div class="mp-ship__req-head">
              <code class="mp-ship__verb">POST</code>
              <code class="mp-ship__path">api.myparcel.nl/shipments</code>
            </div>
<pre class="mp-ship__code" aria-label="Request body"><code><span class="l" style="--i:0">{ "data": { "shipments": [{</span>
<span class="l" style="--i:1">  <b>"carrier"</b>: <i class="mp-ship__hot">{{ sample.id }}</i>,</span>
<span class="l" style="--i:2">  <b>"recipient"</b>: {</span>
<span class="l" style="--i:3">    <b>"cc"</b>: <em>"{{ sample.cc }}"</em>,</span>
<span class="l" style="--i:4">    <b>"person"</b>: <em>"{{ sample.person }}"</em>,</span>
<span class="l" style="--i:5">    <b>"street"</b>: <em>"{{ sample.street }}"</em>,</span>
<span class="l" style="--i:6">    <b>"number"</b>: <em>"{{ sample.number }}"</em>,</span>
<span class="l" style="--i:7">    <b>"postal_code"</b>: <em>"{{ sample.postal }}"</em>,</span>
<span class="l" style="--i:8">    <b>"city"</b>: <em>"{{ sample.city }}"</em></span>
<span class="l" style="--i:9">  },</span>
<span class="l" style="--i:10">  <b>"options"</b>: {</span>
<span class="l" style="--i:11">    <b>"package_type"</b>: <i>1</i>, <b>"signature"</b>: <i>1</i></span>
<span class="l" style="--i:12">  }</span>
<span class="l" style="--i:13">}] } }</span></code></pre>
            <div class="mp-ship__req-foot">
              <button type="button" class="mp-ship__send" @click="choose(current)">
                <span data-i18n="Send request">Send request</span>
              </button>
              <span class="mp-ship__resp" aria-live="polite">
                <code class="mp-ship__resp-code">201 Created</code>
                <code class="mp-ship__resp-body">"id": {{ SHIPMENT_ID }}</code>
              </span>
            </div>
          </div>

          <div class="mp-ship__printer">
            <div class="mp-ship__slot" aria-hidden="true"><span class="mp-ship__led"></span></div>
            <div class="mp-ship__feed">
              <article class="mp-ship__label" :aria-label="`${sample.name} label`">
                <header class="mp-ship__label-top">
                  <img class="mp-ship__label-logo" :src="sample.logo" :alt="sample.name" width="96" height="32" />
                  <span class="mp-ship__label-cc">{{ sample.cc }}</span>
                </header>
                <div class="mp-ship__label-to">
                  <span class="mp-ship__label-key" data-i18n="To">To</span>
                  <strong>{{ sample.person }}</strong>
                  <span>{{ sample.street }} {{ sample.number }}</span>
                  <span>{{ sample.postal }} {{ sample.city }}</span>
                </div>
                <div class="mp-ship__label-opts">
                  <span data-i18n="Package">Package</span>
                  <span data-i18n="Signature">Signature</span>
                </div>
                <svg class="mp-ship__barcode" :viewBox="`0 0 ${barcode.width} 40`" preserveAspectRatio="none" aria-hidden="true">
                  <rect v-for="(b, i) in barcode.bars" :key="i" :x="b.x" y="0" :width="b.w" height="40" />
                </svg>
                <footer class="mp-ship__label-foot">
                  <code>{{ sample.id === 1 ? BARCODE : REFERENCE }}</code>
                  <code>{{ SHIPMENT_ID }}</code>
                </footer>
              </article>
            </div>
          </div>

          <ol class="mp-ship__track" aria-label="Shipment status">
            <li class="mp-ship__status" style="--s:1"><span class="mp-ship__status-code">1</span><span data-i18n="Concept">Concept</span></li>
            <li class="mp-ship__status" style="--s:2"><span class="mp-ship__status-code">2</span><span data-i18n="Registered">Registered</span></li>
            <li class="mp-ship__status" style="--s:3"><span class="mp-ship__status-code">3</span><span data-i18n="Handed to carrier">Handed to carrier</span></li>
            <li class="mp-ship__status" style="--s:4"><span class="mp-ship__status-code">7</span><span data-i18n="Delivered">Delivered</span></li>
          </ol>
        </div>
      </div>
    </section>

    <!-- ============================================================
         CAPABILITIES: each one a working piece of the product
    ============================================================ -->
    <section class="mp-cap" aria-labelledby="mp-cap-title">
      <h2 id="mp-cap-title" class="mp-home__h2 mp-reveal" data-i18n="Everything after the order">Everything after the order</h2>
      <div class="mp-cap__grid">
        <div class="mp-cell mp-reveal">
          <div class="mp-cell__text">
            <h3 class="mp-cell__title"><a href="/guides/shipments.html#labels" data-i18n="Labels in A4 or A6">Labels in A4 or A6</a></h3>
            <p data-i18n="Fetch one label or a hundred as one PDF. On A4 you choose where the first label goes.">Fetch one label or a hundred as one PDF. On A4 you choose where the first label goes.</p>
          </div>
          <div class="mp-cell__ui mp-frag mp-frag--labels" data-ui>
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

        <div class="mp-cell mp-cell--ui-top mp-reveal">
          <div class="mp-cell__ui mp-frag mp-frag--checkout" data-ui>
            <fieldset class="mp-frag__choices">
              <legend data-i18n="Delivery">Delivery</legend>
              <label v-for="d in [['standard', 'Standard delivery'], ['morning', 'Morning delivery'], ['evening', 'Evening delivery'], ['pickup', 'Pickup point']]" :key="d[0]" class="mp-frag__choice">
                <input v-model="delivery" type="radio" name="mp-delivery" :value="d[0]" />
                <span :data-i18n="d[1]">{{ d[1] }}</span>
              </label>
            </fieldset>
          </div>
          <div class="mp-cell__text">
            <h3 class="mp-cell__title"><a href="/platforms/delivery-options.html" data-i18n="Delivery options at checkout">Delivery options at checkout</a></h3>
            <p data-i18n="A widget that shows your customer the carriers, delivery moments and pickup points you allow.">A widget that shows your customer the carriers, delivery moments and pickup points you allow.</p>
          </div>
        </div>

        <div class="mp-cell mp-reveal">
          <div class="mp-cell__text">
            <h3 class="mp-cell__title"><a href="/guides/webhooks.html" data-i18n="Webhooks, not polling">Webhooks, not polling</a></h3>
            <p data-i18n="Subscribe once. MyParcel posts every status change of a shipment to your URL.">Subscribe once. MyParcel posts every status change of a shipment to your URL.</p>
          </div>
          <div class="mp-cell__ui mp-frag mp-frag--code" data-ui>
<pre><code><span class="c">X-MyParcel-Hook: shipment_status_change</span>
{ "data": { "hooks": [{
  <b>"shipment_id"</b>: <i>123456</i>,
  <b>"status"</b>: <i>2</i>,
  <b>"barcode"</b>: <em>"3SMYPA749883621"</em>
}] } }</code></pre>
          </div>
        </div>

        <div class="mp-cell mp-cell--ui-top mp-reveal">
          <div class="mp-cell__ui mp-frag mp-frag--term" data-ui>
            <div class="mp-frag__tabs" role="tablist" aria-label="SDK">
              <button type="button" role="tab" :aria-selected="sdk === 'php'" @click="sdk = 'php'">PHP</button>
              <button type="button" role="tab" :aria-selected="sdk === 'js'" @click="sdk = 'js'">JavaScript</button>
            </div>
            <pre><code><span class="p">$</span> {{ sdk === 'php' ? 'composer require myparcelnl/sdk:^11.0' : 'npm install @myparcel-dev/sdk' }}</code></pre>
          </div>
          <div class="mp-cell__text">
            <h3 class="mp-cell__title"><a :href="sdk === 'php' ? '/guides/php-sdk-v11.html' : '/guides/javascript-sdk.html'" data-i18n="SDKs for PHP and JavaScript">SDKs for PHP and JavaScript</a></h3>
            <p data-i18n="Skip the raw HTTP. Install the SDK and create shipments with typed objects.">Skip the raw HTTP. Install the SDK and create shipments with typed objects.</p>
          </div>
        </div>

        <div class="mp-cell mp-reveal">
          <div class="mp-cell__text">
            <h3 class="mp-cell__title"><a href="/guides/authentication.html" data-i18n="One key, one header">One key, one header</a></h3>
            <p data-i18n="Copy the API key from the Backoffice, Base64-encode it and send it with every request.">Copy the API key from the Backoffice, Base64-encode it and send it with every request.</p>
          </div>
          <div class="mp-cell__ui mp-frag mp-frag--header" data-ui>
            <span class="mp-frag__hk">Authorization</span>
            <code>bearer &lt;base64-encoded API key&gt;</code>
          </div>
        </div>

        <div class="mp-cell mp-cell--ui-top mp-reveal">
          <div class="mp-cell__ui mp-frag mp-frag--apps" data-ui>
            <span v-for="p in platforms.slice(0, 6)" :key="p.name" class="mp-frag__app" :style="p.logoBg ? { background: p.logoBg } : undefined">
              <img v-if="p.logo" :src="p.logo" :alt="p.name" width="40" height="40" loading="lazy" />
            </span>
          </div>
          <div class="mp-cell__text">
            <h3 class="mp-cell__title"><a href="/integrations.html" data-i18n="A plug-in for your shop">A plug-in for your shop</a></h3>
            <p data-i18n="WooCommerce, Shopify, Magento 2 and more. Install it and set it up from your own admin.">WooCommerce, Shopify, Magento 2 and more. Install it and set it up from your own admin.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         API INDEX: pick an API, read its sheet
    ============================================================ -->
    <section class="mp-apis" aria-labelledby="mp-apis-title">
      <div class="mp-apis__index mp-reveal">
        <h2 id="mp-apis-title" class="mp-home__h2" data-i18n="Seven APIs, one account">Seven APIs, one account</h2>
        <div class="mp-apis__names" role="tablist" aria-label="APIs">
          <button
            v-for="(a, i) in apis"
            :key="a.slug"
            type="button"
            role="tab"
            class="mp-apis__name"
            :aria-selected="i === apiIndex"
            :aria-controls="'mp-api-sheet'"
            @click="apiIndex = i"
            @mouseenter="apiIndex = i"
          >{{ a.name }}</button>
        </div>
      </div>
      <div class="mp-apis__stage mp-reveal">
        <article id="mp-api-sheet" class="mp-apis__sheet" role="tabpanel" data-ui>
          <div :key="api.slug" class="mp-apis__sheet-in">
            <header class="mp-apis__sheet-head">
              <h3>{{ api.name }}</h3>
              <span class="mp-apis__ver">{{ api.version }}</span>
            </header>
            <p class="mp-apis__host"><code>https://{{ api.host }}</code></p>
            <p class="mp-apis__desc">{{ apiDescriptions[api.slug] }}</p>
            <dl class="mp-apis__facts">
              <div><dt data-i18n="Endpoints">Endpoints</dt><dd>{{ api.endpoints }}</dd></div>
              <div><dt data-i18n="Spec">Spec</dt><dd><a :href="api.specUrl" target="_blank" rel="noopener">openapi.yaml</a></dd></div>
            </dl>
            <ul v-if="apiGroups.length" class="mp-apis__groups">
              <li v-for="g in apiGroups" :key="g">{{ g }}</li>
            </ul>
            <a class="mp-btn mp-btn--secondary mp-apis__open" :href="`/api/${api.slug}.html`">
              <span data-i18n="Open the reference">Open the reference</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- ============================================================
         CARRIERS AND PLATFORMS
    ============================================================ -->
    <section class="mp-roster" aria-labelledby="mp-roster-title">
      <h2 id="mp-roster-title" class="mp-home__h2 mp-reveal" data-i18n="Carriers and platforms">Carriers and platforms</h2>
      <div class="mp-roster__cols">
        <div class="mp-roster__col mp-reveal">
          <h3 class="mp-roster__group" data-i18n="Carrier IDs">Carrier IDs</h3>
          <ul class="mp-roster__list">
            <li v-for="c in carriers" :key="c.id" class="mp-roster__row">
              <span class="mp-roster__logo"><img :src="c.logo" alt="" width="24" height="24" loading="lazy" /></span>
              <span class="mp-roster__name">{{ c.name }}</span>
              <span class="mp-roster__val">{{ c.id }}</span>
            </li>
          </ul>
          <a class="mp-roster__more" href="/guides/data-types.html" data-i18n="All data types">All data types</a>
        </div>
        <div class="mp-roster__col mp-reveal">
          <h3 class="mp-roster__group" data-i18n="Platform manuals">Platform manuals</h3>
          <ul class="mp-roster__list">
            <li v-for="p in platforms" :key="p.link">
              <a class="mp-roster__row" :href="p.link">
                <span class="mp-roster__logo" :style="p.logoBg ? { background: p.logoBg } : undefined"><img v-if="p.logo" :src="p.logo" alt="" width="24" height="24" loading="lazy" /></span>
                <span class="mp-roster__name">{{ p.name }}</span>
                <span class="mp-roster__val" :data-i18n="p.kind">{{ p.kind }}</span>
              </a>
            </li>
          </ul>
          <a class="mp-roster__more" href="/integrations.html">
            <span data-i18n="All integrations">All integrations</span> ({{ integrationCount }})
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================================
         CLOSE
    ============================================================ -->
    <section class="mp-close" aria-labelledby="mp-close-title">
      <div class="mp-close__side mp-close__side--l" aria-hidden="true"></div>
      <div class="mp-close__tile mp-reveal">
        <h2 id="mp-close-title" class="mp-close__title" data-i18n="Print your first label">Print your first label</h2>
        <p data-i18n="Copy your API key, send one request and download the PDF. The getting started guide walks you through it.">Copy your API key, send one request and download the PDF. The getting started guide walks you through it.</p>
        <div class="mp-close__actions">
          <a href="/guides/getting-started.html" class="mp-btn mp-btn--primary">
            <span data-i18n="Get started">Get started</span>
          </a>
          <a href="/contact.html" class="mp-close__link" data-i18n="Ask a developer">Ask a developer</a>
        </div>
        <p class="mp-close__count">{{ guideCount }} <span data-i18n="guides">guides</span>, {{ apis.length }} <span data-i18n="APIs">APIs</span>, {{ integrationCount }} <span data-i18n="integrations">integrations</span></p>
      </div>
      <div class="mp-close__side mp-close__side--r" aria-hidden="true"></div>
    </section>
  </main>

  <MpFooter />
</template>
