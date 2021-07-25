<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'form-block',
};
</script>

<style scoped>
div {
  position: relative;
  /* border: 1px solid red; */
}

div + div {
  margin-top: 100px;
}

@media (--mobile-narrow) {
  div + div {
    margin-top: 50px;
  }
}
</style>
