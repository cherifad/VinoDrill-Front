<template>
    <div class="w-full">
        <div class="w-full flex gap-3 mb-3 items-center" v-auto-animate>
            <div class="relative border-2 border-rose p-5 rounded-lg flex flex-col gap-3"> 
                <div v-if="estcadeau">

                    <p id="passenger" class="text-2xl font-bold">Offert</p>
                    <div class="flex mb-2">
                        <div class=" w-10 border mt-2"></div>
                    </div>
                </div>
                
                <div class="flex gap-5 justify-between">
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Référence : {{ refcommande }}</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Date début</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="font-bold">{{ datedebutreservation }}</p>
                    </div>
                </div>       
                
                <div class="flex gap-20 ">
                    <p id="passenger" class="text-2xl font-semibold text-center">Adulte(s)<br>{{ nbadulte }}</p>
                    <p id="passenger" class="text-2xl font-semibold text-center">Enfant(s)<br>{{ nbenfant }}</p>
                    <p id="passenger" class="text-2xl font-semibold text-center">Chambre(s)<br>{{ nbchambre }}</p>
                </div>
                
                <p v-if="sejour" class="text-2xl font-bold">Sejour : {{ sejour.titresejour }}</p>
            </div>
        </div>
        <div @click="addAvis = !addAvis" class="flex mb-6 w-fit cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
            <ion-icon name="pencil"></ion-icon>
            Rédiger un avis
        </div>
        <AddAvis v-if="addAvis" :idsejour="sejour.idsejour" :idclient="idclient"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import AddAvis from '../AddAvis.vue';

const addAvis = ref(false);

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

const props = defineProps<{
    refcommande: any;
    datedebutreservation: any;
    estcadeau: boolean;
    idsejour: number;
    nbadulte: number;
    nbchambre: number;
    nbenfant: number;
    idclient: number;
}>();

const sejour = ref();


onMounted(async () => {
        axios.get('/api/sejour/' + props.idsejour)
            .then((response) => {
                sejour.value = response.data['data'];
                console.log(sejour.value);
            })
            .catch((error) => {
                console.log(error);
            });
});

</script>

<style>
input {
    color: white;
}
</style>