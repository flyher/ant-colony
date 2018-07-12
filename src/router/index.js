import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../page/welcome';
import Base64 from '../page/base64';
import Brige from '../page/brige';
import Jsonhtml from '../page/jsonhtml';
import Jwt from '../page/jwt';
import Qr from '../page/qr';
import Wb from '../page/wb';
import HtmlMD from '../page/htmlmd';
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
    },
    {
      path: '/base64',
      component: Base64
    }, {
      path: '/brige',
      component: Brige
    }, {
      path: '/jsonhtml',
      component: Jsonhtml
    }, {
      path: '/jwt',
      component: Jwt
    }, {
      path: '/qr',
      component: Qr
    }, {
      path: '/wb',
      component: Wb
    }, {
      path: '/htmlmd',
      component: HtmlMD
    }, {
      path: '/r1',
      component: R1
    }, {
      path: '/r2',
      component: R2
    }
  ]
});
