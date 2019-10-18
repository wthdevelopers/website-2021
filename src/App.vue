<template>
  <div id="app">
    <router-view :theme="theme"/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      theme: "light"
    };
  },
  mounted: function() {
    this.setInitialTheme();
  },
  methods: {
    setInitialTheme() {
      if (localStorage.getItem("theme")) {
        const cachedTheme = localStorage.getItem("theme");
        document.documentElement.setAttribute("theme", cachedTheme);
        this.theme = cachedTheme;
      } else {
        document.documentElement.setAttribute("theme", this.theme);
      }
    }
  }
};
</script>


<style>
:root {
  --font-primary: brandon-grotesque;
  --font-secondary: proxima-soft;

  --color-background: #f3f3fb;
  --color-title-text: #2d3887;
  --color-title-text-hover: #3947ac;
  --color-cta-text: #f3f3fb;
  --color-section-title-text: #2d3887;
  --color-regular-text: #000000;
  --color-accent: #e26ab4;

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
  --color-title-text-hover: #d9d9f2;
  --color-cta-text: #191f4d;
  /* --color-section-title-text: #c02685; */
  --color-section-title-text: #d93f9e;
  --color-regular-text: #f3f3fb;
  /* --color-accent: #c02685; */
  --color-accent: #d93f9e;

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
  overflow-x: hidden;
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
