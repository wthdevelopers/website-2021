<template>
  <div id="prizes">
    <div class="prizes-body">
      <SectionHeader>Prizes</SectionHeader>
      <div class="prizes-content">
        <div class="category" v-for="category in categories" :key="category.name">
          <SubHeader style="align-self: center;">{{category.name}}</SubHeader>
          <Para style="margin-top: 30px;">{{category.award}}</Para>
        </div>
      </div>
    </div>
    <svg
      style="transform: translateY(-1px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        class="slope"
        d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,266.7C672,267,768,245,864,245.3C960,245,1056,267,1152,282.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import Para from "@/components/Para.vue";

export default {
  name: "prizes",
  components: {
    SectionHeader,
    SubHeader,
    Para
  },
  data() {
    return {
      categories: [
        {
          name: "Best Overall Hack",
          award: "$1000 Cash"
        },
        {
          name: "Best Built Environment Hack",
          award: "$500 Cash"
        },
        {
          name: "Best Waste Management Hack",
          award: "$500 Cash"
        },
        {
          name: "Best Waste Reduction Hack",
          award: "$500 Cash"
        },
        {
          name: "Best Transportation Hack",
          award: "$500 Cash"
        }
      ]
    };
  }
};
</script>

<style scoped>
.prizes-body {
  background-color: var(--slope-body-color);
  width: 100%;
  padding-top: 50px;
  transform: translateY(-1px);
  transition: background-color 0.6s ease-out;
}

.prizes-content {
  margin: 0 150px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
}

.category {
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  /* border: 1px solid red; */
}

.category h3 {
  font-size: 32px;
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-regular-text);

  align-self: center;
  /* border: 1px solid blue; */

  border-bottom: 10px solid var(--color-accent);
  line-height: 0.4;
  text-decoration: none;
}

@media (--desktop-narrow) {
  .prizes-content {
    margin: 0 100px;
  }
}

@media (--mobile-narrow) {
  .prizes-content {
    margin: 0 30px;
  }

  .category h3 {
    font-size: 24px;
  }
}
</style>

