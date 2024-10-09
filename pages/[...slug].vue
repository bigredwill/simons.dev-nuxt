<script setup lang="ts">
const { page } = useContent()
const image = page?.value?.image ?? '';
</script>

<template>
  <Header />
  <main>
    <ContentHeroSection v-if="image" :image="image" />
    <div class="main-wrapper">
      <h1>{{ page.title }}</h1>
      <ContentDoc />
    </div>
  </main>
</template>

<style scoped>
/* General Styles */
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

.hello {
  background-color: white;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.hello .text {
  padding: 1rem;
}

.hello h1 {
  font-size: calc(2rem + 3vw);
  margin: 0;
}

.hello::after {
  content: '';
  display: block;
  position: absolute;
  background-color: var(--background-color);
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  left: 0;
  bottom: 0;
  width: 1rem;
  height: 1rem;
}

.hello::before {
  content: '';
  display: block;
  position: absolute;
  background-color: var(--background-color);
  /* clip-path: polygon(100% 0, 0% 100%, 100% 100%); */
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  right: 0;
  top: 0;
  width: 1rem;
  height: 1rem;
}

/* Main Styles */
main {
  padding: 1rem;
  padding-top: 0;
  max-width: 960px;
  margin: 0 auto;
}

.main-wrapper {
  background-color: white;
  padding: 1rem;
  position: relative;
}

.main-wrapper::after {
  content: '';
  display: block;
  position: absolute;
  background-color: var(--background-color);
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  left: 0;
  top: 0;
  width: 1rem;
  height: 1rem;
}

/* Media Queries */
@media (max-width: 420px) {
  .hello {
    grid-template-columns: 1fr;
  }

  header {
    grid-template-columns: 1fr 1fr;
  }

  img {
    height: auto;
  }
}
</style>
