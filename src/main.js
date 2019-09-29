import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootcatch css
import "bootcatch-themes/dist/simply/bootstrap.min.css";
// common css
import "@/assets/scss/common.scss";
// font-awesome icons
import "font-awesome/css/font-awesome.min.css";
//  bootstrap js
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");