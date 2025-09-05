<template>
    <div 
    class="relative overflow-hidden">
        <!--  -->
        <div class="all-colors">
            <div class="color color-orange fixed left-8 bottom-8 -z-10 w-[450px] h-[450px] blur-[180px]"></div>
            <div class="color color-yellow fixed right-8 bottom-8 -z-10 w-[450px] h-[450px] blur-[70px]"></div>
            <div class="color color-pink fixed left-[8px] lg:left-[450px] top-2 -z-10 w-[450px] h-[450px] blur-[180px]"></div>
        </div>
        <AppHeader />
        <!--  -->
        <home />
        <!--  -->
        <creativity />
        <!-- -->
        <whatwedid />
        <!-- -->
        <ourpartner />
        <!-- -->
        <contact />
    </div>
</template>

<script setup>
const { locale } = useI18n()
</script>