var fs = require("fs")
var rq = require('request-promise')

async function post(data){

  let opts = {
    uri:C.server_url+'/article/opt/upload',
    headers:{
      token:C.token
    },
    method:'POST',
    body:data,
    json:true
  }

  let res = await rq(opts)
}

async function image_post(path){
  let formData = {
    file : fs.createReadStream(path)
  }
  let opts = {
    uri:C.server_url+'/image/upload',
    headers:{
      token:C.token
    },
    method:'POST',
    formData:formData
  }
  
  let res = await rq(opts)
  return res

}

exports.post = post
exports.image_post = image_post
