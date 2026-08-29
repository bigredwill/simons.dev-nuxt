<script setup>
defineProps({
  bg: {
    type: String,
    default: "",
  },
});

const bgClass = computed(() => {
  return bg ? bg : "bg-gray-500/[0.133]";
});
</script>

<template>
  <span :class="[bg, 'inline-block py-0.5 px-2 rounded-sm']"
    ><slot mdc-unwrap="p"
  /></span>
</template>
