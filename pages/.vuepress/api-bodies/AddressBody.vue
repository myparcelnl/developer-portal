<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://address.api.myparcel.nl/openapi.yaml"
    fallback-server="https://address.api.myparcel.nl"
  />
</template>
