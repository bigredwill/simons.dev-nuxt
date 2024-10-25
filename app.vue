<script setup lang="ts">
useHead({
  // or as a function
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - simons.dev`
      : 'simons.dev'
  },
  link: [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Brasilero2018Free-Regular.woff2',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Brasilero2018Free-Regular.woff',
      type: 'font/woff',
      crossorigin: 'anonymous'
    }
  ]
});

useSeoMeta({
  title: 'simons.dev',
  ogImage: 'https://simons.dev/img/og-salmon.jpg'
})
</script>


<template>
    <SalmonSpawner />
    <NuxtPage />
</template>