<script setup lang="ts">
const { locale } = useI18n()

useSeoMeta(() => {
  if (locale.value === 'ja') {
    return {
      title: '高邦クリエイティブ GAOBANG',
      description: '高邦クリエイティブは企画展やテーマイベントを専門とし、アニメIPとの融合を得意としています。IPの魅力とテーマイベントを掛け合わせ、倍増する楽しさと魅力を創り出します。',
      ogTitle: '高邦クリエイティブ GAOBANG',
      ogDescription: '高邦クリエイティブは企画展やテーマイベントを専門とし、アニメIPとの融合を得意としています。IPの魅力とテーマイベントを掛け合わせ、倍増する楽しさと魅力を創り出します。',
      ogImage: 'https://gaobang.art/og_for_img.jpg',
      ogImageAlt: '高邦クリエイティブ',
      ogUrl: 'https://gaobang.art/ja',
      ogType: 'website',
      twitterCard: 'summary_large_image'
    }
  }

  if (locale.value === 'en') {
    return {
      title: 'Gaobang Creative GAOBANG',
      description: 'Gaobang Creative specializes in planning exhibitions and themed events, excelling at integrating anime IP to combine its charm with cross-industry collaborations, creating doubled joy and attraction.',
      ogTitle: 'Gaobang Creative GAOBANG',
      ogDescription: 'Gaobang Creative specializes in planning exhibitions and themed events, excelling at integrating anime IP to combine its charm with cross-industry collaborations, creating doubled joy and attraction.',
      ogImage: 'https://gaobang.art/og_for_img.jpg',
      ogImageAlt: 'Gaobang Creative',
      ogUrl: 'https://gaobang.art/en',
      ogType: 'website',
      twitterCard: 'summary_large_image'
    }
  }

  // 預設 zh-tw
  return {
    title: '高邦創意 GAOBANG',
    description: '高邦創意專注企劃策展、主題活動，擅長結合動漫IP規劃，發揮IP魅力與主題活動的跨界結合，打造加倍的快樂魅力。',
    ogTitle: '高邦創意 GAOBANG',
    ogDescription: '高邦創意專注企劃策展、主題活動，擅長結合動漫IP規劃，發揮IP魅力與主題活動的跨界結合，打造加倍的快樂魅力。',
    ogImage: 'https://gaobang.art/og_for_img.jpg',
    ogImageAlt: '高邦創意',
    ogUrl: 'https://gaobang.art',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  }
})
</script>
<template>
  <NuxtPage />
</template>