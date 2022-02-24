// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/services/store";
import ApiService from "@/services/api.service";
import Vuelidate from "vuelidate";
import { VERIFY_AUTH } from "./services/store/auth.module";
import VueQuillEditor from "vue-quill-editor";
import VShowSlide from "v-show-slide";
import VueConfirmDialog from "vue-confirm-dialog";
import { Row, Column } from "vue-grid-responsive";

// import Kmeans from "node-kmeans";

import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(Vuelidate);
Vue.use(VueQuillEditor /* { default global options } */);
Vue.use(VShowSlide);

Vue.use(VueConfirmDialog);
Vue.component("vue-confirm-dialog", VueConfirmDialog.default);
Vue.component("row", Row);
Vue.component("column", Column);
// Vue.use(Kmeans);

ApiService.init();

router.beforeEach((to, from, next) => {
  Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
