var md5 = require('md5')
MU = M['user']

MU.findOne({username:C.default_user}).then((doc)=>{
  debug('账号:',doc)
  if(doc == null){
    debug('没有发现默认账号,开始创建')
    MU.create({username:C.default_user,secret:md5(C.default_secret)})
  }
  else {
    if(doc.secret !== md5(C.default_secret)){
      debug('发现默认账号,密码不一样,开始更新')
      MU.updateOne({username:C.default_user},{secret:md5(C.default_secret)})
    }
    else {
      debug('发现默认账号!')
    }
  }
})
