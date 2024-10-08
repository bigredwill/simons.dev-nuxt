<template>
    <section class="about container-wrapper">
        <img src="~/assets/img/bowl.jpg" alt="Will in Bowl - photo by https://crawdadcollective.com" />
        <div class="about-text">
            <p>work on the <NuxtLink to="/areas/web">web</NuxtLink>;</p>
            <p>enjoying <NuxtLink to="/areas/adventure">adventure</NuxtLink>;</p>
            <p>play <NuxtLink to="/areas/music">music</NuxtLink>;</p>
            <p>explore <NuxtLink to="/areas/creative">creatively</NuxtLink>;</p>
        </div>
    </section>
</template>



<style scoped>
.about {
    min-height: 100svh;
    grid-template-rows: repeat(2, 1fr);
    overflow: hidden;
    z-index: 1;
}

.about img {
    grid-column: 1 / span 10;
    grid-row-start: 1;
    grid-row-end: 2;
    position: absolute;
}

.about-text {
    grid-column: 8 / 13;
    grid-row-start: 2;
    position: absolute;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: .2em;
    background: var(--dark);
    padding: 2rem 1.25rem;
    width: 100%;
    font-family: monospace;
}

.about-text p,
.about-text a {
    margin: 0;
    color: var(--light);
}
</style>