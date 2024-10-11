<template>
  <nav class="navigation">
    <ul>
      <li>
        <NuxtLink to="/about">
          About Me
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/now">
          Now
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: clamp(1rem, 4vw, 2rem);

  font-family: var(--header-font-family);
}

li {
  list-style-type: none;
  padding: 0;
  font-size: 2rem;
  font-size: clamp(1rem, 4vw, 2rem);
}
</style>