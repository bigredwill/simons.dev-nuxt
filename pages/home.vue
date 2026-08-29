<template>
    <Header class="header" />
    <main class="main prose">
        <h1 class="name">Will Simons</h1>
        <img
            alt="Avatar for Will Simons"
            loading="lazy"
            decoding="async"
            src="/img/avatar-square.jpg"
            width="32"
            height="32"
            style="border-radius: 4px; display: inline-block"
        />
        is currently building an online home for printed skateboard history at
        <span style="font-size: 1.5em">🛹 </span>
        <a href="https://skateboard.fyi/" class="nowrap">skateboard.fyi</a>.
    </main>
</template>

<style>
.main {
}

.name {
    font-size: 2em;
    /* display: inline; */
    padding-right: 4px;
    text-decoration: none;
    -webkit-text-stroke: 2px var(--dark);
    color: var(--light);
    --accent: var(--salmon);
    text-shadow:
        calc(2px + -0.015em * 1) calc(-2px + 0.015em * 1) 0 var(--accent),
        calc(2px + -0.015em * 2) calc(-2px + 0.015em * 2) 0 var(--accent),
        calc(2px + -0.015em * 3) calc(-2px + 0.015em * 3) 0 var(--accent),
        calc(2px + -0.015em * 4) calc(-2px + 0.015em * 4) 0 var(--accent),
        calc(2px + -0.015em * 5) calc(-2px + 0.015em * 5) 0 var(--accent),
        calc(2px + -0.015em * 6) calc(-2px + 0.015em * 6) 0 var(--accent),
        calc(2px + -0.015em * 7) calc(-2px + 0.015em * 7) 0 var(--accent),
        calc(2px + -0.015em * 8) calc(-2px + 0.015em * 8) 0 var(--accent),
        calc(2px + -0.015em * 9) calc(-2px + 0.015em * 9) 0 var(--accent),
        calc(2px + -0.015em * 10) calc(-2px + 0.015em * 10) 0 var(--accent),
        calc(2px + -0.015em * 11) calc(-2px + 0.015em * 11) 0 var(--accent),
        calc(2px + -0.015em * 12) calc(-2px + 0.015em * 12) 0 var(--accent),
        calc(2px + -0.015em * 13) calc(-2px + 0.015em * 13) 0 var(--accent),
        calc(2px + -0.015em * 14) calc(-2px + 0.015em * 14) 0 var(--accent),
        calc(2px + -0.015em * 15) calc(-2px + 0.015em * 15) 0 var(--accent),
        calc(2px + -0.015em * 16) calc(-2px + 0.015em * 16) 0 var(--accent),
        calc(2px + -0.015em * 17) calc(-2px + 0.015em * 17) 0 var(--accent),
        calc(2px + -0.015em * 18) calc(-2px + 0.015em * 18) 0 var(--accent),
        calc(2px + -0.015em * 19) calc(-2px + 0.015em * 19) 0 var(--accent),
        calc(2px + -0.015em * 20) calc(-2px + 0.015em * 20) 0 var(--accent),
        calc(2px + -0.015em * 21) calc(-2px + 0.015em * 21) 0 var(--accent),
        calc(2px + -0.015em * 22) calc(-2px + 0.015em * 22) 0 var(--accent),
        calc(2px + -0.015em * 23) calc(-2px + 0.015em * 23) 0 var(--accent),
        calc(2px + -0.015em * 24) calc(-2px + 0.015em * 24) 0 var(--accent),
        calc(2px + -0.015em * 25) calc(-2px + 0.015em * 25) 0 var(--accent);
}
</style>
