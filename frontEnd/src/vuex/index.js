import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api from '../services/ta.js'
export default new Vuex.Store({
  state:{
    tags:[],
    authors:['raiboy','raiboy2'],
    isGet:false,
  },
  getters:{
    tags: state=>{
      return state.tags;
    },
    authors: state => {
      return state.authors
    }
  },
  mutations:{
    getState(state){
      if(state.isGet == false){
        return api.get().then(function(data){
          state.authors = data.authors
          state.tags= data.tags
          state.isGet = true;
        })
      }
    }
  }
})
