<template>
  <div id="faq">
    <SectionHeader>FAQs</SectionHeader>
    <div class="faq-content"></div>
    <svg
      style="transform: translateY(5.5px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        class="slope"
        d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,213.3C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";

export default {
  name: "faq",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
.faq-content {
  height: 600px;
  margin: 0 150px;
  border: 1px solid red;
  /* margin-bottom: 100px; */
}

@media only screen and (max-width: 1000px) {
  .faq-content {
    margin: 0 100px;
  }
}

@media only screen and (max-width: 570px) {
  .faq-content {
    margin: 0 30px;
  }
}
</style>


