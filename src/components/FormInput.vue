<template>
  <FormBlock>
    <FormLabel :forValue="name">{{ label }}</FormLabel>
    <FormLabelSub>{{ additionalInfo }}</FormLabelSub>
    <input
      maxlength="254"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="model.value"
      @blur="onBlur ? onBlur(model) : null"
      :style="model.error ? 'border-bottom: 2px solid transparent; outline: 2px solid #cc6675;' : null"
    />
    <FormError>{{ model.error }}</FormError>
  </FormBlock>
</template>

<script>
import FormBlock from '@/components/FormBlock.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormLabelSub from '@/components/FormLabelSub.vue';
import FormError from '@/components/FormError.vue';

export default {
  name: 'form-input',
  props: {
    additionalInfo: String,
    type: String,
    label: String,
    name: String,
    placeholder: String,
    model: Object,
    onBlur: Function,
  },
  components: {
    FormBlock,
    FormLabel,
    FormLabelSub,
    FormError,
  },
};
</script>

<style scoped>
input[type='text'],
input[type='date'] {
  display: flex;
  align-items: center;
  margin-top: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-regular-text);
  border-radius: 0;
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  font-family: var(--font-secondary), sans-serif;
  font-size: 40px;
  font-weight: 900;
  color: var(--color-regular-text);
  padding: 0 10px;
  height: 5vw;
}

input::placeholder {
  color: var(--color-gray);
}

input:focus {
  border-bottom: 2px solid transparent;
  color: var(--color-accent);
  outline: 2px solid var(--color-accent);
}

input:invalid {
  border-bottom: 2px solid var(--color-accent);
  color: var(--color-accent);
}

@media (--desktop-narrow) {
  input[type='text'],
  input[type='date'] {
    font-size: 34px;
    height: 7vw;
  }
}

@media (--mobile-narrow) {
  input[type='text'],
  input[type='date'] {
    font-size: 24px;
    height: 9vw;
  }
}
</style>
