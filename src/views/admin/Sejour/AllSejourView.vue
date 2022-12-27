<template>
    <div>
        <table v-if="sejours" class="w-full">
            <thead>
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
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Modifier
                                </button>
                            </router-link>
                            <button @click="fakeDelete()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Supprimer
                            </button>
                            <router-link :to="{ name: 'AdminSejourAvis', params: { id: sejour.idsejour } }">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Voir les avis
                                </button>
                            </router-link>
                            <button @click="selectedPromo = sejour.idsejour, showPromoPopup = true, newPrice = getSejourById(selectedPromo).prixsejour" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Mettre les promotions
                            </button>
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
            <Popup :show="showPromoPopup" @update:show="showPromoPopup = $event" @submit="submitHandler" :title="'Mettre en promotion le n°' + selectedPromo" >
                <div class="flex flex-col gap-3">
                    <label for="promo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix actuel : {{ getSejourById(selectedPromo).prixsejour }}€</label>
                    <input type="number" id="promo" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="newPrice" />
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
import { slugify } from '../../../utils/functions';
import LoadComponent from '../../../components/LoadComponent.vue';
import Popup from '../../../components/Popup.vue';

const sejours: any = ref([]);
const selectedPromo: any = ref(9999);
const showPromoPopup: any = ref(false);
const newPrice: any = ref(0);

const submitHandler = () => {
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