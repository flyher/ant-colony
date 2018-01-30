import Vue from 'vue';
import router from '../router/index';
import app from '../app/app';

new Vue({ // eslint-disable-line no-new
  // el: '#app',
  router: router,
  render: h => h(app)
}).$mount('#spa');
