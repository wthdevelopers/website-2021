<template>
  <ContentModal :id="id">
    <h3>Utilising Alternate Energy Sources in Prototyping</h3>
    <Para>
      This workshop will consist of a basic electronics guide on how to connect an alternative
      energy source to your prototypes and how to estimate the amount required for your project.
    </Para>
    <br>
    <br>
    <Para>Conducted By: Energy Club</Para>
    <br>
    <br>
    <Para>Duration: 1hr</Para>
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