<template>
  <div class="markdownbody">
    <article-header 
      :title="title"
      :tags="tags"
      :visited="visited"
      :author="author"
      ></article-header>
    <div class="markdown-body" v-html="markdown">
    </div>
  </div>
</template>

<script>
import api from '../services/article.js'
import articleHeader from '../components/articleHeader.vue'
export default {
  name: 'article',
  data () {
    return {
      content:'',
      markdown:'',
      title:'',
      tags:[],
      visited:0,
      author:''
    }
  },
  mounted(){
    this.refresh()
  },
  methods:{
    refresh(){
      let id = this.$route.params.id
      let self = this 
      api.get(id,false).then(function(data){
        if(data.status == 0 )
          self.content = data.doc.content
          self.title = data.doc.title
          self.tags = data.doc.tags
          self.visited = data.doc.visits
        self.author = data.doc.author
          self.markdown = self.markdown_render(self.content)
          self.$nextTick(prettyPrint)  //代码高亮
        self.$nextTick(self.gotoTop)
      })
    }
  },
  components:{
    articleHeader
  }
}
</script>

<style>
.markdownbody {
  padding:10px 20px;
}
</style>

