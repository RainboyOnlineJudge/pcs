<template>
  <div>

    <h1 class="title">题解上传:&nbsp;&nbsp;  ┬—┬ ノ( ' - 'ノ) （摆好摆好）</h1>
    <div class="config-items">
      <ul>
        <li> 
          <Input v-model="data.title">
          <span slot="prepend">标题</span>
          </Input>
        </li>

        <li> 
          <Input v-model="data.author">
            <span slot="prepend">作者</span>
          </Input>
        </li>
        <li> 
          <Input v-model="data.oj">
            <span slot="prepend">题目所在的OJ</span>
          </Input>
        </li>

        <br>

        <li class="problem-tags-li" style="width:100%;"> 
          <div class="ivu-input-wrapper ivu-input-type ivu-input-group ivu-input-group-with-prepend">
            <div class="ivu-input-group-prepend" style="">
              <span>标签(输入后按回车)</span></div>
            <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
            <input-tag :tags.sync="data.tags"></input-tag>
          </div>
        </li>
      </ul>

      <h2> 标签云(点击)</h2>

      <div class="tags">
          <Button v-for="tag in tags" @click="click_tag(tag)">{{tag}}</Button>
      </div>
    </div>

    <div class="markEd">
      <br>
      <br>
      <h1>先学习:<a target="_blank" href="https://www.jianshu.com/p/20e82ddb37cb">mardown语法入门</a></h1>
      <h1>公式书写:<a target="_blank" href="https://www.codecogs.com/latex/eqneditor.php">latex在线公式编辑器</a></h1>
      <h1>图片上传<a target="_blank" href="https://sm.ms">sm.ms</a></h1>
      <h1>其中换行建议使用行末两个空格，而不是分段</h1>

      <br>
      <br>
      <markdown-editor
        v-model="data.content"
        :configs="configs"
        >
      </markdown-editor>
    </div>
    <Button  type="primary" long  @click="modal1 = true">提交</Button>
    <Modal
        v-model="modal1"
        title="请确定"
        @on-ok="submit"
        @on-cancel="cancel">
        <p>是否真的要提交?</p>
    </Modal>
  </div>
</template>
<script>

import InputTag from 'vue-input-tag'
import api from '../services/article.js'
export default {
  data(){
    return {
      modal1:false,
      configs:{},
      data:{
        title:'',
        oj:'',
        tags:[],
        author:'',
        content:"## 解析 \n\n\n\n 行内公式:$$a+n=1$$ \n\n  多行公式:\n ```math\na=+1\n``` \n## 代码\n\n\n```c\n这里写代码\n```",
      },
      tags:[]
    }
  },
  mounted(){
    let self = this
    api.ta().then(function(data){
      self.tags = data.tags
    })
  },
  components:{
    InputTag,
  },
  methods:{
    click_tag(tag){
      if( this.data.tags.indexOf(tag) == -1){
        this.data.tags.push(tag)
      }
    },
    submit(){
      if( this.data.title == '' || this.data.author.length == 0 || this.data.content.length == 0 ){
        this.$Notice.error({title:"标题,作者,内容不能为空!!"})
        return;
      }
      api.upload(this.data).then((data)=>{
        if(data.status != 0){
          this.$Notice.error({
            title:'上传失败',
            desc:data.message
          })
          return
        }
        this.$Notice.success({
          title:'上传成功,3s后跳转到首页',
        })
        let self = this
        setTimeout(function(){
          self.$router.push('/')
        },3000)
      })
    }
  }
}
</script>
<style>

.config-items>ul {
  display:flex;
  flex-wrap:wrap;
  align-items:center;
}
.config-items>ul>li{
  display:inline-block;
  margin:10px 50px 10px 0px;
  width:400px;
}


.problem-tags-li input {
  display: table-cell;
  width: 100%;
  height: 20px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #dddee1;
  border-radius: 4px;
  color: #495060;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
}
.tags button{
  margin:3px;
}

.title {
  text-align:center;
  font-size:30px;
  margin:20px 0;
  color: #ccc !important;
  letter-spacing: 0 !important;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 !important;
}
</style>
