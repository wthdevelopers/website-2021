export default {
  methods: {
    validateFilled(subj) {
      let validationConclusion = "";
      if (!subj.value) {
        validationConclusion = "This field is required!";
      }
      subj.error = validationConclusion;
      return validationConclusion;
    }
  }
};
