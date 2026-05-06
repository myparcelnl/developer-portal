<script setup lang="ts">
import { computed } from 'vue';
import { usePageData } from 'vuepress/client';

interface SidebarItem {
  text: string;
  link: string;
}
interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

defineProps<{ groups: SidebarGroup[] }>();

const page = usePageData();
const BASE = '/beta-developer-portal';
const currentPath = computed(() => BASE + page.value.path);
</script>

<template>
  <aside class="mp-docs-sidebar">
    <div v-for="(group, gi) in groups" :key="gi" class="mp-docs-sidebar__group">
      <div class="mp-docs-sidebar__label" :data-i18n="group.label">{{ group.label }}</div>
      <a
        v-for="item in group.items"
        :key="item.link"
        :href="item.link"
        class="mp-docs-sidebar__item"
        :class="{ 'mp-docs-sidebar__item--active': currentPath === item.link }"
        :data-i18n="item.text"
      >{{ item.text }}</a>
    </div>
  </aside>
</template>
