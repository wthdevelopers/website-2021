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

  /* --color-black: #000000;
  --color-white: #ffffff;
  --color-accent-blue: #2d3887;
  --color-accent-pink: #a82175; */

  --color-background: #f3f3fb;
  --color-text: #2d3887;
  --color-accent: #a82175;
}

[theme="dark"] {
  --color-background: #191f4d;
  --color-text: #f3f3fb;
  --color-accent: #a82175;
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
