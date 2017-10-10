var real_server = "http://server.rainboy.cc:3001/"
var server = process.env.NODE_ENV==='production'?real_server:'http://localhost:3000/'
module.exports = {
  server: server
}
