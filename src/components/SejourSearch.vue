<template>
    <div class="flex items-center p-2 border-2 border-rose rounded-md mt-2 w-300">
        <input v-model="search" @input="filterData"
            class="w-full border-none bg-transparent outline-none" type="text" :placeholder="placeholder">
        <ion-icon name="search" class="text-rose"></ion-icon>
    </div>

    <!-- search results -->
    <h1 v-if="toDisplayData" class="mb-2">Séjour<span v-if="toDisplayData.length > 1">s</span> :</h1>
    <div v-if="toDisplayData && toDisplayData.length > 0" class="mt-2 flex flex-col gap-2" v-auto-animate>
        <router-link v-for="result in toDisplayData" :key="result.idsejour" class="grid grid-cols-3 gap-2 hover:-translate-y-1"
            :to="{ name: 'SingleSejour', params: { id: result.idsejour, slug: slugify(result.titresejour) } }">
            <img class="rounded-lg" :src="result.photosejour" :alt="result.titresejour + ' image'">
            <div class="flex-1 col-span-2">
                <h3 class="text-base italic">{{ result.titresejour }}</h3>
                <p class="text-sm font-bold">{{ result.prixsejour }}€/pers</p>
            </div>
        </router-link>
    </div>
    <div v-else class="mt-2">
        <div v-if="toDisplayData" class="text-center text-sm italic">Aucun résultat</div>
    </div>


    <!-- destinations -->
    <h1 v-if="toDisplayDestination" class="mb-2">Destination<span v-if="toDisplayDestination.length > 1">s</span> :</h1>
    <div v-if="toDisplayDestination && toDisplayDestination.length > 0" class="mt-2">
        <ul v-if="destinations" class="flex gap-2 flex-wrap" v-auto-animate>
            <li v-for="destination in toDisplayDestination" :key="destination.iddestination" @click="addToSelectedIdDestination(destination.iddestination, destination.libelledestination)" class="cursor-pointer select-none p-2 bg-slate-500 rounded-lg hover:-translate-y-1">{{ destination.libelledestination }}</li>
        </ul>
    </div>
    <div v-else class="mt-2">
        <div v-if="toDisplayDestination" class="text-center text-sm italic">Aucun résultat</div>
    </div>
    <ul v-if="selectedDestination.length > 0" class="flex gap-2 flex-wrap" v-auto-animate>
        <li v-for="destination in selectedDestination" :key="destination.iddestination" @click="addToSelectedDestination(destination.libelleDestination, destination.iddestination)" class="cursor-pointer select-none p-2 bg-green-500 rounded-lg hover:-translate-y-1">{{ destination }}</li>
    </ul>

</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

const emit = defineEmits(['filterDestination']);

const props = defineProps<{
    data: any;
    placeholder: string;
}>()

const toDisplayData: any = ref(null);
const toDisplayDestination: any = ref(null);
const search = ref("");
const destinations: any = ref(null);

// selected destination
const selectedIdDestination: any = ref([]);
const selectedDestination: any = ref([]);

// filtered data
const filterDestination: any = ref('');

const checkIfStringNotEmpty = (string: string) => {
    return string !== null && string !== undefined && string !== "";
}

onMounted(() => {
    axios.get("/api/destination").then((res) => {
        destinations.value = res.data['data'];
    });
});

function filterData() {
    if (search.value && search.value.length > 0) {
        toDisplayData.value = props.data.filter((item) => {
            return item.titresejour.toLowerCase().includes(search.value.toLowerCase());
        });
        toDisplayDestination.value = destinations.value.filter((item) => {
            return item.libelledestination.toLowerCase().includes(search.value.toLowerCase());
        });
        // limit data to display to 5
        toDisplayData.value = toDisplayData.value.slice(0, 5);
    } else {
        toDisplayData.value = null;
        toDisplayDestination.value = null;
    }
}

function addToSelectedIdDestination(idDestination: any, libelleDestination: any) {
    if (selectedIdDestination.value.includes(idDestination)) {
        selectedIdDestination.value = selectedIdDestination.value.filter((item: any) => {
            return item !== idDestination;
        });
    } else {
        selectedIdDestination.value.push(idDestination);
    }

    selectedIdDestination.value.length > 0 ? filterDestination.value = '&destination=' + selectedIdDestination.value.join(',') : filterDestination.value = '&destination=null';

    console.log(filterDestination.value);

    emit('filterDestination', filterDestination.value);
}

function addToSelectedDestination(libelleDestination: any, idDestination: any) {
    if (selectedDestination.value.includes(libelleDestination)) {
        selectedDestination.value = selectedDestination.value.filter((item: any) => {
            return item !== libelleDestination;
        });
    } else {
        selectedDestination.value.push(libelleDestination);
    }
}

function slugify(string: string) {
    return string
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') // replace & with 'and'
        .replace(/[\s\W-]+/g, '-'); // replace spaces, non-word characters and dashes with a single dash (-)
}

</script>

<style scoped>
* {
    transition: all 0.2s ease-in-out;
}
</style>