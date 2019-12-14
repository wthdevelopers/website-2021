<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

declare global {
  interface Window {
    formTouched: boolean;
    isSubmittingForm: boolean;
    registeredInfo: {
      format: String;
      name: String;
      emails: Array<String>;
    };
  }
}

export default Vue.extend({
  name: "app",
  created: function(): void {
    this.initFormGlobalVars();
    this.initLeaveFormWarning();
  },
  mounted: function(): void {
    this.setInitialTheme();
  },
  methods: {
    initFormGlobalVars(): void {
      window.formTouched = false;
      window.isSubmittingForm = false;
    },
    initLeaveFormWarning(): void {
      window.addEventListener("beforeunload", function(e) {
        if (window.formTouched && !window.isSubmittingForm) {
          var nonNull = "nonNull";

          (e || window.event).returnValue = nonNull; //Gecko + IE
          return nonNull; //Gecko + Webkit, Safari, Chrome etc.
        }
      });
    },
    setInitialTheme(): void {
      let setTheme = "light";
      let cachedTheme = localStorage.getItem("theme");
      if (cachedTheme) {
        setTheme = cachedTheme;
      } else if (matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme = "dark";
      }
      document.documentElement.setAttribute("theme", setTheme);
    }
  }
});
</script>

<style>
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  src: local("Nunito Regular"), local("Nunito-Regular"),
    url("../public/fonts/nunito-900.woff2") format("woff2");
}

@font-face {
  font-family: "Brandon Grotesque";
  font-style: normal;
  font-weight: 400;
  src: local("brandon Grotesque"), local("Brandon-Grotesque"),
    url("../public/fonts/brandon-400.woff2") format("woff2");
}

:root {
  /* --font-primary: brandon-grotesque; */
  /* --font-secondary: proxima-soft; */
  --font-primary: "Brandon Grotesque";
  --font-secondary: "Nunito";

  --color-background: #e9f7fb;
  --color-title-text: #2d3887;
  --color-title-text: #5360c6;
  --color-title-text-hover: #3947ac;
  --color-cta-text: #f3f3fb;
  --color-section-title-text: #e67fbe;
  --color-regular-text: #5360c6;
  --color-accent: #e67fbe;
  --color-gray: #788ebf;

  --slope-body-color: #bbe4d5;

  --stars-visibility: hidden;

  --lights-blue-opacity: 0.1;
  --lights-blue-color: #2133c7;

  --lights-pink-opacity: 0.2;
  --lights-pink-color: #d65c85;

  --displayed-during-light: inline;
  --displayed-during-dark: none;
}

[theme="dark"] {
  --color-background: #191f4d;
  --color-title-text: #f3f3fb;
  --color-title-text-hover: #d9d9f2;
  --color-cta-text: #191f4d;
  --color-section-title-text: #dd55a9;
  --color-regular-text: #f3f3fb;
  --color-accent: #dd55a9;
  --color-gray: #b6c3c8;

  --slope-body-color: #3f636d;

  --stars-visibility: visible;

  --lights-blue-opacity: 0.4;
  --lights-blue-color: #f9f458;

  --lights-pink-opacity: 0.4;
  --lights-pink-color: #f9f458;

  --displayed-during-light: none;
  --displayed-during-dark: inline;
}

@custom-media --mobile-narrow (max-width: 570px);
@custom-media --mobile-wide (max-width: 847px);
@custom-media --desktop-narrow (max-width: 1000px);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden !important;
}

body {
  position: relative;
  background-color: var(--color-background);
  transition: background-color 0.6s ease-out;
  overflow-x: hidden !important;
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
  fill: var(--slope-body-color);
  transition: fill 0.6s ease-out;
}
</style>
