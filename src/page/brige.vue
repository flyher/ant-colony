<template>
  <div id='brige'>
    <div class='content'>
      <div class='input-url'>
        <div class='col-lg-6'>
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class='input-group'>
            <input type='text' placeholder='url' class='form-control' v-model='url'>
            <span class='input-group-btn'>
              <button class='btn btn-success' type='button' v-on:click='createBrigeUrl()'>
                create
              </button>
            </span>
          </div>
          <div id='brigeUrl'>
            <a v-bind:href="brigeUrl" target="_blank">{{brigeUrl}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonService from '../service/common';
import { HOST } from '../util/config';
export default {
  name: 'brige',
  components: {},
  data () {
    return {
      info: 'redirect to your website without referrer',
      url: '',
      msg: 'brige page',
      brigeUrl: ''
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load brige page');
      // redirect url
      let redirectUrl = commonService.findUrlParam('url');
      if (redirectUrl !== null) {
        this.info = 'redirect to:' + redirectUrl;
        window.location.href = redirectUrl;
      }
    },
    createBrigeUrl: function () {
      if (this.url.indexOf('http') >= 0) {
        this.brigeUrl =
          HOST + '/brige.html?url=' + encodeURIComponent(this.url);
      } else {
        this.brigeUrl =
          HOST + '/brige.html?url=http://' + encodeURIComponent(this.url);
      }
    }
  }
};
</script>
<style lang='scss'>
#brige {
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
    #brigeUrl {
      height: 30px;
      padding: 5px;
      text-align: left;
    }
  }
}
</style>
