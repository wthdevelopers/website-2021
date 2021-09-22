<template>
  <section id="prizes" title="Prizes">
    <div class="prizes-body">
      <SectionHeader>Prizes</SectionHeader>
      <div class="prizes-content">
        <Para style="text-align: center; margin: 50px 0 70px 0"
          >The following prizes were awarded to the best hacks in their respective categories:</Para
        >
        <ul>
          <li class="category" v-for="category in categories" :key="category.name">
            <SubHeader style="align-self: center" class="prizes-subheader">{{ category.name }}</SubHeader>
            <Para style="margin-top: 30px">{{ category.award }}</Para>
            <Para style="margin-top: 30px" v-if="category.winner">
              <a v-if="category.winner_url" :href="category.winner_url" target="_blank" rel="noopener noreferrer">{{
                category.winner
              }}</a>
            </Para>
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
          award: '$1,250 Cash Prize',
          winner: '( ͡° ͜◯ ͡°) ＣＬＯＷＮ ＦＩＥＳＴＡ ( ͡° ͜◯ ͡°)',
          winner_url: 'https://sutdwth21.devpost.com/submissions/262296-gardens-by-the-hdbay',
        },
        {
          name: 'Best Waste Management Hack',
          award: '$1,250 Cash Prize',
          winner: 'BinTan',
          winner_url: 'https://sutdwth21.devpost.com/submissions/262369-project-refill-it',
        },
        {
          name: 'Best Natural Environment Hack',
          award: '$1,250 Cash Prize',
          winner: 'StrangerDanger',
          winner_url: 'https://sutdwth21.devpost.com/submissions/262743-strangerdanger',
        },
        {
          name: 'Best Transportation Hack',
          award: '$1,250 Cash Prize',
          winner: 'HZAUP',
          winner_url: 'https://sutdwth21.devpost.com/submissions/261953-parkthere-team-hzaup',
        },
        {
          name: 'Best Hardware Hack',
          award: 'Raspberry Pi 4 B',
          winner: 'Bob the Builders',
          winner_url: 'https://sutdwth21.devpost.com/submissions/261956-smart-pot',
        },
        {
          name: 'Best Design Hack',
          award: 'One by Wacom Small Drawing Tablet',
          winner: 'WhaleFood',
          winner_url: 'https://sutdwth21.devpost.com/submissions/262357-seeturtle-team-whalefood',
        },
        {
          name: 'Most Green Hack',
          award: 'Amazon Echo Dot',
          winner: 'RSFD',
          winner_url: 'https://sutdwth21.devpost.com/submissions/262379-venturi-tube-passive-air-ventilation-system',
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
