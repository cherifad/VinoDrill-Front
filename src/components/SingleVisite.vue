<template>

    <div class="bg-slate-800 p-7 shadow-xl rounded-md">
        <div class="grid grid-cols-3">
            <div class=" col-span-2">            
                <h1 class="text-2xl font-bold mb-2">{{ libellevisite }}</h1>
                <p class=" text-lg">{{ descriptionvisite }}</p>
            </div>
            <div class=" items-center justify-center">
                <p>Horaire : {{ horairevisite.substring(0,5) }}h</p>
                <p v-if="typevisite" class=" text-lg">Visite : {{ typevisite.libelletypevisite }}</p>
            </div>
        </div>
        <a href="https://google.fr" target="_blank" class="bg-slate-400 text-white p-2 block mt-2 w-fit rounded-md shadow-md hover:bg-slate-600">En savoir plus</a>
    </div> 

</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

const edit = ref(false);

const props = defineProps<{
    idvisite: number;
    idtypevisite: number;
    idpartenaire: number;
    libellevisite: string;
    descriptionvisite: string;
    horairevisite: string;
}>(); 

const typevisite: any = ref(null);

onMounted(async () => {
    
    axios.get('/api/typevisite/' + props.idtypevisite)
    .then((response) => {
        typevisite.value = response.data['data'];
    })
    .catch((error) => {
        console.log(error);
    });
});


</script>

<style scoped>

</style>