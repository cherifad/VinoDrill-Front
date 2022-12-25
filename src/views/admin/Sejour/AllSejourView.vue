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
                            <!-- <router-link :to="{ name: 'AdminSejourAvis', params: { id: sejour.idsejour } }"> -->
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Voir les avis
                                </button>
                            <!-- </router-link> -->
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

const sejours: any = ref([]);

const getSejours = async () => {
    const response = await apis.getSejours();
    sejours.value = response.data.data;
    sejours.value.sort((a: any, b: any) => a.idsejour - b.idsejour);
}

const fakeDelete = () => {
    alert('Suppression en cours...');
    alert('Suppression terminée !');
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