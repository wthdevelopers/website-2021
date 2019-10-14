<template>
  <div id="hero">
    <Nav/>
    <HeroContent/>
    <HeroImage/>
  </div>
</template>

<script>
import Nav from "@/components/hero/Nav.vue";
import HeroContent from "@/components/hero/HeroContent.vue";
import HeroImage from "@/components/hero/HeroImage.vue";

export default {
  name: "hero",
  components: {
    Nav,
    HeroContent,
    HeroImage
  },
  data() {
    return {
      theme: "light"
    };
  },
  mounted: function() {
    this.setInitialTheme();
  },
  methods: {
    toggleTheme() {
      if (this.theme === "dark") {
        document.documentElement.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");
        this.theme = "light";
      } else {
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
        this.theme = "dark";
      }
    },
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

<style scoped>
#hero {
  position: relative;
  height: 100vh;
  /* border: 5px solid blue; */
}
</style>
