<template>
  <div class="radio content-block">
    <label>{{label}}</label>
    <div class="radio-block" v-for="option in options" :key="option.id">
      <input type="radio" :name="name" :id="option.id" :value="option.value" v-model="model.value">
      <label class="option-label" :for="option.id">{{option.optionLabel}}</label>
    </div>
    <p class="error-info"></p>
  </div>
</template>

<script>
export default {
  name: "radio",
  props: {
    label: String,
    name: String,
    model: Object,
    options: Array
  }
};
</script>

<style scoped>
.radio-block {
  margin-top: 40px;
}

.option-label {
  cursor: pointer;
}

input[type="radio"] {
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--color-regular-text);
  border: 6px solid var(--color-regular-text);
  border-radius: 50px;
  transform: translateY(1.5px);
}

input[type="radio"]:checked {
  border: 6px solid var(--color-accent);
}
</style>


