<template>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <NowSection />
    </main>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue';
  import HeroSection from '~/components/home-page/HeroSection.vue';
  import AboutSection from '~/components/home-page/AboutSection.vue';
  import NowSection from '~/components/home-page/NowSection.vue';
  </script>
  
  <style scoped>
  main {
    overflow-x: hidden;
  }
  </style>