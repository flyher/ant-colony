<template>
  <div id="jwt">
    <div class="content">
      <div class="input-str">
        <div class="">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class="input-group">
            <input type="text" placeholder="jwt string" class="form-control" v-model="jwtString">
            <span class="input-group-btn">
              <button class="btn btn-success" type="button" v-on:click="decodeJWT()">
                decode
              </button>
            </span>
          </div>
          <div id="jwt-code">
            <span v-html="jwtCode"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Base64 } from 'js-base64';
// import highlight from 'highlight'
export default {
  name: 'jwt',
  components: {},
  data () {
    return {
      info:
        'decode jwt(JSON Web Token)\'s header and payload.<br/>https://en.wikipedia.org/wiki/JSON_Web_Token<br/>A jwt code=base64(header)+ . + base64(payload) + . + secret',
      jwtString:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ',
      jwtCode: '',
      msg: 'jwt page'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load jwt page');
    },
    getJWTheader: function (str) {
      let strs = str.split('.');
      if (strs.length >= 3) {
        return strs[0];
      }
    },
    getJWTPayload: function (str) {
      let strs = str.split('.');
      if (strs.length >= 3) {
        return strs[1];
      }
    },
    decodeBase64: function (jwtString) {
      return (
        Base64.decode(this.getJWTheader(jwtString)) +
        '<br/>' +
        Base64.decode(this.getJWTPayload(jwtString))
      );
    },
    decodeJWT: function () {
      this.jwtCode = this.decodeBase64(this.jwtString);
    }
  }
};
</script>
<style lang="scss">
#jwt {
  .content {
    // background-color: skyblue;
    width: 80%;
    height: 400px;
    margin: auto;
    .input-str {
      width: 100%;
      display: grid;
      .col-lg-6 {
        margin: auto;
        .alert-info {
          word-break: break-word;
        }
        #jwt-code {
          // width: 130px;
          height: 60px;
          margin: 10px auto auto auto;
          text-align: left;
        }
      }
    }
  }
}
</style>
