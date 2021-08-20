<template>
  <div :class="['trigger', className]" @mouseenter="onMouseEvent" @mouseleave="onMouseEvent">
    <slot name="trigger"></slot>
    <span v-if="isOpen" class="tooltip__arrow" @mouseenter="onMouseEvent" @mouseleave="onMouseEvent" />
    <div v-if="isOpen" class="tooltip__content" @mouseenter="onMouseEvent" @mouseleave="onMouseEvent">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tooltip',
  data() {
    return {
      isOpen: false,
      mouseEventTimout: null,
    };
  },
  props: {
    className: String,
  },
  methods: {
    toggleTooltip: function(openState) {
      this.isOpen = openState;
    },
    onMouseEvent: function(event) {
      clearTimeout(this.mouseEventTimout);
      this.mouseEventTimout = setTimeout(() => {
        if (event.type === 'mouseenter') {
          this.toggleTooltip(true);
        } else {
          this.toggleTooltip(false);
        }
      }, 100);
    },
  },
};
</script>

<style scoped>
.trigger {
  cursor: pointer;
  display: flex;
  color: var(--color-cta-text);
  height: fit-content;
  width: fit-content;
  position: relative;
}

.tooltip__arrow {
  background-color: var(--color-title-text);
  box-sizing: border-box;
  cursor: initial;
  display: block;
  position: absolute;
  height: 10px;
  left: 50%;
  top: calc(100% + 3.07px);
  transform: translateX(-50%) rotate(225deg);
  transform-origin: center;
  width: 10px;
}

.tooltip__content {
  cursor: auto;
  position: absolute;
  top: calc(100% + 8.07px);
  left: 50%;
  background-color: var(--color-title-text);
  border-radius: 5px;
  border: none;
  max-width: 360px;
  color: var(--color-cta-text);
  padding: 12px 16px;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: normal;
  transform: translateX(-50%);
  margin-right: -352px;
}
</style>
