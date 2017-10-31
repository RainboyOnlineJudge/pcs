<template>
  <div class="list">
    <h1>题解列表</h1>
    <div class="option">

      <div class="item">
        <Button>标题</Button>
        <Input v-model="search.title" style="width:150px">
        </Input>
      </div>

      <div class="item">
        <Button>标签</Button>
        <Select v-model="search.tags" style="width:150px" clearable>
          <Option v-for="item in tags" :value="item" :key="item"></Option>
        </Select>
      </div>

      <div class="item">
        <Button>作者</Button>
        <Select v-model="search.author" style="width:150px" clearable>
          <Option v-for="item in authors" :value="item" :key="item"></Option>
        </Select>
      </div>

      <div class="item">
        <Button icon="ios-search" type="primary" @click="refresh">搜索</Button>
      </div>
    </div>
    <vtable
      ref="vtable"
      size="default"
      :params="search"
      :columns="columns"
      :count="count"
      :page="page"
      :border="true"
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
      search:{
        tags:'',
        title:'',
        author:'',
      },
      count:50,
      page:1,
      columns:[
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title:'标题',
          align:'center',
          render:function(h,params){
            let link = h('router-link',{
              props:{
                to:'/article/'+params.row._id
              }
            },params.row.title)

            return h('p',[link])
          }
        },
        {
          title:'作者',
          key:'author',
          width:120,
          align:'center'
        },
        {
          title:'标签',
          align:'center',
          render:function(h,params){
            let tags = []
            for(let i = 0;i < params.row.tags.length && i <= 3;i++)
              tags.push(h('Tag',params.row.tags[i]));
            if( params.row.tags.length > 3){
              tags.pop()
              let more_tags = params.row.tags.slice(3).join(',')
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
          key:'visits',
          width:80,
          align:'center'
        }
      ],
    }
  },
  mounted(){
    this.$store.commit('getState')
    let self= this
    this.getParams()
    this.refresh()
    this.$nextTick(self.gotoTop)
  },
  methods:{
    refresh(){
      this.$refs.vtable.refresh()
    },
    getParams(){
      let query = this.$route.query
      if( query.title)
        this.search.title = query.title
      if( query.tags)
        this.search.tags= query.tags

      if( query.author)
        this.search.author = query.author
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
.list h1 {
  margin-top:50px;
  margin-bottom:20px;
  text-align:center;
  font-size:30px;
  color: #ddd;
  letter-spacing: 0;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135 
}
</style>
