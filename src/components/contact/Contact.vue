<template>
  <div id="contact">
    <div class="contact-body">
      <h3>Contact Us</h3>
      <div class="contact-content">
        <FormInput
          type="text"
          label="*Name"
          name="contactee-name"
          placeholder="Your beautiful name :)"
          :model="contacteeName"
          :onBlur="validateFilled"
        />
        <FormInput
          type="text"
          label="*Email Address"
          name="contactee-email"
          placeholder="No spam, promise!"
          :model="contacteeEmail"
          :onInput="validateEmail"
          :onBlur="s => {
            if (!validateFilled(s)) {
                validateEmail(s, 'blur');
            }
        }"
        />
        <Textbox
          label="What would you like to talk to us about?"
          name="contactee-message"
          :model="contacteeMessage"
        />
      </div>
    </div>
    <svg
      style="transform: translateY(-6px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        class="slope"
        fill="#3f626d"
        fill-opacity="1"
        d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,266.7C672,267,768,245,864,245.3C960,245,1056,267,1152,282.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import FormInput from "@/components/registration/FormInput.vue";
import Textbox from "@/components/registration/Textbox.vue";

import validateFilledMixin from "@/mixins/validateFilledMixin";
import validateEmailMixin from "@/mixins/validateEmailMixin";

export default {
  name: "contact",
  components: {
    FormInput,
    Textbox
  },
  data() {
    return {
      contacteeName: { value: "", error: "" },
      contacteeEmail: { value: "", error: "", success: false },
      contacteeMessage: { value: "" }
    };
  },
  mixins: [validateFilledMixin, validateEmailMixin]
};
</script>

<style scoped>
#contact {
  /* border: 1px solid purple; */
}

.contact-body {
  background-color: var(--slope-body-color);
  width: 100%;
  padding: 100px 0;
  transform: translateY(-6px);
  transition: background-color 0.6s ease-out;
}

h3 {
  font-family: var(--font-secondary), sans-serif;
  font-size: calc(24px + 2vw);
  font-weight: 700;
  padding-left: 150px;
  color: var(--color-section-title-text);
  margin-bottom: 50px;
  /* border: 1px solid yellow; */
}

.contact-content {
  margin: 0 150px;
  /* border: 1px solid red; */
}

@media only screen and (max-width: 1000px) {
  h3 {
    padding-left: 100px;
  }

  .contact-content {
    margin: 0 100px;
  }
}

@media only screen and (max-width: 1000px) {
  h3 {
    padding-left: 100px;
  }

  .schedule-content {
    margin: 0 100px;
  }
}

@media only screen and (max-width: 791px) {
}

@media only screen and (max-width: 570px) {
  h3 {
    padding-left: 30px;
  }

  p {
    font-size: 20px;
  }

  .contact-content {
    margin: 0 30px;
  }
}
</style>


