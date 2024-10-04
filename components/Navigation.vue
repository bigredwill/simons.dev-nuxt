<template>
    <nav class="navigation">
      <ul>
        <NuxtLink to="/">
          <li class="blue">Home</li>
        </NuxtLink>
        <NuxtLink to="/now">
          <li class="sunshine">Now</li>
        </NuxtLink>
        <NuxtLink to="/projects">
          <li class="salmon">Work</li>
        </NuxtLink>
        <NuxtLink to="/about">
          <li class="green">About Me</li>
        </NuxtLink>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .navigation {
    position: relative;
    padding-left: 1rem;
  }
  
  .navigation ul {
    padding: 1rem 1rem 0 2rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    justify-content: stretch;
  }

  .navigation a {
    height: 100%;
  }
  
  .navigation ul li {
    padding-left: .2em;
    position: relative;
    height: 100%;
    box-sizing: border-box;
  }
  
  .navigation ul li::after {
    background-image: url(/public/img/empty-li.svg);
    background-position: 0 0.2em;
    background-size: .8em .8em;
    content: '';
    width: 1em;
    height: 1em;
    display: inline-block;
    background-repeat: no-repeat;
    left: -1em;
    position: absolute;
  }
  
  .navigation ul .router-link-exact-active li {
    border: 1px dashed #000;
  }
  
  .navigation ul .router-link-exact-active li::after {
    background-image: url(/public/img/union.svg);
  }
  
  .navigation::after {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--background-color);
    clip-path: polygon(100% 0, 0% 100%, 0 0);
    left: 0;
    top: 0;
    width: 1rem;
    height: 1rem;
  }
  
  .navigation a {
    color: black;
    text-decoration: none;
    display: inline-block;
  }

  .navigation a:focus {
    outline: none;
  }
  
  .navigation a:hover li, .navigation a:focus li {
    color: #555;
    transform: rotate(1deg);
    transform: scale(1.01);
    border: 1px solid #555;
  }
  
  .sunshine {
    background-color: #F0DA28;
  }
  
  .salmon {
    background-color: #FF8465;
  }
  
  .green {
    background-color: #75D340;
  }

  .blue {
    background-color: #639cb6;
  }
  </style>