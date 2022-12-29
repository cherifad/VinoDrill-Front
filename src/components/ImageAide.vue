<template>
    <div v-viewer="viewerOptions" class="flex images justify-center my-6">
        <img :src="image" alt="" class="rounded-lg shadow-xl p-3 shadow-black w-3/6 h-auto">    
    </div>        
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const viewerOptions = {
    url: 'data-original',
    navbar: false,
    title: false,
    toolbar: {
        zoomIn: 4,
        zoomOut: 4,
        oneToOne: 4,
        reset: 4,
        prev: 0,
        play: {
            show: 0,
            size: 'large',
        },
        next: 0,
        rotateLeft: 4,
        rotateRight: 4,
        flipHorizontal: 4,
        flipVertical: 4,
    },
};

const props = defineProps<{
    image: string;
    }>();

</script>
<style scoped>
</style>