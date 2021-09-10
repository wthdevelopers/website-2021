<template>
  <div id="foot">
    <footer>
      <div id="footer-top">
        <svg id="foot-logo" viewBox="0 0 150 38.65" xmlns="http://www.w3.org/2000/svg">
          <g fill="#2d3887">
            <path
              d="m57.44 2.5a4.11 4.11 0 0 1 -.56 1.92l-7.07 13.67q-4.87 9.48-9.74 19a4.17 4.17 0 0 1 -.56.87 1.92 1.92 0 0 1 -2.71.23l-.18-.19a4.21 4.21 0 0 1 -.62-1l-15-29.28-2-3.83a2.84 2.84 0 0 1 -.2-2.33 2.09 2.09 0 0 1 1.53-1.44 4.6 4.6 0 0 1 .91-.12h18.08c2.83 0 5.68.1 8.48.1 2.2 0 4.39-.1 6.59-.1a4.64 4.64 0 0 1 1.29.14 2.33 2.33 0 0 1 1.76 2.36z"
            ></path>
            <path
              d="m106.33 19.26v-16.19a11.32 11.32 0 0 1 .09-1.43 1.68 1.68 0 0 1 1.48-1.52 9.36 9.36 0 0 1 1.3-.1h11.74a8.05 8.05 0 0 1 1.3.11 1.64 1.64 0 0 1 1.4 1.29 3.83 3.83 0 0 1 .13 1v5.12c0 .92.14 1.08 1 1 1.48-.1 3 0 4.43-.06h.33c.74 0 .87.15.87.88v6.4 14c0 .47-.17.62-.63.64s-.66 0-1 0h-4.24c-.76 0-.82.08-.82.82v4.89a5 5 0 0 1 -.12 1.09 1.57 1.57 0 0 1 -1.3 1.3 4.92 4.92 0 0 1 -1.09.12h-12.33a4 4 0 0 1 -1-.11 1.63 1.63 0 0 1 -1.43-1.51c-.06-.52-.09-1-.1-1.56q0-8.1 0-16.18z"
            ></path>
            <path
              d="m81.16 19.49h-16.46a9 9 0 0 1 -1 0 1.69 1.69 0 0 1 -1.7-1.58 4.59 4.59 0 0 1 -.07-.91v-14.41a5.16 5.16 0 0 1 .1-1 1.68 1.68 0 0 1 1.44-1.44 5.15 5.15 0 0 1 1-.08h33.46a5.22 5.22 0 0 1 1 .07 1.8 1.8 0 0 1 1.53 1.41 4.05 4.05 0 0 1 .12 1v14.53a3.52 3.52 0 0 1 -.09.91 1.73 1.73 0 0 1 -1.61 1.46 9.23 9.23 0 0 1 -1 .05z"
            ></path>
            <path
              d="m132.64 19.32v-16.38c0-.37 0-.75 0-1.11a1.69 1.69 0 0 1 1.64-1.73 11.2 11.2 0 0 1 1.3-.08h11.55a8.15 8.15 0 0 1 1.3.11 1.59 1.59 0 0 1 1.46 1.43 7.72 7.72 0 0 1 .11 1.17v33.27a5.71 5.71 0 0 1 -.13 1.23 1.53 1.53 0 0 1 -1.24 1.27 4.53 4.53 0 0 1 -1 .13h-13.14a1.76 1.76 0 0 1 -1.82-1.89c0-.37 0-.74 0-1.11q0-8.16 0-16.33z"
            ></path>
            <path
              d="m8.16 0c1 0 2.59.06 4.2 0a3.41 3.41 0 0 1 3.33 2.09l2.44 4.76 8.13 15.76a5.35 5.35 0 0 1 .81 2.83 4.27 4.27 0 0 1 -.5 1.81c-1.79 3.28-3.45 6.63-5.15 10a2.61 2.61 0 0 1 -.54.81 2 2 0 0 1 -3.24-.6c-.74-1.41-1.45-2.82-2.18-4.23l-14.71-28.66a6.43 6.43 0 0 1 -.67-1.57 2.29 2.29 0 0 1 2-2.95 7.24 7.24 0 0 1 1 0z"
            ></path>
            <path
              d="m81.48 21.82h8.81c.74 0 .89.15.89.88v3.66q0 4.83 0 9.66a7 7 0 0 1 0 .91 1.82 1.82 0 0 1 -1.41 1.61 4.39 4.39 0 0 1 -1.09.11h-14.45a4.59 4.59 0 0 1 -.91-.07 1.9 1.9 0 0 1 -1.6-1.81c0-.21 0-.43 0-.65v-13.18c0-1 .12-1.12 1.13-1.12z"
            ></path>
          </g>
        </svg>
        <div>
          Email:&nbsp;
          <a href="mailto:whatthehack2021@sutdapac.onmicrosoft.com" style="color: var(--color-accent);"
            >whatthehack2021@sutdapac.onmicrosoft.com</a
          >
        </div>
      </div>
      <div id="footer-bottom">
        <div>Copyright © 2021 What The Hack. All rights reserved.</div>
        <ul>
          <li>
            <button
              id="register-button-footer"
              class="register-button-disabled"
              :disabled="true"
              @click="openModal('registration-guide-modal', 'register-button-footer')"
            >
              Register
            </button>
          </li>
          <li class="li-dividers" aria-hidden="true">|</li>
          <li>
            <a href="https://www.sutd.edu.sg/" target="_blank" rel="noopener noreferrer">SUTD</a>
          </li>
          <li class="li-dividers" aria-hidden="true">|</li>
          <li>
            <button
              id="footer-tnc-modal-button"
              type="button"
              @click="openModal('footer-tnc-modal', 'footer-tnc-modal-button')"
            >
              Terms and Conditions
            </button>
          </li>
          <li class="li-dividers" aria-hidden="true">|</li>
          <li>
            <a href="https://github.com/wthdevelopers/website-2021" target="_blank" rel="noopener noreferrer"
              >Source Code</a
            >
          </li>
        </ul>
      </div>
    </footer>
    <RegistrationGuideModal />
    <TNCModal id="footer-tnc-modal" />
  </div>
</template>

<script>
import openModalMixin from '@/mixins/openModalMixin';

export default {
  name: 'foot',
  components: {
    RegistrationGuideModal: () => import(/* webpackPrefetch: true */ '@/content-modals/RegistrationGuideModal'),
    TNCModal: () => import(/* webpackPrefetch: true */ '@/content-modals/TNCModal.vue'),
  },
  mixins: [openModalMixin],
};
</script>

<style scoped>
#foot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 15vh;
  padding-bottom: 20px;
}

#foot-logo {
  width: 150px;
}

#foot-logo > g {
  fill: var(--color-title-text);
  transition: fill 0.6s ease-out;
}

#footer-top,
#footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: var(--font-primary), sans-serif;
}

#footer-top {
  padding: 10px 100px;
  font-size: 16px;
  color: var(--color-regular-text);
}

#footer-bottom {
  padding: 10px 100px;
  font-size: 14px;
  color: #8c8c8c;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

li + li {
  margin-left: 0.5vw;
}

.register-button-disabled {
  cursor: not-allowed;
}

@media (--desktop-narrow) {
  #footer-top {
    padding-left: 40px;
    padding-right: 40px;
    flex-direction: column;
    align-items: start;
  }

  #footer-bottom {
    padding-left: 40px;
    padding-right: 40px;
    flex-direction: column;
    align-items: start;
  }

  #footer-top > * + * {
    margin-top: 10px;
  }

  #footer-bottom > * + * {
    margin-top: 5px;
  }

  #foot-logo {
    width: calc(32px + 12vw);
  }

  li + li {
    margin-left: 5px;
  }
}

@media (--mobile-narrow) {
  #footer-top {
    padding-left: 30px;
    padding-right: 30px;
  }

  #footer-bottom {
    padding-left: 30px;
    padding-right: 30px;
  }

  #footer-bottom > * + * {
    margin-top: 10px;
  }

  ul {
    flex-direction: column;
  }

  .li-dividers {
    display: none;
  }

  li + li {
    margin-left: 0;
  }
}
</style>
