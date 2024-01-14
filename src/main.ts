import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import Home from "./views/Home.vue";
import Pricing from "./views/Pricing.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/privacy", component: PrivacyPolicy },
    { path: "/pricing", component: Pricing },
  ],
});

createApp(App).use(router).mount("#app");
