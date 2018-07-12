<template>
  <!-- footer {{msg}} -->
  <footer class="footer">
    <p>
      Theme by
      <a href="https://getbootstrap.com">Bootstrap</a>&nbsp;&nbsp; Powered by
      <a href="https://github.com/flyher/ant-colony">ant-colony@v0.2</a>
    </p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      // console.log('load footer');
    }
  }
};
</script>
<style scoped lang="scss">
@import '../scss/global.scss';
.footer {
  padding: 10px 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0%;
  display: inline-block;
  width: 100%;
}
</style>