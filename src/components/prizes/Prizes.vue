<template>
  <div id="prizes">
    <div class="prizes-body">
      <h3>Prizes</h3>
      <div class="prizes-content"></div>
    </div>
    <svg
      style="transform: translateY(-1px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        class="slope"
        fill="#3f626d"
        fill-opacity="1"
        d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,266.7C672,267,768,245,864,245.3C960,245,1056,267,1152,282.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "prizes"
};
</script>

<style scoped>
#prizes {
  /* border: 1px solid purple; */
}

.prizes-body {
  background-color: var(--slope-body-color);
  width: 100%;
  height: 550px;
  padding-top: 100px;
  transform: translateY(-1px);
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

.prizes-content {
  height: 300px;
  margin: 0 150px;
  border: 1px solid red;
}
</style>

