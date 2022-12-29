<template>
    <div v-if="sejours" class="">
        <div class="grid gap-10 grid-cols-4">
            <div class="bg-#350a06 z-50 border-rose border-2 sticky top-5 text-2xl font-bold rounded-md shadow-sm p-7 h-fit">
                Filtres
                <div>
                    <!-- <Input @filter="(i) => getFilteredData(i)" columnName="rien" :data="libelleDestination" name="Destinations" placeholder="Recherchez ici"/> -->
                    <SejourSearch v-on:filter-destination="(i) => getDestinationFilter(i)"  :data="sejours" placeholder="Destinations, séjour,.."
                        />
                    <SejourFilter :onFilterTheme="(i) => getThemeFilter(i)" :onFilterCatParticipant="(i) => getCatParticipantFilter(i)" />
                </div>
            </div>
            <div class="col-span-3">
                <span class="pl-12 text-2xl fond-bold">{{ sejourcount }} sejour<span v-if="sejourcount > 0">s</span>
                    trouvé<span v-if="sejourcount > 0">s</span></span>
                <div class="" v-auto-animate>
                    <div class="pt-12 grid gap-10 grid-cols-2 justify-center" v-if="!filteredData">
                        <router-link v-for="sejour in sejours" :key="sejour.idsejour" :id="sejour.idsejour"
                            :to="{ name: 'SingleSejour', params: { id: sejour.idsejour, slug: slugify(sejour.titresejour) } }">
                            <SingleCardSejour :key="sejour.idsejour" :title="sejour.titresejour"
                                :description="sejour.descriptionsejour" :nights="sejour.nbnuit" :days="sejour.nbjour"
                                :image="sejour.photosejour" :price="sejour.prixsejour" :id="sejour.idsejour"
                                :libelleTemps="sejour.libelletemps" :notemoyenne="sejour.notemoyenne" />
                        </router-link>
                    </div>
                    <div v-auto-animate class="pt-12 grid gap-10 grid-cols-2 justify-center" v-else-if="sejourcount > 0">
                        <router-link v-for="filter in filteredData" :key="filter.idsejour" :id="filter.idsejour"
                            :to="{ name: 'SingleSejour', params: { id: filter.idsejour, slug: slugify(filter.titresejour) } }">
                            <SingleCardSejour :key="filter.idsejour" :title="filter.titresejour"
                                :description="filter.descriptionsejour" :nights="filter.nbnuit" :days="filter.nbjour"
                                :image="filter.photosejour" :price="filter.prixsejour" :id="filter.idsejour"
                                :libelleTemps="filter.libelletemps" :notemoyenne="filter.notemoyenne" />
                        </router-link>
                    </div>
                     <div v-auto-animate class="pt-12 grid gap-10 grid-cols-2 justify-center" v-else>
                        <h1>Aucun résultat !</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <LoadComponent />
    </div>


</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import axios from 'axios';
import { RouterLink } from "vue-router";
import LoadComponent from '../components/LoadComponent.vue';
import SejourSearch from '../components/SejourSearch.vue';
import SejourFilter from '../components/SejourFilter.vue';

const sejours = ref(null);
const sejourcount = ref(null);
const filteredData = ref(null);

const theme = ref('');
const destination = ref('');
const catParticipant = ref('');

function slugify(string) {
    return string
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') // replace & with 'and'
        .replace(/[\s\W-]+/g, '-'); // replace spaces, non-word characters and dashes with a single dash (-)
}


onMounted(async () => {
    axios.get('/api/sejour')
        .then((response) => {
            sejours.value = response.data['data'].reverse();
            sejourcount.value = response.data['data'].length;
        })
        .catch((error) => {
            console.log(error);
        });
});

const getFilteredData = () => {
    axios.get('/api/sejour?q=t' + theme.value + destination.value + catParticipant.value)
        .then((response) => {
            filteredData.value = response.data['data'];
            console.log(filteredData.value)
            sejourcount.value = Object.keys(filteredData.value).length;
        })
        .catch((error) => {
            console.log(error);
        });
};

const getThemeFilter = (i) => {
    theme.value = i;
    getFilteredData();
}

const getDestinationFilter = (i) => {
    destination.value = i;
    getFilteredData();
}

const getCatParticipantFilter = (i) => {
    catParticipant.value = i;
    getFilteredData();
}
</script>
  
<style scoped>

</style>