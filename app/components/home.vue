<template>
    <section 
    id="first-section"
    ref="bg_one"
    class="relative bg-gradient-to-t from-[#ED0081] to-[#F13630] w-full h-screen flex flex-col justify-center items-center z-20 overflow-hidden">
      <div class="all-colors">
            <div class="color color-orange absolute left-8 bottom-8 w-[600px] h-[600px] blur-[180px]"></div>
            <div class="color color-pink absolute right-8 -bottom-32 w-[600px] h-[600px] blur-[180px]"></div>
            <div class="color color-orange absolute right-8 bottom-10 w-[800px] h-[800px] blur-[180px]"></div>
            <div class="color color-pink absolute left-[8px] lg:left-[450px] top-2 w-[600px] h-[600px] blur-[180px]"></div>
      </div>
            <img 
            ref="logo"
            alt="高邦創意 GAOBANG"
            src="/logo.png" 
            class="logo z-40">
            <h5 
            ref="logotxt"
            class="fixed flex justify-center items-center mt-[12rem] sm:mt-60 text-[1.5rem] sm:text-2xl md:text-[1.7rem] md:leading-10 text-white font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] z-[101]" 
            style="text-indent: 0em;">GAO BANG CREATIVITY</h5>
            <span 
            ref="lineone"
            class="absolute left-[50%] divideline mt-[65vh] sm:mt-[580px] lg:mt-[500px] h-[60px] z-40"></span>

        <div
        ref="copyright"
        class="fixed bottom-5 w-full flex flex-col justify-center items-center z-10">
            <div 
            class="flex flex-col justify-center items-center">
            <div 
            class="text-white text-[10px] font-GenJyuuGothicRegular">Copyright © {{ currentYear }} GAO BANG CREATIVITY All Rights Reserved.</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const currentYear = computed(() => new Date().getFullYear());
const logo = ref<HTMLElement | null>(null);
const logotxt = ref<HTMLElement | null>(null);
const copyright = ref<HTMLElement | null>(null);
const bg_one = ref<HTMLElement | null>(null);

const { $gsap, $ScrollTrigger } = useNuxtApp();
let gsapContext: ReturnType<typeof $gsap.context> | null = null
let loadHandler: (() => void) | null = null

onMounted(() => {
  const img = logo.value as HTMLImageElement
  const txt = logotxt.value
  const copy = copyright.value
  const bg = bg_one.value


  if (!img || !txt || !copy || !bg) return

  const startGsap = () => {
    gsapContext = $gsap.context(() => {
      $ScrollTrigger.matchMedia({
        "(min-width: 368px) and (max-width: 479px)": () => {
          $gsap.from(img, { y: 500, opacity: 0, scale: 0, duration: 0.75 })
          $gsap.to(img, {
            scrollTrigger: {
              trigger: '#first-section',
              start: 'top -80',
              end: '7300px',
              toggleClass: { className: 'mb-logo-to', targets: img }
            },
            opacity: 1,
            scale: 1
          })

          $gsap.from(txt, { y: 500, opacity: 0, scale: 0, delay: 1, duration: 0.5 })
          $gsap.to(txt, {
            scrollTrigger: {
              trigger: '#first-section',
              start: 'top -10',
              end: '7300px',
              toggleClass: { className: 'logotxt-to', targets: txt }
            },
            opacity: 1,
            scale: 1
          })

          $gsap.to(copy, {
            scrollTrigger: {
              trigger: bg,
              start: 'bottom bottom',
              end: 'bottom top',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: -0,
            duration: 0.5
          })
        },

        '(min-width: 480px)': () => {
          $gsap.from(img, { y: 2000, opacity: 0, scale: 0, duration: 0.75 })
          $gsap.to(img, {
            scrollTrigger: {
              start: 'top -80',
              end: 'bottom top',
              toggleClass: { className: 'logo-to', targets: img }
            },
            opacity: 1,
            scale: 1
          })

          $gsap.from(txt, { y: 2000, opacity: 0, scale: 0, delay: 1, duration: 0.5 })
          $gsap.to(txt, {
            scrollTrigger: {
              start: 'top -10',
              end: 'bottom top',
              toggleClass: { className: 'logotxt-to', targets: txt }
            },
            scale: 1
          })

          $gsap.to(copy, {
            scrollTrigger: {
              trigger: bg,
              start: 'bottom bottom',
              end: 'bottom top',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: -0,
            duration: 0.5
          })
        }
      })
    }, bg)
  }

  // 等待圖片載入完成才執行動畫
  if (img.complete) {
    startGsap()
  } else {
    loadHandler = startGsap
    img.addEventListener('load', loadHandler, { once: true })
  }
})

onBeforeUnmount(() => {
  if (logo.value && loadHandler) {
    logo.value.removeEventListener('load', loadHandler)
  }
  gsapContext?.revert()
  gsapContext = null
  loadHandler = null
})
</script>
