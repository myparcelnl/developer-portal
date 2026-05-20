<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://order.api.myparcel.nl/openapi.yaml"
    fallback-server="https://order.api.myparcel.nl"
  />
</template>
