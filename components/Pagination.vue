<template>
  <div>
    <div class="flex items-center">
      <div
      v-for="item in totalPage"
      :key="item"
      class="px-3 py-1 mx-1 text-white rounded-md bg-pink-300 cursor-pointer"
      :class="{'bg-pink-600': item == value }"
      @click="$router.push({ query: { page: item }})">{{item}}</div>
      <div class="pl-2">共{{totalPage}}页</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: [Number, String],
      require: true
    },
    value: {
      type: [Number, String],
      require: true,
    }
  }
}
</script>

<style>

</style>