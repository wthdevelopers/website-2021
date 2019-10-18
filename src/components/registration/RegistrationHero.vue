<template>
  <div id="registration-hero">
    <div id="registration-hero-content"></div>
    <svg viewBox="0 0 1440 269.69" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m0 96 48-16c48-16 144-48 240-16s192 128 288 154.7c96 26.3 192-15.7 288-42.7s192-37 288-21.3c96 16.3 192 58.3 240 80l48 21.3v64h-1440z"
        fill="#79c89f"
        transform="translate(0 -50.31)"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "registration-hero"
};
</script>

<style scoped>
#registration-hero {
  /* border: 1px solid red; */
}

#registration-hero-content {
  height: 200px;
  /* border: 1px solid green; */
}

svg {
  transform: translateY(6px);
}

svg > path {
  fill: var(--slope-body-color);
  transition: fill 0.6s ease-out;
}
</style>

