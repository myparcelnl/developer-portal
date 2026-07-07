<script setup lang="ts">
defineProps<{
  trail: { text: string; link?: string }[];
}>();
</script>

<template>
  <nav class="mp-breadcrumb" aria-label="Breadcrumb">
    <template v-for="(crumb, i) in trail" :key="i">
      <a v-if="crumb.link && i < trail.length - 1" :href="crumb.link" class="mp-breadcrumb__link" :data-i18n="crumb.text">{{ crumb.text }}</a>
      <span v-else class="mp-breadcrumb__current" :data-i18n="crumb.text">{{ crumb.text }}</span>
      <span v-if="i < trail.length - 1" class="mp-breadcrumb__sep">/</span>
    </template>
  </nav>
</template>
