<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);
</script>

<template>
  <main>
    <h1>{{ route.params.name }}</h1>
    <p>Website: {{ route.params.website }}</p>
    <p>Phone: {{ route.params.phone }}</p>
    <p>Company: {{ route.params.company.name }}</p>
  </main>
</template>

<style></style>