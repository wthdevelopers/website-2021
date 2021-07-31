<template>
  <section id="prizes" title="Prizes">
    <div class="prizes-body">
      <SectionHeader>Prizes</SectionHeader>
      <div class="prizes-content">
        <Para style="text-align: center; margin: 50px 0 70px 0;"
          >The following prizes will be awarded to the best hacks in their respective categories:</Para
        >
        <ul>
          <li class="category" v-for="category in categories" :key="category.name">
            <SubHeader style="align-self: center;" class="prizes-subheader">{{ category.name }}</SubHeader>
            <!-- <Para style="margin-top: 30px;">{{category.award}}</Para> -->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import SubHeader from '@/components/SubHeader.vue';
import Para from '@/components/Para.vue';

export default {
  name: 'prizes',
  components: {
    SectionHeader,
    SubHeader,
    Para,
  },
  data() {
    return {
      categories: [
        {
          name: 'Best Built Environment Hack',
          award: 'Coming Soon',
        },
        {
          name: 'Best Waste Management Hack',
          award: 'Coming Soon',
        },
        {
          name: 'Best Natural Environment Hack',
          award: 'Coming Soon',
        },
        {
          name: 'Best Transportation Hack',
          award: 'Coming Soon',
        },
        {
          name: 'Best Hardware Hack',
          award: 'Coming Soon',
        },
        {
          name: 'Best Design Hack',
          award: 'Coming Soon',
        },
        {
          name: 'Most Green Hack',
          award: 'Coming Soon',
        },
      ],
    };
  },
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
}

.category + .category {
  margin-top: 100px;
}

.category h3 {
  font-size: 32px;
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-regular-text);
  align-self: center;
  border-bottom: 10px solid var(--color-accent);
  line-height: 0.4;
  text-decoration: none;
}

@media (--desktop-narrow) {
  .prizes-content {
    margin: 0 100px;
  }
}

@media (max-width: 668px) {
  .prizes-subheader {
    font-size: 24px;
  }
}

@media (--mobile-narrow) {
  .prizes-content {
    margin: 0 30px;
  }

  .category + .category {
    margin-top: 50px;
  }
}

@media (max-width: 410px) {
  .prizes-subheader {
    font-size: 17.5px;
  }
}
</style>
