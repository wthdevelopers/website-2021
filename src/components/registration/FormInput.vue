<template>
  <div class="form-input content-block">
    <label :for="name">{{label}}</label>
    <p class="additional-info">{{additionalInfo}}</p>
    <input
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="model.value"
      @input="onInput ? onInput(model, 'input') : null"
      @blur="onBlur ? onBlur(model) : null"
      :style="model.error ? 'border-bottom: 2px solid transparent; outline: 2px solid #cc6675;' : null"
    >
    <p class="error-info">{{model.error}}</p>
  </div>
</template>

<script>
export default {
  name: "form-input",
  props: {
    additionalInfo: String,
    type: String,
    label: String,
    name: String,
    placeholder: String,
    model: Object,
    onInput: Function,
    onBlur: Function
  }
};
</script>

<style scoped>
input[type="text"],
input[type="date"] {
  display: block;
  margin-top: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-regular-text);
  width: 100%;
  font-family: var(--font-secondary), sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--color-regular-text);
  padding: 0 10px;
}

input:focus {
  border-bottom: 2px solid transparent;
  color: var(--color-accent);
  outline: 2px solid var(--color-accent);
}

input:focus-visible {
  outline: 2px solid var(--color-accent);
}

input:invalid {
  border-bottom: 2px solid var(--color-accent);
  color: var(--color-accent);
}
</style>


