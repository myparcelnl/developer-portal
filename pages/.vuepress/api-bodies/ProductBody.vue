<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://product.api.myparcel.nl/openapi.yaml"
    fallback-server="https://product.api.myparcel.nl"
  />
</template>
