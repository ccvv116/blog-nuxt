<template>
  <div class="h-100">
    <div class="w-3/5 py-14 px-20">
      <ArticleItem
      v-for="item in list"
      :key="item.id"
      :item="item"
      :handleable="true"
      @edit="edit"
      @remove="remove"
      ></ArticleItem>
    </div>
    <div class="flex justify-center pb-24">
      <Pagination :totalPage="totalPage" v-model="page" />
    </div>
    
  </div>
</template>

<script>
import { list as getArticleList, remove } from '~/api/article'
import Pagination from '~/components/Pagination.vue'
export default {
  components: { Pagination },
  data() {
    return {
      list: [],
      isNoMoreData: false,
      page: 1,
      totalPage: 0
    }
  },
  async asyncData({ $axios, query }) {
    try {
      const data = await getArticleList($axios, { page: query.page || 1, size: 15 })
      return {
        list: data.data,
        isNoMoreData: data.meta.last_page == data.meta.current_page,
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
  methods: {
    edit(id) {
      this.$router.push(`article-create?id=${id}`)
    },
    async remove(id) {
      const data = await remove(this.$axios, id)
      if(data && data.success) {
        alert('删除成功')
        this.$nuxt.refresh()
      }
    },
  },
}
</script>

<style>

</style>