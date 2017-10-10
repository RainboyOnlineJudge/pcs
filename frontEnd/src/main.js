import Vue from 'vue'
import App from './App.vue'

import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex/index.js'

import './assets/tomorrow-night-eighties.min.css'
import './assets/github-markdown.css'


Vue.use(iView);

var markdown = require('./utils/chg_marked.js')
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
