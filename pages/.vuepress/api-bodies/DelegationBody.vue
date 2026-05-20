<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://delegation.api.myparcel.nl/openapi.yaml"
    fallback-server="https://delegation.api.myparcel.nl"
  />
</template>
