<template>
  <section id="workshops" title="Workshops">
    <div class="workshops-body">
      <SectionHeader>Workshops</SectionHeader>

      <div class="workshops-content" id="workshops-content">
        <div class="highlight-content">
          <div :class="['highlight-content-media', { 'highlight-content-media__video': !!selectedWorkshop.videoURL }]">
            <iframe
              class="hightlight-video"
              v-if="selectedWorkshop.videoURL"
              width="100%"
              height="100%"
              :src="selectedWorkshop.videoURL"
              :title="selectedWorkshop.title"
              frameborder="0"
              allowfullscreen
            />
            <img
              class="highlight-image"
              v-else
              :src="require(`${selectedWorkshop.thumbnailURL}`)"
              :alt="selectedWorkshop.title"
            />
          </div>

          <div class="highlight-details-content">
            <SubHeader className="highlight-title">{{ selectedWorkshop.title }}</SubHeader>
            <br />
            <Para className="highlight-info">{{ selectedWorkshop.description }}</Para>
            <br />
            <Para className="highlight-info">{{ selectedWorkshop.info }}</Para>
          </div>
        </div>

        <div class="other-workshops-content">
          <div
            class="other-workshops-card-container"
            v-for="workshop in workshopData"
            :key="workshop.id"
            @click="() => onClickHandler(workshop.id)"
          >
            <img
              :class="['other-workshop-card-image', { 'selected-workshop': workshop.id === selectedWorkshop.id }]"
              :src="require(`${workshop.thumbnailURL}`)"
              :alt="workshop.title"
            />
            <SubHeader
              :className="['other-workshop-card-title', { 'selected-workshop': workshop.id === selectedWorkshop.id }]"
            >
              {{ workshop.title }}
            </SubHeader>
          </div>
        </div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="transform: translateY(-2px);">
      <path
        class="slope"
        d="M0 128l48 16c48 16 144 48 240 75 96 26 192 48 288 48s192-22 288-22 192 22 288 38 192 26 240 32l48 5V0H0z"
      ></path>
    </svg>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import SubHeader from '@/components/SubHeader.vue';
import Para from '@/components/Para.vue';

import { workshopData } from '@/sections/workshops/workshopData';

export default {
  name: 'workshops',
  components: {
    SectionHeader,
    SubHeader,
    Para,
  },
  data: function() {
    return {
      workshopData,
      selectedWorkshop: workshopData[0],
    };
  },
  methods: {
    onClickHandler: function(id) {
      this.selectedWorkshop = workshopData.find((workshop) => workshop.id === id);
      const workshopVideo = document.querySelector('#workshops-content');
      workshopVideo.scrollIntoView(true);
    },
  },
};
</script>

<style scoped>
.workshops-body {
  background-color: var(--slope-body-color);
  width: 100%;
  padding-top: 100px;
  transform: translateY(-1px);
  transition: background-color 0.6s ease-out;
}

.workshops-content {
  padding: 50px 150px 0 150px;
}

.highlight-content {
  display: flex;
  justify-content: space-between;
  gap: 45px;
}

.highlight-content-media {
  border-radius: 30px;
  border: 10px solid var(--color-accent);
  height: fit-content;
  margin: auto 0;
  width: 60%;
  max-width: 700px;
  overflow: hidden;
}

.highlight-content-media.highlight-content-media__video {
  height: 360px;
}

.highlight-image {
  display: block;
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.highlight-details-content {
  flex: 1 1 40%;
}

.highlight-details-content > .highlight-title {
  border: none;
  line-height: normal;
}

.highlight-details-content > .highlight-info {
  margin-top: 24px;
}

.other-workshops-content {
  display: flex;
  gap: 32px;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.other-workshops-card-container {
  cursor: pointer;
  text-align: center;
  width: 260px;
}

.other-workshops-card-container:hover > .other-workshop-card-image {
  border: 5px solid var(--color-accent);
}

.other-workshops-card-container:hover > .other-workshop-card-title {
  color: var(--color-accent);
}

.other-workshop-card-image {
  border-radius: 30px;
  display: block;
  height: 150px;
  margin: 0 auto;
  width: 100%;
}

.other-workshop-card-image.selected-workshop {
  border: 5px solid var(--color-accent);
  transition: border ease-in;
}

.other-workshop-card-title {
  border: none;
  color: var(--color-regular-text);
  font-family: var(--font-secondary), sans-serif;
  font-size: 16px;
  line-height: normal;
  margin-top: 16px;
  padding: 0 10px;
  text-align: center;
}

.other-workshop-card-title.selected-workshop {
  color: var(--color-accent);
}

@media (--desktop-narrow) {
  .workshops-content {
    padding: 50px 100px 0 100px;
  }
}

@media (max-width: 1024px) {
  .highlight-content {
    flex-direction: column;
    align-items: center;
  }

  .highlight-content-media {
    flex-basis: auto;
    min-height: unset;
    width: fit-content;
    max-width: unset;
  }

  .highlight-content-media.highlight-content-media__video {
    width: 100%;
  }

  .other-workshops-card-container {
    width: calc(50% - 16px);
  }

  .other-workshop-card-image {
    height: 220px;
  }
}

@media (--mobile-wide) {
  .highlight-content-media.highlight-content-media__video {
    height: 300px;
  }

  .other-workshops-card-container {
    width: 80%;
  }

  .other-workshop-card-image {
    height: 30vw;
    min-height: 170px;
  }
}

@media (--mobile-narrow) {
  .workshops-content {
    padding: 50px 30px 0 30px;
  }

  .highlight-content-media.highlight-content-media__video {
    height: 280px;
  }
}
</style>
