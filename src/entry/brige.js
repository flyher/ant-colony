import Vue from 'vue'
import app from '../app/brige'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(app)
})
