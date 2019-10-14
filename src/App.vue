<template>
  <div id="app">
    <Hero/>
  </div>
</template>

<script>
import Hero from "@/components/hero/Hero.vue";

export default {
  name: "app",
  components: {
    Hero
  }
};
</script>

<style>
:root {
  --font-primary: brandon-grotesque;
  --font-secondary: proxima-soft;

  --color-background: #f3f3fb;
  --color-text: #2d3887;
  --color-accent: #a82175;

  --stars-visibility: hidden;

  --lights-blue-opacity: 0.1;
  --lights-blue-color: #2133c7;

  --lights-pink-opacity: 0.2;
  --lights-pink-color: #d65c85;
}

[theme="dark"] {
  --color-background: #191f4d;
  --color-text: #f3f3fb;
  --color-accent: #a82175;

  --stars-visibility: visible;

  --lights-blue-opacity: 0.4;
  --lights-blue-color: #f9f458;

  --lights-pink-opacity: 0.4;
  --lights-pink-color: #f9f458;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  background-color: var(--color-background);
  transition: background-color 0.6s ease-out;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
