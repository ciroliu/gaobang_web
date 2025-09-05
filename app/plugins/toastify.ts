// plugins/toastify.ts

// 匯入套件
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
// 匯入必要的 CSS 樣式
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  // 將 vue3-toastify 註冊到 Vue 實例上
  nuxtApp.vueApp.use(Vue3Toastify, {
    // 在這裡設定你的全域選項
    autoClose: 3000,
    theme: 'auto',
    position: 'top-center', // 你可以設定一個全域的預設位置
    // 你可以設定其他的全域選項，例如：
    // pauseOnFocusLoss: false,
    // transition: 'Vue-slide',
  } as ToastContainerOptions);
});