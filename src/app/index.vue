<template>
  <div id="index">
    <ui-header></ui-header>
    <div class="content">
      {{msg}}
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
// import Vue from 'vue'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import header from '../components/header'
import footer from '../components/footer'
export default {
  name: 'index',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      msg: 'Welcome to Ant-Colony'
    }
  },
  // mounted: function () {
  //   this.init()
  // },
  methods: {
    // init: function () {
    //   console.log('load index')
    // }
  }
}
</script>
<style lang="scss">
#index {
  .content {
    // background-color: skyblue;
    width: 80%;
    height: 400px;
    margin: auto;
    text-align: center;
  }
}
</style>
