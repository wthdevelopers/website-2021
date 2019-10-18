import Vue from "vue";
import Router from "vue-router";
import Homepage from "./views/Homepage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/registration",
      name: "registration",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Registration.vue")
    }
  ]
});
