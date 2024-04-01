import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

import Toastr from '@enso-ui/toastr/bulma';
import ToastrPlugin from '@enso-ui/toastr';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

Vue.component('fa', FontAwesomeIcon);

Vue.use(ToastrPlugin, {
  layout: Toastr,
  options: {
    duration: 3500,
    position: 'right',
  },
});

window.axios = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
