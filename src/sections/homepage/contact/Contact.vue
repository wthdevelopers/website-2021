<template>
  <div id="contact">
    <div class="contact-body">
      <SectionHeader>Contact Us</SectionHeader>
      <form
        class="contact-content"
        id="contact-form"
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact-form">
        <input type="hidden" name="bot-field">
        <FormInput
          type="text"
          label="*Name"
          name="contactee-name"
          placeholder="Your cool name :)"
          :model="contacteeName"
          :onBlur="validateFilled"
        />
        <FormInput
          type="text"
          label="*Email Address"
          name="contactee-email"
          placeholder="No spam, promise!"
          :model="contacteeEmail"
          :onBlur="s => {
            if (!validateFilled(s)) {
                validateEmail(s);
            }
        }"
        />
        <Textbox
          label="*What would you like to talk to us about?"
          name="contactee-message"
          :model="contacteeMessage"
          :onBlur="validateFilled"
          placeholder="Anything is fine! Your questions, feedback, suggestions, etc."
        />
      </form>
      <div class="submission-container">
        <FormButton
          linkAction="non-router"
          :onClick="{func: openModal, args: ['contact-submission-confirmation-modal']}"
        >Submit</FormButton>
        <FormError
          class="submission-error"
          :style="submissionMsg.type === 'positive' ? 'color: var(--color-accent);' : null"
        >{{submissionMsg.msg}}</FormError>
        <button type="submit" hidden/>
      </div>
    </div>
    <svg
      style="transform: translateY(-6px);"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        class="slope"
        d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,266.7C672,267,768,245,864,245.3C960,245,1056,267,1152,282.7C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <ConfirmationModal
      id="contact-submission-confirmation-modal"
      :positiveFunc="() => {
        if (!validateAll()) {
          submitForm('contact-form');
        }
      }"
    >Are you sure you want to submit the form?</ConfirmationModal>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import FormInput from "@/components/FormInput.vue";
import Textbox from "@/components/Textbox.vue";
import FormButton from "@/components/FormButton.vue";
import FormError from "@/components/FormError.vue";
import ConfirmationModal from "@/components/ConfirmationModal.vue";

import validateFilledMixin from "@/mixins/validateFilledMixin";
import validateEmailMixin from "@/mixins/validateEmailMixin";
import openModalMixin from "@/mixins/openModalMixin";

export default {
  name: "contact",
  components: {
    SectionHeader,
    FormInput,
    Textbox,
    FormButton,
    FormError,
    ConfirmationModal
  },
  data() {
    return {
      contacteeName: { value: "", error: "" },
      contacteeEmail: { value: "", error: "", success: false },
      contacteeMessage: { value: "", error: "" },
      submissionMsg: { type: "negative", msg: "" }
    };
  },
  mixins: [validateFilledMixin, validateEmailMixin, openModalMixin],
  methods: {
    validateAll() {
      let testNum = 0;
      let validationConclusion = "";

      testNum += this.validateFilled(this.contacteeName);
      testNum += this.validateFilled(this.contacteeMessage);
      if (!this.validateFilled(this.contacteeEmail)) {
        testNum += this.validateEmail(this.contacteeEmail);
      } else {
        testNum++;
      }

      if (testNum) {
        validationConclusion =
          "There are some incomplete fields or invalid responses.";
      }

      this.submissionMsg = { type: "negative", msg: validationConclusion };
      return validationConclusion;
    },
    submitForm(id) {
      let form = document.getElementById(id);
      fetch(form.action, {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
      })
        .then(() => {
          this.contacteeName = { value: "", error: "" };
          this.contacteeEmail = { value: "", error: "", success: false };
          this.contacteeMessage = { value: "", error: "" };
          this.submissionMsg = {
            type: "positive",
            msg:
              "Your message has been received and we will get back to you shortly. Cheers!"
          };
        })
        .catch(() => {
          this.submissionMsg = {
            type: "negative",
            msg:
              "Sorry, but there seems to be a problem and we didn't receive your message. Please try resubmitting!"
          };
        });
    }
  }
};
</script>

<style scoped>
.contact-body {
  background-color: var(--slope-body-color);
  width: 100%;
  padding: 60px 0;
  transform: translateY(-6px);
  transition: background-color 0.6s ease-out;
  /* border: 1px solid red; */
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
  /* border: 1px solid blue; */
}

.submission-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 100px 150px 0 150px;
  /* border: 1px solid blue; */
}

@media only screen and (max-width: 1000px) {
  h3 {
    padding-left: 100px;
  }

  .contact-content {
    margin: 0 100px;
  }

  .submission-container {
    margin: 100px 100px 0 100px;
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

@media only screen and (max-width: 570px) {
  h3 {
    padding-left: 30px;
  }

  .contact-content {
    margin: 0 30px;
  }

  .submission-container {
    margin: 100px 30px 0 30px;
  }
}
</style>


