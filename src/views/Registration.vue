<template>
  <div id="registration">
    <RegistrationHero/>
    <RegistrationForm :page="page" @page-change-event="goToPage"/>
    <Foot/>
  </div>
</template>

<script>
import RegistrationHero from "@/components/registration/RegistrationHero.vue";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";
import Foot from "@/components/foot/Foot.vue";

export default {
  name: "registration",
  data() {
    return {
      page: "1"
    };
  },
  components: {
    RegistrationHero,
    RegistrationForm,
    Foot
  },
  beforeRouteLeave(to, from, next) {
    // if (this.page === "2") {
    //   this.goToPage("1");
    //   next(false);
    // } else {
    //   if (window.formTouched) {
    //     const answer = window.confirm(
    //       "Changes made to the form are not saved - are you sure you want to leave this page?"
    //     );
    //     if (answer) {
    //       next();
    //     } else {
    //       next(false);
    //     }
    //   } else {
    //     next();
    //   }
    // }

    if (to.name === "registration-end") {
      next();
    } else {
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
  },
  methods: {
    goToPage(d) {
      this.page = d;
    }
  }
};
</script>

