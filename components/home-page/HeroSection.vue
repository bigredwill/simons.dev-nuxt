<template>
    <section class="container-wrapper">
        <div class="container">
            <h1>Software Dev &<br />Multi-Potentialist &<br />Builder</h1>
            <Salmon className="salmon-1" />
        </div>
    </section>
</template>

<script setup>
import Salmon from '~/components/Salmon.vue';
</script>

<style scoped>
.salmon-1 {
    left: 0;
    bottom: -55%;
    grid-column: 5 / span 6;
    z-index: 2;
}
</style>