<template>
  <div id="registration-form">
    <form id="registration-form-content">
      <div @click="goToPage('1')" class="top-button" v-if="page === '2'">Previous Page</div>
      <p class="welcome" v-if="page === '1'">Hello!</p>
      <div v-if="page === '1'">
        <Radio
          label="*Are you registering as an individual or for a group?"
          name="format"
          :model="format"
          :options="[{id: 'format-individual', value: 'Individual', optionLabel: 'Individual'}, 
        {id: 'format-group', value: 'Group', optionLabel: 'Group'}]"
        />
      </div>
      <div v-if="page === '2'">
        <div v-if="format.value === 'Individual'">
          <Radio
            label="*Do you want us to help you form a group, or would you prefer going solo?"
            name="individual-need-group"
            :model="individualNeedGroup"
            :options="[{id: 'individual-need-group-true', value: 'True', optionLabel: 'Sure, help me find a group!'}, 
        {id: 'individual-need-group-false', value: 'False', optionLabel: 'No thanks, I prefer going solo!'}]"
          />
          <FormInput
            type="text"
            label="*Name"
            name="individual-name"
            placeholder="Your beautiful name here :)"
            :model="individualName"
            :onBlur="validateFilled"
          />
          <FormInput
            additionalInfo="You need to be at least 13 years of age at the time of event 
        to be eligible to participate. If you are over 13 but under 18 years of age, 
        you will be eligible to participate only if you have parental consent (parental 
        consent forms will be sent out to you later)."
            type="date"
            label="*Date of Birth"
            name="individual-dob"
            :model="individualDob"
            :onInput="validateAge"
            :onBlur="s => {
            if (!validateFilled(s)) {
                validateAge(s);
            }
        }"
          />
          <FormInput
            type="text"
            label="*Email Address"
            name="individual-email"
            placeholder="No spam from us, promise!"
            :model="individualEmail"
            :onInput="validateEmail"
            :onBlur="s => {
            if (!validateFilled(s)) {
                validateEmail(s, 'blur');
            }
        }"
          />
          <FormInput
            type="text"
            label="*School/Company/Organisation"
            name="individual-org"
            placeholder="Where are you from?"
            :model="individualOrg"
            :onBlur="validateFilled"
          />
          <FormInput
            v-if="individualNeedGroup.value === 'False'"
            type="text"
            label="*Team Name"
            name="team-name"
            placeholder="Get creative here!"
            :model="teamName"
            :onBlur="validateFilled"
          />
          <FormInput
            type="text"
            label="Dietary Requirements"
            name="individual-diet"
            placeholder="Vegan/vegetarian/allergies/etc."
            :model="individualDiet"
          />
          <Radio
            label="*What is your T-shirt size?"
            name="individual-shirt"
            :model="individualShirt"
            :options="[{id: 'individual-shirt-xs', value: 'XS', optionLabel: 'XS'}, 
        {id: 'individual-shirt-s', value: 'S', optionLabel: 'S'},
        {id: 'individual-shirt-m', value: 'M', optionLabel: 'M'},
        {id: 'individual-shirt-l', value: 'L', optionLabel: 'L'},
        {id: 'individual-shirt-xl', value: 'XL', optionLabel: 'XL'}]"
          />
          <div class="content-block">
            <label for="feedback">Any other questions/feedback?</label>
            <textarea/>
          </div>
          <Checkbox
            label="I confirm that I am above 13 years of age and have read and agree to the 
        <span id='terms-button'>terms and conditions</span> as stipulated 
        by the organisers of What The Hack 2020."
            name="confirm"
            :model="confirm"
          />
        </div>
        <div v-else>
          <div class="content-block" style="padding-bottom: 30px;">
            <label for="team-name">Team Members</label>
            <p class="additional-info">
              You can participate in this hackathon either solo or in a
              team of up to 4 members. If you have other team members,
              please fill in their details here too.
            </p>
          </div>
        </div>
      </div>
      <div
        @click="() => {
            if (format.value) {
                goToPage('2');
            }
        }"
        class="bottom-button"
        v-if="page === '1'"
        :style="format.value ? '' : 'opacity: 0.4; cursor: not-allowed;'"
      >Next Page</div>
      <div class="bottom-button" v-if="page === '2'" :style="checkSubmitConditions()">Submit</div>
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
import Radio from "@/components/registration/Radio.vue";
import FormInput from "@/components/registration/FormInput.vue";
import Checkbox from "@/components/registration/Checkbox.vue";

export default {
  name: "registration-form",
  components: {
    Radio,
    FormInput,
    Checkbox
  },
  data() {
    return {
      page: "1",
      format: { value: "" },
      individualNeedGroup: { value: "", error: "" },
      individualShirt: { value: "" },
      individualName: { value: "", error: "" },
      individualDob: { value: "", error: "", success: false },
      individualEmail: { value: "", error: "", success: false },
      individualOrg: { value: "", error: "" },
      individualDiet: { value: "" },
      teamName: { value: "", error: "" },
      confirm: { value: "" }
    };
  },
  methods: {
    validateFilled(subj) {
      let validationConclusion = "";
      if (!subj.value) {
        validationConclusion = "This field is required!";
      }
      subj.error = validationConclusion;
      return validationConclusion;
    },
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
    },
    validateEmail(subj, e) {
      const email = subj.value;
      const [emailBeforeAt, emailAfterAt] = email.split("@");
      let validationConclusion = "";
      const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      if (email.length > 254) {
        validationConclusion = "This email address is not valid!";
      } else if (!emailRegex.test(email)) {
        validationConclusion = "This email address is not valid!";
      } else if (emailBeforeAt.length > 64) {
        validationConclusion = "This email address is not valid!";
      } else if (emailAfterAt.split(".").some(segment => segment.length > 63)) {
        validationConclusion = "This email address is not valid!";
      }
      if (e !== "input") {
        subj.error = validationConclusion;
      }
      if (!validationConclusion) {
        subj.success = true;
      } else {
        subj.success = false;
      }
    },
    checkSubmitConditions() {
      if (this.individualNeedGroup.value === "True") {
        return this.individualName.value &&
          this.individualOrg.value &&
          this.individualShirt.value &&
          this.individualDob.success &&
          this.individualEmail.success &&
          this.confirm.value
          ? ""
          : "opacity: 0.4; cursor: not-allowed;";
      } else if (this.individualNeedGroup.value === "False") {
        return this.individualName.value &&
          this.individualOrg.value &&
          this.teamName.value &&
          this.individualShirt.value &&
          this.individualDob.success &&
          this.individualEmail.success &&
          this.confirm.value
          ? ""
          : "opacity: 0.4; cursor: not-allowed;";
      } else {
        return "opacity: 0.4; cursor: not-allowed;";
      }
    },
    goToPage(d) {
      this.page = d;
    }
  }
};
</script>

<style>
#registration-form-content {
  position: relative;
  background-color: var(--slope-body-color);
  transition: background-color 0.6s ease-out;
  /* border: 1px solid yellow; */
  padding: 150px 350px;
}

.top-button,
.bottom-button {
  cursor: pointer;
  position: absolute;
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--slope-body-color);
  padding: 4px 20px;
  background-color: var(--color-regular-text);
}

.welcome {
  position: absolute;
  left: 350px;
  top: 0;
  font-family: var(--font-primary), sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: var(--color-regular-text);
}

.top-button {
  left: 350px;
  top: 0;
}

.bottom-button {
  right: 350px;
  bottom: 0;
}

svg > path {
  fill: var(--slope-body-color);
  transition: fill 0.6s ease-out;
}

/* FORM BLOCKS */

.content-block {
  position: relative;
  /* border: 1px solid yellow; */
}

.content-block + .content-block {
  margin-top: 100px;
}

/* INPUTS: TEXTAREA */

textarea {
  display: block;
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid var(--color-regular-text);
  width: 700px;
  height: 350px;
  font-family: var(--font-secondary), sans-serif;
  font-size: 24px;
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

/* LABELS */

label {
  font-family: var(--font-primary), sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-regular-text);
}

/* OTHERS */

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

#terms-button {
  border-bottom: 1.5px dashed var(--color-regular-text);
}
</style>

