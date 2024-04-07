// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'VIVOTEK Brand Boost 2024',
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'VIVOTEK Brand Boost 2024' },
        { name: 'keywords', content: 'VIVOTEK ,BrandBoost, 晶睿通訊, 晶睿' },
        { hid: 'og:title', property: 'og:title', content: 'VIVOTEK Brand Boost 2024' },
        { hid: 'og:description', name: 'og:description', content: 'VIVOTEK Brand Boost 2024' },
        { name: 'format-detection', content: 'telephone=no' },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: '@/static/image/pc/main/shareImg.png',
        // },
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/css/common.scss',
  ],
  build: {
      transpile: ['vuetify'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/vue-swiper.js", ssr: false },
    // { src: '~/plugins/index/bannerAnime', mode: 'client' },
    // { src: '~/plugins/swiper-bundle.min', mode: 'client' },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@use "@/assets/css/setting.scss" as *;`,
        },
      },
    },
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
})
