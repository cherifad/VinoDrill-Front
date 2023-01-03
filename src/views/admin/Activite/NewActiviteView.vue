<script setup lang="ts">
import { onMounted, ref } from 'vue';
import apis from '../../../api';
import Tooltip from '../../../components/Tooltip.vue';


const societes: any = ref(null);
const form = ref({
    libelleactivite: '',
    descriptionactivite: '',
    idpartenaire: '',
    ruerdv: '',
    cprdv: '',
    villerdv: '',
    horaireactivite: '',
})

onMounted(() => {
    apis.getSociete().then((res) => {
        societes.value = res.data.data;
    });
});

const addNewActivite = (event) => {
    event.preventDefault();
    apis.newActivite(form.value).then((res) => {
        console.log(res);
    });
}

</script>

<template>

    <div v-if="societes">
        <form @submit="addNewActivite">
            <br>
            <div class="flex">
                <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Détails sur l'activité</label>
                <Tooltip text="Ci-dessous, ajoutez un nom et qu'une description à votre activité, choisissez également la société concerné."/>
            </div>

            <div class="mb-6">
                <div class="flex">
                    <label for="libelleact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de l'activité</label>
                   
                </div>
                <input v-model="form.libelleactivite" type="text" id="libelleact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ballade en poney bourré au Bordeaux (cuvée 1982)" required>
            </div>            
            <div class="mb-6">
                <label for="descriptionact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea v-model="form.descriptionactivite" id="descriptionact" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Essayez de tenir plus de 10 minutes sur ce cheval"></textarea>
            </div> 
            <div class="mb-6">
                
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Societe</label>
                <select v-model="form.idpartenaire" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="societe in societes" :selected="societe.idpartenaire == 21 ? true : false" :value="societe.idpartenaire">{{societe.nompartenaire}} - {{ societe.villepartenaire }} ({{ societe.emailpartenaire }})</option>
                </select>
            </div> 
            <div class="flex">
                <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Détails sur le RDV</label>
                <Tooltip text="Ci-dessous, ajoutez un lieu et une horaire de rendez-vous."/>
            </div>
            
            <div class="flex gap-6 mb-6">
                 
                <div class="flex-1">
                    <label for="villeact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                    <input v-model="form.villerdv" type="villeact" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Annecy" required>
                </div>
                <div class="flex-1">
                    <label for="ruerdv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rue</label>
                    <input v-model="form.ruerdv" type="text" id="ruerdv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rue de L'arc en ciel" required>
                </div>
                <div class="flex-1">
                    <label for="cprdv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
                    <input v-model="form.cprdv" type="text" id="cprdv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="74100" required>
                </div>
                <div class="flex-1">
                    <label for="horaireactivite" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horaire</label>
                    <input v-model="form.horaireactivite" type="time" id="horaireactivite" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>

</template>