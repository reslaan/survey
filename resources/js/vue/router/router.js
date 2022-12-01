import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import NotFound from "../components/NotFound.vue";
import Dashboard from "../views/Dashboard.vue";
import Surveys from "../views/Surveys.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UsersView from "../views/Users.vue";
import store from "../store";

const router = createRouter({
  hashbang: false,
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      name: "dashboard",
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        { path: "/dashboard", name: "dashboard", component: Dashboard },
        { path: "/surveys", name: "surveys", component: Surveys },
        { path: "/users", name: "users", component: UsersView },
      ],
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      meta: { isGuest: true },

      children: [
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/register",
          name: "register",
          component: Register,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});
export default router;
