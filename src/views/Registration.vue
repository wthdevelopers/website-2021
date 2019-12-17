<template>
  <div id="registration">
    <RegistrationHero/>
    <RegistrationForm :page="page" @page-change-event="goToPage"/>
    <Foot/>
    <Backdrop/>
  </div>
</template>

<script>
import RegistrationHero from "@/sections/registration/registration-hero/RegistrationHero.vue";
import RegistrationForm from "@/sections/registration/registration-form/RegistrationForm.vue";
import Foot from "@/sections/homepage/foot/Foot.vue";
import Backdrop from "@/components/Backdrop.vue";

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
    Foot,
    Backdrop
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
      document.querySelector("#reg-hero-theme-button").focus();
    }
  }
};
</script>

