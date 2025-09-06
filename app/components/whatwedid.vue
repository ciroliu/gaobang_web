<template>
    <section 
    id="projects"
    class="bg-white w-full h-screen flex justify-center items-center">
        <div class="w-full flex flex-col justify-center items-start">
            <ul class="w-full font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[48px] text-gradient-4-colors mb-10 ml-[13%]">
                <li>What We Did</li>
            </ul>
            
            <div class="w-full flex flex-col xl:flex-row justify-center items-start">
                <div class="w-full xl:w-1/5 ml-[13%]">
                    <ul class="px-0 xl:px-10 mb-10">
                        <li class="mb-6 text-[32px] font-bold text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">過往精選案例</li>
                        <li class="hidden xl:flex text-[14px] text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">高邦創意擁有豐富的展覽策劃經驗，從企劃撰寫到活動落地，我們已成功主辦多場大型動漫IP 展覽。</li>
                        <li class="flex xl:hidden text-[14px] text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">高邦創意擁有豐富的展覽策劃經驗，<br>從企劃撰寫到活動落地，我們已成功<br>主辦多場大型動漫IP 展覽。</li>
                    </ul>
                </div>

                <div class="w-full xl:w-4/5 flex flex-row justify-center items-center pl-[13%]">
                  <!-- -->
                  <div class="relative group">
                      <!-- 可橫向滾動的容器 -->
                      <div
                        ref="scroller"
                        class="relative w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth xl:overflow-x-visible"
                      >
                        <div class="flex flex-row gap-14 sm:gap-10 xl:gap-6 whitespace-nowrap h-[60vh] xl:h-auto items-center">

                          <!-- 卡片 1 -->
                          <div
                            class="snap-center min-w-[95%] sm:min-w-[60%] md:min-w-[50%] xl:min-w-0 h-full flex justify-center items-center cursor-pointer"
                            @click="openModal1"
                          >
                            <img src="/slider-1.webp" class="h-full w-auto object-contain" />
                          </div>

                          <!-- 卡片 2 -->
                          <div
                            class="snap-center min-w-[95%] sm:min-w-[60%] md:min-w-[50%] xl:min-w-0 h-full flex justify-center items-center"
                          >
                            <img src="/slider-2.webp" class="h-full w-auto object-contain" />
                          </div>

                          <!-- 卡片 3 -->
                          <div
                            class="snap-center min-w-[95%] sm:min-w-[60%] md:min-w-[50%] xl:min-w-0 h-full flex justify-center items-center"
                          >
                            <div class="relative flex justify-center items-center h-full w-full pr-20 sm:pr-0">
                              <img src="/slider-3.webp" class="h-full w-auto object-contain" />
                              <ul class="absolute text-left px-8">
                                <li class="text-white tracking-[1.5px] text-[24px] font-GenJyuuGothicBold">
                                  MORE …
                                </li>
                                <li class="mt-6 text-white text-[12px] tracking-[1.5px] font-GenJyuuGothicRegular">
                                  因保密協議無法公開，協助<br />多項國際IP推動大型/政府活動
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- 左側箭頭 -->
                      <a
                        v-show="canLeft"
                        @click="scrollLeft"
                        class="absolute left-4 top-1/2 -translate-y-1/2
                              opacity-0 group-hover:opacity-100 transition
                              bg-black/60 hover:bg-black/80 text-white
                              rounded-full w-10 h-10 flex items-center justify-center
                              backdrop-blur pointer-events-auto cursor-pointer"
                      >
                        &lt;
                    </a>

                      <!-- 右側箭頭 -->
                      <a
                        v-show="canRight"
                        @click="scrollRight"
                        class="absolute right-4 top-1/2 -translate-y-1/2
                              opacity-0 group-hover:opacity-100 transition
                              bg-black/60 hover:bg-black/80 text-white
                              rounded-full w-10 h-10 flex items-center justify-center
                              backdrop-blur pointer-events-auto cursor-pointer"
                      >
                        &gt;
                    </a>
                    </div>

                  <!-- -->

                </div>

            </div>
        </div>
    </section>

<Teleport to="body">
  <Transition name="modal-transition">
    <div
      v-if="isOpen1"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[101]"
      @click.self="closeModal1"
    >
      <div 
        class="bg-white rounded-[48px] p-6 max-w-[768px] w-full shadow-xl relative mx-10"
      >
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
            <img src="/whatdid.webp" class="w-full">
          </div>
        </div>
      </div>
    </div>
  </Transition>
</Teleport>

</template>

<script setup lang="ts">
const isOpen1 = ref(false);

function openModal1() {
  isOpen1.value = true;
}

function closeModal1() {
  isOpen1.value = false;
}

const scroller = ref(null)
const canLeft = ref(false)
const canRight = ref(false)

const update = () => {
  const el = scroller.value
  if (!el) return
  canLeft.value = el.scrollLeft > 0
  canRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

const scrollLeft = () => {
  const el = scroller.value
  if (!el) return
  el.scrollBy({ left: -el.clientWidth * 0.8, behavior: 'smooth' })
}

const scrollRight = () => {
  const el = scroller.value
  if (!el) return
  el.scrollBy({ left: el.clientWidth * 0.8, behavior: 'smooth' })
}

let ro

onMounted(() => {
  update()
  scroller.value?.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  ro = new ResizeObserver(update)
  ro.observe(scroller.value)
})

onBeforeUnmount(() => {
  scroller.value?.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
  ro?.disconnect()
})
</script>

<style scoped>
/* 隱藏卷軸 */
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
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

/* 定義彈窗的進入和離開過渡效果 */
/* 只有彈窗區塊要有動畫 */
.modal-transition-enter-from > div,
.modal-transition-leave-to > div {
  opacity: 0;
  transform: scale(0.95);
}

/* 將過渡效果只應用到彈窗區塊上 */
.modal-transition-enter-active > div,
.modal-transition-leave-active > div {
  transition: all 0.3s ease-out;
}
</style>