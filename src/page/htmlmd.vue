<template>
  <div id="htmlmd">
    <div class="content">
      <div class="input-url">
        <div class="">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class='text-area'>
            <textarea type='text' placeholder='html' class='form-control' v-model='htmlStr' />
          </div>
          <div>
            <button class="btn btn-success" type="button" v-on:click="convertToMD()">
              Parse
            </button>
          </div>
          <div class="text-area">
            <!-- <span v-html="mdStr"></span> -->
            <textarea type='text' placeholder='markdown' class='form-control' v-model='mdStr' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TurndownService from '../../node_modules/turndown/lib/turndown.browser.es';
export default {
  name: 'htmlmd',
  components: {},
  data () {
    return {
      info: 'convert html to markdown',
      htmlStr: '',
      mdStr: '',
      msg: 'html to markdown page'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load html to markdown page');
    },
    convertToMD: function () {
      let turndownService = new TurndownService();
      this.mdStr = turndownService.turndown(this.htmlStr);
    }
  }
};
</script>
<style lang="scss">
#htmlmd {
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
    #markdown-str {
      // width: 130px;
      // height: 60px;
      margin: 10px auto auto auto;
      text-align: left;
    }
    .text-area{
      textarea{
        min-height: 120px;
      }
    }

  }
}
</style>