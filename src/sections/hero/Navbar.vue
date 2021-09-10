<template>
  <nav>
    <ul id="bar">
      <li>
        <a :class="{ hidden_sticky: scrollPosition > scrollThreshold }" href="https://www.sutdwth.com">
          <span class="sr-only">Go to homepage</span>
          <WTHLogo />
        </a>
      </li>
      <li>
        <button
          @click="
            buttonOnClickScroll('about');
            closeDrawer();
          "
        >
          About
        </button>
      </li>
      <li>
        <button
          @click="
            buttonOnClickScroll('prizes');
            closeDrawer();
          "
        >
          Prizes
        </button>
      </li>
      <li>
        <button
          @click="
            buttonOnClickScroll('workshops');
            closeDrawer();
          "
        >
          Workshops
        </button>
      </li>
      <li>
        <button
          @click="
            buttonOnClickScroll('schedule');
            closeDrawer();
          "
        >
          Schedule
        </button>
      </li>
      <li>
        <button
          @click="
            buttonOnClickScroll('thankees');
            closeDrawer();
          "
        >
          Sponsors
        </button>
      </li>
      <li>
        <button
          @click="
            buttonOnClickScroll('faq');
            closeDrawer();
          "
        >
          FAQs
        </button>
      </li>
      <li :class="['bar-register-link', 'bar-register-link-disabled']">
        <button
          id="register-button-desktop"
          class="register-button-disabled"
          :disabled="true"
          @click="openModal('registration-guide-modal', 'register-button-desktop')"
        >
          Register
        </button>
      </li>
      <li>
        <button @click="toggleTheme">
          <span class="sr-only">Toggle light or dark mode</span>
          <svg
            v-if="theme === 'light'"
            width="25px"
            style="transform: translateY(3.5px); cursor: pointer"
            viewBox="0 0 222.57 218.09"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <g transform="translate(0 -.02)">
              <path
                d="m181.58 186.13c.41 10.77.42 10.74-9.93 8.59-5.68-1.17-11.41-2.15-17.08-3.39-2.91-.63-4.47.29-5.81 3-3.94 7.94-8.21 15.73-12.45 23.78-7.29-5.36-14.5-10.5-21.51-15.91-2.48-1.91-4.22-2.22-6.83-.12-6 4.83-12.41 9.16-18.43 14-2.76 2.2-3.79 1.52-5.19-1.34-3.27-6.72-7.07-13.18-10.28-19.92-1.48-3.11-3.19-4.13-6.54-3.4-7.13 1.58-14.39 2.58-21.46 4.36-4.19 1.06-5.52-.06-5.13-4.14.17-1.81.07-3.65.08-5.47.76-3.9.15-7.83.35-11.74 0-2.44-.06-4.9.05-7.31-.41 1 .41 2.44-.7 3.38 0-4.17-2.25-5.7-6.2-6.53-7-1.45-13.69-3.83-20.62-5.39-3.31-.75-3.58-1.89-2.28-4.7 3.33-7.2 6.33-14.56 9.67-21.76 1.17-2.5.85-3.59-1.37-5.62-6.63-6-14.48-10.81-19.92-18.16 6.67-5.85 13.16-11.92 20.11-17.42 2.32-1.84 2.29-3 1.27-5.25-3.16-6.93-6-14-9.36-20.85-1.95-4-1-5.35 3.15-6.24 6.66-1.42 13.13-3.76 19.83-5.07 4-.77 5.49-2.78 5.74-6.41 1.17.93.14 2.57.75 3.42-.23-2.3 0-4.78-.1-7.25-.2-4 .41-7.92-.35-11.84 0-1-.13-2-.11-3 .12-8.09.1-7.95 8.08-6.08 6.43 1.5 13 2.58 19.45 3.91 2.44.51 4-.19 5.14-2.53 3.63-7.26 7.56-14.38 11.15-21.67 1.25-2.51 2.25-2.58 4.25-.87 6.4 5.55 13.33 10.38 20.2 15.32 1.94 1.4 2.61.92 3.91 0 6.7-5 13.47-9.92 20.08-15 2.37-1.84 3.48-2 4.91 1.09 2.86 6.13 6.25 12 9.4 18s6.16 6.91 12.65 4.95c6.15-1.85 12.57-2.8 18.88-4.1 1.59-.33 2.56.27 2.54 2.07v8c-.76 3.9-.15 7.83-.35 11.74v7c.36-.9-.46-2.29.65-3.23-.3 6 4.55 6.16 8.37 7.22 6.51 1.82 13.08 3.38 19.64 5 3.11.79 1.61 2.83 1 4.28-2.62 6.26-5.4 12.45-8.13 18.65s-3.26 6.82 1.69 10.82c6.15 5 11.75 10.56 18.13 15.23-5.42 7.39-13.3 12.13-20 18.19-2.31 2.09-2.42 3.21-1.28 5.65 3.22 6.91 6.11 14 9.32 20.89 1.56 3.36 1 4.94-2.85 5.79-6.63 1.47-13.07 3.75-19.71 5.11-4 .81-6.25 2.35-6.23 6.53-1.17-.93-.14-2.57-.75-3.42.23 2.3.05 4.78.1 7.25.26 4-.37 8 .41 11.89z"
                fill="#f4c425"
              ></path>
              <path d="m41 31.39c1.74 3.87.42 8 .82 11.91-.32.47-.64.45-1 0z" fill="#f3c001"></path>
              <path d="m180.8 43.26c.41-4-.92-8 .82-11.91q.06 6 .14 11.91c-.36.51-.68.49-1 0z" fill="#f3c001"></path>
              <path d="m40.88 43.26h1v8h-.71c-.13-1.39-.27-2.79-.41-4.18 0-1.27 0-2.52.12-3.82z" fill="#f4c214"></path>
              <path d="m180.8 43.26h1c0 1.26.11 2.51.16 3.76-.14 1.39-.28 2.79-.41 4.18h-.75z" fill="#f4c214"></path>
              <path d="m41.8 174.26c-.41 4 .92 8-.82 11.91q-.06-6-.14-11.91c.36-.49.68-.51.96 0z" fill="#f3c001"></path>
              <path
                d="m181.58 186.13c-1.78-3.87-.42-7.95-.78-11.87.32-.45.64-.47 1 0q-.15 5.93-.22 11.87z"
                fill="#f3c001"
              ></path>
              <path d="m41.8 174.26h-1c0-1.26-.11-2.51-.16-3.76.14-1.39.28-2.79.41-4.18h.75z" fill="#f4c214"></path>
              <path
                d="m181.72 174.26h-1v-8h.71c.13 1.39.27 2.79.41 4.18-.04 1.27-.04 2.56-.12 3.82z"
                fill="#f4c214"
              ></path>
              <path
                d="m36.89 100.26a75.39 75.39 0 0 1 64.91-65.91 76 76 0 0 0 18.94 0 75.38 75.38 0 0 1 65 65.91 60.84 60.84 0 0 0 0 16.94 75.12 75.12 0 0 1 -65.91 66 60.84 60.84 0 0 0 -16.94 0 75.09 75.09 0 0 1 -66-65.91 60.51 60.51 0 0 0 0-17.03z"
                fill="#f7a705"
              ></path>
              <g fill="#f7a500">
                <path d="m120.8 34.35a39.15 39.15 0 0 1 -18.94 0z"></path>
                <path d="m36.89 100.26a31.24 31.24 0 0 1 0 16.94z"></path>
                <path d="m185.71 117.26a31.24 31.24 0 0 1 0-16.94z"></path>
                <path d="m102.8 183.17a31.24 31.24 0 0 1 16.94 0z"></path>
              </g>
            </g>
          </svg>
          <svg
            v-else
            class="moon"
            width="25px"
            style="transform: translateY(3.5px); cursor: pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 223.95 225"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M106,0h13l19.6,2.67a9.73,9.73,0,0,1-4.24,2.55c-39.09,14.31-62.72,54.67-55,93.86C91.82,162,165.35,189.84,216.6,151c2.36-1.78,4.89-3.34,7.34-5v1c-.93,1.87-2,3.7-2.78,5.63-13.6,33.75-38.06,55.91-72.49,66.88-8.92,2.85-18.47,3.71-27.73,5.49H108a22.42,22.42,0,0,0-3.33-.8c-47.58-4.11-86.17-35-100-80.4C2.5,136.72,1.52,129.28,0,122V103c.39-2.44.7-4.89,1.17-7.32C9.77,51,35.54,21,78.41,6.09,87.23,3,96.77,2,106,0Z"
              transform="translate(0.01 0)"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
    <ul id="cutout">
      <li>
        <button @click="toggleTheme">
          <span class="sr-only">Toggle light or dark mode</span>
          <svg
            v-if="theme === 'light'"
            width="25px"
            style="transform: translateY(3.5px); cursor: pointer"
            viewBox="0 0 222.57 218.09"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <g transform="translate(0 -.02)">
              <path
                d="m181.58 186.13c.41 10.77.42 10.74-9.93 8.59-5.68-1.17-11.41-2.15-17.08-3.39-2.91-.63-4.47.29-5.81 3-3.94 7.94-8.21 15.73-12.45 23.78-7.29-5.36-14.5-10.5-21.51-15.91-2.48-1.91-4.22-2.22-6.83-.12-6 4.83-12.41 9.16-18.43 14-2.76 2.2-3.79 1.52-5.19-1.34-3.27-6.72-7.07-13.18-10.28-19.92-1.48-3.11-3.19-4.13-6.54-3.4-7.13 1.58-14.39 2.58-21.46 4.36-4.19 1.06-5.52-.06-5.13-4.14.17-1.81.07-3.65.08-5.47.76-3.9.15-7.83.35-11.74 0-2.44-.06-4.9.05-7.31-.41 1 .41 2.44-.7 3.38 0-4.17-2.25-5.7-6.2-6.53-7-1.45-13.69-3.83-20.62-5.39-3.31-.75-3.58-1.89-2.28-4.7 3.33-7.2 6.33-14.56 9.67-21.76 1.17-2.5.85-3.59-1.37-5.62-6.63-6-14.48-10.81-19.92-18.16 6.67-5.85 13.16-11.92 20.11-17.42 2.32-1.84 2.29-3 1.27-5.25-3.16-6.93-6-14-9.36-20.85-1.95-4-1-5.35 3.15-6.24 6.66-1.42 13.13-3.76 19.83-5.07 4-.77 5.49-2.78 5.74-6.41 1.17.93.14 2.57.75 3.42-.23-2.3 0-4.78-.1-7.25-.2-4 .41-7.92-.35-11.84 0-1-.13-2-.11-3 .12-8.09.1-7.95 8.08-6.08 6.43 1.5 13 2.58 19.45 3.91 2.44.51 4-.19 5.14-2.53 3.63-7.26 7.56-14.38 11.15-21.67 1.25-2.51 2.25-2.58 4.25-.87 6.4 5.55 13.33 10.38 20.2 15.32 1.94 1.4 2.61.92 3.91 0 6.7-5 13.47-9.92 20.08-15 2.37-1.84 3.48-2 4.91 1.09 2.86 6.13 6.25 12 9.4 18s6.16 6.91 12.65 4.95c6.15-1.85 12.57-2.8 18.88-4.1 1.59-.33 2.56.27 2.54 2.07v8c-.76 3.9-.15 7.83-.35 11.74v7c.36-.9-.46-2.29.65-3.23-.3 6 4.55 6.16 8.37 7.22 6.51 1.82 13.08 3.38 19.64 5 3.11.79 1.61 2.83 1 4.28-2.62 6.26-5.4 12.45-8.13 18.65s-3.26 6.82 1.69 10.82c6.15 5 11.75 10.56 18.13 15.23-5.42 7.39-13.3 12.13-20 18.19-2.31 2.09-2.42 3.21-1.28 5.65 3.22 6.91 6.11 14 9.32 20.89 1.56 3.36 1 4.94-2.85 5.79-6.63 1.47-13.07 3.75-19.71 5.11-4 .81-6.25 2.35-6.23 6.53-1.17-.93-.14-2.57-.75-3.42.23 2.3.05 4.78.1 7.25.26 4-.37 8 .41 11.89z"
                fill="#f4c425"
              ></path>
              <path d="m41 31.39c1.74 3.87.42 8 .82 11.91-.32.47-.64.45-1 0z" fill="#f3c001"></path>
              <path d="m180.8 43.26c.41-4-.92-8 .82-11.91q.06 6 .14 11.91c-.36.51-.68.49-1 0z" fill="#f3c001"></path>
              <path d="m40.88 43.26h1v8h-.71c-.13-1.39-.27-2.79-.41-4.18 0-1.27 0-2.52.12-3.82z" fill="#f4c214"></path>
              <path d="m180.8 43.26h1c0 1.26.11 2.51.16 3.76-.14 1.39-.28 2.79-.41 4.18h-.75z" fill="#f4c214"></path>
              <path d="m41.8 174.26c-.41 4 .92 8-.82 11.91q-.06-6-.14-11.91c.36-.49.68-.51.96 0z" fill="#f3c001"></path>
              <path
                d="m181.58 186.13c-1.78-3.87-.42-7.95-.78-11.87.32-.45.64-.47 1 0q-.15 5.93-.22 11.87z"
                fill="#f3c001"
              ></path>
              <path d="m41.8 174.26h-1c0-1.26-.11-2.51-.16-3.76.14-1.39.28-2.79.41-4.18h.75z" fill="#f4c214"></path>
              <path
                d="m181.72 174.26h-1v-8h.71c.13 1.39.27 2.79.41 4.18-.04 1.27-.04 2.56-.12 3.82z"
                fill="#f4c214"
              ></path>
              <path
                d="m36.89 100.26a75.39 75.39 0 0 1 64.91-65.91 76 76 0 0 0 18.94 0 75.38 75.38 0 0 1 65 65.91 60.84 60.84 0 0 0 0 16.94 75.12 75.12 0 0 1 -65.91 66 60.84 60.84 0 0 0 -16.94 0 75.09 75.09 0 0 1 -66-65.91 60.51 60.51 0 0 0 0-17.03z"
                fill="#f7a705"
              ></path>
              <g fill="#f7a500">
                <path d="m120.8 34.35a39.15 39.15 0 0 1 -18.94 0z"></path>
                <path d="m36.89 100.26a31.24 31.24 0 0 1 0 16.94z"></path>
                <path d="m185.71 117.26a31.24 31.24 0 0 1 0-16.94z"></path>
                <path d="m102.8 183.17a31.24 31.24 0 0 1 16.94 0z"></path>
              </g>
            </g>
          </svg>
          <svg
            v-else
            class="moon"
            width="25px"
            style="transform: translateY(3.5px); cursor: pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 223.95 225"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M106,0h13l19.6,2.67a9.73,9.73,0,0,1-4.24,2.55c-39.09,14.31-62.72,54.67-55,93.86C91.82,162,165.35,189.84,216.6,151c2.36-1.78,4.89-3.34,7.34-5v1c-.93,1.87-2,3.7-2.78,5.63-13.6,33.75-38.06,55.91-72.49,66.88-8.92,2.85-18.47,3.71-27.73,5.49H108a22.42,22.42,0,0,0-3.33-.8c-47.58-4.11-86.17-35-100-80.4C2.5,136.72,1.52,129.28,0,122V103c.39-2.44.7-4.89,1.17-7.32C9.77,51,35.54,21,78.41,6.09,87.23,3,96.77,2,106,0Z"
              transform="translate(0.01 0)"
            ></path>
          </svg>
        </button>
      </li>
      <li>
        <button @click="openDrawer">
          <span class="sr-only">Open navigation menu</span>
          <svg
            id="hamburger"
            viewBox="0 0 30 25.7"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="m15 4.28h-12.78a2.12 2.12 0 0 1 -2.09-2.93 2 2 0 0 1 2.02-1.35h25.62a2.11 2.11 0 0 1 2.11 2.87 2 2 0 0 1 -2 1.41z"
            ></path>
            <path
              d="m15 15h-12.78a2.13 2.13 0 0 1 -2.08-3 2 2 0 0 1 2-1.32h25.54a3.33 3.33 0 0 1 .89.1 2.05 2.05 0 0 1 1.43 2.41 2 2 0 0 1 -2.09 1.81z"
            ></path>
            <path
              d="m15 25.7h-12.81a2.13 2.13 0 0 1 -2-3.05 2 2 0 0 1 2-1.23h25.57a2 2 0 0 1 2.14 1.47 2.11 2.11 0 0 1 -2.15 2.81z"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
    <div id="drawer">
      <DrawerFlair />
      <ul>
        <li>
          <button
            id="drawer-first-focus"
            @keydown.tab.shift.prevent="focusHandler('cancel')"
            @click="
              buttonOnClickScroll('about');
              closeDrawer();
            "
          >
            About
          </button>
        </li>
        <li>
          <button
            @click="
              buttonOnClickScroll('prizes');
              closeDrawer();
            "
          >
            Prizes
          </button>
        </li>
        <li>
          <button
            @click="
              buttonOnClickScroll('workshops');
              closeDrawer();
            "
          >
            Workshops
          </button>
        </li>
        <li>
          <button
            @click="
              buttonOnClickScroll('schedule');
              closeDrawer();
            "
          >
            Schedule
          </button>
        </li>
        <li>
          <button
            @click="
              buttonOnClickScroll('thankees');
              closeDrawer();
            "
          >
            Sponsors
          </button>
        </li>
        <li>
          <button
            @click="
              buttonOnClickScroll('faq');
              closeDrawer();
            "
          >
            FAQs
          </button>
        </li>
        <li>
          <button
            id="register-button-mobile"
            class="register-button-disabled"
            :disabled="true"
            @click="
              () => {
                closeDrawer(false);
                openModal('registration-guide-modal', 'register-button-mobile');
              }
            "
          >
            Register
          </button>
        </li>
      </ul>
      <button id="cancel" @click="closeDrawer" @keydown.tab.exact.prevent="focusHandler('drawer-first-focus')">
        <span class="sr-only">Close navigation menu</span>
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path
            d="m15 0a15 15 0 1 0 15 15 15 15 0 0 0 -15-15zm-7 6.4a1.62 1.62 0 0 1 1.18.49l5.82 5.79 5.79-5.79a1.65 1.65 0 0 1 1.13-.49 1.63 1.63 0 0 1 1.68 1.6 1.6 1.6 0 0 1 -.49 1.22l-5.79 5.78 5.79 5.79a1.64 1.64 0 0 1 -2.29 2.35l-5.82-5.82-5.79 5.79a1.64 1.64 0 1 1 -2.35-2.29l5.82-5.82-5.79-5.79a1.64 1.64 0 0 1 0-2.32 1.62 1.62 0 0 1 1.11-.49z"
          ></path>
        </svg>
      </button>
    </div>
    <RegistrationGuideModal />
  </nav>
</template>

<script>
import Vue from 'vue';
import DrawerFlair from '@/sections/hero/DrawerFlair.vue';
import WTHLogo from '@/sections/hero/WTHLogo.vue';
import openModalMixin from '@/mixins/openModalMixin';

import focusHandler from '@/mixins/focusHandler';

export default Vue.extend({
  name: 'navbar',
  components: {
    RegistrationGuideModal: () => import(/* webpackPrefetch: true */ '@/content-modals/RegistrationGuideModal'),
    DrawerFlair,
    WTHLogo,
  },
  data() {
    return {
      theme: 'light',
      scrollPosition: null,
      scrollThreshold: 100,
    };
  },
  mounted: function() {
    window.addEventListener('scroll', this.updateScroll);
    Vue.nextTick(() => {
      let setTheme = document.documentElement.getAttribute('theme');
      if (setTheme) {
        this.theme = setTheme;
      }
    });
  },
  mixins: [focusHandler, openModalMixin],
  methods: {
    buttonOnClickScroll(loc) {
      var section = document.querySelector(`#${loc}`);
      section.scrollIntoView({ behavior: 'smooth' });
    },
    toggleTheme() {
      if (document.documentElement.getAttribute('theme') === 'dark') {
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
        this.theme = 'light';
      } else {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        this.theme = 'dark';
      }
    },
    openDrawer() {
      let backdrop = document.querySelector('#backdrop');
      let drawer = document.querySelector('#drawer');
      backdrop.style.display = 'block';
      backdrop.style.transition = 'opacity 0.5s ease-out';
      drawer.style.display = 'block';
      setTimeout(() => {
        backdrop.style.opacity = '0.5';
        drawer.style.opacity = '1';
        drawer.style.transform = 'translate3d(0, 0, 0)';
      }, 100);
    },
    closeDrawer(closeBackdrop) {
      let backdrop = document.querySelector('#backdrop');
      let drawer = document.querySelector('#drawer');
      backdrop.style.opacity = '0';
      drawer.style.opacity = '0';
      drawer.style.transform = 'translate3d(80vw, 0, 0)';

      if (closeBackdrop === undefined || closeBackdrop === true) {
        setTimeout(() => {
          backdrop.style.display = 'none';
          backdrop.style.transition = 'none';
          drawer.style.display = 'none';
        }, 500);
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
});
</script>

<style scoped>
nav {
  height: 12.5%;
  padding: 25px 40px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1000;
}

nav li {
  font-size: 16px;
  font-family: var(--font-primary), sans-serif;
  text-transform: uppercase;
  color: var(--color-title-text);
  /* transition: color 0.6s ease-out; */
}

nav li:hover {
  color: var(--color-accent);
}

#bar {
  display: flex;
  align-items: center;
}

#bar > li:first-child {
  margin-right: auto;
}

#bar > li + li {
  margin-left: 30px;
}

.bar-register-link {
  border-bottom: 5px solid var(--color-title-text);
  padding-bottom: 2px;
  transform: translateY(4px);
}

.bar-register-link:hover {
  border-bottom: 5px solid var(--color-accent);
}

.bar-register-link.bar-register-link-disabled:hover {
  border-bottom: 5px solid var(--color-gray);
}

.bar-register-link.bar-register-link-disabled {
  color: var(--color-gray);
  border-bottom: 5px solid var(--color-gray);
}

.register-button-disabled {
  color: var(--color-gray);
  cursor: not-allowed;
}

.moon > path {
  fill: #f3f3fb;
}

.hidden_sticky {
  opacity: 0;
  visibility: hidden;
}

#cutout {
  display: none;
  position: fixed;
  right: 30px;
  top: 20px;
  z-index: 999;
  height: 30px;
  /* border: 1px solid red; */
}

#cutout > * + * {
  margin-left: 20px;
}

#hamburger {
  width: calc(1vw + 15px);
  transform: translateY(6px);
}

#hamburger > path {
  fill: var(--color-title-text);
  transition: fill border-bottom 0.6s ease-out;
}

#cutout > .moon {
  width: calc(1vw + 20px);
}

#drawer-context {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  opacity: 0;
  background-color: #000000;
  transition: opacity 0.5s ease-out;
}

#drawer {
  display: none;
  opacity: 0;
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 50vw;
  right: 0;
  top: 0;
  transform: translate3d(80vw, 0, 0);
  background-color: var(--slope-body-color);
  padding: 80px 50px 80px 30px;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53), opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    background-color 0.6s ease-out;
}

#cancel {
  position: absolute;
  top: 27px;
  right: 30px;
}

#cancel > svg {
  width: 20px;
}

#cancel > svg > path {
  fill: var(--color-title-text);
  transition: fill 0.6s ease-out;
}

#drawer > ul > li + li {
  margin-top: 20px;
}

#drawer a,
#drawer button {
  font-size: calc(12px + 1.5vw);
}

@media (--desktop-narrow) {
  nav {
    padding: 25px 30px;
  }

  #bar > li + li {
    margin-left: 20px;
  }

  #bar-logo {
    width: calc(32px + 12vw);
  }
}

@media (--mobile-wide) {
  #bar > li:not(:first-child):not(#hamburger) {
    display: none;
  }

  #cutout {
    display: flex;
  }
}
</style>
