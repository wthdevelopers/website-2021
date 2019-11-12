<template>
  <div class="checkbox content-block">
    <input type="checkbox" :name="name" :id="name" :value="name" v-model="model.value">
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    name: String,
    model: Object
  }
};
</script>

<style scoped>
input[type="checkbox"] {
  margin-right: 20px;
  appearance: none;
  border: 2px solid var(--color-regular-text);
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: translateY(0px);
}

input[type="checkbox"]:checked {
  background-color: var(--color-accent);
  border: 2px solid var(--color-accent);
}

input[type="checkbox"] + label {
  cursor: pointer;
}

input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  left: 5.5px;
  top: 23px;
  background: white;
  width: 4px;
  height: 4px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}

@media only screen and (max-width: 1000px) {
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  input[type="checkbox"]:checked + label:after {
    left: 4px;
    top: 19px;
    width: 3px;
    height: 3px;
  }
}

@media only screen and (max-width: 570px) {
  input[type="checkbox"] {
    width: 14px;
    height: 14px;
  }

  input[type="checkbox"]:checked + label:after {
    left: 2px;
    top: 14px;
    width: 2px;
    height: 2px;
  }
}
</style>


