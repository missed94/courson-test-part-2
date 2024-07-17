import Vue from "vue";
import VueTheMask from "vue-the-mask";
import VModal from "vue-js-modal";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/app.css";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
Vue.use(VModal, { componentName: "Modal" });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
