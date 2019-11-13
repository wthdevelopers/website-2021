<template>
  <FormBlock>
    <FormLabel :forValue="name">{{label}}</FormLabel>
    <textarea v-model="model.value" maxlength="2540"/>
  </FormBlock>
</template>

<script>
import FormBlock from "@/components/registration/FormBlock.vue";
import FormLabel from "@/components/registration/FormLabel.vue";

export default {
  name: "textbox",
  components: {
    FormBlock,
    FormLabel
  },
  props: {
    label: String,
    name: String,
    model: Object
  }
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

textarea:focus {
  border: 2px solid transparent;
  color: var(--color-accent);
  outline: 2px solid var(--color-accent);
}
</style>


