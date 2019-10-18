<template>
  <div id="registration-form">
    <form id="registration-form-content">
      <div class="content-block">
        <label for="original-name">*Name</label>
        <input
          type="text"
          name="original-name"
          id="original-name"
          placeholder="Your beautiful name here :)"
          v-model="originalName.value"
          @blur="validateFilled(originalName)"
        >
        <p class="error-info">{{originalName.error}}</p>
      </div>
      <div class="content-block">
        <label for="original-dob">*Date of Birth</label>
        <p class="additional-info">
          You have to be at least 13 years of age at the time of event
          to be eligible to participate. If you are above 13 but below
          18 years of age, you can take part only if you have parental
          consent (we will send out the parental consent forms later).
        </p>
        <input
          type="date"
          name="original-dob"
          id="original-dob"
          v-model="originalDob.value"
          @blur="() => {
              validateFilled(originalDob);
              validateAge(originalDob);
          }"
        >
        <p class="error-info">{{originalDob.error}}</p>
      </div>
      <div class="content-block">
        <label for="original-email">*Email Address</label>
        <input
          type="text"
          name="original-email"
          id="original-email"
          placeholder="No spam from us, promise!"
          v-model="originalEmail.value"
          @blur="validateFilled(originalEmail)"
        >
        <p class="error-info">{{originalEmail.error}}</p>
      </div>
      <div class="content-block">
        <label for="original-org">*School/Company/Organisation</label>
        <input
          type="text"
          name="original-org"
          id="original-org"
          placeholder="Where are you from?"
          v-model="originalOrg.value"
          @blur="validateFilled(originalOrg)"
        >
        <p class="error-info">{{originalOrg.error}}</p>
      </div>
      <div class="content-block">
        <label for="original-diet">Dietary Requirements</label>
        <input
          type="text"
          name="original-diet"
          id="original-diet"
          placeholder="Vegetarian/vegan/allergies/etc."
        >
      </div>
      <div class="content-block" style="padding-bottom: 30px;">
        <label for="team-name">*Team Name</label>
        <input
          type="text"
          name="team-name"
          id="team-name"
          placeholder="Get creative here!"
          v-model="teamName.value"
          @blur="validateFilled(teamName)"
        >
        <p class="error-info">{{teamName.error}}</p>
      </div>
      <div class="content-block">
        <label for="feedback">Any other questions/feedback?</label>
        <textarea/>
      </div>
    </form>
    <svg viewBox="0 0 1440 240.41" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m0 128 48 26.7c48 26.3 144 80.3 240 85.3s192-37 288-42.7c96-5.3 192 26.7 288 16 96-10.3 192-64.3 288-80 96-16.3 192 5.7 240 16l48 10.7v-160h-1440z"
        fill="#79c89f"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "registration-form",
  data() {
    return {
      originalName: { value: "", error: "" },
      originalDob: {
        value: "",
        error: ""
      },
      originalEmail: { value: "", error: "" },
      originalOrg: { value: "", error: "" },
      originalDiet: { value: "" },
      teamName: { value: "", error: "" }
    };
  },
  methods: {
    validateAge(subj) {
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
      subj.error = validationConclusion;
    },
    validateFilled(subj) {
      let validationConclusion = "";
      if (!subj.value) {
        validationConclusion = "This field is required!";
      }
      subj.error = validationConclusion;
    }
  }
};
</script>

<style scoped>
#registration-form-content {
  background-color: var(--slope-body-color);
  transition: background-color 0.6s ease-out;
  /* border: 1px solid yellow; */
  padding: 100px 300px;
}

svg > path {
  fill: var(--slope-body-color);
  transition: fill 0.6s ease-out;
}

label {
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-regular-text);
}

.additional-info {
  font-family: var(--font-primary), sans-serif;
  font-size: 20px;
  font-weight: 400;
  /* color: var(--color-regular-text); */
  color: #d3dbde;
  margin-top: 20px;
  padding: 0 10px;
}

.error-info {
  font-family: var(--font-primary), sans-serif;
  font-size: 20px;
  font-weight: 400;
  /* color: var(--color-regular-text); */
  color: #cc6675;
  margin-top: 20px;
  padding: 0 10px;
  height: 10px;
}

input {
  display: block;
  margin-top: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-regular-text);
  width: 100%;
  font-family: var(--font-secondary), sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--color-regular-text);
  padding: 0 10px;
}

.content-block + .content-block {
  margin-top: 100px;
}

input:focus {
  border-bottom: 2px solid transparent;
  color: var(--color-accent);
  outline: 2px solid var(--color-accent);
}

input:focus-visible {
  outline: 2px solid var(--color-accent);
}

input:invalid {
  border-bottom: 2px solid var(--color-accent);
  color: var(--color-accent);
}

textarea {
  display: block;
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid var(--color-regular-text);
  width: auto;
  font-family: var(--font-secondary), sans-serif;
  font-size: 42px;
  font-weight: 900;
  color: var(--color-regular-text);
  padding: 15px 30px;
}
</style>

