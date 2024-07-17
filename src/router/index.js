import Vue from "vue";
import Router from "vue-router";
import PageProductSelection from "@/pages/PageProductSelection";
import PagePersonalInformation from "@/pages/PagePersonalInformation";
import PageConfirmOrder from "@/pages/PageConfirmOrder";

Vue.use(Router);

const routes = [
  { path: "/", redirect: "/step1" },
  { path: "/step1", component: PageProductSelection },
  { path: "/step2", component: PagePersonalInformation },
  { path: "/step3", component: PageConfirmOrder },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
