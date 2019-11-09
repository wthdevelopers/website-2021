<template>
  <div :id="id" class="modal-context">
    <!-- <div class="modal-background" @click="closeModal(id)"></div> -->
    <svg
      class="modal-slope"
      viewBox="0 0 1440 192"
      xmlns="http://www.w3.org/2000/svg"
      :style="`width: ${dims[0]};`"
    >
      <path
        d="m0 256h48c48 0 144 0 240-21.3 96-21.7 192-63.7 288-53.4 96 10.7 192 74.7 288 74.7s192-64 288-96 192-32 240-32h48v192h-1440z"
        fill="#79c89f"
        transform="translate(0 -128)"
      ></path>
    </svg>
    <div class="modal" :style="`width: ${dims[0]}; height: ${dims[1]}`">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
    <svg
      class="modal-slope"
      viewBox="0 0 1440 203.67"
      xmlns="http://www.w3.org/2000/svg"
      :style="`width: ${dims[0]};`"
    >
      <path
        d="m0 64 48 26.7c48 26.3 144 80.3 240 69.3s192-85 288-74.7c96 10.7 192 106.7 288 117.4 96 10.3 192-63.7 288-106.7s192-53 240-58.7l48-5.3v-32h-1440z"
        fill="#79c89f"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "modal",
  components: {},
  props: {
    id: String,
    dims: Array
  }
};
</script>

<style scoped>
.modal-context {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: hsla(0, 0%, 0%, 0.5);
}

/* .modal-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
} */

.modal-slope {
  /* width: 60vw; */
  /* z-index: 9999; */
}

.modal-slope > path {
  fill: var(--slope-body-color);
}

.modal {
  /* width: 60vw;
  height: 50vh; */
  background-color: var(--slope-body-color);
  padding: 0 75px;
  position: relative;
  /* z-index: 9999; */
}

.modal-content {
  height: 100%;
  overflow-y: scroll;
  /* overscroll-behavior-y: contain; */
}
</style>


