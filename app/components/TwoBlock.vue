<template>
    <div class="relative bg-white">
      <div class="xall-colors">
        <div class="xcolor color-y fixed left-8 -bottom-[140px] w-[300px] h-[300px] blur-[100px] z-10"></div>
        <div class="xcolor color-o fixed right-8 -bottom-[140px] w-[300px] h-[300px] blur-[100px] z-10"></div>
        <div class="xcolor color-p fixed left-72 -bottom-[140px] w-[300px] h-[300px] blur-[100px] z-10"></div>
      </div>
    <section 
    id="about-us"
    class="w-full h-full xl:h-screen flex justify-center items-center">

        <div class="max-w-[75%] w-full z-10 pb-20">
            <ul class="font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[48px] text-gradient-4-colors mb-10 mt-20 xl:mt-0">
                <li>Creativity</li>
                <li>Happiness</li>
            </ul>
            
            <div 
            ref="container"
            class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-10">
            <div class="w-[250px] h-[250px] rounded-full bg-custom-purple flex justify-center items-center text-white text-center">
                <ul>
                <li>IP統籌合作</li>
                <li class="text-[32px] font-bold mt-4">聯名企劃</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">政府大型活動</li>
                <li class="text-[12px]">品牌聯名等</li>
                </ul>
            </div>
            <div class="w-[250px] h-[250px] rounded-full bg-custom-red flex justify-center items-center text-white text-center">
                <ul>
                <li>IP活動執行</li>
                <li class="text-[32px] font-bold mt-4">執行顧問</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">企劃執行顧問</li>
                <li class="text-[12px]">品牌方案建置</li>
                </ul>
            </div>
            <div class="w-[250px] h-[250px] rounded-full bg-custom-orange flex justify-center items-center text-white text-center">
                <ul>
                <li>IP行銷統籌</li>
                <li class="text-[32px] font-bold mt-4">行銷策畫</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">線上&線下行銷</li>
                <li class="text-[12px]">公關及社群操作</li>
                </ul>
            </div>
            <div class="w-[250px] h-[250px] rounded-full bg-custom-yellow flex justify-center items-center text-white text-center">
                <ul>
                <li>IP周邊商品</li>
                <li class="text-[32px] font-bold mt-4">開發製作</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">周邊商品販售</li>
                <li class="text-[12px]">開發設計及製作</li>
                </ul>
            </div>
            </div>

        </div>
    </section>
    <section 
    id="projects"
    class="w-full h-full xl:h-screen flex justify-center items-center">

        <div class="w-full flex flex-col justify-center items-start z-10">
            <ul class="w-full font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[48px] text-gradient-4-colors mt-40 xl:mt-20 mb-10 ml-[13%]">
                <li>What We Did</li>
            </ul>
            
            <div class="w-full flex flex-col xl:flex-row justify-center items-start mb-20">
                <div class="w-full xl:w-1/5 ml-[13%]">
                    <ul class="px-0 xl:px-10 mb-10">
                        <li class="mb-6 text-[32px] font-bold text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular whitespace-nowrap">過往精選案例</li>
                        <li class="hidden xl:flex text-[14px] text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">高邦創意擁有豐富的展覽策劃經驗，從企劃撰寫到活動落地，我們已成功主辦多場大型動漫IP展覽及協助政府大型活動。</li>
                        <li class="flex xl:hidden text-[14px] text-[#606060] tracking-[1.5px] font-GenJyuuGothicRegular">高邦創意擁有豐富的展覽策劃經驗，<br>從企劃撰寫到活動落地，我們已成功<br>主辦多場大型動漫IP展覽及協助政府大型活動。</li>
                    </ul>
                </div>

                <div class="w-full xl:w-4/5 flex flex-col xl:flex-row justify-center items-center 2xl:pl-[7%]">
                  <!-- -->
                  <div class="hidden xl:flex relative">

                      <div
                        ref="scroller"
                        class="relative w-full"
                      >
                        <div class="flex flex-row gap-14 sm:gap-10 xl:gap-6 whitespace-nowrap h-[60vh] xl:h-auto items-center">

                          <div
                            class="snap-center min-w-[95%] sm:min-w-[60%] md:min-w-[50%] xl:min-w-0 h-full flex justify-center items-center cursor-pointer"
                            @click="openModal1"
                          >
                            <img src="/slider-1.webp" class="h-full w-auto object-contain" loading="lazy" />
                          </div>

                          <div
                            class="snap-center min-w-[95%] sm:min-w-[60%] md:min-w-[50%] xl:min-w-0 h-full flex justify-center items-center cursor-pointer"
                            @click="openModal2"
                          >
                            <img src="/slider-2.webp" class="h-full w-auto object-contain" loading="lazy" />
                          </div>

                          <div
                            class="snap-center min-w-[95%] sm:min-w-[60%] md:min-w-[50%] xl:min-w-0 h-full flex justify-center items-center"
                          >
                            <div class="relative flex justify-center items-center h-full w-full pr-20 sm:pr-0">
                              <img src="/slider-3.webp" class="h-full w-auto object-contain" loading="lazy"/>
                              <ul class="absolute text-center 3xl:text-left px-8">
                                <li class="text-white tracking-[1.5px] text-[24px] font-GenJyuuGothicBold">
                                  MORE …
                                </li>
                                <li class="mt-6 text-white text-[10px] 3xl:text-[12px] tracking-[1.5px] font-GenJyuuGothicRegular">
                                  因保密協議無法公開，協助<br />多項國際IP推動大型/政府活動
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- <a
                        v-show="canLeft"
                        @click="scrollLeft"
                        class="absolute left-4 top-1/2 -translate-y-1/2
                              opacity-0 group-hover:opacity-100 transition
                              bg-black/60 hover:bg-black/80 text-white
                              rounded-full w-10 h-10 flex items-center justify-center
                              backdrop-blur pointer-events-auto cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </a>

                      <a
                        v-show="canRight"
                        @click="scrollRight"
                        class="absolute right-4 top-1/2 -translate-y-1/2
                              opacity-0 group-hover:opacity-100 transition
                              bg-black/60 hover:bg-black/80 text-white
                              rounded-full w-10 h-10 flex items-center justify-center
                              backdrop-blur pointer-events-auto cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a> -->
                  </div>

                  <div class="flex xl:hidden flex-col justify-center items-center gap-10 px-10">
                            <div class="cursor-pointer" @click="openModal1">
                              <img src="/slider-1.webp" loading="lazy">
                            </div>
                            <div class="cursor-pointer" @click="openModal2">
                              <img src="/slider-2.webp" loading="lazy">
                            </div>
                            <div class="relative flex justify-center items-center bg-gradient-to-r from-[#ED0081] via-[#F13630] via-[#EE783B] to-[#FFC500] h-[400px] max-w-[440px] w-full rounded-[30px]">
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
                  <!-- -->

                </div>

            </div>
        </div>
    </section>
    </div>

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
          <span class="bg-[#242870] text-white text-[12px] rounded-xl px-6 py-1 font-GenJyuuGothicRegular">2019/07/05 – 2019/09/22</span>
        </div>
        <div class="w-full flex flex-col xl:flex-row justify-center items-start gap-6 px-2 pb-10">
          <div class="w-full xl:w-1/3">
            <h2 class="text-[24px] font-bold mb-10 font-GenJyuuGothicRegular">2019 航海王動畫20週年紀念特展</h2>
            <p class="text-gray-700 text-[12px] mb-4 font-GenJyuuGothicRegular">海內外超過百則媒體報導，吸引超過10萬名海賊迷朝聖！主辦於台灣台北「松山文創園區4、5號」倉庫，展期為期近三個月長。</p>
            <p class="text-gray-700 text-[12px] font-GenJyuuGothicRegular">首次結合「五感體驗」，以知覺、視覺、聽覺、觸覺及味覺做完美結合，首度展場加入輕食區，超越以往展覽規模，24隻大型公仔現身，其中更有 Big Mom 425公分高讓粉絲驚嘆不已，更為台灣首次曝光 ！展期導入 AR 互動及電子集章活動，讓粉絲能夠在回味劇情，還能留下紀念。</p>
          </div>
          <div class="w-full xl:w-2/3">
              <div v-if="!isImageLoaded1" class="skeleton-loader"></div>
              <img 
                :class="{ 'image-hidden': !isImageLoaded1, 'image-visible': isImageLoaded1 }"
                src="/whatdid.webp" 
                class="w-full" 
                @load="isImageLoaded1 = true" 
                loading="lazy"
              />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</Teleport>
<Teleport to="body">
  <Transition name="modal-transition">
    <div
      v-if="isOpen2"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[101]"
      @click.self="closeModal2"
    >
      <div 
        class="bg-white rounded-[48px] p-6 max-w-[768px] w-full shadow-xl relative mx-10"
      >
        <button
          class="absolute top-4 right-6 text-black text-2xl cursor-pointer"
          @click="closeModal2">
          ✕
        </button>

        <div class="mt-6 mb-4">
          <span class="bg-[#242870] text-white text-[12px] rounded-xl px-6 py-1 font-GenJyuuGothicRegular">2019/04/27 – 2019/04/28</span>
        </div>
        <div class="w-full flex flex-col xl:flex-row justify-center items-start gap-6 px-2 pb-10">
          <div class="w-full xl:w-1/3">
            <h2 class="text-[24px] font-bold mb-10 font-GenJyuuGothicRegular">ONE PIECE SPORT</h2>
            <p class="text-gray-700 text-[12px] mb-4 font-GenJyuuGothicRegular">ONE PIECE SPORT 活動主軸以「 運動賽事 」作為主體，並於賽事之中，導入航海王冒險劇情，使參賽者能夠享受賽事及故事的連結。</p>
            <p class="text-gray-700 text-[12px] font-GenJyuuGothicRegular">首場於台灣屏東展開，最靠近大海的主題活動，連結「海洋」與「運動」，並與國立海洋生物博物館合作，以「全⺠皆能參與」運動會概念， 串連夏波帝諸島故事背景，結合慢跑、泡泡關卡及一百米滑⽔水道。</p>
          </div>
          <div class="w-full xl:w-2/3">
              <div v-if="!isImageLoaded2" class="skeleton-loader"></div>
              <img 
                :class="{ 'image-hidden': !isImageLoaded2, 'image-visible': isImageLoaded2 }"
                src="/ONE-PIECE-SPORT.webp" 
                class="w-full" 
                @load="isImageLoaded2 = true" 
                loading="lazy"
              />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</Teleport>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const { $gsap, $ScrollTrigger } = useNuxtApp();

const isImageLoaded1 = ref(false);
const isImageLoaded2 = ref(false);
const container = ref(null);
const isOpen1 = ref(false);
const isOpen2 = ref(false);

function openModal1() {
  isOpen1.value = true;
}

function closeModal1() {
  isOpen1.value = false;
}

function openModal2() {
  isOpen2.value = true;
}

function closeModal2() {
  isOpen2.value = false;
}

// const scroller = ref(null)
// const canLeft = ref(false)
// const canRight = ref(false)

// const update = () => {
//   const el = scroller.value
//   if (!el) return
//   canLeft.value = el.scrollLeft > 0
//   canRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
// }

// const scrollLeft = () => {
//   const el = scroller.value
//   if (!el) return
//   el.scrollBy({ left: -el.clientWidth * 0.8, behavior: 'smooth' })
// }

// const scrollRight = () => {
//   const el = scroller.value
//   if (!el) return
//   el.scrollBy({ left: el.clientWidth * 0.8, behavior: 'smooth' })
// }

// let ro

onMounted(() => {
  // update()
  // scroller.value?.addEventListener('scroll', update, { passive: true })
  // window.addEventListener('resize', update)
  // ro = new ResizeObserver(update)
  // ro.observe(scroller.value)

  $ScrollTrigger.matchMedia({
    "(min-width: 368px) and (max-width: 479px)": () => {

    },
    "(min-width: 480px)": () => {
        if (container.value) {
            $gsap.from(container.value.children, {
                // 使用 .children 來選取所有子元素
                x: 400, // 從右邊 400px 的位置開始
                opacity: 0, // 初始透明度為 0
                duration: 1, // 動畫持續時間為 1 秒
                stagger: 0.5, // 每個元素間隔 0.2 秒依序出現
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.value, // 設定觸發的元素
                    start: 'top 80%', // 當元素頂部到達視窗 80% 的位置時觸發
                    toggleActions: 'play none none none', // 只在進入時播放一次
                },
            });
        }
    },
  })
})

// onBeforeUnmount(() => {
//   scroller.value?.removeEventListener('scroll', update)
//   window.removeEventListener('resize', update)
//   ro?.disconnect()
// })
const isImageLoaded = ref(false);
</script>

<style scoped>
.image-container {
  position: relative;
}

.skeleton-loader {
  background-color: #e2e2e2;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

.image-hidden {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.image-visible {
  opacity: 1;
}
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