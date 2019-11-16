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
    },
    {
      path: "/registration-end/:outcome",
      name: "registration-end",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/RegistrationEnd.vue"),
      props: true
    },
    { path: "*", redirect: "/" }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
