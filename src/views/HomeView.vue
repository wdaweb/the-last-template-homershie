<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ContactSection />
    <FeedbackSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import FeedbackSection from '@/components/FeedbackSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style scoped>
.home {
  flex: 1;
  width: 100%;
}
</style>
