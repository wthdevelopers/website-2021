<template>
  <div id="hero">
    <Navbar/>
    <HeroContent/>
    <HeroImage/>
  </div>
</template>

<script>
import Navbar from "@/sections/homepage/hero/Navbar.vue";
import HeroContent from "@/sections/homepage/hero/HeroContent.vue";
import HeroImage from "@/sections/homepage/hero/HeroImage.vue";

export default {
  name: "hero",
  components: {
    Navbar,
    HeroContent,
    HeroImage
  }
};
</script>

<style scoped>
#hero {
  position: relative;
  min-height: 710px;
  height: 100vh;
  /* border: 5px solid blue; */
}
</style>
