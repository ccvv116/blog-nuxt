/* eslint-disable  */
/*
 ** 只在生产模式的客户端中使用
 */
if (process.client && process.env.NODE_ENV === 'production') {
    /*
   ** Google 统计分析脚本
   */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LQEDXT16SC');
}

export default ({ app: { router }, store }) => {

}
