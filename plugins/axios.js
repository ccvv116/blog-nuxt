export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
  //请求返回拦截，把数据返回到页面之前做些什么...
  $axios.interceptors.response.use((response) => {
    // //特殊错误处理，状态为10时为登录超时
    // if (response.data.code === 10) {
    //   iView.Message.error("登录已超时，请重新登录");
    //   router.push("/login")
    // //其余错误状态处理    
    // } else if (response.data.code != 0) {
    //   iView.Message.error(response.data.msg)
    // //请求成功
    // } else if(response.data.code === 0){
    //   //将我们请求到的信息返回页面中请求的逻辑
    //   return response;
    // }
  //......
    return response?.data || response

  }, function (error) {
    return Promise.reject(error);
  });
}