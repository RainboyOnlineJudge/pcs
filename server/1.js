var jwt = require('jsonwebtoken')
var token = jwt.sign({ foo: 'bar' ,
  exp: Math.floor(Date.now() / 1000) - (60 * 60),
}, 'shhhhh');
console.log(token)

try{
var decode = jwt.verify(token,'shhhhh')
console.log(decode)
}
catch(err){
console.log(err)
}


try{
var decode = jwt.verify(token,'wrong-secrte')
console.log(decode)
}
catch(err){
console.log(err)
}


