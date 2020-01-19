<template>
  <ContentModal :id="id">
    <h3>Repurposing Scrap Materials for Prototype Design</h3>
    <Para>
      In this workshop, you will learn how to upcycle scrap material into something
      usable for your prototype. Participants will be guided on how to operate the
      fabrication tools in the fabrication lab.
    </Para>
    <br>
    <br>
    <Para>Conducted By: Makerspace</Para>
    <br>
    <br>
    <Para>Duration: 1.5hrs</Para>
  </ContentModal>
</template>

<script>
import ContentModal from "@/components/ContentModal.vue";
import Para from "@/components/Para.vue";

export default {
  name: "workshop-one-modal",
  components: {
    ContentModal,
    Para
  },
  props: {
    id: String,
    workshop: Number
  }
};
</script>

<style scoped>
h3 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-align: center;
  text-decoration: underline;
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }
}
</style>