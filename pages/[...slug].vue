<script setup lang="ts">
const { page } = useContent()
const image = page?.value?.image ?? null;
const title = page?.value?.title ?? null;
const url = page?.value?.url ?? null;
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
        <h1>{{ page?.title }}</h1>
        <table class="meta">
          <tr v-if="date">
            <td>date:</td>
            <td>{{ date }}</td>
          </tr>
          <tr v-if="url">
            <td>url:</td>
            <td><a :href="url">{{ url }}</a></td>
          </tr>
        </table>
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
  width: var(--content-max-width);
  padding: 1rem;
  margin: 0 auto;
}

.meta {
  /* margin: 0 auto; */
  grid-column: 1 / span 12;
  color: var(--dark);
  /* -webkit-text-stroke: 1px var(--salmon); */
  letter-spacing: .15ch;
  font-weight: medium;
  font-size: .8rem;
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
</style>
