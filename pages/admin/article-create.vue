<template>
  <div class="h-full flex flex-col">
    <div class="py-3 flex justify-center">
      <input
        v-model="title"
        class="h-16 w-3/6 text-5xl border-b-2 text-center outline-none"
        type="text"
      />
    </div>
    <div class="flex-1">
      <mavon-editor
        v-model="content"
        class="h-full"
        :toolbars="{}"
        :ishljs="true"
      />
    </div>
    <div class="flex justify-center items-center py-5">
      <div
        class="d px-3 py-2 bg-blue-600 cursor-pointer text-white rounded-md"
        @click="submit"
      >
        提交
      </div>
    </div>
  </div>
</template>

<script>
import { create, update, getById } from '~/api/article'
export default {
  async asyncData({ $axios, query }) {
    if (query?.id) {
      try {
        const { data } = await getById($axios, query.id)
        return {
          mode: 'update',
          title: data.title,
          content: data.content,
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  data() {
    return {
      title: '',
      content: '',
      mode: 'create',
    }
  },

  methods: {
    submit() {
      if (this.mode === 'create') this.createArticle()
      if (this.mode === 'update') this.updateArticle()
    },

    async createArticle() {
      const { title, content } = this
      try {
        const data = await create(this.$axios, {
          title,
          content,
        })
        if (data?.success) {
          alert('提交成功')
          this.$router.push('article-list')
        }
      } catch (error) {
        alert('提交失败')
        console.log(error)
      }
    },

    async updateArticle() {
      const { title, content } = this
      try {
        const data = await update(this.$axios, {
          id: this.$route.query.id,
          title,
          content,
        })
        if (data?.success) {
          alert('修改成功')
          this.$router.push('article-list')
        }
      } catch (error) {
        alert('修改失败')
        console.log(error)
      }
    },
  },
}
</script>
