var Schema = require("mongoose").Schema
var shortid = require('shortid')

var UserSchema = new Schema({
  _id:{type:String,default:shortid.generate},
  username:String, //标题
  author:{type:String,default:'unkown'},
  secret:{type:String},
  hidden:{ type:Boolean, default:false },
  date:{type:Date,default:Date.now},
});



module.exports = UserSchema
