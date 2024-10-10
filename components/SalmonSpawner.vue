<template>
  <div class="salmon-spawner">
    <button @click="spawnSalmon" title="Spawn Salmon">
        <span class="plus">+</span><SvgoSalmonIcon class="salmon-button-icon"/>
    </button>
  </div>
  <Salmon class="salmon" v-for="(salmon, index) in salmons" :key="index" :inverted="salmon.inverted" />
</template>

<script setup>
import { ref } from 'vue';
import Salmon from './Salmon.vue';

const salmons = ref([]);

const spawnSalmon = () => {
    // todo: add salmon color pallettes
  salmons.value.push({ inverted: Math.random() > 0.5 });
};
</script>

<style scoped>
button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    height: 80px;
    width: 80px;
    font-size: 2rem;
    cursor: pointer;
    background-color: var(--water);
    box-shadow: inset 2px 0 0 4px var(--water);

    transition: box-shadow 0.1s ease;
}

button:hover {
    inset: 0;
    box-shadow: inset 2px 0 0 4px var(--darkWater);
}

button:active {
    background-color: var(--darkWater);
}

button .plus {
    color: white;
    font-family: var(--header-font-family);
    transition: transform 0.1s ease;
}

button:hover .plus {
    transform: scale(1.1);
}

button:active .plus {
    transform: scale(0.9);
}

.salmon-button-icon * {
    fill: revert-layer;
}
.salmon-button-icon {
    transform: scale(1.4);
    transition: transform 0.05s ease;
}

button:hover .salmon-button-icon {
    transform: scale(1.5);
}

button:active .salmon-button-icon {
    transform: scale(1.3);
}

.salmon-spawner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;
}

.salmon {
    position: fixed;
    z-index: 4;
    width: 200px;
    height: 200px;
    bottom: 0;
    right: 0;
    cursor: move;
}
</style>
