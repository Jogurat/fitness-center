import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Plan from "../views/Plan.vue";
import Appointments from "../views/Appointments.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/plan/:id",
    name: "Plan",
    component: Plan,
  },
  {
    path: "/appointments/:type",
    name: "Appointments",
    component: Appointments,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
