<template>
  <div id="thankees">
    <div class="thankees-body">
      <SectionHeader>Sponsors</SectionHeader>
      <div class="thankees-content"></div>
    </div>
    <svg
      style="transform: translateY(-6px);"
      viewBox="0 0 1440 215.44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="slope"
        d="m-92.45-323.12h60c60 0 180 0 300 16s240 48 360 37.3c120-10.3 240-64.3 360-85.3s240-11 300-5.3l60 5.3v-128h-1440z"
        transform="translate(92.45 483.12)"
      ></path>
    </svg>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";

export default {
  name: "thankees",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
.thankees-body {
  background-color: var(--slope-body-color);
  width: 100%;
  height: 800px;
  padding-top: 100px;
  transform: translateY(-6px);
  transition: background-color 0.6s ease-out;
}

.thankees-content {
  height: 500px;
  margin: 0 150px;
  border: 1px solid red;
}

@media only screen and (max-width: 1000px) {
  .thankees-content {
    margin: 0 100px;
  }
}

@media only screen and (max-width: 1000px) {
  .schedule-content {
    margin: 0 100px;
  }
}

@media only screen and (max-width: 570px) {
  .thankees-content {
    margin: 0 30px;
  }
}
</style>

