<template>
  <div id="registration-success-message">
    <div class="registration-success-message-body">
      <RegistrationContentBlock v-if="outcome === 'success'">
        <FormLabelSub class="top-text">From the folks behind WTH 2020,</FormLabelSub>
        <h2 class="big-text">Thank you {{name}}!</h2>
        <FormLabelSub v-if="format === 'Individual'">
          We have sent a confirmation email to you at the email address you have
          provided,
          <span
            style="color: var(--color-accent);"
          >{{emails[0]}}</span>. We will communicate with you in future through
          this email address as well. Happy hacking and see you very soon!
        </FormLabelSub>
        <FormLabelSub v-if="format === 'Group'">
          We have sent confirmation emails to your whole team at these email addresses that you have
          provided:
          <br>
          <ul v-for="email in emails" :key="email">
            <br>
            <li>
              <span style="color: var(--color-accent);">{{email}}</span>
            </li>
          </ul>
          <br>We will communicate with your team in future through
          these email addresses as well. Happy hacking and see you all very soon!
        </FormLabelSub>
      </RegistrationContentBlock>
      <RegistrationContentBlock v-if="outcome === 'failure'">
        <FormLabelSub class="top-text">Oops, there seems to be a problem.</FormLabelSub>
        <h2 class="big-text">We are truly sorry for this inconvenience.</h2>
        <FormLabelSub>
          This might be because our servers are not healthy right now, your
          internet connection might be shaky, or something else. Either way,
          we did not receive your registration and so you might want to try
          submitting it again.
        </FormLabelSub>
      </RegistrationContentBlock>
      <FormButton linkAction="router" to="/" class="bottom-button">Back To Homepage</FormButton>
    </div>
    <svg
      viewBox="0 0 1440 240.41"
      xmlns="http://www.w3.org/2000/svg"
      style="transform: translateY(-26px);"
    >
      <path
        d="m0 128 48 26.7c48 26.3 144 80.3 240 85.3s192-37 288-42.7c96-5.3 192 26.7 288 16 96-10.3 192-64.3 288-80 96-16.3 192 5.7 240 16l48 10.7v-160h-1440z"
        class="slope"
        fill="#3f626d"
      ></path>
    </svg>
  </div>
</template>

<script>
import RegistrationContentBlock from "@/components/RegistrationContentBlock.vue";
import FormLabelSub from "@/components/FormLabelSub.vue";
import FormButton from "@/components/FormButton.vue";

export default {
  name: "registration-end-message",
  data() {
    return {
      format: "",
      name: "",
      emails: []
    };
  },
  components: {
    RegistrationContentBlock,
    FormLabelSub,
    FormButton
  },
  props: {
    outcome: String
  },
  mounted: function() {
    this.format = window.registeredInfo.format;
    this.name = window.registeredInfo.name;
    this.emails = window.registeredInfo.emails;
  }
};
</script>

<style scoped>
.registration-success-message-body {
  transform: translateY(-26px);
  position: relative;
  /* border: 1px solid red; */
}

.top-text {
  width: 50vw;
  position: absolute;
  left: 24vw;
  top: 50px;
  z-index: 1;
}

.big-text {
  width: 50vw;
  display: inline-block;
  transform: translateX(10px);
  margin-bottom: 50px;
  font-family: var(--font-primary), sans-serif;
  font-size: 46px;
  font-weight: 700;
  color: var(--color-regular-text);
  word-wrap: break-word;
  /* border: 1px solid red; */
}

.bottom-button {
  position: absolute;
  z-index: 1;
  right: 24vw;
  bottom: 70px;
}

@media only screen and (max-width: 1000px) {
  .big-text {
    width: 64vw;
    font-size: 40px;
  }

  .top-text {
    width: 64vw;
    left: 16vw;
  }

  .bottom-button {
    right: 16vw;
  }
}

@media only screen and (max-width: 570px) {
  .big-text {
    width: 76vw;
    font-size: 24px;
  }

  .top-text {
    top: 20px;
    width: 76vw;
    left: 30px;
  }

  .bottom-button {
    font-size: 20px;
    right: 30px;
  }
}
</style>

