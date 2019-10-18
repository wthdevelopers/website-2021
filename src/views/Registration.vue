<template>
  <div id="registration">
    <RegistrationHero/>
    <RegistrationForm/>
    <RegistrationFoot/>
  </div>
</template>

<script>
import RegistrationHero from "@/components/registration/RegistrationHero.vue";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";
import RegistrationFoot from "@/components/registration/RegistrationFoot.vue";

export default {
  name: "registration",
  components: {
    RegistrationHero,
    RegistrationForm,
    RegistrationFoot
  },
  props: {
    theme: String
  }
};
</script>

