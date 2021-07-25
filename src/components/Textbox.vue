<template>
  <FormBlock>
    <FormLabel :forValue="name">{{ label }}</FormLabel>
    <textarea
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-model="model.value"
      maxlength="2540"
      @blur="onBlur ? onBlur(model) : null"
      :style="model.error ? 'border: 2px solid transparent; outline: 2px solid #cc6675;' : null"
    />
    <FormError>{{ model.error }}</FormError>
  </FormBlock>
</template>

<script>
import FormBlock from '@/components/FormBlock.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormError from '@/components/FormError.vue';

export default {
  name: 'textbox',
  components: {
    FormBlock,
    FormLabel,
    FormError,
  },
  props: {
    label: String,
    name: String,
    model: Object,
    onBlur: Function,
    placeholder: String,
  },
};
</script>

<style scoped>
textarea {
  display: block;
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid var(--color-regular-text);
  width: 100%;
  height: 350px;
  font-family: var(--font-secondary), sans-serif;
  font-size: 34px;
  font-weight: 900;
  color: var(--color-regular-text);
  padding: 10px 20px;
  resize: vertical;
}

textarea::placeholder {
  color: var(--color-gray);
}

textarea:focus {
  border: 2px solid transparent;
  color: var(--color-accent);
  outline: 2px solid var(--color-accent);
}

@media (--desktop-narrow) {
  textarea {
    font-size: 28px;
  }
}

@media (--mobile-narrow) {
  textarea {
    font-size: 20px;
  }
}
</style>
