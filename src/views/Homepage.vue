<template>
  <div id="homepage">
    <Hero :theme="theme"/>
    <About/>
    <Prizes/>
    <Schedule/>
    <Sponsors/>
    <Faq/>
    <Foot/>
  </div>
</template>

<script>
import Hero from "@/components/hero/Hero.vue";
import About from "@/components/about/About.vue";
import Prizes from "@/components/prizes/Prizes.vue";
import Schedule from "@/components/schedule/Schedule.vue";
import Sponsors from "@/components/sponsors/Sponsors.vue";
import Faq from "@/components/faq/Faq.vue";
import Foot from "@/components/foot/Foot.vue";

export default {
  name: "homepage",
  components: {
    Hero,
    About,
    Prizes,
    Schedule,
    Sponsors,
    Faq,
    Foot
  },
  props: {
    theme: String
  }
};
</script>
