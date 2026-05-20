<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://printing.api.myparcel.nl/openapi.yaml"
    fallback-server="https://printing.api.myparcel.nl"
  />
</template>
