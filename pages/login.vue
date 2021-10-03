<template>
  <div class="flex pt-48 justify-center items-center flex-col">
    <input
      v-model="username"
      type="text"
      class="w-72 h-11 outline-none border border-blue-600 rounded-md px-3"
      placeholder="username"
    />
    <input
      v-model="password"
      type="password"
      class="w-72 h-11 outline-none border border-blue-600 rounded-md px-3 mt-3"
      placeholder="password"
    />
    <div
      class="
        w-72
        h-11
        outline-none
        rounded-md
        px-3
        flex
        items-center
        justify-center
        mt-3
        bg-blue-800
        text-white
        font-bold
        hover:bg-green-500
        cursor-pointer
      "
      @click="submit"
    >
      Login in
    </div>
  </div>
</template>

<script>
import { login } from '~/api/login'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      const { username, password } = this
      if (!username || !password) {
        alert('请输入账号密码')
        return
      }
      try {
        const data = await login(this.$axios, {
          username,
          password,
        })
        if (data?.success) {
          alert('登录成功')
          this.$router.push('/admin/article-create')
          return
        }
        alert(data.error)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
