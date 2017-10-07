var Schema = require("mongoose").Schema
var shortid = require('shortid')

var ArticleSchema = new Schema({
  _id:{type:String,default:shortid.generate},
  title:String, //标题
  author:{type:String,default:'unkown'},
  content:String,
  visits:{ type:Number, default:0 },//浏览数量
  tags:{type:Array,default:[]},
  hidden:{ type:Boolean, default:false },
  date:{type:Date,default:Date.now},
  update:{type:Date, default:Date.now },
});


ArticleSchema.index({update:1})

module.exports = ArticleSchema
