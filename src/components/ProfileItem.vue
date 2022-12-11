<template>
<div class="flex justify-center px-3 pt-5">
    <div class="p-5 text-2xl cursor-pointer select-none rounded-md ease-linear duration-100 w-full hover:bg-rose font-bold items-center h-fit flex gap-3 border-2 border-rose" :class="selected ? 'bg-rose scale-105': ''">
        <div class="">
             <img :src="image" class="w-12">
        </div>
        <div class="pt-2 font-bold">
             {{title}}
        </div>
        
    </div>
</div>

</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    title: string;
    image: string;
    selected: Boolean;
    }>(); 
</script>

<style scoped>

</style>