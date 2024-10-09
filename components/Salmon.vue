<template>
  <IconSalmon :class="{ 'salmon-icon': 'salmon-icon', 'salmon-inverted': inverted }" />
</template>

<script setup>
import { defineProps } from 'vue';
import IconSalmon from '~/assets/salmon-icon.svg';

const props = defineProps({
  inverted: Boolean
});
</script>

<style scoped>
.salmon-icon {
  width: 100%;
  height: 100%;
  fill: revert-layer;
}

.salmon-icon * {
  /* nuxt-svgo sets fill: currentColor, but this svg brings it's own fills */
  fill: revert-layer;
}

.salmon-inverted #front {
  fill: blue;
}
</style>

<style>
.salmon-inverted #front {
  fill: #122049;
}

.salmon-inverted #mid {
  fill: #3C67E3;
}

.salmon-inverted #back {
  fill: #E82E08;
  stroke: #F0DA28;
}

</style>