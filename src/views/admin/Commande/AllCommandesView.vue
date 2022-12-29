<template>
    <div>
        <table v-if="hebergements" class="w-full">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hebergement in hebergements" :key="hebergement.idhebergement">
                    <td>{{ hebergement.idhebergement }}</td>
                    <td>{{ hebergement.libellehebergement }}</td>
                    <td>{{ hebergement.descriptionhebergement }}</td>
                    <td>
                        <div class="flex gap-3 justify-center">
                            <router-link :to="{ name: 'AdminSejourModif', params: { id: hebergement.idhebergement } }">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Modifier
                                </button>
                            </router-link>
                            <button @click="fakeDelete()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Supprimer
                            </button>                           
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">
                        <router-link to="/admin/hebergement/ajout">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Ajouter un séjour
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tfoot>         
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

const hebergements: any = ref([]);

const submitHandler = () => {
    alert('Mise en promotion en cours...');
    alert('Mise en promotion terminée !');
}

const getHebergements = async () => {
    const response = await apis.getHebergements();
    hebergements.value = response.data.data;
    hebergements.value.sort((a: any, b: any) => a.idhebergement - b.idhebergement);
}

const fakeDelete = () => {
    alert('Suppression en cours...');
    alert('Suppression terminée !');
}

// get hebergement from hebergements array by id
const getSejourById = (id: number) => {
    return hebergements.value.find((hebergement: any) => hebergement.idhebergement === id);
}

onMounted(getHebergements);
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