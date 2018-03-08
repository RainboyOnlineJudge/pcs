//配置
var addr = process.env.NODE_ENV === 'production' ? 'localhost' : 'localhost'
module.exports ={
  "DB":{
    addr:"mongodb://"+addr+"/pcs",
    opts:{
      useMongoClient:true
    }
  },
  port:3000,//端口
  "jwt_key":'mytoken'  //jwt 的key
}
