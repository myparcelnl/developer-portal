<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://purchase-order.api.myparcel.nl/openapi.yaml"
    fallback-server="https://purchase-order.api.myparcel.nl"
  />
</template>
