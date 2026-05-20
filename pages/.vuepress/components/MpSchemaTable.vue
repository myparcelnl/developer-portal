<script setup lang="ts">
import type { SchemaField } from '../composables/useOpenApi';

defineProps<{
  fields: SchemaField[];
  title?: string;
}>();

function indent(depth: number): string {
  if (depth <= 0) return '';
  return '↳ '.repeat(0) + '— '.repeat(depth);
}
</script>

<template>
  <div v-if="fields.length" class="mp-schema-table">
    <div class="mp-params-label" v-if="title">{{ title }}</div>
    <table class="mp-params mp-params--schema">
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Constraints</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in fields" :key="f.name + ':' + f.depth">
          <td>
            <span class="mp-params__name" :style="{ paddingLeft: (f.depth * 14) + 'px' }">
              <span v-if="f.depth > 0" class="mp-schema-indent" aria-hidden="true">↳</span>
              {{ f.name.split('.').pop() || f.name }}
              <span v-if="f.required" class="mp-schema-required" title="Required">required</span>
            </span>
          </td>
          <td><span class="mp-params__type">{{ f.type || '—' }}</span></td>
          <td>
            <span v-for="c in f.constraints" :key="c" class="mp-schema-chip">{{ c }}</span>
          </td>
          <td class="mp-params__desc">{{ f.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.mp-schema-table {
  margin-top: var(--mp-space-5);
}
.mp-schema-indent {
  color: var(--mp-text-muted, #5e7973);
  margin-right: 4px;
  font-weight: normal;
}
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
.mp-schema-chip {
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 2px 6px;
  font-size: 11px;
  font-family: var(--mp-mono, ui-monospace, monospace);
  color: var(--mp-text-muted, #5e7973);
  background: var(--mp-bg, #fff);
  border: 1px solid var(--mp-border-soft, #ecefed);
  border-radius: 4px;
  white-space: nowrap;
}
[data-theme="dark"] .mp-schema-chip {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.65);
}
</style>
