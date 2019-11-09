export default {
  methods: {
    validateAge(subj, e) {
      let dob = subj.value;
      let validationConclusion = "";
      const [year, month, day] = dob.split("-").map(str => {
        return parseInt(str, 10);
      });
      if (2020 - year < 13) {
        validationConclusion =
          "Sorry, but you need to be at least 13 years of age at the time of event to be eligible to participate. Maybe another time!";
      } else if (2020 - year === 13) {
        if (month > 2) {
          validationConclusion =
            "Sorry, but you need to be at least 13 years of age at the time of event to be eligible to participate. Maybe another time!";
        } else if (month === 2) {
          if (day > 8) {
            validationConclusion =
              "Sorry, but you need to be at least 13 years of age at the time of event to be eligible to participate. Maybe another time!";
          }
        }
      }
      if (e !== "input") {
        subj.error = validationConclusion;
      }
      if (!validationConclusion) {
        subj.success = true;
      } else {
        subj.success = false;
      }
    }
  }
};
