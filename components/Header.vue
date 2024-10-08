<template>
    <header class="header container">
        <div class="header-content">
            <div class="name">Will Simons</div>
            <Navigation />
        </div>
    </header>
</template>

<style scoped>
.header {
    max-width: var(--max-width);
    margin: 0 auto;
}

.header-content {
    grid-column: span 12;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.name {
    font-family: "Brasilero2018Free-Regular";
    font-size: 4rem;
    font-size: clamp(1.2rem, 9vw, 4rem);

    color: var(--dark);
    text-transform: lowercase;
    flex: 1 0 auto;
}
</style>
