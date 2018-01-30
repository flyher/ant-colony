<template>
  <div id="index">
    <div class="content">
      {{msg}}
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
export default {
  name: 'welcome',
  components: {},
  data () {
    return {
      msg: 'Welcome to Ant-Colony'
    };
  },
  // mounted: function () {
  //   this.init()
  // },
  methods: {
    // init: function () {
    //   console.log('load index')
    // }
  }
};
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
