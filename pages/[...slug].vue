<script setup lang="ts">
const { page } = useContent()
const image = page?.value?.image ?? null;
const title = page?.value?.title ?? null;
let date = page?.value?.date ?? null;
if (date) {
  // en-CA outputs in YYYY-MM-DD
  date = new Date(date).toLocaleDateString('en-CA');
}
</script>

<template>
  <Header />
  <main>
    <!-- <ContentHeroSection v-if="image" :image="image" /> -->
    <section>
      <div class="container-inner">
        <p class="date" v-if="date">{{ date }}</p>
        <h1>{{ page?.title }}</h1>
        <div class='contentContainer'>
          <ContentDoc />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: clamp(1.2rem, 9vw, 2rem);
  grid-column: 1 / span 12;
  margin: 0 auto;
}

.container-inner {
  max-width: 100%;
  width: 800px;
  padding: 1rem;
  margin: 0 auto;
}

.date {
  margin: 0 auto;
  grid-column: 1 / span 12;
  color: var(--dark);
  /* -webkit-text-stroke: 1px var(--salmon); */
  letter-spacing: .2ch;
  font-weight: bold;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.contentContainer {
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
/* @media (max-width: 420px) {
  img {
    height: auto;
  }
} */
</style>
