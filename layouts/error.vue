<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">頁面不存在</h1>
    <h1 v-else>發生了一個錯誤</h1>
    <p>{{ error.message }}</p>
    <nuxt-link to="/">回到首頁</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // 可選，如果想使用特定的佈局
};
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}
</style>