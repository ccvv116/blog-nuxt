<template>
  <div class="mb-7 relative">
    <div v-if="handleable" class="flex justify-end absolute top-0 right-0">
      <div class="text-blue-500 cursor-pointer" @click="$emit('edit', item.id)">
        编辑
      </div>
      <div
        class="ml-5 text-red-600 cursor-pointer"
        @click="$emit('remove', item.id)"
      >
        删除
      </div>
    </div>
    <nuxt-link
      :to="'/article?id=' + item.id"
      class="text-center text-2xl text-gray-800 cursor-pointer"
      :title="item.title"
      >{{ item.title }}</nuxt-link
    >
    <div v-if="item.quote" class="short-article pt-1 text-sm text-gray-500">
      {{ item.quote
      }}<nuxt-link class="ml-3 text-gray-900" :to="'/article?id=' + item.id"
        >⇨Read More</nuxt-link
      >
    </div>
    <div class="text-right text-gray-500 text-sm pt-2">
      posted @{{ $dayjs(Number(item.create_at)).format('YYYY-MM-DD') }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    handleable: {
      type: Boolean,
    },
  },
}
</script>
