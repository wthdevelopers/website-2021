<template>
  <FormBlock>
    <FormLabel>{{label}}</FormLabel>
    <div class="radio-block" v-for="option in options" :key="option.id">
      <input
        type="radio"
        :name="name"
        :id="option.id"
        :value="option.value"
        v-model="model.value"
        @change="onChange ? onChange.func(...onChange.args) : null"
      >
      <FormLabel class="option-label" :forValue="option.id">{{option.optionLabel}}</FormLabel>
    </div>
    <FormError>{{model.error}}</FormError>
  </FormBlock>
</template>

<script>
import FormBlock from "@/components/FormBlock.vue";
import FormLabel from "@/components/FormLabel.vue";
import FormError from "@/components/FormError.vue";

export default {
  name: "radio",
  components: {
    FormBlock,
    FormLabel,
    FormError
  },
  props: {
    label: String,
    name: String,
    model: Object,
    options: Array,
    onChange: Object
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
  background-color: var(--slope-body-color);
  border: 2px solid var(--color-regular-text);
  border-radius: 50px;
  /* transform: translateY(-1px); */
}

input[type="radio"]:checked {
  background-color: var(--color-regular-text);
  border: 5px solid var(--color-accent);
}

@media only screen and (max-width: 1000px) {
  input[type="radio"] {
    width: 18px;
    height: 18px;
  }

  input[type="radio"]:checked {
    border: 5px solid var(--color-accent);
  }
}

@media only screen and (max-width: 570px) {
  .radio-block {
    margin-top: 10px;
  }

  input[type="radio"] {
    width: 14px;
    height: 14px;
  }

  input[type="radio"]:checked {
    border: 4px solid var(--color-accent);
  }
}
</style>


