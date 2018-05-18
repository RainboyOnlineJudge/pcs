import api from './index.js'

export default {
  get(id,force){
    let params = {}
    if( force === true){
        params.force = 'true'
    }
    return api.get('article/'+id,params)
  },
  upload(data){ //上传
    let token  = localStorage.getItem('token')
    return api.post('article/opt/upload',data,{token:token})
  },
  list(params,force){
    if( force === true){
        params.force = 'true'
    }
    return api.get('article',params)
  },
  ta(){
    return api.get('article/opt/ta')
  }
}
