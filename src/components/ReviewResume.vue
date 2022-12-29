<template>
    <div class="flex flex-col items-center">
        <!-- make a rating component -->
        <div class="flex flex-col gap-4 box rounded-lg text-white p-5">
            <h1 class=" font-bold text-5xl">Avis client</h1>
            <div class="flex gap-2 items-end">
                <h1 class=" font-bold text-7xl">{{ ratingaverage }}/5</h1>
                <div class="flex gap-1 items-center text-2xl">                    
                    {{ ratingcount }} avis
                </div>
            </div>
            <div class="flex items-center gap-2 text-xl" v-for="i in 5">
                <!-- rating bars -->
                {{ i }}
                <div class="flex-1 h-4 bg-gray-200 rounded-md">
                    <div class="h-4 rounded-md" :style="{ width: (ratingcountarray[i - 1] / ratingcount) * 100 + '%', backgroundColor: ratingcolorsarray[i - 1] }"></div>
                </div>
                <span>{{ ratingcountarray[i - 1] }}</span>
            </div>
        </div>
        <!-- button to view all reviews -->
        <a href="#avis" id="more" class="flex items-center cursor-pointer gap-2 text-xl cur text-white mt-4 border-b-2 hover:-translate-y-1">
            <span>Voir tous les avis</span>
            <ion-icon id="all" name="arrow-down"></ion-icon>
        </a>
    </div>
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue';
// color array for the rating bars from red to green
const ratingcolorsarray = ['#ff0000', '#ff4d00', '#ff9900', '#ffff00', '#00ff00'];
const props = defineProps<{
    ratingcount: number;
    ratingcountarray: number[];
    ratingaverage: number;
    }>();
</script>   

<style scoped>
* {
    transition: all 0.3s ease;
}
.box {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1pt 4pt, rgba(0, 0, 0, 0.08) 0px 2pt 8pt;
    background-color: #bfa5a3;
    color: black;
}

/* float animation */
@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
}

/* bottom arrow animation */
#more:hover #all {
    animation: float .5s ease-in-out;
}

</style>