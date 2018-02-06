<template>
  <div class="header">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed navbar" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/index">Ant-Colony</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <!-- <li class="active"><a href="#">Home</a></li> -->
            <!-- <li><a href="#about">About</a></li> -->
            <!-- <li><a href="#contact">Contact</a></li> -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Picture
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li class="page-qr">
                  <a href="#/qr">QR</a>
                </li>
                <!-- <li><a href="#">Another action</a></li> -->
                <!-- <li><a href="#">Something else here</a></li> -->
                <!-- <li role="separator" class="divider"></li>
                              <li class="dropdown-header">Nav header</li>
                              <li><a href="#">Separated link</a></li>
                              <li><a href="#">One more separated link</a></li> -->
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Social
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li class="page-wb">
                  <a href="#/wb">weibo</a>
                </li>
                <!-- <li><a href="#">Another action</a></li> -->
                <!-- <li><a href="#">Something else here</a></li> -->
                <!-- <li role="separator" class="divider"></li>
                              <li class="dropdown-header">Nav header</li>
                              <li><a href="#">Separated link</a></li>
                              <li><a href="#">One more separated link</a></li> -->
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Redirect
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li class="page-brige">
                  <a href="#/brige">brige</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">String
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li class="page-jwt">
                  <a href="#/jwt">jwt</a>
                </li>
                <li class="page-base64">
                  <a href="#/base64">base64</a>
                </li>
                <li class="page-jsonhtml">
                  <a href="#/jsonhtml">json format</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
  </div>
</template>
<script>
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
export default {
  name: 'header',
  data () {
    return {
      msg: 'header'
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('load header');
      let pathnames = window.location.pathname.split('/');
      let pagename = pathnames[pathnames.length - 1].replace(/g/, '');
      $('.header')
        .find('li')
        .removeClass('active');
      $('.page-' + pagename).addClass('active');
      $('.dropdown-menu').find('li').bind('click', function () {
        $('.navbar-header').find('button').click();
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import '../scss/global.scss';
.header {
  height: 60px;
  width: 100%; 
  // background-color: skyblue;
}
</style>
