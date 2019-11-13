<template>
  <FormBlock>
    <FormLabel :forValue="name">{{label}}</FormLabel>
    <FormLabelSub>{{additionalInfo}}</FormLabelSub>
    <input
      maxlength="254"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="model.value"
      @input="onInput ? onInput(model, 'input') : null"
      @blur="onBlur ? onBlur(model) : null"
      :style="model.error ? 'border-bottom: 2px solid transparent; outline: 2px solid #cc6675;' : null"
    >
    <FormError>{{model.error}}</FormError>
  </FormBlock>
</template>

<script>
import FormBlock from "@/components/registration/FormBlock.vue";
import FormLabel from "@/components/registration/FormLabel.vue";
import FormLabelSub from "@/components/registration/FormLabelSub.vue";
import FormError from "@/components/registration/FormError.vue";

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
  },
  components: {
    FormBlock,
    FormLabel,
    FormLabelSub,
    FormError
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
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  font-family: var(--font-secondary), sans-serif;
  font-size: 46px;
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

@media only screen and (max-width: 1000px) {
  input[type="text"],
  input[type="date"] {
    font-size: 40px;
  }
}

@media only screen and (max-width: 570px) {
  input[type="text"],
  input[type="date"] {
    font-size: 24px;
  }
}
</style>


