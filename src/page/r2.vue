<template>
  <div id="r2">
    <div class="content">
      <div class="input-r2">
        <div class="">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div>
            <span>{{txtStore}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store/index';
export default {
  name: 'r2',
  components: {},
  data () {
    return {
      info: 'r2 test',
      msg: 'r2 page',
      txtStore: 'nothing'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      // console.log('load r1 test page');
      // console.log(store);
      this.txtStore = store.state.txtStore;
    }
  }
};
</script>
<style lang="scss">
#r2 {
  .content {
    width: 80%;
    height: 400px;
    margin: auto;
    .input-url {
      width: 100%;
      display: grid;
      .col-lg-6 {
        margin: auto;
      }
    }
    #markdown-str {
      // width: 130px;
      // height: 60px;
      margin: 10px auto auto auto;
      text-align: left;
    }
    .text-area {
      textarea {
        min-height: 120px;
      }
    }
  }
}
</style>