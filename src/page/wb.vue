<template>
  <div id="wb">
    <div class="content">
      <div class="input-url">
        <div class="">
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
  </div>
</template>
<script>
export default {
  name: 'wb',
  components: {},
  data () {
    return {
      info: 'decode weibo url from the picture url',
      url: '',
      wburl: '',
      msg: 'wb page'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load wb page');
    },
    string62to10: function (numberCode) {
      var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
      var radix = chars.length;
      var len = numberCode.length;
      var i = 0;
      var originNumber = 0;
      numberCode = String(numberCode);
      while (i < len) {
        originNumber +=
          Math.pow(radix, i++) * chars.indexOf(numberCode.charAt(len - i) || 0);
      }
      return originNumber;
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
};
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
      text-align: left;
    }
  }
}
</style>