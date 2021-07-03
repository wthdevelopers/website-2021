<template>
  <label :for="forValue">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'form-label',
  props: {
    forValue: String,
  },
};
</script>

<style scoped>
label {
  font-family: var(--font-primary), sans-serif;
  font-size: 34px;
  font-weight: 400;
  color: var(--color-regular-text);
}

@media (--desktop-narrow) {
  label {
    font-size: 28px;
  }
}

@media (--mobile-narrow) {
  label {
    font-size: 20px;
  }
}
</style>
