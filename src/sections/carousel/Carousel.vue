<template>
  <section
    id="carousel"
    aria-label="Highlighted projects and teams from previous iterations"
    style="transform: translateY(-2px);"
  >
    <div class="carousel-body">
      <div class="carousel-content">
        <div
          v-for="(item, idx) in content"
          :key="item.team"
          class="carousel-textgroup"
          :id="`carousel-textgroup-${idx + 1}`"
          :aria-hidden="idx === 0 ? 'false' : 'true'"
          role="group"
          :aria-label="`${idx + 1} of ${content.length}`"
        >
          <div v-if="item.teamVideoURL && slide === idx + 1" class="carousel-content-media">
            <iframe
              width="100%"
              height="100%"
              :src="item.teamVideoURL"
              :title="item.team"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <p class="carousel-quote">"</p>
          <div class="carousel-maintext">{{ item.desc }}</div>
          <div class="carousel-subtext">
            -
            <span :class="{ 'team-link': item.teamURL !== '' }" @click="() => openNewTab(item.teamURL)">
              {{ item.team }}
            </span>
            , {{ item.teamDesc }}
          </div>
        </div>
      </div>
      <div class="carousel-dots">
        <button
          v-for="idx in 5"
          :key="idx"
          :id="`carousel-dot-${idx}`"
          @click="slideTo(idx)"
          @focus="pauseSlide"
          @blur="resumeSlide"
        >
          <span class="sr-only">Go to carousel slide {{ idx }}</span>
        </button>
      </div>
    </div>
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(-2px);">
      <path
        class="slope"
        d="m0 0v278l22 9c22 10 65 29 109 29s87-19 131-35 87-29 131-22c43 6 87 31 131 44q65 19 131 0c43-13 87-38 130-47 44-10 88-4 131-13 44-10 88-35 131-26 44 10 88 54 131 80 44 26 87 32 131 9 44-22 87-73 109-98l22-26v-182z"
      ></path>
    </svg>
  </section>
</template>

<script>
import { carouselData } from '@/sections/carousel/carouselData';

export default {
  name: 'carousel',
  data() {
    return {
      content: carouselData,
      slide: 1,
      carouselIntervalID: null,
    };
  },
  methods: {
    slideLeft() {
      document.querySelector('.carousel-content').style.transition = 'transform 0.5s';
      if (this.slide === 5) {
        document.querySelector('#carousel-textgroup-1').setAttribute('aria-hidden', 'false');
        document.querySelector(`#carousel-textgroup-${this.slide}`).setAttribute('aria-hidden', 'true');
        document.querySelector('.carousel-content').style.transform = 'translate3d(0,0,0)';
        document.querySelector(`#carousel-dot-${this.slide}`).style.backgroundColor = 'transparent';
        document.querySelector('#carousel-dot-1').style.backgroundColor = 'var(--color-regular-text)';
        this.slide = 1;
      } else {
        document.querySelector(`#carousel-textgroup-${this.slide + 1}`).setAttribute('aria-hidden', 'false');
        document.querySelector(`#carousel-textgroup-${this.slide}`).setAttribute('aria-hidden', 'true');
        document.querySelector('.carousel-content').style.transform = `translate3d(-${window.innerWidth *
          this.slide}px,0,0)`;
        document.querySelector(`#carousel-dot-${this.slide}`).style.backgroundColor = 'transparent';
        document.querySelector(`#carousel-dot-${this.slide + 1}`).style.backgroundColor = 'var(--color-regular-text)';
        this.slide++;
      }
      setTimeout(() => {
        document.querySelector('.carousel-content').style.transition = 'none';
      }, 500);
    },
    slideTo(idx) {
      clearInterval(this.carouselIntervalID);
      document.querySelector(`#carousel-textgroup-${idx}`).setAttribute('aria-hidden', 'false');
      document.querySelector(`#carousel-textgroup-${this.slide}`).setAttribute('aria-hidden', 'true');
      document.querySelector('.carousel-content').style.transition = 'transform 0.5s';
      document.querySelector('.carousel-content').style.transform = `translate3d(-${window.innerWidth *
        (idx - 1)}px,0,0)`;
      document.querySelector(`#carousel-dot-${this.slide}`).style.backgroundColor = 'transparent';
      document.querySelector(`#carousel-dot-${idx}`).style.backgroundColor = 'var(--color-regular-text)';
      this.slide = idx;
      setTimeout(() => {
        document.querySelector('.carousel-content').style.transition = 'none';
      }, 500);
      this.carouselIntervalID = setInterval(() => {
        this.slideLeft();
      }, 5000);
    },
    pauseSlide() {
      clearInterval(this.carouselIntervalID);
    },
    resumeSlide() {
      clearInterval(this.carouselIntervalID);
      this.carouselIntervalID = setInterval(() => {
        this.slideLeft();
      }, 5000);
    },
    openNewTab: function(url) {
      if (url) {
        window.open(url, '_blank');
      }
    },
  },
  mounted() {
    this.carouselIntervalID = setInterval(() => {
      this.slideLeft();
    }, 5000);

    window.addEventListener('resize', () => {
      clearInterval(this.carouselIntervalID);
      document.querySelector('.carousel-content').style.transform = 'translate3d(0,0,0)';
      document.querySelector(`#carousel-dot-${this.slide}`).style.backgroundColor = 'transparent';
      document.querySelector('#carousel-dot-1').style.backgroundColor = 'var(--color-regular-text)';
      this.slide = 1;
      this.carouselIntervalID = setInterval(() => {
        this.slideLeft();
      }, 5000);
    });
  },
};
</script>

<style scoped>
.carousel-body {
  background-color: var(--slope-body-color);
  padding: 140px 150px 0 150px;
  transform: translateY(-1px);
  transition: background-color 0.6s ease-out;
}

.carousel-content {
  display: flex;
  font-family: var(--font-primary), sans-serif;
  line-height: 1.6;
  color: var(--color-regular-text);
}

.carousel-textgroup + .carousel-textgroup {
  margin-left: 300px;
}

.carousel-textgroup {
  width: 100%;
  flex-shrink: 0;
}

.carousel-content-media {
  border-radius: 30px;
  border: 10px solid var(--color-accent);
  height: 450px;
  margin: 0 auto 36px;
  width: 70%;
  max-width: 800px;
  overflow: hidden;
}

.carousel-quote {
  font-family: var(--font-secondary), sans-serif;
  font-size: 90px;
  line-height: 60px;
}
.carousel-maintext {
  position: relative;
  font-size: 52px;
}

.carousel-subtext {
  margin-top: 50px;
  font-size: 24px;
  text-align: right;
}

span {
  border-bottom: 10px solid var(--color-accent);
  display: inline-block;
  line-height: 0.4;
}

.team-link {
  cursor: pointer;
}

.carousel-dots {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 40px 0 6px;
}

.carousel-dots > button:first-of-type {
  background-color: var(--color-regular-text);
}

.carousel-dots > button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid var(--color-regular-text);
  cursor: pointer;
}

.carousel-dot__active {
  background-color: var(--color-regular-text);
}

@media (max-width: 1200px) {
  .carousel-content-media {
    width: 80%;
    max-width: unset;
  }
}

@media (--desktop-narrow) {
  .carousel-body {
    padding: 88px 100px 0 100px;
  }

  .carousel-content-media {
    height: 420px;
    width: 100%;
  }

  .carousel-maintext {
    font-size: 42px;
  }

  .carousel-textgroup + .carousel-textgroup {
    margin-left: 200px;
  }
}

@media (--mobile-wide) {
  .carousel-content-media {
    height: 360px;
  }

  .carousel-textgroup + .carousel-textgroup {
    margin-left: 200px;
  }
}

@media (--mobile-narrow) {
  .carousel-body {
    padding: 88px 30px 0 30px;
  }

  .carousel-content-media {
    height: 280px;
  }

  .carousel-maintext {
    font-size: 34px;
  }

  .carousel-subtext {
    font-size: 20px;
  }

  .carousel-textgroup + .carousel-textgroup {
    margin-left: 60px;
  }
}
</style>
