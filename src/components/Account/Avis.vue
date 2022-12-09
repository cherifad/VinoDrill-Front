<template>
    <div class="">
        <h1 class="text-2xl font-bold">Mes avis</h1>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';


function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

const props = defineProps<{

}>();

</script>

<style>
input {
    color: white;
}
</style>