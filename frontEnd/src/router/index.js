import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/Index.vue'
import Article from '../views/article.vue'
import Login from '../views/login.vue'
import Post from '../views/post.vue'
import api from '../services/login.js'

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/article/:id',
      name: 'Article',
      component:Article
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/post',
      name: 'Post',
      component:Post,
      beforeEnter: (to, from, next) => {
        let self = this
        let token = localStorage.getItem("token")
        if( token == null){
          window.VueInstance.$Notice.error({
            title:'请先登录!'
          })
          next('/login')
          return ;
        }
        else {
          api.checkjwt(token).then((data)=>{
            if(data.status != 0){
              next('/login')
            }
            else
              next()
          })
        }
      }
    },
  ]
})

export default router
