<template>
  <div id='jsonhtml'>
    <ui-header></ui-header>
    <div class='content'>
      <div class='input-area'>
        <div class='col-lg-6'>
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class='text-area'>
            <textarea type='text' placeholder='json data' class='form-control' v-model='jsonstr' />
          </div>
          <div>
            <button class='btn btn-success' type='button' v-on:click='jsonToHtml()'>
                parse
            </button>
          </div>    
        </div>
        <div class="col-lg-6">
          <div id='htmlcode' v-html="jsonhml">
          </div>
        </div>
      </div>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import header from '../components/header';
import footer from '../components/footer';
import { JsonFormater } from '../lib/jsonformat/jsonFormater';

export default {
  name: 'jsonhtml',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data() {
    return {
      info: 'format json data',
      msg: 'jsonhtml page',
      jsonstr: '',
      jsonhml: '<pre class="jf-CodeContainer"></pre>'
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      console.log('load brige page');
    },
    jsonToHtml: function() {
      let jsonFormater = new JsonFormater({});
      this.jsonhml = jsonFormater.doFormat(this.jsonstr);
    }
  }
};
</script>
<style scoped lang='scss'>
@import '../lib/jsonformat/jsonFormater.css';
#jsonhtml {
  .content {
    // background-color: skyblue;
    width: 80%;
    height: 400px;
    margin: auto;
    .input-area {
      width: 100%;
      display: grid;
      .col-lg-6 {
        margin: auto !important;
        .input-group {
          textarea {
            height: 200px;
            overflow-y: auto;
          }
        }
        .row{
          .input-group-btn{
            float:right;
            margin-top: 5px;
            margin-bottom: 5px;
          }
        }
        .btn{
          margin-top: 10px;
          margin-bottom: 10px;
        }
        #htmlcode {
          overflow: auto;
          min-height: 200px;
          max-height: 300px;
          min-width: 80%;
          max-width: 1000px;
          margin-top: 5px;
          background-color: white;
          margin-bottom: 100px;
        }
      }
    }
  }
}
</style>
