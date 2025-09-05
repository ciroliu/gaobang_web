<template>
  <header class="fixed top-4 w-full z-[100]">
    <div class="relative flex justify-between items-center py-5 px-32">
      <ul
      ref="localeLinks"
      class="hidden xl:flex flex-row gap-[1.5px] text-white font-GenJyuuGothicBold">
        <li
          ref="tw"
          @click.prevent="$i18n.setLocale('zh-tw')"
          class="border-2 rounded-xl py-1 px-2 text-[14px] cursor-pointer transition-colors duration-300"
          :class="{
            'bg-white border-white text-[#242870]': $i18n.locale === 'zh-tw',
            'bg-transparent text-white border-white': $i18n.locale !== 'zh-tw',
          }"
        >
          中
        </li>
        <li
          ref="en"
          @click.prevent="$i18n.setLocale('en')"
          class="border-2 rounded-xl py-1 px-2 text-[14px] cursor-pointer transition-colors duration-300"
          :class="{
            'bg-white text-[#242870] border-white': $i18n.locale === 'en',
            'border-white text-white': $i18n.locale !== 'en',
          }"
        >
          En
        </li>
        <li
          ref="ja"
          @click.prevent="$i18n.setLocale('ja')"
          class="border-2 rounded-xl py-1 px-2 text-[14px] cursor-pointer transition-colors duration-300"
          :class="{
            'bg-white text-[#242870] border-white': $i18n.locale === 'ja',
            'border-white text-white': $i18n.locale !== 'ja',
          }"
        >
          日
        </li>
      </ul>

      <nav
        ref="navLinks"
        class="hidden xl:flex flex-row gap-10 text-white font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px]"
      >
        <a
          href="#about-us"
          @click.prevent="scrollToSection('about-us')"
          class="nav-link"
          :class="{ active: activeSection === 'about-us' }"
        >
          {{ $t('About Us') }}
        </a>
        <a
          href="#projects"
          @click.prevent="scrollToSection('projects')"
          class="nav-link"
          :class="{ active: activeSection === 'projects' }"
        >
          Projects
        </a>
        <a
          href="#partner"
          @click.prevent="scrollToSection('partner')"
          class="nav-link"
          :class="{ active: activeSection === 'partner' }"
        >
          Partner
        </a>
        <a
          href="#contact"
          @click.prevent="scrollToSection('contact')"
          class="nav-link"
          :class="{ active: activeSection === 'contact' }"
        >
          Contact
        </a>
      </nav>
      <!-- menu -->
      <div
        class="absolute xl:hidden top-0 right-4 cursor-pointer"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <!-- -->
      <div
        :class="{
          'translate-y-0 opacity-100': isMobileMenuOpen,
          '-translate-y-full opacity-0': !isMobileMenuOpen,
        }"
        class="xl:hidden fixed top-0 left-0 w-full h-[480px] bg-white transition-transform duration-300 ease-in-out z-[200] flex flex-col items-start justify-center space-y-8"
      >

      <button
      class="absolute top-4 right-6 text-2xl cursor-pointer"
      @click="isMobileMenuOpen = false;">
        ✕
      </button>

        <div class="px-10">
          <img src="/logo.png" class="w-[90px]">
        </div>
        <!-- <ul
          class="flex flex-row gap-[1.5px] text-white font-GenJyuuGothicBold"
        >
          <li
            @click.prevent="$i18n.setLocale('zh-tw'); isMobileMenuOpen = false;"
            class="border-2 rounded-xl py-1 px-2 text-[#242870] text-[14px] cursor-pointer transition-colors duration-300"
            :class="{
              'bg-white text-[#242870] border-white': $i18n.locale === 'zh-tw',
              'border-white text-white': $i18n.locale !== 'zh-tw',
            }"
          >
            中
          </li>
          <li
            @click.prevent="$i18n.setLocale('en'); isMobileMenuOpen = false;"
            class="border-2 rounded-xl py-1 px-2 text-[#242870] text-[14px] cursor-pointer transition-colors duration-300"
            :class="{
              'bg-white text-[#242870] border-white': $i18n.locale === 'en',
              'border-white text-white': $i18n.locale !== 'en',
            }"
          >
            En
          </li>
          <li
            @click.prevent="$i18n.setLocale('ja'); isMobileMenuOpen = false;"
            class="border-2 rounded-xl py-1 px-2 text-[#242870] text-[14px] cursor-pointer transition-colors duration-300"
            :class="{
              'bg-white text-[#242870] border-white': $i18n.locale === 'ja',
              'border-white text-white': $i18n.locale !== 'ja',
            }"
          >
            日
          </li>
        </ul> -->
        <nav
          class="flex flex-col gap-6 text-[#242870] font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] items-start px-10"
        >
          <a
            href="#about-us"
            @click.prevent="scrollToSection('about-us'); isMobileMenuOpen = false;"
            class="nav-link"
          >
            {{ $t('About Us') }}
          </a>
          <a
            href="#projects"
            @click.prevent="scrollToSection('projects'); isMobileMenuOpen = false;"
            class="nav-link"
          >
            Projects
          </a>
          <a
            href="#partner"
            @click.prevent="scrollToSection('partner'); isMobileMenuOpen = false;"
            class="nav-link"
          >
            Partner
          </a>
          <a
            href="#contact"
            @click.prevent="scrollToSection('contact'); isMobileMenuOpen = false;"
            class="nav-link"
          >
            Contact
          </a>
        </nav>

        <ul
        class="flex flex-row gap-[1.5px] font-GenJyuuGothicBold px-10 pb-10">
          <li
            ref="tw"
            @click.prevent="$i18n.setLocale('zh-tw')"
            class="border-2 rounded-xl py-1 px-2 text-[14px] cursor-pointer transition-colors duration-300"
            :class="{
              'bg-[#242870] text-white border-[#242870]': $i18n.locale === 'zh-tw',
              'bg-white text-[#242870] border-[#242870]': $i18n.locale !== 'zh-tw',
            }"
          >
            中
          </li>
          <li
            ref="en"
            @click.prevent="$i18n.setLocale('en')"
            class="border-2 rounded-xl py-1 px-2 text-[14px] cursor-pointer transition-colors duration-300"
            :class="{
              'bg-[#242870] text-white border-[#242870]': $i18n.locale === 'en',
              'bg-white text-[#242870] border-[#242870]': $i18n.locale !== 'en',
            }"
          >
            En
          </li>
          <li
            ref="ja"
            @click.prevent="$i18n.setLocale('ja')"
            class="border-2 rounded-xl py-1 px-2 text-[14px] cursor-pointer transition-colors duration-300"
            :class="{
              'bg-[#242870] text-white border-[#242870]': $i18n.locale === 'ja',
              'bg-white text-[#242870] border-[#242870]': $i18n.locale !== 'ja',
            }"
          >
            日
          </li>
        </ul>

      </div>
    </div>
  </header>

</template>

<script setup>
const { locale } = useI18n();
import { ref, onMounted, onUnmounted } from 'vue';
const { $gsap, $ScrollTrigger } = useNuxtApp();

// 將初始值設定為 null，表示預設沒有 active 的區塊
const activeSection = ref(null);
const navLinks = ref(null);
const zh = ref(null);
const en = ref(null);
const ja = ref(null);
const isMobileMenuOpen = ref(false);
const localeLinks = ref(null);
const isScrolled = ref(false);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const handleScroll = () => {
  const sections = ['about-us', 'projects', 'partner', 'contact'];
  let currentActive = null; // 預設沒有 active 的區塊
  const offset = 100; // 緩衝值，讓偵測更靈敏

  // 檢查滾動條是否在最頂部，如果是，則不設定 active 狀態
  if (window.scrollY === 0) {
    activeSection.value = null;
    return; // 結束函式
  }

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();

      // 判斷區塊的頂部是否進入或通過視窗的頂部
      if (rect.top <= offset && rect.bottom >= offset) {
        currentActive = sectionId;
        break;
      }
    }
  }
  
  activeSection.value = currentActive;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // 在元件掛載時執行一次，確保初始狀態正確
  handleScroll(); 
  // GSAP 動畫
  $ScrollTrigger.matchMedia({
    "(min-width: 368px) and (max-width: 479px)": () => {
      // logo 動畫

    },
    "(min-width: 480px)": () => {
          // nav
          $gsap.to(navLinks.value, {
            color: '#242870', 
            scrollTrigger: {
              trigger: 'body',
              start: 'top -900px',
              end: '+=10',
              scrub: true,
            }
          });
          // lang
          $gsap.to(localeLinks.value.querySelectorAll('li'), {
            color: '#242870',
            borderColor: '#242870',
            scrollTrigger: {
              trigger: 'body',
              start: 'top -900px',
              end: '+=10',
              scrub: true,
            }
          });
    },
  })
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* .scrolled-active {
  background-color: red !important;
} */
.nav-link {
  position: relative;
  /* hover 效果 */
}

/* 偽元素作為漸層底線 */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    #ed0081 0%,
    #f13630 25%,
    #ee783b 50%,
    #ffc500 75%,
    #ffc500 100%
  );
  transition: width 0.3s ease-in-out;
}

/* 鼠標移入或當前頁面時，底線顯示 */
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
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