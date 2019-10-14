<template>
  <div id="app">
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

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

  --color-black: #000000;
  --color-white: #ffffff;
  --color-accent-blue: #2d3887;
  --color-accent-pink: #a82175;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
