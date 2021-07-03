<template>
  <ContentModal :id="id">
    <h3>Fusion 360 Beginner</h3>
    <Para>
      Ever wanted to 3D print something but couldn't find the right model? Ever needed to make a custom part for a
      project? Well now you can! Come and learn the basics of CAD with Fusion 360 and get started with 3D modelling.
    </Para>
    <br />
    <br />
    <Para>Conducted By: MechD</Para>
    <br />
    <br />
    <Para>Duration: 2-3hrs</Para>
  </ContentModal>
</template>

<script>
import ContentModal from '@/components/ContentModal.vue';
import Para from '@/components/Para.vue';

export default {
  name: 'workshop-one-modal',
  components: {
    ContentModal,
    Para,
  },
  props: {
    id: String,
    workshop: Number,
  },
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
