<template>
  <div id="app" class="layout">
    <mheader></mheader>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem href="#"><router-link to="/">首页</router-link></BreadcrumbItem>
        <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
        <BreadcrumbItem>某应用</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; Rainboy
    </div>
  </div>
</template>

<script>
import mheader from './components/header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    mheader
  }
}
</script>

<style>
.layout{
  border: 1px solid #d7dde4;
}
.layout-logo{
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  left: 20px;
  font-weight:bolder;
  font-size:20px;
  color:#fff;
  padding:0 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
}
.layout-assistant{
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb{
  margin:15px auto;
  padding: 10px 15px 0;
  background:#fff;
  border:1px solid #eee;
}
.layout-content{
  min-height: 500px;
  max-width:850px;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  border:1px solid #eee;
}
.layout-content-main{
  padding: 10px;
}
.layout-copy{
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
body {
  background: url('./assets/bk.png');
  background-image: url('./assets/bk.png');
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}
</style>
