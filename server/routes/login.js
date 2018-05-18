var express = require('express');
var router = express.Router();
var Promise = require('bluebird')
var gen_id = require('shortid').generate
var jwt = require('jsonwebtoken');

var MA = M['user']

// login
router.post('/',async function(req, res, next) {
  let user_data = req.body
  let username = user_data.username
  let doc = await MA.findOne({username:username})
  if( doc == null){
    res.json({
      status:-1,
      message:'没有找到用户:'+username
    })
  }
  else if( doc.secret !== user_data.secret){
    res.json({
      status:-1,
      message:'密码不正确'
    })
  }
  else{
    let token  = jwt.sign({
      author:username
    }, C.jwt_key, { expiresIn: '3 days' });

    res.json({
      status:0,
      message:"登录成功",
      token:token
    })
  }
})


router.post('/checkjwt',async function(req, res, next) {

  let token = req.body.token
  if(token === undefined){
    res.json({
      status:-1,
      message:"need token"
    })
  }

  debug("请求的token:",token)
  try{
    let decode = jwt.verify(token,C.jwt_key)
    debug("token正确:",decode)
    res.json({
      status:0,
      message:"token正确"
    })
  }
  catch(e){
    debug("token错误:",e.name)
    res.json({
      status:-1,
      message:e.name
    })
  }
})

module.exports = router;
