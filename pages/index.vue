<template>
  <Header class="header" />
  <main>
    <section class="container">
      <h1>Software Dev &<br />Multi-Potentialist &<br />Builder</h1>
      <Salmon class="salmon-1" />
    </section>
    <section class="about container">
      <img src="~/assets/img/bowl.jpg" alt="Will in Bowl - photo by https://crawdadcollective.com" />
      <div class="about-text">
        <p>work on the <NuxtLink to="/areas/web">web</NuxtLink>;</p>
        <p>enjoying <NuxtLink to="/areas/adventure">adventure</NuxtLink>;</p>
        <p>play <NuxtLink to="/areas/music">music</NuxtLink>;</p>
        <p>explore <NuxtLink to="/areas/creative">creatively</NuxtLink>;</p>
      </div>
    </section>
    <div class="now">
      <section class="container">
        <Salmon class="salmon-2" :inverted="true" />
        <img class="img-kickflip" src="~/assets/img/kickflip.jpg" alt="Will doing a Kickflip - photo by https://crawdadcollective.com" />
        <div class="now-text">
          <h2 id="now">Now</h2>
          <div>
            <p>
              <SvgoKeyboard />Currently working as a freelance software engineer.
            </p>
            <p>
              <SvgoKeyboard /><span>Taking a UI/UX design course through <a href="https://designlab.com/">DesignLab</a></span>
            </p>
            <p>
              <SvgoFrame />Looking for full-time work! Frontend and Full-stack software engineering positions.
            </p>
            <p>
              <SvgoTower />Living and skating in San Francisco.
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  overflow-x: hidden;
}

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

.now .now-text p {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 1rem;

  font-family: monospace;
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

.about img {
  grid-column: 1 / span 10;
  /* grid-row: 1 / span 2; */
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


h1,h2 {
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
  font-size: clamp(.8rem, 4vw, 1rem);

  color: var(--darkgray);
}

img {
  display: block;
  max-width: 100%;
  /* box-shadow: 4px 4px 4px 0px var(--dark); */
}

@media (max-width: var(--mobile-breakpoint)) {
  .about img {
    grid-column: 1 / 12;
  }

  .about-text {
    grid-column: 2 / 13;
  }

  h1, h2 {
    text-shadow: 2px 2px 1px #FF8465;
  }

  .now {
    min-height: 150vh;
    margin-top: -50vh;
  }

  .now-text {
    grid-row: 2;
    grid-column: 1 / span 12;
    padding-top: 1rem;
  }
  .now img {
    grid-row: 1;
    min-height: 50vh;
    width: auto;
    display: block;
    grid-column: span 13;
    aspect-ratio: 1 / 1;
  }

  .salmon-2 {
    top: 30vh;
    grid-row: 1;
    grid-column: span 6 / -1;
  }
}
</style>
