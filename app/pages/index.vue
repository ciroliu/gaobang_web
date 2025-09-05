<template>
    <div 
    class="relative overflow-hidden">
        <!--  -->
        <div class="all-colors">
            <div class="color color-orange fixed left-8 bottom-8 -z-10 w-[600px] h-[600px] blur-[120px]"></div>
            <div class="color color-pink fixed right-8 -bottom-32 -z-10 w-[600px] h-[600px] blur-[120px]"></div>
            <div class="color color-orange fixed right-8 bottom-10 -z-10 w-[800px] h-[800px] blur-[120px]"></div>
            <div class="color color-pink fixed left-[8px] lg:left-[450px] top-2 -z-10 w-[600px] h-[600px] blur-[120px]"></div>
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