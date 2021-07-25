<template>
  <p>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'form-label-sub',
};
</script>

<style scoped>
p {
  font-family: var(--font-primary), sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: var(--color-gray);
  margin-top: 20px;
  padding: 0 10px;
}

@media (--mobile-narrow) {
  p {
    font-size: 16px;
  }
}
</style>
