<template>
  <div>
    <h1>list</h1>
    <div class="option">

      <div class="item">
        <Button>标题</Button>
        <Input v-model="title" style="width:150px">
        </Input>
      </div>

      <div class="item">
        <Button>标签</Button>
        <Select v-model="tag" style="width:150px">
          <Option v-for="item in tags" :value="item" :key="item"></Option>
        </Select>
      </div>

      <div class="item" style="margin">
        <Button>作者</Button>
        <Select v-model="author" style="width:150px">
          <Option v-for="item in authors" :value="item" :key="item"></Option>
        </Select>
      </div>

      <div class="item" style="margin">
        <Button>搜索</Button>
      </div>

    </div>
    <vtable
      ref="vtable"
      size="default"
      :columns="columns"
      :count="count"
      :page="page"
      url="article"
      >
    </vtable>
  </div>
</template>

<script>
import vtable from '../components/vtable.vue'
import api from '../services/article.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tag:'',
      title:'',
      author:'',
      count:25,
      page:1,
      columns:[
        {
          title:'标题',
          render:function(h,params){
            return h('router-link',{
              props:{
                to:'/article/'+params.row._id
              }
            },params.row.title)
          }
        },
        {
          title:'作者',
          key:'author'
        },
        {
          title:'标签',
          render:function(h,params){
            let tags = []
            for(let i = 0;i < params.row.tags.length && i < 3;i++)
              tags.push(h('Tag',params.row.tags[i]));
            if( params.row.tags.length > 3){
              tags.pop()
              let more_tags = params.row.tags.slice(2).join(',')
              let tip = h('Tooltip',{
                props:{
                  content:more_tags,
                  placement:'top'
                }
              },[
                h('Tag','...')
              ])
              tags.push(tip)
            }
            return h('p',tags)
          }
        },
        {
          title:"浏览量",
          key:'visits'
        }
      ],
    }
  },
  mounted(){
    this.refresh()
    this.$store.commit('getState')
  },
  methods:{
    refresh(){
      this.$refs.vtable.refresh()
    }
  },
  components:{
    vtable
  },
  computed:{
    authors(){
      return this.$store.getters.authors
    },
    tags(){
      return this.$store.getters.tags
    },
  }
}
</script>

<style>
.option {
  padding:20px 0px;
  text-align:justify;
}
.option .ivu-input-group {
  top:0px;
}
.option .item {
  display:inline-block;
  vertical-align:top;
  margin-left:10px;
}
</style>
