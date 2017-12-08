<template>
  <div id="wb">
    <ui-header></ui-header>
    <div class="content">
      
      <div class="input-url">
        <div class="col-lg-6">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class="input-group">
            <input type="text" placeholder="http://wx1.sinaimg.cn/mw690/006r2HqOgy1fj7dxg3zuxj30p02a1wry.jpg" class="form-control" v-model="url">
            <span class="input-group-btn">
              <button class="btn btn-success" type="button" v-on:click="decodeWBUrl()">
                decode
              </button>
            </span>
          </div>
          <div id="wburl">
            <a v-bind:href="wburl" target="_blank">{{wburl}}</a>
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
import QRCode from 'qrcodejs2'
export default {
  name: 'wb',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      info:'decode weibo url from the picture url',
      url: '',
      wburl: '',
      msg: 'wb page'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load wb page')
    },
    string62to10: function (number_code) {
      number_code = String(number_code);
      var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',
        radix = chars.length,
        len = number_code.length,
        i = 0,
        origin_number = 0;
      while (i < len) {
        origin_number += Math.pow(radix, i++) * chars.indexOf(number_code.charAt(len - i) || 0);
      }
      return origin_number;
    },
    decode: function (url) {
      var lastIndexOfSlash = url.lastIndexOf('/');
      var number = url.substr(lastIndexOfSlash + 1, 8);
      if (number.startsWith('00')) {
        return this.string62to10(number);
      } else {
        return parseInt(number, 16);
      }
    },
    decodeWBUrl: function () {
      this.wburl = 'http://weibo.com/u/' + this.decode(this.url);
    }
  }
}
</script>
<style lang="scss">
#wb {
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
    #wburl {
      // width: 130px;
      height: 60px;
      margin: 10px auto auto auto;
      text-align: center;
    }
  }
}
</style>
