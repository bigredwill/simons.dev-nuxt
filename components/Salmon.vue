<template>
  <IconSalmon 
    :style="{
      transform: `scale(${salmonPosition.hover ? 1.1 : 1}) translateX(${salmonPosition.x}px) translateY(${salmonPosition.y}px)`,
      zIndex: salmonPosition.active ? 1000 : 4
    }"
    @mousedown="handleStart"
    @touchstart="handleStart"
    @mouseover="handleHover(true)"
    @mouseleave="handleHover(false)"
    :class="{ 'salmon-icon': 'salmon-icon', 'salmon-inverted': inverted }" 
  />
</template>

<script setup>
import { reactive } from 'vue';
import IconSalmon from '~/assets/salmon-icon.svg';

const props = defineProps({
  inverted: Boolean,
  startX: Number,
  startY: Number,
});

const salmonPosition = reactive({
  x: props.startX || 0,
  y: props.startY || 0,
  active: false,
  hover: false,
  startX: 0,
  startY: 0,
  initialX: 0,
  initialY: 0
});

let animationFrameId = null;

const getEventClientCoords = (event) => {
  if (event.type.startsWith('touch')) {
    const touch = event.touches[0] || event.changedTouches[0];
    return { clientX: touch.clientX, clientY: touch.clientY };
  }
  return { clientX: event.clientX, clientY: event.clientY };
};

const handleStart = (event) => {
  event.preventDefault();
  const { clientX, clientY } = getEventClientCoords(event);
  salmonPosition.active = true;
  salmonPosition.startX = clientX;
  salmonPosition.startY = clientY;
  salmonPosition.initialX = salmonPosition.x;
  salmonPosition.initialY = salmonPosition.y;

  // Add listeners only during the active drag
  window.addEventListener('pointermove', handleMove);
  window.addEventListener('pointerup', handleEnd);
};

const handleMove = (event) => {
  if (salmonPosition.active) {
    const { clientX, clientY } = getEventClientCoords(event);

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      const deltaX = clientX - salmonPosition.startX;
      const deltaY = clientY - salmonPosition.startY;
      salmonPosition.x = salmonPosition.initialX + deltaX;
      salmonPosition.y = salmonPosition.initialY + deltaY;
    });
  }
};

const handleEnd = (event) => {
  salmonPosition.active = false;

  // Remove listeners when drag ends
  window.removeEventListener('pointermove', handleMove);
  window.removeEventListener('pointerup', handleEnd);

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const handleHover = (isHovering) => {
  salmonPosition.hover = isHovering;
};
</script>

<style scoped>
.salmon-icon {
  width: 100%;
  height: 100%;
  fill: revert-layer;
  cursor: move;
  transform-origin: center;
  transition: transform 0.3s ease-in-out; /* Smooth transition for both rotate and translate */
}

.salmon-icon * {
  fill: revert-layer;
}
</style>

<style>
/* These need to be here since targeting paths in svg */
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
