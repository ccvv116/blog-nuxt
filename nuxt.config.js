export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Czopo',
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-LQEDXT16SC',
        async: true,
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Czopo blog 博客' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    { src: '~plugins/vue-markdown.js', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dayjs'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: 'http://0.0.0.0:3000', // Used as fallback if no runtime config is provided
    proxy: true,
  },

  proxy: {
    '/api/': 'http://0.0.0.0:3001',
  },
}
