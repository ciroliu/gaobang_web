<template>
    <section 
    id="projects"
    class="bg-white w-full h-screen flex justify-center items-center">
        <div class="max-w-[75%] w-full flex flex-col justify-center items-start">
            <ul class="w-full font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[48px] text-gradient-4-colors mb-10">
                <li>What We Did</li>
            </ul>
            
            <div class="w-full flex flex-col xl:flex-row justify-center items-start">
                <div class="w-full xl:w-[35%]">
                    <ul class="px-0 xl:px-10 mb-10">
                        <li class="mb-6 text-[32px] font-bold text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">過往精選案例</li>
                        <li class="text-[14px] text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">高邦創意擁有豐富的展覽策劃經驗，從企劃撰寫到活動落地，我們已成功主辦多場大型動漫IP 展覽。</li>
                    </ul>
                </div>

                <div class="w-full xl:w-[120%] flex flex-row justify-center items-center">
                  <!-- -->
<div class="relative w-full overflow-x-auto snap-x hide-scrollbar xl:overflow-x-visible xl:whitespace-nowrap">
    <div class="flex flex-row gap-6 whitespace-nowrap xl:flex-nowrap">
        <div class="snap-start inline-block cursor-pointer w-full xl:w-auto" @click="openModal1">
            <img src="/slider-1.png" class="w-full" />
        </div>
        
        <div class="snap-start inline-block w-full xl:w-auto">
            <img src="/slider-2.png" class="w-full" />
        </div>
        
        <div class="snap-start inline-block w-full xl:w-auto">
            <div class="relative flex justify-center items-center">
                <img src="/slider-3.png" class="w-full h-full object-cover" />
                <ul class="absolute text-left px-8">
                    <li class="text-white tracking-[1.5px] text-[24px] font-GenJyuuGothicBold">MORE …</li>
                    <li class="mt-6 text-white text-[12px] tracking-[1.5px] font-GenJyuuGothicRegular">因保密協議無法公開，協助<br>多項國際IP推動大型/政府活動</li>
                </ul>
            </div>
        </div>
    </div>
</div>
                  <!-- -->

                </div>
                <!-- <div class="w-full xl:w-[120%] flex flex-row gap-4 justify-center items-center">

                  <div class="snap-x flex flex-row gap-6">

                    <div class="snap-start " @click="openModal1">
                      <img src="/slider-1.png" class="w-full" />
                    </div>
                    <div class="snap-start">
                      <img src="/slider-2.png" class="w-full" />
                    </div>
                    <div class="snap-start">
                      <div class="relative flex justify-center items-center">
                        <img src="/slider-3.png" class="w-full h-full object-cover" />
                        <ul class="absolute text-center px-8">
                          <li class="text-white">More …</li>
                          <li class="mt-6 text-white">
                            因保密協議無法公開，協助多項國際IP推動大型/政府活動
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>

                </div> -->

            </div>
        </div>
    </section>

  <Teleport to="body">
    <div
      v-if="isOpen1"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[101]"
      @click.self="closeModal1"
    >

      <div class="bg-white rounded-[48px] p-6 max-w-[768px] w-full shadow-xl relative mx-10">
        <button
          class="absolute top-4 right-6 text-black text-2xl cursor-pointer"
          @click="closeModal1">
          ✕
        </button>

          <div class="mt-6 mb-4">
            <span class="bg-[#242870] text-white text-[12px] rounded-xl px-6 py-1">2019/07/05 – 2019/09/22</span>
          </div>
          <div class="w-full flex flex-col xl:flex-row justify-center items-start gap-6 px-2 pb-10">
            <div class="w-full xl:w-1/3">
              <h2 class="text-[24px] font-bold mb-10">2019 航海王動畫20週年紀念特展</h2>
              <p class="text-gray-700 text-[12px] mb-4">海內外超過百則媒體報導，吸引超過10萬名海賊迷朝聖！主辦於台灣台北「松山文創園區4、5號」倉庫，展期為期近三個月長。</p>
              <p class="text-gray-700 text-[12px]">首次結合「五感體驗」，以知覺、視覺、聽覺、觸覺及味覺做完美結合，首度展場加入輕食區，超越以往展覽規模，24隻大型公仔現身，其中更有 Big Mom 425公分高讓粉絲驚嘆不已，更為台灣首次曝光 ！展期導入 AR 互動及電子集章活動，讓粉絲能夠在回味劇情，還能留下紀念。</p>
            </div>
            <div class="w-full xl:w-2/3">
              <img src="/whatdid.png" class="w-full">
            </div>
          </div>
      </div>
    </div>
  </Teleport>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Autoplay, Navigation]

const isOpen1 = ref(false);


function openModal1() {
  isOpen1.value = true;
}

function closeModal1() {
  isOpen1.value = false;
}

</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 500px; /* 可依需求調整高度 */
}

button {
  font-size: 2rem;
  cursor: pointer;
  background: linear-gradient(
    to right,
    #ed0081 0%,
    #f13630 25%,
    #ee783b 50%,
    #ffc500 75%,
    #ffc500 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  border: none;
  padding: 0;
  display: inline-block;
}


</style>