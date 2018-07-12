import Vue from 'vue';
import router from '../router/index';
import store from '../store/index';
import app from '../app/app';

new Vue({ // eslint-disable-line no-new
  // el: '#app',
  router: router,
  store,
  render: h => h(app)
}).$mount('#app');
