<script setup lang="ts">
const { page } = useContent()
const image = page?.value?.image ?? '';
</script>

<template>
  <Header />
  <main>
    <!-- <ContentHeroSection v-if="image" :image="image" /> -->
    <section class="container">
      <h1>{{ page?.title }}</h1>
      <div class='contentContainer'>
        <ContentDoc />
      </div>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: clamp(1.2rem, 9vw, 2rem);
  grid-column: 1 / span 12;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.contentContainer {
  max-width: 800px;
  margin: 0 auto;
  grid-column: 1 / span 12;
}

section {
  text-align: left;
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
}

.square-image {
  min-width: 50px;
}

/* Header Styles */
header {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  padding: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

/* Media Queries */
@media (max-width: 420px) {
  img {
    height: auto;
  }
}
</style>
