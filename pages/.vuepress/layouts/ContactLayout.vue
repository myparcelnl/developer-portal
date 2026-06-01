<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import { nextTick, ref, watch } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import { applyTranslationsTo } from '../composables/useI18n';

// Same Lambda + reCAPTCHA site key as the production developer portal
// (myparcelnl/developer). Site key is a public identifier, not a secret.
const CONTACT_ENDPOINT = 'https://lafsu5u5wqtpr4kse7tzdue4se0shtvn.lambda-url.eu-central-1.on.aws/';
const RECAPTCHA_SITE_KEY = '6LcoxR4sAAAAANGn5zTRKW8q701mdA4x0EbUomJ6';

const sent = ref(false);
const submitting = ref(false);
const recaptchaToken = ref<string>('');
const errors = ref<string[]>([]);

// Re-run the i18n DOM walker after error messages render so the
// data-i18n keys on the <p> elements pick up NL/IT translations.
watch(errors, () => nextTick(() => applyTranslationsTo()));

function onVerify(token: string) {
  errors.value = [];
  recaptchaToken.value = token;
}

function onExpired() {
  recaptchaToken.value = '';
}

async function onSubmit(e: Event) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  if (!form.checkValidity()) { form.reportValidity(); return; }

  errors.value = [];

  if (!recaptchaToken.value) {
    errors.value = ['Please complete the reCAPTCHA before submitting.'];
    return;
  }

  submitting.value = true;
  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, recaptchaToken: recaptchaToken.value }),
    });

    if (!response.ok) {
      const json = await response.json().catch(() => ({}));
      // Lambda returns { errors: [string] }; production frontend reads
      // json.data.errors.messages — handle both shapes defensively.
      const list: string[] =
        json?.errors ??
        json?.data?.errors?.messages ??
        [`Submission failed (HTTP ${response.status}).`];
      errors.value = list;
      return;
    }

    sent.value = true;
    form.reset();
    recaptchaToken.value = '';
  } catch (err) {
    errors.value = [(err as Error)?.message ?? 'Network error — please try again.'];
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <MpHeader />

  <main class="mp-standalone">
<nav class="mp-breadcrumb">
      <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
      <span class="mp-breadcrumb__sep">/</span>
      <span class="mp-breadcrumb__current" data-i18n="Contact">Contact</span>
    </nav>

    <h1 class="mp-docs-content__title" data-i18n="Contact">Contact</h1>
    <p class="mp-docs-content__lede" data-i18n="Send us a message with the form below. Or pick another channel if you want to chat on Slack, open an issue on GitHub, or check live system status.">
      Send us a message with the form below. Or pick another channel
      if you want to chat on Slack, open an issue on GitHub, or check
      live system status.
    </p>

    <div class="mp-section-label" data-i18n="OR REACH US VIA">OR REACH US VIA</div>
    <!-- ============================================================
         Other channels
    ============================================================ -->
    <section class="mp-contact-grid">
      <a class="mp-contact-card" href="https://myparcel-dev.slack.com" target="_blank" rel="noopener">
        <div class="mp-contact-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5zM9 6a2 2 0 1 1 2-2v2H9zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5zm9 2a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5zm-2 9a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z"/></svg>
        </div>
        <div>
          <div class="mp-contact-card__title">Slack <span class="mp-contact-card__hint">myparcel-dev</span></div>
          <p class="mp-contact-card__desc" data-i18n="Real-time developer chat. Best for quick questions and sharing payloads.">Real-time developer chat. Best for quick questions and sharing payloads.</p>
        </div>
      </a>

      <a class="mp-contact-card" href="https://github.com/myparcelnl" target="_blank" rel="noopener">
        <div class="mp-contact-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.01 11.01 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
        </div>
        <div>
          <div class="mp-contact-card__title">GitHub <span class="mp-contact-card__hint">myparcelnl</span></div>
          <p class="mp-contact-card__desc" data-i18n="Open issues and pull requests on the SDKs, plugins and this portal.">Open issues and pull requests on the SDKs, plugins and this portal.</p>
        </div>
      </a>

      <a class="mp-contact-card" href="https://status.myparcel.nl" target="_blank" rel="noopener">
        <div class="mp-contact-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div>
          <div class="mp-contact-card__title" data-i18n="Status page">Status page</div>
          <p class="mp-contact-card__desc" data-i18n="Live uptime per service. Subscribe for incident updates.">Live uptime per service. Subscribe for incident updates.</p>
        </div>
      </a>

      <a class="mp-contact-card" href="https://www.myparcel.com/contact" target="_blank" rel="noopener">
        <div class="mp-contact-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 9.71a16 16 0 0 0 7.29 7.29l1.96-1.96a1 1 0 0 1 1-.29l4 1A1 1 0 0 1 22 16.92z"/></svg>
        </div>
        <div>
          <div class="mp-contact-card__title" data-i18n="Sales &amp; accounts">Sales &amp; accounts</div>
          <p class="mp-contact-card__desc" data-i18n="Pricing, billing or onboarding new partners — through myparcel.com/contact.">Pricing, billing or onboarding new partners — through <code>myparcel.com/contact</code>.</p>
        </div>
      </a>
    </section>
    
    <!-- ============================================================
         SEND US A MESSAGE — contact form
    ============================================================ -->
    <section class="mp-form-section" id="send-us-a-message">
      <h2 class="mp-form__heading" data-i18n="Send us a message">Send us a message</h2>
      <p class="mp-form__intro" data-i18n="We read every message.">
        We read every message.
      </p>

      <form v-if="!sent" class="mp-form" id="mp-contact-form" @submit="onSubmit">
        <div class="mp-form__row">
          <label class="mp-form__field">
            <span class="mp-form__label"><span data-i18n="Name">Name</span> <span class="mp-form__required">*</span></span>
            <input type="text" name="name" autocomplete="name" required placeholder="Jane Doe" />
          </label>
          <label class="mp-form__field">
            <span class="mp-form__label"><span data-i18n="Email">Email</span> <span class="mp-form__required">*</span></span>
            <input type="email" name="email" autocomplete="email" required placeholder="you@example.com" />
          </label>
        </div>

        <label class="mp-form__field">
          <span class="mp-form__label" data-i18n="Phone (optional)">Phone (optional)</span>
          <input type="tel" name="phone" autocomplete="tel" placeholder="+31 6 1234 5678" />
        </label>

        <label class="mp-form__field">
          <span class="mp-form__label"><span data-i18n="Subject">Subject</span> <span class="mp-form__required">*</span></span>
          <select name="subject" required>
            <option value="" disabled selected hidden data-i18n="Pick a topic…">Pick a topic…</option>
            <option value="feature"     data-i18n="Feature request">Feature request</option>
            <option value="integration" data-i18n="Integration request">Integration request</option>
            <option value="bug"         data-i18n="Bug report">Bug report</option>
            <option value="partnership" data-i18n="Partnership">Partnership</option>
            <option value="security"    data-i18n="Security issue">Security issue</option>
            <option value="other"       data-i18n="Other">Other</option>
          </select>
        </label>

        <label class="mp-form__field">
          <span class="mp-form__label"><span data-i18n="Message">Message</span> <span class="mp-form__required">*</span></span>
          <textarea name="message" rows="7" required placeholder="Tell us what you're building, where you got stuck, and any request-IDs or payloads that help us reproduce."></textarea>
        </label>

        <ClientOnly>
          <div class="mp-form__field">
            <VueRecaptcha
              :sitekey="RECAPTCHA_SITE_KEY"
              @verify="onVerify"
              @expired="onExpired"
            />
          </div>
        </ClientOnly>

        <div v-if="errors.length" class="mp-form__errors" role="alert">
          <p v-for="msg in errors" :key="msg" :data-i18n="msg">{{ msg }}</p>
        </div>

        <div class="mp-form__actions">
          <button type="submit" class="mp-btn mp-btn--primary" :disabled="submitting" data-i18n="Submit">
            {{ submitting ? 'Sending…' : 'Submit' }}
          </button>
          <span class="mp-form__hint" data-i18n="No account required.">No account required.</span>
        </div>
      </form>

      <div v-if="sent" class="mp-form__result" role="status" aria-live="polite">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <div>
          <strong data-i18n="Thanks — message sent.">Thanks — message sent.</strong>
        </div>
      </div>
    </section>

  </main>

  <MpFooter />
</template>
