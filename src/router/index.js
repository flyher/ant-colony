import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../page/welcome';
import R1 from '../page/r1';
import R2 from '../page/r2';

Vue.use(VueRouter);
Vue.config.debug = false;
Vue.config.devtools = false;
Vue.config.productionTip = false;

export default new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/welcome',
      component: Welcome
    }, {
      path: '/r1',
      component: R1
    }, {
      path: '/r2',
      component: R2
    }
  ]
});
