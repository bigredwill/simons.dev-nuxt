<script setup lang="ts">
const query = { path: '/projects', where: [{ title: { $ne: 'Projects' }, featured: true }], sort: [{ date: -1 }] }
</script>

<template>
  <Header />
  <section>
    <h1>Some Projects</h1>
    <p>These are just a few projects I've documented</p>
    <p><code>Migration in progress. Documentation incoming!</code></p>
    <ul>
      <ContentList :query="query" v-slot="{ list }">
        <li v-for="article in list" :key="article._path">
          <NuxtLink class="card" :to="article._path">
            <LazyNuxtImg class="image" :v-if="article.image" :src="article.image" />
            <div class="text">
              <p class="date">{{ new Date(article.date).toLocaleDateString('en-CA') }}</p>
              <h3>
                {{ article.title }}
              </h3>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </section>
</template>

<style scoped>
h3 {
  margin: 0;
}

.date {
  margin: 0;
  font-size: .8rem;
  color: var(--darkgray);
}

section {
  max-width: 100%;
  width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 1rem;
}

ul {
  max-width: 100%;
  width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 0;
}

li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.card {
  display: grid;
  padding-bottom: 1rem;
  padding-top: 3rem;
  border-top: 2px solid var(--dark);
  grid-template-columns: 1fr 1fr;
}

.text {
  padding-left: 1rem;
  color: var(--dark);
}

.image {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
}
</style>