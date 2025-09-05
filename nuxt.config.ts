// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  plugins: [
    '~/plugins/toastify.ts'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/i18n',
  ],
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json',
        name: '繁體中文'
      },
      {
        code: 'ja',
        iso: 'ja-JP', 
        file: 'ja.json',
        name: '日本語'
      }
    ],
    defaultLocale: 'zh-tw'
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },
    provide: true
  }
})