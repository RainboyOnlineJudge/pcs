var real_server = "/"
var server = process.env.NODE_ENV==='production'?real_server:'http://localhost:3000/'
module.exports = {
  server: server
}
