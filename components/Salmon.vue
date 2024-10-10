<template>
  <div :style="{ transform: `translateX(${salmonPosition.x}px) translateY(${salmonPosition.y}px)` }"
    @mousedown="handleStart"
    @mousemove="handleMove"
    @mouseup="handleEnd"
    @touchstart="handleStart"
    @touchmove="handleMove"
    @touchend="handleEnd">
    <IconSalmon :class="{ 'salmon-icon': 'salmon-icon', 'salmon-inverted': inverted }" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import IconSalmon from '~/assets/salmon-icon.svg';

const props = defineProps({
  inverted: Boolean
});

const salmonPosition = reactive({
  x: 0,
  y: 0,
  active: false,
  startX: 0,
  startY: 0,
  initialX: 0,
  initialY: 0
});

const getEventClientCoords = (event) => {
  // Checks if it's a touch event or a mouse event
  if (event.type.startsWith('touch')) {
    const touch = event.touches[0] || event.changedTouches[0];
    return { clientX: touch.clientX, clientY: touch.clientY };
  }
  return { clientX: event.clientX, clientY: event.clientY };
};

const handleStart = (event) => {
  const { clientX, clientY } = getEventClientCoords(event);
  salmonPosition.active = true;
  salmonPosition.startX = clientX;
  salmonPosition.startY = clientY;
  salmonPosition.initialX = salmonPosition.x;
  salmonPosition.initialY = salmonPosition.y;
}

const handleMove = (event) => {
  if (salmonPosition.active) {
    const { clientX, clientY } = getEventClientCoords(event);
    const deltaX = clientX - salmonPosition.startX;
    const deltaY = clientY - salmonPosition.startY;
    salmonPosition.x = salmonPosition.initialX + deltaX;
    salmonPosition.y = salmonPosition.initialY + deltaY;
  }
}

const handleEnd = () => {
  salmonPosition.active = false;
}
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