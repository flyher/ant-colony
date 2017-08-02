<template>
  <div class="footer">
    footer {{msg}}
  </div>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load footer')
    }
  }
}
</script>
<style scoped lang="scss">
@import '../scss/global.scss';
.footer {
  height: 60px;
  width: 100%;
  background-color: skyblue;
}
</style>