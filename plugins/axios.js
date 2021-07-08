export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
  // 请求返回拦截，把数据返回到页面之前做些什么...
  $axios.interceptors.response.use((response) => {
    return response?.data || response
  }, function (error) {
    return Promise.reject(error);
  });
}