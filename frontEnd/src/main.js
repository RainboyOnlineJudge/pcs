import Vue from 'vue'
import App from './App.vue'

import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex/index.js'

Vue.use(iView);

var markdown = require('./utils/chg_marked.js')
Vue.prototype.markdown_render = markdown


new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components:{ App }
})
