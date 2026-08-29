<script setup lang="ts">
useHead({
  // or as a function
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} - simons.dev` : "simons.dev";
  },
  link: [
    {
      rel: "preconnect",
      as: "font",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      as: "font",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      as: "font",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
    },
    // {
    //   rel: 'preload',
    //   as: 'font',
    //   href: '/fonts/Brasilero2018Free-Regular.woff',
    //   type: 'font/woff',
    //   crossorigin: 'anonymous'
    // }
  ],
});

useSeoMeta({
  title: "simons.dev",
  ogImage: "https://simons.dev/img/og-salmon.jpg",
});
</script>

<template>
  <SalmonSpawner />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
