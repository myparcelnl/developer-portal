<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import { ref } from 'vue';
const sent = ref(false);
function onSubmit(e: Event) { e.preventDefault(); sent.value = true; }
</script>

<template>
  <MpHeader />

  <main class="mp-standalone">
<nav class="mp-breadcrumb">
      <a href="/developer-portal/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
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

      <a class="mp-contact-card" href="https://www.myparcel.nl/contact" target="_blank" rel="noopener">
        <div class="mp-contact-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 9.71a16 16 0 0 0 7.29 7.29l1.96-1.96a1 1 0 0 1 1-.29l4 1A1 1 0 0 1 22 16.92z"/></svg>
        </div>
        <div>
          <div class="mp-contact-card__title" data-i18n="Sales &amp; accounts">Sales &amp; accounts</div>
          <p class="mp-contact-card__desc" data-i18n="Pricing, billing or onboarding new partners — through myparcel.nl/contact.">Pricing, billing or onboarding new partners — through <code>myparcel.nl/contact</code>.</p>
        </div>
      </a>
    </section>
    
    <!-- ============================================================
         SEND US A MESSAGE — contact form (temporarily hidden)
    ============================================================ -->
    <section v-if="false" class="mp-form-section" id="send-us-a-message">
      <h2 class="mp-form__heading" data-i18n="Send us a message">Send us a message</h2>
      <p class="mp-form__intro" data-i18n="We read every message. Expect a reply within 2 business days.">
        We read every message. Expect a reply within 2 business days.
      </p>

      <form class="mp-form" id="mp-contact-form" novalidate>
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

        <div class="mp-form__actions">
          <button type="submit" class="mp-btn mp-btn--primary" data-i18n="Submit">Submit</button>
          <span class="mp-form__hint" data-i18n="No account required.">No account required.</span>
        </div>

        <div class="mp-form__result" id="mp-form-result" role="status" aria-live="polite" hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <div>
            <strong data-i18n="Thanks — message sent.">Thanks — message sent.</strong>
            <span data-i18n="We'll get back to you within 2 business days.">We'll get back to you within 2 business days.</span>
          </div>
        </div>
      </form>
    </section>

    <div class="mp-callout" style="margin-top:32px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <div data-i18n="Reporting a security issue? Please email security@myparcel.nl directly and do not open a public issue.">
        Reporting a security issue? Please email
        <a href="mailto:security@myparcel.nl">security@myparcel.nl</a>
        directly and do <strong>not</strong> open a public issue.
      </div>
    </div>
  </main>

  <MpFooter />
</template>
