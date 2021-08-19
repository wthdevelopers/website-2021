<template>
  <div :id="id" :class="`modal modal-${type}`" role="dialog" aria-modal="true">
    <svg :class="`modal-slope-top modal-slope-${type}`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 231.4">
      <path
        class="slope"
        d="M0 135l48-21c48-22 144-64 240-75s192 11 288 48 192 91 288 80 192-85 288-90c96-6 192 58 240 90l48 32v32H0z"
      ></path>
      <path
        fill="#79c89f"
        d="M155 77c-5 1-7-2-7-6l1-8a9 9 0 000-2l3-19a13 13 0 013-4c1-2 2-2 3 0a14 14 0 013 5 89 89 0 012 13l1 3 1 8a18 18 0 01-1 8 4 4 0 01-4 2h-3v-3l-1-10v10l-1 3z"
      ></path>
      <path fill="#8192d9" d="M155 77V64l1-2 1 2v27l-1 3-1-3V77z"></path>
      <path
        fill="#b8e2cc"
        d="M198 58h-3c-4 0-6-2-6-7a67 67 0 013-20l2-7a9 9 0 011-2c3-4 6-4 8 0l4 9a60 60 0 013 20c-1 5-2 7-7 7h-3c-2-2-1-5-1-7a35 35 0 010-5c-1 4 1 8-1 12z"
      ></path>
      <path fill="#8290dc" d="M198 58V47v-3l1-1 1 1v14a16 16 0 000 4v10l-1 2a1 1 0 01-1-2V62z"></path>
      <path
        fill="#fff"
        d="M198 74c-2 5-2 5-7 5h-3c-3-3-1-6-2-9 0 3 2 6-1 9h-4c-4 0-6-2-6-6 0-6 1-11 3-16a27 27 0 014-8c3-4 6-4 9 0 3 5 5 11 6 17a38 38 0 011 8z"
      ></path>
      <path fill="#8490dd" d="M185 79V68l1-2 2 2v22c0 1 0 3-2 3l-1-4V79z"></path>
      <path
        fill="#b8e2cc"
        d="M1041 106h-4c-6 0-9-3-9-10a93 93 0 014-28l3-10a14 14 0 012-2c3-6 7-6 11 0l5 13c3 9 4 18 4 28 0 7-2 9-10 9h-3c-3-3-1-7-2-10a46 46 0 010-6c-1 5 2 11-1 16z"
      ></path>
      <path fill="#8290dc" d="M1041 106V91v-4l1-2c2-1 2 1 2 2v19a22 22 0 000 6v14l-1 2c-2 0-2-1-2-2v-15z"></path>
      <path
        fill="#79c89f"
        d="M1017 117h-8c-5-1-7-5-9-9-2-9-1-17 2-25v-2l5-6c6-8 16-8 23-1a16 16 0 013 5 8 8 0 001 1c2 7 4 15 4 22a30 30 0 01-1 3c-1 9-5 12-14 13h-3c-2-3-1-6-2-9 0 3 1 6-1 9z"
      ></path>
      <path fill="#818fdb" d="M1017 117v-10l1-2 2 2v24c0 1 0 3-2 3l-1-3v-14z"></path>
      <path
        fill="#fff"
        d="M1080 108c-2 4-2 5-7 5h-3c-2-3-1-7-2-10 0 3 2 7-1 10h-4c-4 0-6-2-6-6 0-6 1-12 3-17a28 28 0 014-7c3-4 6-4 9 0 3 5 5 10 6 16a37 37 0 011 9z"
      ></path>
      <path fill="#8490dd" d="M1067 113v-11l1-2c1-1 2 1 2 2v21c0 2 0 3-2 4l-1-5v-9z"></path>
      <path
        fill="#fff"
        d="M1099 90c-2 6-3 6-9 7h-4c-3-4-1-9-2-12-1 3 2 8-2 11l-4 1c-6-1-8-3-8-8-1-8 1-14 4-21a36 36 0 015-10c3-5 7-5 11 0 5 7 6 14 8 21a48 48 0 011 11z"
      ></path>
      <path fill="#8490dd" d="M1082 96l1-14c0-1-1-2 1-2l2 2v28c0 2 0 4-2 5-2-2-1-4-1-6l-1-9v-4z"></path>
      <path
        fill="#b8e2cc"
        d="M1144 117h-4c-7 0-11-3-11-10 0-11 2-22 5-33l4-11a16 16 0 012-3c4-6 8-6 12 0 3 5 5 10 6 16 3 10 5 20 5 31-1 8-3 10-11 10h-4c-3-3-2-7-2-11a52 52 0 010-7c-1 6 2 12-2 18z"
      ></path>
      <path fill="#8290dc" d="M1144 117v-17-4l2-3c2 0 2 2 2 3v21a25 25 0 000 8v15c0 1 0 2-2 2l-2-2v-17z"></path>
      <path
        fill="#79c89f"
        d="M293 54h-8c-5-1-7-5-8-9-2-9-1-17 2-25v-2l4-6c6-8 17-8 24-1a16 16 0 013 5 7 7 0 001 1 59 59 0 013 25c-2 9-5 12-15 13h-2c-3-3-1-6-2-9-1 3 1 6-2 9z"
      ></path>
      <path fill="#818fdb" d="M293 54V44c0-1 0-2 2-2l2 2v24c0 1 0 3-2 3-2-1-2-2-2-3V54z"></path>
      <path
        fill="#fff"
        d="M335 36c-2 5-2 6-8 6h-5c-2-4-1-8-1-12-1 4 1 8-2 12h-5c-6 0-8-2-8-8 0-7 2-14 4-21a36 36 0 015-9c4-5 8-5 11 0 5 6 7 14 8 21a48 48 0 011 11z"
      ></path>
      <path fill="#8490dd" d="M319 42V28l1-3c2 0 2 2 2 3v28c0 2 0 3-2 4l-1-6V42z"></path>
      <path
        fill="#b8e2cc"
        d="M339 50h-3c-6 0-8-3-8-8a86 86 0 013-27l3-8a13 13 0 012-3c3-5 7-5 10 0 3 4 4 8 5 12 2 9 4 17 3 26 0 6-2 8-8 8h-3c-3-2-2-6-2-9a43 43 0 010-5c-1 4 1 10-2 14z"
      ></path>
      <path fill="#8290dc" d="M339 50l1-14v-3l1-2 1 2v7l1 10a21 21 0 000 6l-1 13-1 2-1-2-1-14z"></path>
    </svg>
    <div class="modal-content">
      <slot></slot>
    </div>
    <svg :class="`modal-slope-bottom modal-slope-${type}`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 203.7">
      <path
        class="slope"
        d="M0 64l48 27c48 26 144 80 240 69s192-85 288-75c96 11 192 107 288 118 96 10 192-64 288-107s192-53 240-59l48-5V0H0z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    id: String,
    type: String,
  },
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--slope-body-color);
  padding: 0 6vw;
  z-index: 999;
}

.modal-content {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
}

.modal-clausal {
  width: 60vw;
  height: 50vh;
}

.modal-slope-top {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(-100% + 2px));
}

.modal-slope-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% - 1px));
}

.modal-slope-clausal {
  width: 60vw;
}

.modal-confirmation {
  width: 42vw;
  height: 35vh;
}

.modal-slope-confirmation {
  width: 42vw;
}

@media (--desktop-narrow) {
  .modal {
    padding: 20px 6vw;
  }

  .modal-clausal,
  .modal-slope-clausal {
    width: 80vw;
  }

  .modal-confirmation,
  .modal-slope-confirmation {
    width: 60vw;
  }
}

@media (--mobile-narrow) {
  .modal-clausal {
    padding: 50px 8vw;
    height: 70vh;
  }

  .modal-clausal,
  .modal-slope-clausal {
    width: 90vw;
  }

  .modal-confirmation {
    padding: 0 6vw;
    height: 25vh;
  }

  .modal-confirmation,
  .modal-slope-confirmation {
    width: 80vw;
  }
}
</style>
