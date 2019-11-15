<template>
  <div id="registration-success">
    <RegistrationHero/>
    <RegistrationEndMessage :outcome="outcome"/>
    <Foot/>
  </div>
</template>

<script>
import RegistrationHero from "@/components/registration/RegistrationHero.vue";
import RegistrationEndMessage from "@/components/registration/RegistrationEndMessage.vue";
import Foot from "@/components/foot/Foot.vue";

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

