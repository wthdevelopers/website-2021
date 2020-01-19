<template>
  <ContentModal :id="id">
    <h3>ESP32 Web Server & BLE</h3>
    <Para>
      In this workshop, we’ll teach you how to use the ESP32 platform with the
      Arduino IDE to make your hardware project communicate over WiFi and Bluetooth. Using
      Bluetooth, you can have multiple wireless nodes in your project, or use WiFi to control
      your hardware project with your phone or PC, even over the internet!
    </Para>
    <br>
    <br>
    <Para>Conducted By: SUTD IEEE</Para>
    <br>
    <br>
    <Para>Duration: 2hrs</Para>
  </ContentModal>
</template>

<script>
import ContentModal from "@/components/ContentModal.vue";
import Para from "@/components/Para.vue";

export default {
  name: "workshop-four-modal",
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