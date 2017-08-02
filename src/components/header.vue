<template>
  <div class="header">
    header {{msg}}
  </div>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'header'
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      console.log('load header')
    }
  }
}
</script>
<style scoped lang="scss">
@import '../scss/global.scss';
.header {
  height: 60px;
  width: 100%;
  background-color: skyblue;
}
</style>
