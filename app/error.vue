<template>
    <section 
    class="relative bg-gradient-to-t from-[#ED0081] to-[#F13630] w-full h-screen flex flex-col justify-center items-center z-20 overflow-hidden">
      <div class="all-colors">
            <div class="color color-orange absolute left-8 bottom-8 w-[600px] h-[600px] blur-[180px]"></div>
            <div class="color color-pink absolute right-8 -bottom-32 w-[600px] h-[600px] blur-[180px]"></div>
            <div class="color color-orange absolute right-8 bottom-10 w-[800px] h-[800px] blur-[180px]"></div>
            <div class="color color-pink absolute left-[8px] lg:left-[450px] top-2 w-[600px] h-[600px] blur-[180px]"></div>
      </div>
            <div class="fixed top-6 right-6">
              <img 
              class="w-[60px]"
              src="/logo.png" 
              alt="logo">
            </div>
            <img src="/404.svg"
            class="w-[256px]" 
            alt="page not found">
            <h5 
            style="rotate: 5deg;"
            class="text-white font-GenJyuuGothicBold tracking-[1px] text-[128px] z-50">404</h5>
            <p 
            class="z-50 flex justify-center items-center text-[1.5rem] sm:text-2xl md:text-[1.7rem] md:leading-10 text-white font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px]" 
            style="text-indent: 0em;">找不到此頁面</p>
            <p
            class="z-50 flex justify-center items-center text-[1.5rem] sm:text-2xl md:text-[1.7rem] md:leading-10 text-white font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px]" 
            style="text-indent: 0em;">Page Not Found.</p>
            <a 
            href="#" 
            class="border border-2 rounded-[30px] px-6 py-1 text-white font-GenJyuuGothicRegular z-50 mt-6 hover:bg-white hover:text-[#ED0081]"
            @click.prevent="handleError">Go Back</a>
    </section>
</template>



<script setup>
useHead({
  title: '404 - 找不到此頁面',
});

const props = defineProps({
  error: Object,
});

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>
