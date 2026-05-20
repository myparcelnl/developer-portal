<script setup lang="ts">
import MpApiSpec from '../components/MpApiSpec.vue';
</script>

<template>
  <MpApiSpec
    spec-url="https://iam.api.myparcel.nl/openapi.yaml"
    fallback-server="https://iam.api.myparcel.nl"
  />
</template>
