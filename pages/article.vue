<template>
  <div class="flex items-center flex-col pt-8 pb-32">
    <div class="max-w-screen-lg w-full">
      <h1 class="text-3xl py-3">{{article.title}}</h1>
      <div class="text-sm text-gray-500 py-3">{{$dayjs(Number(article.create_at)).format('YYYY-MM-DD')}}</div>
      <div class="max-w-screen-lg w-full pt-3">
        <client-only>
          <mavon-editor
          :toolbars="mdoption"
          :editable="false"
          :subfield="false"
          :boxShadow="false"
          codeStyle="github-gist"
          defaultOpen="preview"
          previewBackground="#ffffff"
          :toolbarsFlag="false"
          v-model="article.content"
          :ishljs="true"/>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { getById } from '~/api/article'
export default {
  async asyncData({ $axios, query }) {
    if(query?.id) {
      const data = await getById($axios, query.id)
      return {
        article: data.data
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