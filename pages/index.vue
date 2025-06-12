<template>
    <Header class="header" />
    <main>
        <section class="container">
            <h1>Software Dev &<br />Multi-Potentialist &<br />Builder</h1>
            <Salmon class="salmon-1" />
        </section>
        <section class="about container">
            <LazyNuxtImg
                class="img-bowl"
                src="/img/bowl.jpg"
                alt="Will in Bowl - photo by https://crawdadcollective.com"
            />
            <div class="about-text">
                <p>Will works on the web;</p>
                <p>and loves a good adventure;</p>
                <p>
                    Check out his <NuxtLink to="/about">about</NuxtLink> page.
                </p>
            </div>
        </section>
        <div class="now">
            <section class="container">
                <Salmon class="salmon-2" :inverted="true" />
                <LazyNuxtImg
                    class="img-kickflip"
                    src="/img/kickflip.jpg"
                    alt="Will doing a Kickflip - photo by https://crawdadcollective.com"
                />
                <div class="now-text">
                    <h2 id="now">Now</h2>
                    <ul>
                        <li>
                            <SvgoKeyboard />
                            <span
                                >Creating
                                <a href="/projects/skateboard-fyi-june-update"
                                    >https://skateboard.fyi</a
                                >.</span
                            >
                        </li>
                        <li>
                            <SvgoTower />Just moved back to San Francisco and
                            searching for full-time work!
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
definePageMeta({ documentDriven: { page: false, surround: false } });
</script>

<style scoped>
.now {
    background-color: var(--dark);
    max-width: 100vw;
    margin-top: -25vh;
    padding-top: 25vh;
    position: relative;
    min-height: 125svh;
}

.now .containter {
    grid-template-rows: 1fr 1fr;
}

.img-kickflip {
    grid-column: 6 / span 6;
    position: relative;
    grid-row: 1;
}

.now-text {
    grid-row: 1;
    grid-column: 1 / 6;
}

.now .now-text ul {
    padding-left: 0;
}
.now .now-text li {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 1rem;
    padding-bottom: 1rem;

    /* font-family: monospace; */
    height: auto;
    text-align: left;
    color: var(--light);
}

.now-text a {
    color: inherit;
}

section {
    text-align: center;
    position: relative;
    max-width: var(--max-width);
    margin: 0 auto;
}

h1 {
    margin-top: 0;
    grid-column: span 12;
}

.about {
    min-height: 100svh;
    grid-template-rows: repeat(2, 1fr);
    overflow: hidden;
    z-index: 1;
}

.about .img-bowl {
    grid-column: 1 / span 10;
    /* grid-row: 1 / span 2; */
    grid-row-start: 1;
    grid-row-end: 2;
    position: absolute;
    width: 100%;
}

.about-text {
    grid-column: 8 / 13;
    grid-row-start: 2;
    position: absolute;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    background: var(--dark);
    padding: 2rem 1.25rem;
    width: 100%;

    /* font-family: monospace; */
    height: auto;
}

.about-text p,
.about-text a {
    margin: 0;
    color: var(--light);
}

.salmon-1 {
    left: 0;
    bottom: -55%;
    position: absolute;
    z-index: 1;
    grid-column: 5 / span 6;
    z-index: 2;
}

.salmon-2 {
    grid-column: 4 / span 4;
    position: absolute;
    top: 60%;
    left: 0;
    transform: scaleX(-1);
    z-index: 1;
    height: 50vh;
}

h1,
h2 {
    color: var(--dark);
    text-shadow: 4px 4px 2px var(--salmon);
    font-family: var(--header-font-family);
    font-size: 6rem;
    font-size: clamp(1.2rem, 9vw, 6rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.08rem;
    text-transform: lowercase;
    text-align: left;
    -webkit-text-stroke: 2px var(--dark);
}

h2 {
    color: var(--light);
    font-size: 4rem;
    font-size: clamp(1.2rem, 9vw, 4rem);
}

p {
    font-size: 1.5rem;
    font-size: clamp(0.8rem, 4vw, 1rem);

    color: var(--darkgray);
}

img {
    display: block;
    max-width: 100%;
}

@media (max-width: 768px) {
    .about {
        min-height: auto;
        grid-template-rows: 1fr;
        margin-bottom: calc(-10vh + 2rem);
    }

    .about .img-bowl {
        grid-column: 1 / 12;
        position: relative;
    }

    .about-text {
        grid-column: 2 / 13;
        position: relative;
        top: -10vh;
        height: min-content;
    }

    h1,
    h2 {
        text-shadow: 2px 2px 1px #ff8465;
    }

    .now {
        margin-top: 0;
        padding-top: 2rem;
        min-height: auto;
    }

    .now-container {
        grid-template-columns: 1fr;
    }

    .now-text {
        grid-row: 2;
        grid-column: 1 / span 12;
        padding-top: 1rem;
    }

    .img-kickflip {
        grid-row: 1;
        width: auto;
        display: block;
        grid-column: span 13;
        aspect-ratio: 1 / 1;
        z-index: 1;
    }

    .salmon-2 {
        top: 30vh;
        grid-row: 1;
        grid-column: span 6 / -1;
        z-index: 2;
    }
}
</style>

<!-- <style>
  .now img {
    grid-row: 1;
    width: auto;
    display: block;
    grid-column: span 13;
    aspect-ratio: 1 / 1;
    z-index: 1;
  }
</style> -->
