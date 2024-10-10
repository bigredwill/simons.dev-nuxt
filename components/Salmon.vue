<template>
  <IconSalmon 
    :style="{
      transform: `translateX(${salmonPosition.x}px) translateY(${salmonPosition.y}px)`,
      zIndex: salmonPosition.active ? 1000 : 4
      }"
    @mousedown="handleStart"
    @touchstart="handleStart"
    :class="{ 'salmon-icon': 'salmon-icon', 'salmon-inverted': inverted }" 
  />
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue';
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
  initialY: 0,
});

const getEventClientCoords = (event) => {
  if (event.type.startsWith('touch')) {
    const touch = event.touches[0] || event.changedTouches[0];
    return { clientX: touch.clientX, clientY: touch.clientY };
  }
  return { clientX: event.clientX, clientY: event.clientY };
};

const handleStart = (event) => {
  event.preventDefault(); // Prevents default behavior like text selection
  const { clientX, clientY } = getEventClientCoords(event);
  salmonPosition.active = true;
  salmonPosition.startX = clientX;
  salmonPosition.startY = clientY;
  salmonPosition.initialX = salmonPosition.x;
  salmonPosition.initialY = salmonPosition.y;
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchmove', handleMove);
  document.addEventListener('touchend', handleEnd);
}

let animationFrameId = null;

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
}

const handleEnd = () => {
  salmonPosition.active = false;
  document.removeEventListener('mousemove', handleMove);
  document.removeEventListener('mouseup', handleEnd);
  document.removeEventListener('touchmove', handleMove);
  document.removeEventListener('touchend', handleEnd);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMove);
  document.removeEventListener('mouseup', handleEnd);
  document.removeEventListener('touchmove', handleMove);
  document.removeEventListener('touchend', handleEnd);
});
</script>

<style scoped>
.salmon-icon {
  width: 100%;
  height: 100%;
  fill: revert-layer;
  cursor: move;
}

.salmon-icon * {
  fill: revert-layer;
}

.salmon-inverted #front {
  fill: blue;
}
</style>
