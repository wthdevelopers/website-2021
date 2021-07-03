<template>
  <p>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'form-error',
};
</script>

<style scoped>
p {
  font-family: var(--font-primary), sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #cc6675;
  margin-top: 20px;
  padding: 0 10px;
  height: 10px;
}

@media (--mobile-narrow) {
  p {
    font-size: 16px;
  }
}
</style>
