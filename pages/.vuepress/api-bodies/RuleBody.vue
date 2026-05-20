<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://rule.api.myparcel.nl/openapi.yaml"
    fallback-server="https://rule.api.myparcel.nl"
  />
</template>
