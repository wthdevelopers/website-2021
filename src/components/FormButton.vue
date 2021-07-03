<template>
  <button class="form-button" v-if="linkAction === 'non-router'" type="button" @click="onClick.func(...onClick.args)">
    <slot></slot>
  </button>
  <router-link class="form-button" v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'form-button',
  props: {
    linkAction: String,
    onClick: { func: String, args: Array },
    to: String,
  },
};
</script>

<style scoped>
.form-button {
  cursor: pointer;
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--slope-body-color);
  padding: 4px 20px;
  background-color: var(--color-regular-text);
  border: none;
}

.form-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (--mobile-narrow) {
  .form-button {
    font-size: 20px;
  }
}
</style>
