<template>
  <div class="salmon-spawner">
    <button @click="spawnSalmon" title="Spawn Salmon">
        <span class="plus">+</span><SvgoSalmonIcon class="salmon-button-icon"/>
    </button>
  </div>
  <Salmon 
    class="salmon" 
    v-for="(salmon, index) in salmons" 
    :key="index" 
    :inverted="salmon.inverted" 
    :startX="salmon.startX" 
    :startY="salmon.startY" 
  />
</template>

<script setup>
import { ref } from 'vue';
import Salmon from './Salmon.vue';

const salmons = ref([]);

const spawnSalmon = () => {
  const button = document.querySelector('.salmon-spawner button');
  const rect = button.getBoundingClientRect();
  const startX = rect.left - 100;
  const startY = rect.top + window.scrollY - 100;

  salmons.value.push({ 
    inverted: Math.random() > 0.5, 
    startX, 
    startY 
  });
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
    position: absolute;
    left: 25%;
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
    position: absolute;
    right: 11%;
    top: 24%;
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
  position: fixed;
  bottom: .5rem;
  right: .5rem;
  z-index: 4;
}

.salmon {
    position: absolute;
    z-index: 4;
    width: 200px;
    height: 200px;
    top: 0;
    left: 0;
    cursor: move;
}
</style>
