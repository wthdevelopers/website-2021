import { AgeFormField } from "@/interfaces";

export default {
  methods: {
    validateAge(subj: AgeFormField): string {
      let dob = subj.value;
      let validationConclusion = "";
      const [year, month, day] = dob.split("-").map(str => {
        return parseInt(str, 10);
      });
      if (2020 - year < 13) {
        validationConclusion =
          "Sorry, but you do not meet the age requirements. Maybe another time!";
      } else if (2020 - year === 13) {
        if (month > 2) {
          validationConclusion =
            "Sorry, but you do not meet the age requirements. Maybe another time!";
        } else if (month === 2) {
          if (day > 8) {
            validationConclusion =
              "Sorry, but you do not meet the age requirements. Maybe another time!";
          }
        }
      }

      if (!validationConclusion) {
        subj.success = true;
      } else {
        subj.success = false;
      }

      subj.error = validationConclusion;
      return validationConclusion;
    }
  }
};
