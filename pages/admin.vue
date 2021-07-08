<template>
  <div class="h-screen overflow-y-scroll">
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import { checkLogin } from '~/api/login'
export default {
  layout: 'admin',
  async asyncData({ $axios, redirect }) {
    const { data:{ isLogined } } = await checkLogin($axios)
    if (!isLogined) redirect(302, '/login')
  },
}
</script>

<style>

</style>