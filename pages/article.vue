<template>
  <div class="flex items-center flex-col pt-8 pb-32">
    <div class="max-w-screen-lg w-full">
      <h1 class="text-3xl py-3">{{ article.title }}</h1>
      <div class="text-sm text-gray-500 py-3">
        {{ $dayjs(Number(article.create_at)).format('YYYY-MM-DD') }}
      </div>
      <div class="max-w-screen-lg w-full pt-3">
        <client-only>
          <mavon-editor
            v-model="article.content"
            :toolbars="mdoption"
            :editable="false"
            :subfield="false"
            :box-shadow="false"
            code-style="github-gist"
            default-open="preview"
            preview-background="#ffffff"
            :toolbars-flag="false"
            :ishljs="true"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { getById } from '~/api/article'
export default {
  async asyncData({ $axios, query }) {
    if (query?.id) {
      const data = await getById($axios, query.id)
      return {
        article: data.data,
      }
    }
  },
  data() {
    return {
      article: {},
      mdoption: {
        preview: false,
        subfield: false,
      },
    }
  },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this?.article?.title || 'Czopo blog 博客',
        },
      ],
    }
  },
}
</script>

<style>
.v-note-wrapper {
  border: 0 !important;
}
.v-show-content {
  padding: 0 !important;
}
</style>
