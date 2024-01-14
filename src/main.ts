import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "App", component: App },
    { path: "/privacy", name: "PrivacyPolicy", component: PrivacyPolicy },
  ],
});

createApp(App).use(router).mount("#app");
