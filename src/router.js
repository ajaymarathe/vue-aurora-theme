import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Icons from "./views/Icons.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user",
      name: "User Profile",
      component: User
    },
    {
      path: "/icons",
      name: "Icons",
      component: Icons
    }
  ]
});