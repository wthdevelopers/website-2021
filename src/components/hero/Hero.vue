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
