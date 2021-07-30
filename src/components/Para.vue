<template>
  <p :class="className" @click="onClick">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'para',
  props: {
    className: [String, Array],
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style scoped>
p {
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-family: var(--font-primary), sans-serif;
  line-height: 1.6;
  z-index: 1;
  color: var(--color-regular-text);
}

span {
  display: inline-block;
  line-height: 0.4;
  color: var(--color-accent);
  font-weight: bold;
  text-decoration: none;
}

a {
  display: inline;
  border-bottom: 2px solid var(--color-accent);
}

@media (--mobile-narrow) {
  p {
    font-size: 20px;
  }
}
</style>
