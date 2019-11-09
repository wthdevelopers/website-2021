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
  }
};
</script>

