<script setup lang="ts">
useHead({
  // or as a function
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - simons.dev`
      : 'simons.dev'
  }
});

useSeoMeta({
  title: 'simons.dev',
  ogImage: 'https://simons.dev/img/og-salmon.jpg'
})
</script>


<template>
  <div><SalmonSpawner />
    <NuxtPage />
  </div>
</template>
