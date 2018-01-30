<template>
  <div id="qr">
    <div class="content">
      <div class="input-url">
        <div class="col-lg-6">
          <div class="alert alert-info" role="alert" v-html="info"></div>
          <div class="input-group">
            <input type="text" placeholder="url" class="form-control" v-model="url">
            <span class="input-group-btn">
              <button class="btn btn-success" type="button" v-on:click="createQRCode()">
                create
              </button>
            </span>
          </div>
        </div>
      </div>
      <div id="qrcode"></div>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2';
export default {
  name: 'qr',
  components: {},
  data () {
    return {
      info: 'create QR code',
      url: '',
      msg: 'qr page'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load qr page');
    },
    createQRCode: function () {
      $('#qrcode').html('');
      new QRCode(document.getElementById('qrcode'), {  // eslint-disable-line no-new
        text: this.url,
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }
};
</script>
<style lang="scss">
#qr {
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
    #qrcode {
      width: 130px;
      height: 130px;
      margin: 10px auto auto auto;
    }
  }
}
</style>
