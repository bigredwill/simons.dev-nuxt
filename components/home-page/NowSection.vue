<template>
    <div class="now">
      <section class="container-wrapper">
        <Salmon className="salmon-2" :inverted="true" />
        <img class="img-kickflip" src="~/assets/img/kickflip.jpg" alt="Will doing a Kickflip - photo by https://crawdadcollective.com" />
        <div class="now-text">
          <h2 id="now">Now</h2>
          <div>
            <p><SvgoKeyboard />Currently working as a freelance software engineer.</p>
            <p><SvgoFrame />Looking for full-time work! Frontend and Full-stack software engineering positions.</p>
            <p><SvgoTower />Living and skating in San Francisco.</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import Salmon from '~/components/Salmon.vue';
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
    text-align: left;
    color: var(--light);
  }
  
  .salmon-2 {
    grid-column: 4 / span 4;
    top: 60%;
    left: 0;
    height: 50vh;
  }
  </style>