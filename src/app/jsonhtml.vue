<template>
  <div id='jsonhtml'>
    <ui-header></ui-header>
    <div class='content'>
      <div class='input-url'>
        <div class='col-lg-6'>
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class='input-group'>
            <textarea type='text' placeholder='json data' class='form-control' v-model='jsonstr' />
            <span class='input-group-btn'>
              <button class='btn btn-success' type='button' v-on:click='jsonToHtml()'>
                parse
              </button>
            </span>
          </div>
          <div id='htmlcode' class="jumbotron" v-html="jsonhml">
            <pre class="jf-CodeContainer"><span class="jf-String">""</span></pre>
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
      jsonhml: ''
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
    .input-url {
      width: 100%;
      display: grid;
      .col-lg-6 {
        margin: auto;
      }
    }
    #htmlcode {
      overflow: auto;
      min-height: 200px;
      max-height: 300px;
      margin-top: 5px;
      background-color: white;
    }
  }
}
</style>
