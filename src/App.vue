<template>
  <div id="app">
    <Hero/>
    <About/>
    <Prizes/>
    <Schedule/>
    <Sponsors/>
    <Faq/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "@/components/hero/Hero.vue";
import About from "@/components/about/About.vue";
import Prizes from "@/components/prizes/Prizes.vue";
import Schedule from "@/components/schedule/Schedule.vue";
import Sponsors from "@/components/sponsors/Sponsors.vue";
import Faq from "@/components/faq/Faq.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "app",
  components: {
    Hero,
    About,
    Prizes,
    Schedule,
    Sponsors,
    Faq,
    Footer
  }
};
</script>

<style>
:root {
  --font-primary: brandon-grotesque;
  --font-secondary: proxima-soft;

  --color-background: #f3f3fb;
  --color-title-text: #2d3887;
  --color-regular-text: #000000;
  --color-accent: #a82175;

  --slope-body-color: #c1e1d5;

  --stars-visibility: hidden;

  --lights-blue-opacity: 0.1;
  --lights-blue-color: #2133c7;

  --lights-pink-opacity: 0.2;
  --lights-pink-color: #d65c85;
}

[theme="dark"] {
  --color-background: #191f4d;
  --color-title-text: #f3f3fb;
  --color-regular-text: #f3f3fb;
  --color-accent: #a82175;

  --slope-body-color: #3f636d;

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

@keyframes flicker-one {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}

@keyframes flicker-two {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.6;
  }
}

@keyframes flicker-three {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.9;
  }
}

.slope {
  fill: #79c89f;
  opacity: 0.4;
}
</style>
