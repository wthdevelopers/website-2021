<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'section-header',
};
</script>

<style scoped>
h3 {
  font-family: var(--font-secondary), sans-serif;
  font-size: calc(24px + 2vw);
  font-weight: 700;
  padding-left: 150px;
  /* margin: 24vw 0 20px 0; */
  color: var(--color-section-title-text);
  /* border: 1px solid yellow; */
}

@media (--desktop-narrow) {
  h3 {
    padding-left: 100px;
  }
}

@media (--mobile-narrow) {
  h3 {
    padding-left: 30px;
  }
}
</style>
