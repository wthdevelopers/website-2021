<template>
  <div class="registration-content-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "registration-content-block"
};
</script>

<style scoped>
.registration-content-block {
  position: relative;
  background-color: var(--slope-body-color);
  transition: background-color 0.6s ease-out;
  padding: 150px 24vw 200px 24vw;
  /* border: 1px solid blue; */
}

@media (--desktop-narrow) {
  .registration-content-block {
    padding: 150px 16vw 200px 16vw;
  }
}

@media (--mobile-narrow) {
  .registration-content-block {
    padding: 150px 30px 200px 30px;
  }
}
</style>


