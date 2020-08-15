import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";
import "animate.css";
import Notifications from "vue-notification";
import store from "./store";

Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
