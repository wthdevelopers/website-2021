<template>
  <div id="sponsors">
    <div class="sponsors-body">
      <h3>Sponsors</h3>
      <div class="sponsors-content"></div>
    </div>
    <svg
      style="transform: translateY(-6px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#79c89f"
        fill-opacity="0.4"
        d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,213.3C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "sponsors"
};
</script>

<style scoped>
#sponsors {
  /* border: 1px solid purple; */
}

.sponsors-body {
  background-color: var(--slope-body-color);
  width: 100%;
  height: 800px;
  padding-top: 100px;
  transform: translateY(-6px);
}

h3 {
  font-family: proxima-soft, sans-serif;
  font-size: 55px;
  font-weight: 700;
  padding-left: 150px;
  color: var(--color-title-text);
  color: #c02685;
  margin-bottom: 50px;
  /* border: 1px solid yellow; */
}

.sponsors-content {
  height: 500px;
  margin: 0 150px;
  border: 1px solid red;
}
</style>

