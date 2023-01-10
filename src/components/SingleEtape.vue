<template>
    <div class="bg-slate-700 p-7 shadow-xl rounded-md lg:grid flex gap-3 flex-col lg:grid-cols-3">
        <div class="col-span-2">            
            <h1 class="text-2xl font-bold mb-2">{{ titre }}</h1>
            <p class=" text-lg">{{ description }}</p>
        </div>
        <div class="flex items-center justify-center">
            <img class="h-full w-auto rounded-lg shadow-lg" :src="img" :alt="titre + 'image'">
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    titre: string;
    description: string;
    img: string;
    }>();

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
}

</script>

<style scoped>

</style>