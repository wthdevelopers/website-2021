<template>
  <section id="location" title="Location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3988.724908687625!2d103.96194377917459!3d1.3414140115758566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssutd!5e0!3m2!1sen!2ssg!4v1525927478994"
      width="600"
      height="500"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
    <div class="location-content-aside">
      <Para>The hackathon will be held at SUTD and the address is 8 Somapah Road, Singapore 487372.</Para>
      <Para>
        <span>Train:</span>
        <br />Alight at Upper Changi MRT Station (DT34) and take Exit B – our campus will be on your left when you exit
        the station
      </Para>
      <Para>
        <span>Bus:</span>
        <br />Alight at one of the bus stops along Somapah Road and walk to our Campus. <br />Buses available: 2, 5, 20,
        24
      </Para>
    </div>
  </section>
</template>

<script>
import Para from '@/components/Para';

export default {
  name: 'location',
  components: {
    Para,
  },
};
</script>

<style scoped>
#location {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 30px;
}

.location-content-aside {
  position: relative;
  z-index: 1;
  width: 40%;
}

.location-content-aside > * + * {
  margin-top: 20px;
}

iframe {
  width: 50%;
}

@media (--desktop-narrow) {
  #location {
    flex-direction: column;
  }

  iframe {
    width: 100%;
  }

  .location-content-aside {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
