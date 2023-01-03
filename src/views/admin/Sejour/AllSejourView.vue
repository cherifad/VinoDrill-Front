<template>
    <div>
        <table v-if="sejours" class="w-full">
            <thead >
                <tr>
                    <th>N°</th>
                    <th>Titre</th>
                    <th>Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sejour in sejours" :key="sejour.idsejour">
                    <td>{{ sejour.idsejour }}</td>
                    <td>{{ sejour.titresejour }}</td>
                    <td>{{ sejour.prixsejour }}€</td>
                    <td>
                        <div class="flex gap-3 justify-center">
                            <router-link :to="{ name: 'AdminSejourModif', params: { id: sejour.idsejour } }">
                                <div class="flex">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Modifier
                                    </button>
                                    <Tooltip>Cliquez pour modifier le séjour existant pour plus d'info : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin/aide">Aide</RouterLink></span></Tooltip>
                                </div>
                            </router-link>
                            <div class="flex">
                                <button @click="fakeDelete()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Supprimer
                                </button>
                                <Tooltip>Cliquez pour supprimer le séjour existant pour plus d'info : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin/aide">Aide</RouterLink></span></Tooltip>
                            </div>
                            <router-link :to="{ name: 'AdminSejourAvis', params: { id: sejour.idsejour } }">
                                <div class="flex">
                                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Voir les avis
                                    </button>
                                    <Tooltip>Cliquez pour tous les avis du existant pour plus d'info : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin/aide">Aide</RouterLink></span></Tooltip>
                                </div>
                            </router-link>
                            <button @click="selectedIdPromo = sejour.idsejour, showPromoPopup = true, oldPrice = getSejourById(selectedIdPromo).prixsejour" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Mettre les promotions
                            </button>
                            <Tooltip class="text-left">Cliquez pour mettre en promotion ce séjour.</Tooltip>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">
                        <router-link to="/admin/sejour/ajout">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Ajouter un séjour
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tfoot>  
            <Popup :show="showPromoPopup" @update:show="showPromoPopup = $event" @submit="setPromotion(selectedIdPromo)" :title="'Mettre en promotion le n°' + selectedIdPromo" >
                <div class="flex flex-col gap-3">
                    <label for="promo" class="block text-sm font-medium text-gray-900 dark:text-white">Prix actuel : {{ oldPrice }}€</label>
                    <label for="promo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix après promotion de {{ promoPercent }}% : {{ oldPrice - (oldPrice * promoPercent / 100) }}€</label>
                    <input @input="checkPromoPercent" type="number" min="0" max="100" id="promo" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="promoPercent" />
                    <div v-if="promoPercentError" v-auto-animate class="relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
                        <span class="absolute inset-y-0 left-0 flex items-center ml-4">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </span>
                        <p class="ml-6">Le pourcentage doit être entre 1 et 100</p>
                    </div>
                </div>
            </Popup>          
        </table>

        <div v-else>
            <LoadComponent />
        </div>       
    </div>
</template>

<script setup lang="ts">
import apis from '../../../api';
import { onMounted, ref } from 'vue';
import LoadComponent from '../../../components/LoadComponent.vue';
import Popup from '../../../components/Popup.vue';
import Tooltip from '../../../components/Tooltip.vue';
import axios from 'axios';

const sejours: any = ref([]);

// promo popup
const selectedIdPromo: any = ref(9999);
const showPromoPopup: any = ref(false);
const oldPrice: any = ref(0);
const promoPercent: any = ref(1);
const promoPercentError: any = ref(false);
const promoPercentRules = {
    required: true,
    min: 1,
    max: 100
}

const checkPromoPercent = () => {
    if (promoPercent.value === '' && promoPercentRules.required) {
        promoPercent.value = 1;
    }
    else if (promoPercent.value < promoPercentRules.min || promoPercent.value > promoPercentRules.max) {
        promoPercentError.value = true;
    } else {
        promoPercentError.value = false;
    }
}

const setPromotion = async (idsejour: number) => {
    const temp_sejour = getSejourById(idsejour);
    temp_sejour.prixsejour = oldPrice.value - (oldPrice.value * promoPercent.value / 100);
    axios.put(`/api/sejour/${idsejour}`, {
        ...temp_sejour
    })
}

const submitHandler = () => {
    if(promoPercentError.value) {
        alert('Le pourcentage doit être entre 1 et 100');
        return;
    }
    alert('Mise en promotion en cours...');
    alert('Mise en promotion terminée !');
}

const getSejours = async () => {
    const response = await apis.getSejours();
    sejours.value = response.data.data;
    sejours.value.sort((a: any, b: any) => a.idsejour - b.idsejour);
}

const fakeDelete = () => {
    alert('Suppression en cours...');
    alert('Suppression terminée !');
}

// get sejour from sejours array by id
const getSejourById = (id: number) => {
    return sejours.value.find((sejour: any) => sejour.idsejour === id);
}

onMounted(getSejours);
</script>

<style scoped>
* {
    transition: all 0.3s ease;
}

td {
    padding: .5rem;
    border: 2px solid #ccc;
}

th {
    padding: .5rem;
    border: 2px solid #ccc;
    background-color: #ccc;
    color: black;
    font-weight: bold;
}
</style>