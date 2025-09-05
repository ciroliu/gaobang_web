<template>
    <section 
    id="about-us"
    class="bg-white w-full h-full xl:h-screen flex justify-center items-center">
        <div class="max-w-[75%] w-full">
            <ul class="font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[48px] text-gradient-4-colors mb-10 mt-20 xl:mt-0">
                <li>Creativity</li>
                <li>Happiness</li>
            </ul>
            
            <div 
            ref="container"
            class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-10">
            <div class="w-[250px] h-[250px] rounded-full bg-custom-purple flex justify-center items-center text-white text-center">
                <ul>
                <li>IP多元企劃</li>
                <li class="text-[32px] font-bold mt-4">IP企劃活動</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">政府單位活動、</li>
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
                <li class="text-[12px]">企劃執行顧問，</li>
                <li class="text-[12px]">協助品牌方案</li>
                </ul>
            </div>
            <div class="w-[250px] h-[250px] rounded-full bg-custom-orange flex justify-center items-center text-white text-center">
                <ul>
                <li>行銷活動策畫</li>
                <li class="text-[32px] font-bold mt-4">行銷策畫</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">線上下IP行銷操作及執行</li>
                </ul>
            </div>
            <div class="w-[250px] h-[250px] rounded-full bg-custom-yellow flex justify-center items-center text-white text-center">
                <ul>
                <li>周商/FRP</li>
                <li class="text-[32px] font-bold mt-4">周邊商品</li>
                <li class="flex justify-center items-center">
                    <hr class="w-[100px] h-[1px] bg-white mb-4">
                </li>
                <li class="text-[12px]">IP周邊商品開發、</li>
                <li class="text-[12px]">製作販售等</li>
                </ul>
            </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);

const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
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
</script>