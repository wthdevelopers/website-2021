<template>
  <div class="accordion" :id="`${accordionName}-${accordionIdx}`">
    <h4>
      <button
        type="button"
        class="accordion-trigger"
        :id="`${accordionName}-trigger-${accordionIdx}`"
        :aria-expanded="expanded ? 'true' : 'false'"
        :aria-controls="`${accordionName}-content-${accordionIdx}`"
        @click="openAccordion"
        @keydown.down.exact.prevent="
          () => {
            if (accordionIdx === accordionMaxIdx) {
              focusHandler(`${accordionName}-trigger-${0}`);
            } else {
              focusHandler(`${accordionName}-trigger-${accordionIdx + 1}`);
            }
          }
        "
        @keydown.up.exact.prevent="
          () => {
            if (accordionIdx === 0) {
              focusHandler(`${accordionName}-trigger-${accordionMaxIdx}`);
            } else {
              focusHandler(`${accordionName}-trigger-${accordionIdx - 1}`);
            }
          }
        "
        @keydown.home.exact.prevent="focusHandler(`${accordionName}-trigger-${0}`)"
        @keydown.end.exact.prevent="focusHandler(`${accordionName}-trigger-${accordionMaxIdx}`)"
      >
        <span class="accordion-title" :id="`${accordionName}-title-${accordionIdx}`">
          <slot name="title"></slot>
        </span>
        <button
          v-if="removeFunc"
          type="button"
          @click.stop="removeAction"
          @keydown.down.exact.prevent="
            () => {
              if (accordionIdx === accordionMaxIdx) {
                focusHandler(`${accordionName}-trigger-${0}`);
              } else {
                focusHandler(`${accordionName}-trigger-${accordionIdx + 1}`);
              }
            }
          "
          @keydown.up.exact.prevent="
            () => {
              if (accordionIdx === 0) {
                focusHandler(`${accordionName}-trigger-${accordionMaxIdx}`);
              } else {
                focusHandler(`${accordionName}-trigger-${accordionIdx - 1}`);
              }
            }
          "
          @keydown.home.exact.prevent="focusHandler(`${accordionName}-trigger-${0}`)"
          @keydown.end.exact.prevent="focusHandler(`${accordionName}-trigger-${accordionMaxIdx}`)"
        >
          <span class="sr-only">Delete</span>
          <svg
            class="accordion-cancel"
            :id="`${accordionName}-cancel-${accordionIdx}`"
            viewBox="0 0 47.97 47.97"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m28.23 24 18.86-18.88a3 3 0 0 0 -4.24-4.24l-18.85 18.86-18.88-18.86a3 3 0 0 0 -4.24 4.24l18.86 18.88-18.86 18.85a3 3 0 0 0 2.12 5.15 3 3 0 0 0 2.12-.88l18.88-18.89 18.85 18.86a3 3 0 0 0 4.24-4.24z"
            ></path>
          </svg>
        </button>
        <svg
          class="accordion-arrow"
          :id="`${accordionName}-arrow-${accordionIdx}`"
          viewBox="0 0 50.07 28.56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m25 28.52a3.48 3.48 0 0 1 -2.48-1l-21.52-21.52a3.54 3.54 0 0 1 5-5l19 19 19-19a3.54 3.54 0 0 1 5 5l-21.53 21.49a3.48 3.48 0 0 1 -2.48 1z"
            transform="translate(.04 .04)"
          ></path>
        </svg>
      </button>
    </h4>
    <div
      class="accordion-content"
      :id="`${accordionName}-content-${accordionIdx}`"
      role="region"
      :aria-labelledby="`${accordionName}-trigger-${accordionIdx}`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import focusHandler from '@/mixins/focusHandler';

export default {
  name: 'accordion',
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    accordionName: String,
    accordionIdx: Number,
    accordionMaxIdx: Number,
    removeFunc: Function,
    removeFuncArgs: Array,
    maxHeight: String,
  },
  methods: {
    openAccordion() {
      let accordion = document.querySelector(`#${this.accordionName}-${this.accordionIdx}`);

      let accordionContent = document.querySelector(`#${this.accordionName}-content-${this.accordionIdx}`);
      let accordionTitle = document.querySelector(`#${this.accordionName}-title-${this.accordionIdx}`);
      let accordionCancel = document.querySelector(`#${this.accordionName}-cancel-${this.accordionIdx}`);
      let accordionArrow = document.querySelector(`#${this.accordionName}-arrow-${this.accordionIdx}`);
      let accordionCancelPath = accordionCancel && accordionCancel.firstChild;
      let accordionArrowPath = accordionArrow.firstChild;

      if (accordionContent.style.maxHeight === '0px' || !accordionContent.style.maxHeight) {
        accordionContent.style.display = 'block';
        setTimeout(() => {
          accordionContent.style.maxHeight = `${this.maxHeight}px`;
        }, 100);
        accordion.style.border = '2px solid var(--color-accent)';
        accordionTitle.style.color = 'var(--color-accent)';
        if (accordionCancelPath) {
          accordionCancelPath.style.fill = 'var(--color-accent)';
        }
        accordionArrowPath.style.fill = 'var(--color-accent)';
        this.expanded = !this.expanded;
      } else {
        accordionContent.style.maxHeight = '0px';
        setTimeout(() => {
          accordion.style.border = '2px solid var(--color-regular-text)';
          accordionTitle.style.color = 'var(--color-regular-text)';
          if (accordionCancelPath) {
            accordionCancelPath.style.fill = 'var(--color-regular-text)';
          }
          accordionArrowPath.style.fill = 'var(--color-regular-text)';
          accordionContent.style.display = 'none';
          this.expanded = !this.expanded;
        }, 600);
      }
    },
    removeAction() {
      if (this.removeFuncArgs) {
        this.removeFunc(...this.removeFuncArgs);
      } else {
        this.removeFunc();
      }
    },
  },
  mixins: [focusHandler],
};
</script>

<style scoped>
.accordion:first-of-type {
  margin-top: 50px;
}

.accordion {
  border: 2px solid var(--color-regular-text);
}

.accordion + .accordion {
  margin-top: 20px;
}

.accordion-trigger {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 20px 30px;
  width: 100%;
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
  height: 17.5px;
  transform: translateY(2.5px);
}

.accordion-arrow {
  margin-left: 30px;
  width: 25px;
  height: calc((17.5px / 1.753) + 5px);
}

svg > path {
  fill: var(--color-regular-text);
}

.accordion-content {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease-out;

  padding: 0 30px;
}

@media (--mobile-narrow) {
  .accordion-trigger {
    padding: 5px 15px;
  }

  .accordion-title {
    font-size: 20px;
  }

  .accordion-cancel {
    width: 13px;
    height: 13px;
    transform: translateY(4.5px);
  }

  .accordion-arrow {
    width: 20px;
    margin-left: 20px;
    height: calc((20px / 1.753) - 1px);
  }
  .accordion-content {
    padding: 5px 15px;
  }
}
</style>
