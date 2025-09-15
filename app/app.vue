<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

useSeoMeta({
  title: () =>
    locale.value === 'ja'
      ? '高邦クリエイティブ'
      : locale.value === 'en'
        ? 'Gaobang Creative'
        : '高邦創意 GAOBANG',

  description: () =>
    locale.value === 'ja'
      ? '高邦クリエイティブは企画展やテーマイベントを専門とし、アニメIPとの融合を得意としています。IPの魅力とテーマイベントを掛け合わせ、倍増する楽しさと魅力を創り出します。'
      : locale.value === 'en'
        ? 'Gaobang Creative specializes in planning exhibitions and themed events, excelling at integrating anime IP to combine its charm with cross-industry collaborations, creating doubled joy and attraction.'
        : '高邦創意專注企劃策展、主題活動，擅長結合動漫IP規劃，發揮IP魅力與主題活動的跨界結合，打造加倍的快樂魅力。',

  ogTitle: () =>
    locale.value === 'ja'
      ? '高邦クリエイティブ'
      : locale.value === 'en'
        ? 'Gaobang Creative'
        : '高邦創意 GAOBANG',

  ogDescription: () =>
    locale.value === 'ja'
      ? '高邦クリエイティブは企画展やテーマイベントを専門とし、アニメIPとの融合を得意としています。IPの魅力とテーマイベントを掛け合わせ、倍増する楽しさと魅力を創り出します。'
      : locale.value === 'en'
        ? 'Gaobang Creative specializes in planning exhibitions and themed events, excelling at integrating anime IP to combine its charm with cross-industry collaborations, creating doubled joy and attraction.'
        : '高邦創意專注企劃策展、主題活動，擅長結合動漫IP規劃，發揮IP魅力與主題活動的跨界結合，打造加倍的快樂魅力。',

  ogImage: 'https://gaobang.art/og_for_img.jpg',
  ogImageAlt: () =>
    locale.value === 'ja'
      ? '高邦クリエイティブ'
      : locale.value === 'en'
        ? 'Gaobang Creative'
        : '高邦創意',
  ogUrl: () =>
    locale.value === 'ja'
      ? 'https://gaobang.art/ja'
      : locale.value === 'en'
        ? 'https://gaobang.art/en'
        : 'https://gaobang.art',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtPage />
</template>