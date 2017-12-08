<template>
  <div id="jwt">
    <ui-header></ui-header>
    <div class="content">
      <div class="input-url">
        <div class="col-lg-6">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class="input-group">
            <input type="text" placeholder="jwt string" class="form-control" v-model="jwtString">
            <span class="input-group-btn">
              <button class="btn btn-success" type="button" v-on:click="decodeJWT()">
                decode
              </button>
            </span>
          </div>
        </div>
      </div>
      <div id="jwt-code">
        <span>{{jwtCode}}</span>
      </div>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import { Base64 } from 'js-base64';
// import highlight from 'highlight'
export default {
  name: 'wb',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      info:'decode jwt(JSON Web Token)\'s header and payload.<br/>https://en.wikipedia.org/wiki/JSON_Web_Token<br/>A jwt code=base64(header)+ . + base64(payload) + . + secret',
      jwtString: '',
      jwtCode: '',
      msg: 'jwt page'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load jwt page')
    },
    getJWTheader: function (str) {
      let strs = str.split('.');
      if(strs.length>=3){
        return strs[0];
      }
    },
    getJWTPayload:function(str){
      let strs = str.split('.');
      if(strs.length>=3){
        return strs[1];
      }
    },
    decodeBase64: function (jwtString) {
      return Base64.decode(this.getJWTheader(jwtString))+'<br/>'+Base64.decode(this.getJWTPayload(jwtString));
    },
    decodeJWT: function () {
      this.jwtCode = this.decodeBase64(this.jwtString);
    }
  }
}
</script>
<style lang="scss">
#jwt {
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
    #jwt-code {
      // width: 130px;
      height: 60px;
      margin: 10px auto auto auto;
      text-align: center;
    }
  }
}
</style>
