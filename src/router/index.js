import { createRouter, createWebHistory } from "vue-router";
import SamplesView from "../views/SamplesView.vue";
import HomeView from "../views/HomeView.vue";
import QRView from "../views/QRView.vue";
import CalculationsView from "../views/CalculationsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/samples",
      name: "samples",
      component: () => import("../views/SamplesView.vue"),
    },

    {
      path: "/qr",
      name: "qr",
      component: () => import("../views/QRView.vue"),
    },

    {
      path: "/calculations",
      name: "calculations",
      component: () => import("../views/CalculationsView.vue"),
    },

    {
      path: "/:pathMatch(.*)",
      component: HomeView, // Redirect to the homepage component
    },
  ],
});

export default router;
