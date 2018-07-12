<template>
  <div id="main">
    <ui-header></ui-header>
    <router-view></router-view>
    <ui-footer></ui-footer>
  </div>
</template>
<script>
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
export default {
  name: 'app',
  components: {
    'ui-header': HeaderComponent,
    'ui-footer': FooterComponent
  },
  data () {
    return {};
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      // console.log('load main page');
    }
  }
};
</script>
<style lang="scss">

</style>