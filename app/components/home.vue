<template>
    <section 
    ref="bg_one"
    class="w-full h-screen flex flex-col justify-center items-center">
            <img 
            ref="logo"
            alt="高邦創意 GAOBANG"
            src="/logo.png" 
            class="logo z-40"
            loading="lazy">
            <h5 
            ref="logotxt"
            class="fixed flex justify-center items-center mt-[12rem] sm:mt-60 text-[1.5rem] sm:text-2xl md:text-[1.7rem] md:leading-10 text-white font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] z-40" 
            style="text-indent: 0em;">GAO BANG CREATIVITY</h5>
            <span 
            ref="lineone"
            class="absolute left-[50%] divideline mt-[65vh] sm:mt-[580px] lg:mt-[500px] h-[60px] z-40"></span>

        <div
        ref="copyright"
        class="fixed bottom-5 w-full flex flex-col justify-center items-center">
            <div 
            class="flex flex-col justify-center items-center">
            <a 
            class="text-white text-[10px] font-GenJyuuGothicRegular" 
            href="mailto:pkbaby0707@gmail.com">Copyright © {{ currentYear }} GAO BANG CREATIVITY All Rights Reserved 2021</a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const currentYear = computed(() => new Date().getFullYear());
const logo = ref<HTMLElement | null>(null);
const logotxt = ref<HTMLElement | null>(null);
const copyright = ref<HTMLElement | null>(null);
const bg_one = ref<HTMLElement | null>(null);

const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  $ScrollTrigger.matchMedia({
    "(min-width: 368px) and (max-width: 479px)": () => {
      // logo 動畫
      $gsap.from(logo.value, {
        y: 4000,
        opacity: 0,
        scale: 0,
        duration: 0.75,
      })
      $gsap.to(logo.value, {
        scrollTrigger: {
          trigger: logo.value,
          start: "top -80",
          end: "bottom top",
          toggleClass: {
            className: 'logo-to',
            targets: logo.value
          },
        },
        opacity: 1,
        scale: 1
      })

      // logotxt 動畫
      $gsap.from(logotxt.value, {
        y: 2000,
        opacity: 0,
        scale: 0,
        delay: 1,
        duration: 0.5,
      })
      $gsap.to(logotxt.value, {
        scrollTrigger: {
          trigger: logotxt.value,
          start: "top -10",
          end: "bottom top",
          toggleClass: {
            className: 'logotxt-to',
            targets: logotxt.value
          },
        },
        scale: 1,
      })
    },
    "(min-width: 480px)": () => {
          //
        $gsap.from(logo.value, {
            y: 4000,
            opacity: 0,
            scale: 0,
            duration: 0.75,
        });
          $gsap.to(logo.value, {
           scrollTrigger: {
            start: "top -80",
            end: "bottom top", 
            toggleClass: {
              className: 'logo-to', 
              targets: logo.value
            },
           },
           opacity: 1,
           scale: 1
          });
          //
          $gsap.from(logotxt.value, {
            y: 2000,
            opacity: 0,
            scale: 0,
            delay: 1,
            duration: 0.5,
          });
          $gsap.to(logotxt.value, {
           scrollTrigger: {
            start: "top -10",
            end: "bottom top",
            toggleClass: {
              className: 'logotxt-to', 
              targets: logotxt.value
            },

           },
           scale: 1,
          });
          // copyright 淡出效果
          $gsap.to(copyright.value, {
            scrollTrigger: {
              trigger: bg_one.value,   // 用 bg_one 當觸發點
              start: "bottom bottom",  // 當 bg_one 的底部碰到畫面底部
              end: "bottom top",       // 當 bg_one 的底部完全離開畫面
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: -0,
            duration: 0.5,
          })
    },
  })
})
</script>