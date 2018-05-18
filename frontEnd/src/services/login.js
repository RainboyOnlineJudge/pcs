import api from './index.js'

export default {
  login(data){
    return api.post('login',data)
  },
  checkjwt(data){
    return api.post('login/checkjwt',{token:data})
  }
}
