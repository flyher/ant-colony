<template>
  <div id="app">
    <ui-header></ui-header>
    <div class="content">
      index {{msg}}
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
// import Vue from 'vue'
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
      msg: 'content'
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
.content {
  background-color: silver;
}
</style>
