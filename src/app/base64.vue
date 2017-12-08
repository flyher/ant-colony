<template>
  <div id="base64">
    <ui-header></ui-header>
    <div class="content">
      <div class="input-url">
        <div class="col-lg-6">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class="input-group">
            <input type="text" placeholder="base64/normal string" class="form-control" v-model="baseStr">
            <span class="input-group-btn">
              <button class="btn btn-success" type="button" v-on:click="decodeOrEncode()">
                decode/encode
              </button>
            </span>
          </div>
          <div id="decode-str">
            <span v-html="decodeStr"></span>
          </div>
          <div id="encode-str">
            <span v-html="encodeStr"></span>
          </div>
        </div>
      </div>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import { Base64 } from 'js-base64';

export default {
  name: 'base64',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      info:'encode or decode base64',
      baseStr: '',
      decodeStr: '',
      encodeStr: '',
      msg: 'base64 page'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load base64 page')
    },
    decodeOrEncode: function () {
      this.decodeStr = 'decode: '+ Base64.decode(this.baseStr);
      this.encodeStr= 'encode: '+ Base64.encode(this.baseStr);
    }
  }
}
</script>
<style lang="scss">
#base64 {
  .content {
    // background-color: skyblue;
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
    #decode-str,
    #encode-str
     {
      // width: 130px;
      // height: 60px;
      margin: 10px auto auto auto;
      text-align: left;
    }
  }
}
</style>
