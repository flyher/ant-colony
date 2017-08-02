import Vue from 'vue'
import app from '../app/index'
// issue https://stackoverflow.com/questions/40208797/vue-2-0-setting-up-routes-do-not-use-new-for-side-effects
// Vue.create = function (options) {
//   return new Vue({
//     el: '#app',
//     render: h => h(app)
//   })
// }
new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(app)
})
// new Vue({ // eslint-disable-line no-new
//   el: '#app',
//   template: '<app/>',
//   components: { app }
// })
