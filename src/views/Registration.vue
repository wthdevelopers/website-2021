<template>
  <div id="registration">
    <RegistrationHero/>
    <RegistrationForm/>
    <Foot/>
  </div>
</template>

<script>
import RegistrationHero from "@/components/registration/RegistrationHero.vue";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";
import Foot from "@/components/foot/Foot.vue";

export default {
  name: "registration",
  components: {
    RegistrationHero,
    RegistrationForm,
    Foot
  },
  props: {
    theme: String
  },
  beforeRouteLeave(to, from, next) {
    if (window.formTouched) {
      const answer = window.confirm(
        "Changes made to the form are not saved - are you sure you want to leave this page?"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>

