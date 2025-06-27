<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <PortfolioSection />
    <ProcessSection />
    <FeedbackSection />
    <ContactSection />
    <BlogSection />
    <BottomSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import FeedbackSection from '@/components/FeedbackSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import BottomSection from '@/components/BottomSection.vue'
</script>

<style scoped>
.home {
  flex: 1;
  width: 100%;
}
</style>
