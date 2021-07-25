<template>
  <section id="workshops" title="Workshops">
    <div class="workshops-content">
      <SectionHeader>Workshops</SectionHeader>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="transform: translateY(-2px);">
      <path
        class="slope"
        d="M0 128l48 16c48 16 144 48 240 75 96 26 192 48 288 48s192-22 288-22 192 22 288 38 192 26 240 32l48 5V0H0z"
      ></path>
    </svg>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'workshops',
  components: {
    SectionHeader,
  },
};
</script>

<style scoped>
.workshops-content {
  background-color: var(--slope-body-color);
  width: 100%;
  padding-top: 100px;
  transform: translateY(-1px);
  transition: background-color 0.6s ease-out;
}
</style>
