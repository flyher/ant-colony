<template>
  <div id="qr">
    <ui-header></ui-header>
    <div class="content">
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" placeholder="url" class="form-control">
          <span class="input-group-btn">
            <button class="btn btn-success" type="button">
              create
            </button>
          </span>
        </div>
      </div>
      <div id="qrcode"></div>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import QRCode from 'qrcode'
export default {
  name: 'qr',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      msg: 'content'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load index')
      console.log(QRCode)
      new QRCode(document.getElementById('qrcode'), { // eslint-disable-line no-new
        text: 'http://jindo.dev.naver.com/collie',
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    }
  }
}
</script>
<style lang="scss">
#qr {
  .content {
    // background-color: skyblue;
    width: 80%;
    height: 400px;
    margin: auto;
    .qrstring {
      width: 100%;
    }
  }
}
</style>
