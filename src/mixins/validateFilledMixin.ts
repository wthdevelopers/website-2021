import { FormField } from "@/interfaces";

export default {
  methods: {
    // return value here is string instead of void to facilitate
    // onblur operations, in which we want to ensure that the
    // field is filled (indicated here by empty string - falsy)
    // before proceeding with other validations

    validateFilled(subj: FormField): string {
      let validationConclusion = "";
      if (!subj.value) {
        validationConclusion = "This field is required!";
      }
      subj.error = validationConclusion;
      return validationConclusion;
    }
  }
};
