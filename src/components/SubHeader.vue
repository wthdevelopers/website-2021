<template>
  <h4 :class="className">
    <slot></slot>
  </h4>
</template>

<script>
export default {
  name: 'sub-header',
  props: {
    className: [String, Array],
  },
};
</script>

<style scoped>
h4 {
  font-size: 32px;
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-regular-text);

  border-bottom: 10px solid var(--color-subheader-text);
  display: inline-block;
  line-height: 0.4;
}

@media (--mobile-narrow) {
  h4 {
    font-size: 24px;
  }
}
</style>
