import { FormField } from '@/interfaces';

export default {
  methods: {
    validateFilled(subj: FormField): number {
      let validationConclusion = '';
      if (!subj.value) {
        validationConclusion = 'This field is required!';
      }
      subj.error = validationConclusion;
      return validationConclusion ? 1 : 0;
    },
  },
};
