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
        enable-background="new 0 0 47.971 47.971"
        viewBox="0 0 47.971 47.971"
        xmlns="http://www.w3.org/2000/svg"
        @click="removeAction"
      >
        <path
          d="m28.228 23.986 18.864-18.864c1.172-1.171 1.172-3.071 0-4.242-1.172-1.172-3.07-1.172-4.242 0l-18.864 18.864-18.865-18.864c-1.172-1.172-3.07-1.172-4.242 0-1.172 1.171-1.172 3.071 0 4.242l18.865 18.864-18.865 18.864c-1.172 1.171-1.172 3.071 0 4.242.586.585 1.354.878 2.121.878s1.535-.293 2.121-.879l18.865-18.864 18.864 18.864c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242z"
        ></path>
      </svg>
      <svg
        class="accordion-arrow"
        :id="`accordion-arrow-${accordionID}`"
        preserveAspectRatio="none"
        viewBox="0 0 50 28.52"
        xmlns="http://www.w3.org/2000/svg"
        @click="openAccordion(accordionID)"
      >
        <path
          d="m25 28.52a3.5 3.5 0 0 1 -2.48-1l-21.52-21.52a3.5 3.5 0 0 1 5-5l19 19 19-19a3.51 3.51 0 0 1 5 5l-21.53 21.49a3.5 3.5 0 0 1 -2.48 1z"
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
    accordionID: String || Number,
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

  .accordion-title > h2 {
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


