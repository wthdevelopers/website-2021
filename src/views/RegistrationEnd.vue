<template>
  <div id="registration-success">
    <RegistrationHero/>
    <RegistrationEndMessage :outcome="outcome"/>
    <Foot/>
  </div>
</template>

<script>
import RegistrationHero from "@/sections/registration/registration-hero/RegistrationHero.vue";
import RegistrationEndMessage from "@/sections/registration/registration-end/RegistrationEndMessage.vue";
import Foot from "@/sections/homepage/foot/Foot.vue";

export default {
  name: "registration-end",
  components: {
    RegistrationHero,
    RegistrationEndMessage,
    Foot
  },
  props: {
    outcome: String
  }
};
</script>

