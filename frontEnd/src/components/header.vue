<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="layout-logo" @click="goIndex">
      <Icon type="ionic"></Icon>
      SCYZ-Noi-pcs
    </div>
    <div class="layout-nav">
      <MenuItem name="post">
      <router-link :to="{name:'Post'}">
        <Icon type="upload"></Icon>
        上传文章
      </router-link>
      </MenuItem>
      <MenuItem name="1">
      <Icon type="ios-information"></Icon>
      关于
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    goIndex(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style>
.layout-logo{
  cursor:pointer;
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

.layout-logo:hover {
  background:#797F8E;
  color:#00fdd1;
}

.layout-nav{
  float:right;
  right:20px;
}
</style>
