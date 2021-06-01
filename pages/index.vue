<template>
  <div class="w-full flex">
    <div class="w-full h-screen bg-cover flex flex-col justify-center items-center" v-if="hidden">
      <div class="shadow-inner backdrop-filter backdrop-blur-sm">
        <div class="text-9xl text-white flex justify-center items-center pb-10 px-6 cursor-pointer">Czopo</div>
      </div>
      <div class="text-3xl text-white mt-6">"A hero is a man who does what he can."</div>
    </div>
    <div class="flex-2 flex-col items-center pb-20">
      <div class="pt-5 pb-5">
        <ArticleItem
        v-for="item in list"
        :key="item.id"
        :item="item" />
        <Pagination :totalPage="totalPage" :value="page"/>
      </div>
    </div>
    <div class="flex-1">
      <AboutMe />
    </div>
  </div>

</template>

<script>
import { list as getArticleList } from '~/api/article'
export default {
  name: 'home',
  async asyncData({ $axios, query }) {
    try {
      const data = await getArticleList($axios, { page: query?.page || 1, size: 15 })
      const list = data.data.map(item => ({
        ...item,
        quote: item.content.match(/(?<=\>\s?).*(?=\n\n)/)?.[0] || '',
      }))
      return {
        list,
        isNoMoreData: data.meta.current_page === data.meta.last_page,
        page: data.meta.current_page,
        totalPage: Math.ceil(data.meta.total / data.meta.size),
      }
    } catch (error) {
       console.log(error)
    }    
  },
  watch: {
    "$route.query": function() {
      this.$nuxt.refresh()
    },
  },
  data() {
    return {
      hidden: false,
      list: [],
      page: 1,
      size: 15,
      isNoMoreData: false,
      totalPage: 0
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.first-screen{
  background-image: url('../static/images/index-bg.jpg');
}

.article-item{
  max-height: 360px;
}

.blogname{
  box-shadow: inset 0 0 0 200px rgb(255 255 255 / 5%);
  backdrop-filter: blur(4px);
}
</style>
