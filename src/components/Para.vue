<template>
  <p>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "para"
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
  /* border: 1px solid red; */
}

span {
  background-color: var(--color-accent);
  color: inherit;
  display: inline-block;
  line-height: 1;
}

@media only screen and (max-width: 570px) {
  p {
    font-size: 20px;
  }
}
</style>


