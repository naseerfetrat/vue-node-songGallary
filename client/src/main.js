// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
require("../node_modules/bootstrap/dist/css/bootstrap.css");
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
// Vue.use(Vuetify);
import { sync } from "vuex-router-sync";
import store from "@/store/store";
import VueYouTubeEmbed from "vue-youtube-embed";
import Panel from "@/components/globals/Panel";
Vue.component("panel", Panel);

Vue.use(VueYouTubeEmbed);
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
