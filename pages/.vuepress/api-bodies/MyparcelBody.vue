<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://api.myparcel.nl/openapi.yaml"
    fallback-server="https://api.myparcel.nl"
  />
</template>
