<script setup>
import { RouterView } from 'vue-router'
import NavSection from '@/components/NavSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="app">
    <NavSection />
    <RouterView />
    <FooterSection />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
