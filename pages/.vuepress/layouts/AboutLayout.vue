<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';

// Team names only: who is in which team changes too often to keep here.
const teams = [
  'External Integrations',
  'Shipment & Billing',
  'Order & Fulfilment',
  'Customer & New Products',
  'Cloud Engineering',
  'IT Support',
  'Salesforce',
];

// The technologies that come up most in our Jira tickets. Logos live in
// pages/images/stack/; dynamic paths need the glob, see AGENTS.md "Assets".
const stackLogos = import.meta.glob('../../images/stack/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const logo = (file: string) => stackLogos[`../../images/stack/${file}.svg`];

const stack = [
  {
    label: 'Languages and frameworks',
    items: [
      { name: 'PHP', logo: logo('php') },
      { name: 'Laravel', logo: logo('laravel') },
      { name: 'Symfony', logo: logo('symfony') },
      { name: 'TypeScript', logo: logo('typescript') },
      { name: 'JavaScript', logo: logo('javascript') },
      { name: 'Vue.js', logo: logo('vue') },
      { name: 'Vite', logo: logo('vite') },
    ],
  },
  {
    label: 'Cloud and data',
    items: [
      { name: 'Amazon Web Services', logo: logo('aws') },
      { name: 'AWS CDK', logo: logo('aws') },
      { name: 'AWS Lambda', logo: logo('awslambda') },
      { name: 'DynamoDB', logo: logo('amazondynamodb') },
      { name: 'PostgreSQL', logo: logo('postgresql') },
      { name: 'Redis', logo: logo('redis') },
      { name: 'OpenSearch', logo: logo('opensearch') },
    ],
  },
  {
    label: 'Tooling and platforms',
    items: [
      { name: 'Docker', logo: logo('docker') },
      { name: 'GitHub Actions', logo: logo('githubactions') },
      { name: 'Salesforce', logo: logo('salesforce') },
    ],
  },
];

const SLACK_INVITE = 'https://join.slack.com/t/myparcel-dev/shared_invite/zt-2zvk9gfs1-h6koDUduK6ZM_kZcc247AQ/';
const VACANCIES = 'https://www.myparcel.nl/vacature/development/';
</script>

<template>
  <MpHeader />

  <main id="mp-main" tabindex="-1" class="mp-page mp-about">
    <!-- ============================================================
         HERO, as on Contact
    ============================================================ -->
    <section class="mp-phero">
      <div class="mp-phero__inner">
        <nav class="mp-breadcrumb">
          <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
          <span class="mp-breadcrumb__sep">/</span>
          <span class="mp-breadcrumb__current" data-i18n="About">About</span>
        </nav>
        <h1 class="mp-phero__title" data-i18n="Meet our development team">Meet our development team</h1>
        <p class="mp-phero__lede" data-i18n="Our ambition is simple: deliver a world-class shipping platform to our customers. We believe technology makes shipping for e-commerce easier and more fun. Our development team works on that every day.">
          Our ambition is simple: deliver a world-class shipping platform to our customers. We believe technology makes shipping for e-commerce easier and more fun. Our development team works on that every day.
        </p>
      </div>
    </section>

    <!-- ============================================================
         HOW WE WORK: white cards over the hero
    ============================================================ -->
    <ul class="mp-about__facts" aria-label="How we work">
      <li class="mp-about__fact">
        <span class="mp-tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>
        </span>
        <strong data-i18n="Agile">Agile</strong>
        <span data-i18n="Agile methods are in our DNA. We build, test and release new features continuously.">Agile methods are in our DNA. We build, test and release new features continuously.</span>
      </li>
      <li class="mp-about__fact">
        <span class="mp-tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 17.7"/><path d="M8 19h9.5"/></svg>
        </span>
        <strong data-i18n="Infrastructure as code">Infrastructure as code</strong>
        <span data-i18n="We program our AWS stack with the AWS Cloud Development Kit.">We program our AWS stack with the AWS Cloud Development Kit.</span>
      </li>
      <li class="mp-about__fact">
        <span class="mp-tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.3 7.2l7.4 3.6"/></svg>
        </span>
        <strong data-i18n="Trunk-based development">Trunk-based development</strong>
        <span data-i18n="We experiment with new methods. Trunk-based development is one of them.">We experiment with new methods. Trunk-based development is one of them.</span>
      </li>
    </ul>

    <!-- ============================================================
         TECH STACK
    ============================================================ -->
    <section id="tech-stack" class="mp-about__sec mp-about__sec--split mp-about__sec--stack">
      <div>
        <h2 class="mp-about__h2" data-i18n="Tech stack">Tech stack</h2>
        <p class="mp-about__text mp-about__text--top" data-i18n="A good SaaS platform needs good technology. Our stack lets us build, test and release continuously. Our integration team works on the best possible delivery checkout.">
          A good SaaS platform needs good technology. Our stack lets us build, test and release continuously. Our integration team works on the best possible delivery checkout.
        </p>
      </div>
      <div class="mp-about__stack">
        <div v-for="group in stack" :key="group.label" class="mp-about__stack-group">
          <h3 class="mp-about__stack-label" :data-i18n="group.label">{{ group.label }}</h3>
          <ul class="mp-about__stack-tiles">
            <li v-for="tech in group.items" :key="tech.name" class="mp-about__tech">
              <span class="mp-about__tech-logo"><img :src="tech.logo" alt="" width="32" height="32" loading="lazy" /></span>
              <span>{{ tech.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============================================================
         TEAM
    ============================================================ -->
    <section id="team" class="mp-about__sec">
      <h2 class="mp-about__h2" data-i18n="Team">Team</h2>
      <p class="mp-about__text mp-about__text--top" data-i18n="Seven teams build and run the MyParcel platform, each with its own part of it.">Seven teams build and run the MyParcel platform, each with its own part of it.</p>
      <ul class="mp-about__teams">
        <li v-for="team in teams" :key="team" class="mp-about__team">{{ team }}</li>
      </ul>
    </section>

    <!-- ============================================================
         INFORMATION SECURITY
         The DNV guideline: the mark goes with the company name, on a
         white background, and must not suggest that a product or a
         service is certified. Hence the wording below.
    ============================================================ -->
    <section id="information-security" class="mp-about__sec">
      <div class="mp-about__panel mp-about__panel--cert">
        <div>
          <h2 class="mp-about__h2" data-i18n="Information security">Information security</h2>
          <p class="mp-about__text" data-i18n="The information security management system of MyParcel is certified to ISO/IEC 27001 by DNV, an independent certification body.">The information security management system of MyParcel is certified to ISO/IEC 27001 by DNV, an independent certification body.</p>
        </div>
        <div class="mp-about__cert">
          <img
            src="/images/dnv-iso-27001.png"
            alt="DNV certified management system, ISO/IEC 27001"
            width="120"
            height="115"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- ============================================================
         JOIN US
    ============================================================ -->
    <section id="join-us" class="mp-about__sec mp-about__sec--last">
      <div class="mp-about__panel">
        <div>
          <h2 class="mp-about__h2" data-i18n="Join us">Join us</h2>
          <p class="mp-about__text" data-i18n="We are a fast-growing company, so we are almost always looking for new talent. Come and meet us.">We are a fast-growing company, so we are almost always looking for new talent. Come and meet us.</p>
          <p class="mp-about__text" data-i18n="Do you use our API or an SDK, and do you have a question or a tip? Talk to us on Slack.">Do you use our API or an SDK, and do you have a question or a tip? Talk to us on Slack.</p>
        </div>
        <div class="mp-about__links mp-about__links--stack">
          <a class="mp-btn mp-btn--primary" :href="VACANCIES" target="_blank" rel="noopener" data-i18n="See our vacancies">See our vacancies</a>
          <a class="mp-arrow-link" :href="SLACK_INVITE" target="_blank" rel="noopener"><span data-i18n="Join us on Slack">Join us on Slack</span></a>
        </div>
      </div>
    </section>
  </main>

  <MpFooter />
</template>
