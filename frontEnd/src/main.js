import Vue from 'vue'
import App from './App.vue'

import router from './router'
import iView from 'iview'
//import 'iview/dist/styles/iview.css'
import store from './vuex/index.js'

import rmarkedEditor from 'rmarkedEditor'

//引入样式
import  'codemirror/lib/codemirror.css'
import "rmarkedEditor/src/css/simplemde.css"
import "rmarked/css/github-markdown.css"
//import "katex/dist/katex.min.css"

//引入高亮的主题,可以改成自己喜欢的
import "highlight.js/styles/agate.css"

Vue.use(iView);
Vue.use(rmarkedEditor)

var markdown = require('rmarked')()
Vue.prototype.markdown_render = markdown

Vue.prototype.gotoTop = function(){
  scrollTo(0,0);
}


/* 删除loading.gif */
document.getElementById("loading").setAttribute("style","display:none")

window.VueInstance = new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components:{ App }
})
