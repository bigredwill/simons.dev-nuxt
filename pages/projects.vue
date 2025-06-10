<script setup lang="ts">
const availableTags = ["code", "art", "tech", "life"];
const selectedTag = ref<string>("");

const query = computed(() => {
    const baseQuery = {
        path: "/projects",
        where: [{ title: { $ne: "Projects" }, featured: true }],
        sort: [{ date: -1 }],
    };

    if (selectedTag.value) {
        baseQuery.where.push({ tags: { $in: [selectedTag.value] } });
    }

    return baseQuery;
});

const toggleTag = (tag: string) => {
    if (selectedTag.value === tag) {
        selectedTag.value = "";
    } else {
        selectedTag.value = tag;
    }
};

const clearFilters = () => {
    selectedTag.value = "";
};
</script>

<template>
    <Header />
    <section>
        <h1>Projects</h1>
        <p>Some projects I've documented. Code, art, and more.</p>

        <div class="filter-section">
            <div class="filter-tags">
                <button
                    v-for="tag in availableTags"
                    :key="tag"
                    class="filter-tag"
                    :class="{ active: selectedTag === tag }"
                    @click="toggleTag(tag)"
                >
                    {{ tag }}
                </button>
            </div>
        </div>

        <ul>
            <ContentList :query="query" v-slot="{ list }">
                <li v-for="article in list" :key="article._path">
                    <NuxtLink class="card" :to="article._path">
                        <LazyNuxtImg
                            class="image"
                            :v-if="article.image"
                            :src="article.image"
                        />
                        <div class="text">
                            <p class="date">
                                {{
                                    new Date(article.date).toLocaleDateString(
                                        "en-CA",
                                    )
                                }}
                            </p>
                            <h3>
                                {{ article.title }}
                            </h3>
                            <div
                                class="tags"
                                v-if="article.tags && article.tags.length > 0"
                            >
                                <span
                                    v-for="tag in article.tags"
                                    :key="tag"
                                    class="tag"
                                >
                                    {{ tag }}
                                </span>
                            </div>
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
    font-size: 0.8rem;
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
    gap: 0;
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
    padding-top: 1rem;
    border-top: 2px solid var(--dark);
    grid-template-columns: 1fr 3fr;
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

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0;
}

.tag {
    background-color: var(--light-gray, #f0f0f0);
    color: var(--dark);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
}

.filter-section {
    margin: 1rem 0;
    padding: 0.5rem;
    border: 1px solid var(--light-gray, #e0e0e0);
    border-radius: 0.5rem;
    background-color: var(--background, #fff);
}

.filter-section h3 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    color: var(--dark);
}

.filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.filter-tag {
    background-color: var(--light-gray, #f0f0f0);
    color: var(--dark);
    border: 1px solid var(--light-gray, #e0e0e0);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.filter-tag:hover {
    background-color: var(--dark);
    color: var(--light, #fff);
}

.filter-tag.active {
    background-color: var(--dark);
    color: var(--light, #fff);
    border-color: var(--dark);
}

.clear-filters {
    background-color: transparent;
    color: var(--dark);
    border: 1px solid var(--dark);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.clear-filters:hover {
    background-color: var(--dark);
    color: var(--light, #fff);
}
</style>
