import { EmailFormField } from '@/interfaces';

export default {
  methods: {
    validateEmail(subj: EmailFormField): number {
      const email = subj.value;
      const [emailBeforeAt, emailAfterAt] = email.split('@');
      let validationConclusion = '';
      const emailRegex = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      if (email.length > 254) {
        validationConclusion = 'This email address is not valid!';
      } else if (!emailRegex.test(email)) {
        validationConclusion = 'This email address is not valid!';
      } else if (emailBeforeAt.length > 64) {
        validationConclusion = 'This email address is not valid!';
      } else if (emailAfterAt.split('.').some((segment) => segment.length > 63)) {
        validationConclusion = 'This email address is not valid!';
      }

      if (!validationConclusion) {
        subj.success = true;
      } else {
        subj.success = false;
      }

      subj.error = validationConclusion;
      return validationConclusion ? 1 : 0;
    },
  },
};
