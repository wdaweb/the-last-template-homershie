<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import NavSection from '@/components/NavSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import { initButtonAnimations, cleanupAnimations } from '@/utils/animations'

onMounted(() => {
  // 初始化按鈕動畫
  initButtonAnimations()
})

onUnmounted(() => {
  // 清理動畫
  cleanupAnimations()
})
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
