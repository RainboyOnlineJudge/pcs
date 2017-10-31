import Vue from 'vue'
import App from './App.vue'

import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex/index.js'


import "rmarked/css/github-markdown.css"
import "katex/dist/katex.min.css"

//引入高亮的主题,可以改成自己喜欢的
import "highlight.js/styles/agate.css"

Vue.use(iView);

var markdown = require('rmarked')()
Vue.prototype.markdown_render = markdown

Vue.prototype.gotoTop = function(){
  scrollTo(0,0);
}


new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components:{ App }
})
