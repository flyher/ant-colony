<template>
  <div id="wb">
    <ui-header></ui-header>
    <div class="content">
      <div class="input-url">
        <div class="col-lg-6">
          <div class="input-group">
            <span class="input-group-btn">
              <button class="btn btn-success" type="button" v-on:click="getHttpheader()">
                get header
              </button>
            </span>
          </div>
        </div>
      </div>
      <div id="httpheaderinput">
        <pre>
            <code class="json">...</code>
        </pre>
        <div>{{wburl}}</div>
      </div>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'

export default {
  name: 'httpheader',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      url: '',
      httpheader: '',
      msg: 'httpheader page'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load httpheader page');
    },
    getHttpheader: function () {
      var req = new XMLHttpRequest();
      req.open('GET', document.location, false);
      req.send(null);
      this.httpheader = req.getAllResponseHeaders().toLowerCase();
      $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
      });
      console.log(this.httpheader);
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
