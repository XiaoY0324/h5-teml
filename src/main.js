import Vue from "vue";
import "normalize.css/normalize.css"; // 样式初始化
import "@/styles/index.scss"; // 全局样式
import "vant/lib/index.css";
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
