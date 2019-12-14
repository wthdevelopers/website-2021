<template>
  <div class="accordion" :id="`accordion-${accordionID}`">
    <div class="accordion-interface">
      <h2 class="accordion-title" :id="`accordion-title-${accordionID}`">
        <slot name="title"></slot>
      </h2>
      <svg
        class="accordion-cancel"
        :id="`accordion-cancel-${accordionID}`"
        v-if="removeFunc"
        @click="removeAction"
        viewBox="0 0 47.97 47.97"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m28.23 24 18.86-18.88a3 3 0 0 0 -4.24-4.24l-18.85 18.86-18.88-18.86a3 3 0 0 0 -4.24 4.24l18.86 18.88-18.86 18.85a3 3 0 0 0 2.12 5.15 3 3 0 0 0 2.12-.88l18.88-18.89 18.85 18.86a3 3 0 0 0 4.24-4.24z"
        ></path>
      </svg>
      <svg
        class="accordion-arrow"
        :id="`accordion-arrow-${accordionID}`"
        @click="openAccordion(accordionID)"
        viewBox="0 0 50.07 28.56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m25 28.52a3.48 3.48 0 0 1 -2.48-1l-21.52-21.52a3.54 3.54 0 0 1 5-5l19 19 19-19a3.54 3.54 0 0 1 5 5l-21.53 21.49a3.48 3.48 0 0 1 -2.48 1z"
          transform="translate(.04 .04)"
        ></path>
      </svg>
    </div>
    <div class="accordion-content" :id="`accordion-content-${accordionID}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "accordion",
  props: {
    accordionID: String,
    removeFunc: Function,
    removeFuncArgs: Array,
    maxHeight: String
  },
  methods: {
    openAccordion(a) {
      let accordion = document.querySelector(`#accordion-${a}`);

      let accordionContent = document.querySelector(`#accordion-content-${a}`);
      let accordionTitle = document.querySelector(`#accordion-title-${a}`);
      let accordionCancel = document.querySelector(`#accordion-cancel-${a}`);
      let accordionArrow = document.querySelector(`#accordion-arrow-${a}`);
      let accordionCancelPath = accordionCancel && accordionCancel.firstChild;
      let accordionArrowPath = accordionArrow.firstChild;

      if (
        accordionContent.style.maxHeight === "0px" ||
        !accordionContent.style.maxHeight
      ) {
        accordionContent.style.maxHeight = `${this.maxHeight}px`;
        accordion.style.border = "2px solid var(--color-accent)";
        accordionTitle.style.color = "var(--color-accent)";
        if (accordionCancelPath) {
          accordionCancelPath.style.fill = "var(--color-accent)";
        }
        accordionArrowPath.style.fill = "var(--color-accent)";
      } else {
        accordionContent.style.maxHeight = "0px";
        setTimeout(() => {
          accordion.style.border = "2px solid var(--color-regular-text)";
          accordionTitle.style.color = "var(--color-regular-text)";
          if (accordionCancelPath) {
            accordionCancelPath.style.fill = "var(--color-regular-text)";
          }
          accordionArrowPath.style.fill = "var(--color-regular-text)";
        }, 600);
      }
    },
    removeAction() {
      if (this.removeFuncArgs) {
        this.removeFunc(...this.removeFuncArgs);
      } else {
        this.removeFunc();
      }
    }
  }
};
</script>

<style scoped>
.accordion:first-of-type {
  margin-top: 50px;
}

.accordion {
  border: 2px solid var(--color-regular-text);
  padding: 20px 30px;
}

.accordion + .accordion {
  margin-top: 20px;
}

.accordion-interface {
  display: flex;
  align-items: center;
}

.accordion-title {
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: var(--color-regular-text);
  margin-right: auto;
}

.accordion-cancel {
  width: 17.5px;
  cursor: pointer;
  height: 17.5px;
}

.accordion-arrow {
  width: 25px;
  cursor: pointer;
  margin-left: 30px;
  height: calc((17.5px / 1.753) + 5px);
}

.accordion-interface svg > path {
  fill: var(--color-regular-text);
}

.accordion-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.6s ease-out;
}

@media (--mobile-narrow) {
  .accordion {
    padding: 5px 15px;
  }

  .accordion-title {
    font-size: 20px;
  }

  .accordion-cancel {
    width: 13px;
    height: 13px;
  }

  .accordion-arrow {
    width: 20px;
    margin-left: 20px;
    height: calc((20px / 1.753) - 1px);
  }
}
</style>


