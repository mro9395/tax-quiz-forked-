import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/PrivacyPolicy.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
