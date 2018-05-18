<template>
  <div style="width:60%;margin:0 auto;">
    <br>
    <br>
    <br>
    <br>
    <br>
    <Input v-model="pdata.username">
    <span slot="prepend">用户名</span>
    </Input>
    <br>
    <Input type="password" v-model="pdata.secret">
    <span slot="prepend">密码</span>
    </Input>
    <br>
    <Button  type="primary" long  @click="login">登录</Button>
  </div>
</template>
<script>
import api from '../services/login.js'
import md5 from 'md5'
export default {
  data(){
    return {
      pdata:{
        username:'',
        secret:''
      }
    }
  },
  mounted(){
    //验token
  },
    methods:{
      login(){
        if( this.pdata.username == '' ||  this.pdata.secret== ''){
          this.$Notice.error({
            title:'请填写完整!'
          })
          return;
        }
        let self = this
        api.login({username:this.pdata.username,secret:md5(this.pdata.secret)}).then((data)=>{
          if( data.status != 0){
            self.$Notice.error({
              title:'登录失败!',
              desc:data.message
            })
            return
          }
          localStorage.setItem("token",data.token)
          self.$router.push({name:'Post'})
        })
      }
    }
}
</script>
