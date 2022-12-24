<template>
    <div v-if="ready">
        <h1 class="text-2xl mb-6 text-center font-bold text-gray-900 dark:text-white">Modification du séjour n°{{ sejour.idsejour }}</h1>
        <form>
            <div class="mb-6">
                <label for="titre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                <input v-model="form.titre" type="text" id="titre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="sejour.titresejour" required>
            </div>  
            <p for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo du séjour</p>
            <div class="flex items-center justify-center w-full mb-6">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquer ici pour charger une image</span> ou glisser déposer dans la zone</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
            <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea v-model="form.description" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="sejour.descriptionsejour"></textarea>
            </div>    
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        {{ sejour }}
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import apis from '../../api';
import { useRoute } from 'vue-router';

const route = useRoute();
const sejour: any = ref(null);

const form: any = ref({
    titre: '',
    description: '',
    iddestination: '',
    idtheme: '',
    photosejour: '',
    prixsejour: '',
    nbjour: '',
    nbnuit: '',
    libelletemps: '',
});
const ready = ref(false);

const getSejour = async () => {
    const id = route.params.id;
    const response = await apis.getSejourById(id);
    sejour.value = response.data.data;

    form.value.titre = sejour.value.titresejour;
    form.value.description = sejour.value.descriptionsejour;
    form.value.iddestination = sejour.value.iddestination;
    form.value.idtheme = sejour.value.idtheme;
    form.value.prixsejour = sejour.value.prixsejour;
    form.value.nbjour = sejour.value.nbjour;
    form.value.nbnuit = sejour.value.nbnuit;
    form.value.libelletemps = sejour.value.libelletemps;

    ready.value = true;
}

onMounted(() => {
    getSejour();
});

</script>

<style scoped>

</style>