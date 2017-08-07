<template>
  <div id="qr">
    <ui-header></ui-header>
    <div class="content">
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" placeholder="url" class="form-control" v-model="url">
          <span class="input-group-btn">
            <button class="btn btn-success" type="button" v-on:click="createQRCode()">
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
import QRCode from 'qrcodejs2'
export default {
  name: 'qr',
  components: {
    'ui-header': header,
    'ui-footer': footer
  },
  data () {
    return {
      url: '',
      msg: 'qr page'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load qr page')
    },
    createQRCode: function () {
      $('#qrcode').html('');
      new QRCode(document.getElementById('qrcode'), {
        text: this.url,
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
    #qrcode {
      width: 130px;
      height: 130px;
      margin: 10px auto auto auto;
    }
  }
}
</style>
