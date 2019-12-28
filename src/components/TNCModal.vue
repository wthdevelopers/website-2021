<template>
  <ContentModal :id="id">
    <h3>Terms & Conditions</h3>
    <Para>
      This Section is to be confirmed... Stay tuned for future updates!
    </Para>
  </ContentModal>
</template>

<script>
import ContentModal from "@/components/ContentModal.vue";
import Para from "@/components/Para.vue";

export default {
  name: "tnc-modal",
  components: {
    ContentModal,
    Para
  },
  props: {
    id: String
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

h4 {
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-regular-text);
  margin-bottom: 30px;
  text-decoration: underline;
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
  }
}
</style>


