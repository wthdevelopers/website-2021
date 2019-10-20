<template>
  <div class="checkbox content-block">
    <input type="checkbox" :name="name" :id="name" :value="name" v-model="model.value">
    <label :for="name" v-html="label"></label>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    label: String,
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
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: translateY(1px);
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
  left: 4.5px;
  top: 16px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>


