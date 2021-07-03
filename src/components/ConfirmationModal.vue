<template>
  <Modal :id="id" type="confirmation">
    <div class="modal-content">
      <h3>
        <slot></slot>
      </h3>
      <div class="controls">
        <button
          :id="`${id}-first-focus`"
          @click="positiveAction"
          @keydown.tab.shift.prevent="focusHandler(`${id}-last-focus`)"
          @keyup.esc="closeModal(id)"
        >
          Yes
        </button>
        <button
          :id="`${id}-last-focus`"
          @click="closeModal(id)"
          @keydown.tab.exact.prevent="focusHandler(`${id}-first-focus`)"
          @keyup.esc="closeModal(id)"
        >
          No
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

import closeModalMixin from '@/mixins/closeModalMixin';
import focusHandler from '@/mixins/focusHandler';

export default {
  name: 'confirmation-modal',
  components: {
    Modal,
  },
  props: {
    id: String,
    positiveFunc: Function,
    positiveFuncArgs: Array,
  },
  mixins: [closeModalMixin, focusHandler],
  methods: {
    positiveAction() {
      if (this.positiveFuncArgs) {
        this.positiveFunc(...this.positiveFuncArgs);
        this.closeModal(this.id);
      } else {
        this.positiveFunc();
        this.closeModal(this.id);
      }
    },
  },
};
</script>

<style scoped>
.modal-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

h3 {
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-regular-text);
  text-align: center;
}

.controls {
  display: flex;
  justify-content: space-evenly;
  font-family: var(--font-secondary), sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--color-regular-text);
}

@media (--mobile-narrow) {
  h3 {
    font-size: 20px;
  }

  .controls {
    font-size: 24px;
  }
}
</style>
