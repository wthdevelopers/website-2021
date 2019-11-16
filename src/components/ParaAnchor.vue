<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "para-anchor",
  props: {
    href: String
  }
};
</script>

<style scoped>
a {
  border-bottom: 10px solid var(--color-accent);
  display: inline-block;
  line-height: 0.4;
  color: inherit;
  text-decoration: none;
}

a:hover {
  background-color: var(--color-accent);
}
</style>


