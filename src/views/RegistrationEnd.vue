<template>
  <div id="registration-success">
    <RegistrationHero/>
    <RegistrationEndMessage :outcome="outcome"/>
    <Foot/>
    <Backdrop/>
  </div>
</template>

<script>
import RegistrationHero from "@/sections/registration/registration-hero/RegistrationHero.vue";
import RegistrationEndMessage from "@/sections/registration/registration-end/RegistrationEndMessage.vue";
import Foot from "@/sections/homepage/foot/Foot.vue";
import Backdrop from "@/components/Backdrop.vue";

export default {
  name: "registration-end",
  components: {
    RegistrationHero,
    RegistrationEndMessage,
    Foot,
    Backdrop
  },
  props: {
    outcome: String
  }
};
</script>

