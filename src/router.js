import Vue from "vue";
import Router from "vue-router";
import Homepage from "./views/Homepage.vue";
import Registration from "./views/Registration.vue";

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
      component: Registration
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
