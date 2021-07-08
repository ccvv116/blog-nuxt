<template>
  <div class="flex h-screen">
    <div class="h-100 w-48 bg-gray-800 text-white text-sm">
      <nuxt-link
        to="/"
        class="
          flex
          justify-center
          items-center
          h-10
          cursor-pointer
          hover:bg-red-700
        "
        >回首页</nuxt-link
      >
      <nuxt-link
        :to="{ name: 'admin-article-create' }"
        class="flex justify-center items-center h-10 cursor-pointer"
        :class="{ 'bg-gray-700': $route.name === 'admin-article-create' }"
        >新建文章</nuxt-link
      >
      <nuxt-link
        :to="{ name: 'admin-article-list' }"
        class="flex justify-center items-center h-10 cursor-pointer"
        :class="{ 'bg-gray-700': $route.name === 'admin-article-list' }"
        >文章管理</nuxt-link
      >
    </div>
    <div class="flex-1">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>
