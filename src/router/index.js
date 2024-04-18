import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("../views/auth/SignUp.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("../views/auth/SignIn.vue"),
    },
  ],
});

export default router;
