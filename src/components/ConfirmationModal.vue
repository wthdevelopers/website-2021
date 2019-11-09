<template>
  <Modal :id="id" :dims="['42vw', '35vh']">
    <div class="modal-content">
      <h3>
        <slot></slot>
      </h3>
      <ul>
        <li @click="positiveAction()">Yes</li>
        <li @click="closeModal(id)">No</li>
      </ul>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Para from "@/components/Para.vue";

export default {
  name: "confirmation-modal",
  components: {
    Modal,
    Para
  },
  props: {
    id: String,
    positiveFunc: Function,
    positiveFuncArgs: Array
  },
  methods: {
    closeModal(id) {
      document.getElementById(id).style.display = "none";
    },
    positiveAction() {
      if (this.positiveFuncArgs) {
        this.positiveFunc(...this.positiveFuncArgs);
        this.closeModal(this.id);
      } else {
        this.positiveFunc();
        this.closeModal(this.id);
      }
    }
  }
};
</script>

<style scoped>
.modal-content {
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

ul {
  display: flex;
  justify-content: space-evenly;
  font-family: var(--font-secondary), sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--color-regular-text);
}

li {
  cursor: pointer;
}
</style>


