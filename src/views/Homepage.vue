<template>
  <div id="homepage">
    <Hero />
    <Carousel />
    <About />
    <Prizes />
    <Workshops />
    <Schedule />
    <Sponsors />
    <Faq />
    <Contact />
    <Foot />
    <Backdrop />
  </div>
</template>

<script>
import Hero from '@/sections/hero/Hero.vue';
import Carousel from '@/sections/carousel/Carousel.vue';
import About from '@/sections/about/About.vue';
import Prizes from '@/sections/prizes/Prizes.vue';
import Schedule from '@/sections/schedule/Schedule.vue';
import Sponsors from '@/sections/sponsors/Sponsors.vue';
import Faq from '@/sections/faq/Faq.vue';
import Contact from '@/sections/contact/Contact.vue';
import Foot from '@/sections/foot/Foot.vue';
import Backdrop from '@/components/Backdrop.vue';
import Workshops from '@/sections/workshops/Workshops.vue';

export default {
  name: 'homepage',
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
    Backdrop,
    Workshops,
  },
};
</script>
