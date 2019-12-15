<template>
  <div id="carousel" style="transform: translateY(-2px);">
    <div class="carousel-body">
      <div class="carousel-content">
        <div class="carousel-textgroup">
          <div class="carousel-maintext">
            A magical wand powered by AR that unlocks the barriers
            of your phone's screen so that you can create,
            collaborate and transform the world by drawing.
          </div>
          <div class="carousel-subtext">
            -
            <span>Team AR Wand</span>, Best Overall Hack, WTH2018
          </div>
        </div>
        <div class="carousel-textgroup">
          <div class="carousel-maintext">
            A seriously-cool plasma ion rocket thruster that
            uses high currents and pressures to create thrust
            via the dissociation of argon electrons.
          </div>
          <div class="carousel-subtext">
            -
            <span>Team Duct Tape Hax</span>, Best Space Hack, WTH2017
          </div>
        </div>
        <div class="carousel-textgroup">
          <div class="carousel-maintext">
            An entertaining VR tower defense game that teaches
            you the fundamental concepts of circuit physics
            as you defend against hordes of feisty zombies.
          </div>
          <div class="carousel-subtext">
            -
            <span>Team Circuit Defense</span>, Best VR Hack, WTH2018
          </div>
        </div>
        <div class="carousel-textgroup">
          <div class="carousel-maintext">
            A smart bin that classifies waste into different
            material categories for recycling purposes, and
            then credits you with EZ-Link credits for the job
            well done!
          </div>
          <div class="carousel-subtext">
            -
            <span>Team Sentinel</span>, WTH2017
          </div>
        </div>
        <div class="carousel-textgroup">
          <div class="carousel-maintext">
            An immersive and educational VR simulation of a
            fire incident in an office where you have to use
            the right tools and find the right path to escape.
          </div>
          <div class="carousel-subtext">
            -
            <span>Team Fire Escape</span>, WTH2018
          </div>
        </div>
      </div>
      <ul class="carousel-dots">
        <li class="carousel-dot-1" @click="slideTo(1)"></li>
        <li class="carousel-dot-2" @click="slideTo(2)"></li>
        <li class="carousel-dot-3" @click="slideTo(3)"></li>
        <li class="carousel-dot-4" @click="slideTo(4)"></li>
        <li class="carousel-dot-5" @click="slideTo(5)"></li>
      </ul>
    </div>
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      style="transform: translateY(-2px);"
    >
      <path
        class="slope"
        d="m0 0v278l22 9c22 10 65 29 109 29s87-19 131-35 87-29 131-22c43 6 87 31 131 44q65 19 131 0c43-13 87-38 130-47 44-10 88-4 131-13 44-10 88-35 131-26 44 10 88 54 131 80 44 26 87 32 131 9 44-22 87-73 109-98l22-26v-182z"
      ></path>
    </svg>
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import Para from "@/components/Para.vue";

export default {
  name: "carousel",
  components: {
    SubHeader,
    Para
  },
  data() {
    return {
      slide: 1,
      carouselIntervalID: null
    };
  },
  methods: {
    slideLeft() {
      document.querySelector(".carousel-content").style.transition =
        "transform 0.5s";
      if (this.slide === 5) {
        document.querySelector(".carousel-content").style.transform =
          "translate3d(0,0,0)";
        document.querySelector(
          `.carousel-dot-${this.slide}`
        ).style.backgroundColor = "transparent";
        document.querySelector(".carousel-dot-1").style.backgroundColor =
          "var(--color-regular-text)";
        this.slide = 1;
      } else {
        document.querySelector(
          ".carousel-content"
        ).style.transform = `translate3d(-${window.innerWidth *
          this.slide}px,0,0)`;
        document.querySelector(
          `.carousel-dot-${this.slide}`
        ).style.backgroundColor = "transparent";
        document.querySelector(
          `.carousel-dot-${this.slide + 1}`
        ).style.backgroundColor = "var(--color-regular-text)";
        this.slide++;
      }
      setTimeout(() => {
        document.querySelector(".carousel-content").style.transition = "none";
      }, 500);
    },
    slideTo(idx) {
      clearInterval(this.carouselIntervalID);
      document.querySelector(".carousel-content").style.transition =
        "transform 0.5s";
      document.querySelector(
        ".carousel-content"
      ).style.transform = `translate3d(-${window.innerWidth *
        (idx - 1)}px,0,0)`;
      document.querySelector(
        `.carousel-dot-${this.slide}`
      ).style.backgroundColor = "transparent";
      document.querySelector(`.carousel-dot-${idx}`).style.backgroundColor =
        "var(--color-regular-text)";
      this.slide = idx;
      setTimeout(() => {
        document.querySelector(".carousel-content").style.transition = "none";
      }, 500);
      this.carouselIntervalID = setInterval(() => {
        this.slideLeft();
      }, 5000);
    }
  },
  mounted() {
    this.carouselIntervalID = setInterval(() => {
      this.slideLeft();
    }, 5000);

    window.addEventListener("resize", () => {
      clearInterval(this.carouselIntervalID);
      document.querySelector(".carousel-content").style.transform =
        "translate3d(0,0,0)";
      document.querySelector(
        `.carousel-dot-${this.slide}`
      ).style.backgroundColor = "transparent";
      document.querySelector(".carousel-dot-1").style.backgroundColor =
        "var(--color-regular-text)";
      this.slide = 1;
      this.carouselIntervalID = setInterval(() => {
        this.slideLeft();
      }, 5000);
    });
  }
};
</script>

<style scoped>
.carousel-body {
  background-color: var(--slope-body-color);
  padding: 200px 150px 0 150px;
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

.carousel-maintext::before {
  content: '"';
  position: absolute;
  top: -100px;
  left: 0;
  font-family: var(--font-secondary), sans-serif;
  font-size: 90px;
}

.carousel-dots {
  transform: translateY(-1.5px);
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto 0 auto;
}

.carousel-dots > li:first-of-type {
  background-color: var(--color-regular-text);
}

.carousel-dots > li {
  width: 15px;
  height: 15px;
  border-radius: 50px;
  border: 1px solid var(--color-regular-text);
  cursor: pointer;
}

@media (--desktop-narrow) {
  .carousel-body {
    padding: 150px 100px 0 100px;
  }

  .carousel-textgroup + .carousel-textgroup {
    margin-left: 200px;
  }

  .carousel-maintext {
    font-size: 42px;
  }
}

@media (--mobile-narrow) {
  .carousel-body {
    padding: 150px 30px 0 30px;
  }

  .carousel-textgroup + .carousel-textgroup {
    margin-left: 60px;
  }

  .carousel-maintext {
    font-size: 34px;
  }

  .carousel-subtext {
    font-size: 20px;
  }
}
</style>

