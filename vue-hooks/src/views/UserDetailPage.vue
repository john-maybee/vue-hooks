<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);
</script>

<template>
  <main>
    <h1>{{ route.params.name }}</h1>
    <p>Has been clicked on</p>
  </main>
</template>

<style></style>