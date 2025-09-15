// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineOrganization } from 'nuxt-schema-org/schema';
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
    'nuxt-schema-org',
    '@nuxtjs/sitemap'
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
    defaultLocale: 'zh-tw',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    seo: true
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },
    provide: true
  },
  site: { 
  url: 'https://gaobang.art', 
  name: '高邦創意 GAOBANG' 
  }, 
  sitemap: {
    
    hostname: 'https://gaobang.art', // 改成你的網域
    i18n: true, // 啟用 sitemap 多語系支援
    sitemaps: false
    // 如果需要手動指定
    // urls: [
    //   { loc: '/', lang: 'zh' },
    //   { loc: '/en', lang: 'en' },
    //   { loc: '/ja', lang: 'ja' }
    // ]
  },
  schemaOrg: {
    identity: defineOrganization({
      // 告訴搜尋引擎這是什麼類型的組織。你可以選擇多種類型來更精確地描述公司。
      // 'Organization': 基礎組織類型
      // 'CreativeWork': 顯示你的公司專注於創意工作
      'name': '高邦創意 GAOBANG',

      // 你的公司網址，用於確認這是你的官方網站
      'url': 'https://gaobang.art',

      // 公司的 Logo 圖片網址
      'logo': 'https://gaobang.art/logo.png',

      // 公司的簡介
      'description': '高邦創意 GAOBANG 專注於高邦創意企劃策展、主題活動，擅長結合動漫IP規劃。',

      // 聯絡資訊，這對於 Google My Business 和知識面板非常重要
      'contactPoint': {
        '@type': 'ContactPoint',
        'email': 'jeremy@gaobang.art',
        'contactType': 'Customer Service'
      },
    }),
  }
})