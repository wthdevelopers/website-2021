<template>
  <div id="homepage">
    <Hero/>
    <About/>
    <Prizes/>
    <Schedule/>
    <Sponsors/>
    <Faq/>
    <Contact/>
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
import Contact from "@/components/contact/Contact.vue";
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
    Contact,
    Foot
  }
};
</script>
