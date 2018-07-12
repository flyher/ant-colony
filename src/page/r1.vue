<template>
  <div id="r1">
    <div class="content">
      <div class="input-r1">
        <div class="">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class='text-area'>
            <input type='text' placeholder='txtOne' class='form-control' v-model='txtOne'>
            <input type='text' placeholder='txtTwo' class='form-control' v-model='txtTwo'>
          </div>
          <div>
            <button class="btn btn-success" type="button" v-on:click="saveToGlobalVuex()">
              Save
            </button>
          </div>
          <div class="text-area" v-if="txtOne.length+txtTwo.length>0">
            <span>{{txtOne}}</span>|
            <span>{{txtTwo}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store/index';
export default {
  name: 'r1',
  components: {},
  data () {
    return {
      info: 'r1 test',
      msg: 'r2 page',
      txtOne: '',
      txtTwo: '',
      txtAll: ''
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      // console.log('load r1 test page');
    },
    saveToGlobalVuex: function () {
      store.commit('updateStore', this.txtOne + '|' + this.txtTwo);
    }
  }
};
</script>
<style lang="scss">
#r1 {
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