<template>
  <div id="homepage">
    <Hero/>
    <Carousel/>
    <About/>
    <Prizes/>
    <Schedule/>
    <Sponsors/>
    <Faq/>
    <Contact/>
    <Foot/>
    <Backdrop/>
  </div>
</template>

<script>
import Hero from "@/sections/homepage/hero/Hero.vue";
import Carousel from "@/sections/homepage/carousel/Carousel.vue";
import About from "@/sections/homepage/about/About.vue";
import Prizes from "@/sections/homepage/prizes/Prizes.vue";
import Schedule from "@/sections/homepage/schedule/Schedule.vue";
import Sponsors from "@/sections/homepage/sponsors/Sponsors.vue";
import Faq from "@/sections/homepage/faq/Faq.vue";
import Contact from "@/sections/homepage/contact/Contact.vue";
import Foot from "@/sections/homepage/foot/Foot.vue";
import Backdrop from "@/components/Backdrop.vue";

export default {
  name: "homepage",
  components: {
    Hero,
    Carousel,
    About,
    Prizes,
    Schedule,
    Sponsors,
    Faq,
    Contact,
    Foot,
    Backdrop
  }
};
</script>
