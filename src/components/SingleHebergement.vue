<template>
    <div class="bg-slate-400 p-7 shadow-xl rounded-md">
        <div class="lg:grid flex flex-col gap-3 lg:grid-cols-3">
            <div class=" col-span-2">            
                <h1 class="text-2xl font-bold mb-2">{{ titre }}</h1>
                <p class=" text-lg">{{ description }}</p>
            </div>
            <div class="flex items-center justify-center">
                <img class="h-full w-auto rounded-lg shadow-lg" :src="img" :alt="titre + ' image'">
            </div>
        </div>
        <div class=" flex ">
            <a href="https://google.fr" target="_blank" class="bg-slate-700 text-white p-2 block mt-2 w-fit rounded-md shadow-md hover:bg-slate-600">En savoir plus</a>
            <Tooltip text="En cliquant sur le bouton, vous allez être redirigé vers le site internet de l'hébergement"/>
        </div>
    </div> 
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue';

defineProps<{
    titre: string;
    description: string;
    img: string;
    }>();


</script>

<style scoped>

</style>