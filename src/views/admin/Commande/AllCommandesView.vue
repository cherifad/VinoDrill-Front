<template>
    <div>
        <table v-if="commandes" class="w-full">
            <thead>
                <tr>
                    <th @click="sortById" class="select-none cursor-pointer">N°</th>
                    <th @click="sortByDate" class="select-none cursor-pointer">Date</th>
                    <th @click="sortByPrice" class="select-none cursor-pointer">Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="commande in commandes" :key="commande.refcommande">
                    <td>{{ commande.refcommande }}</td>
                    <td>{{ commande.datecommande }}</td>
                    <td>{{ commande.prixcommande }}€</td>
                    <td>
                        <div class="flex gap-3 justify-center">
                            <router-link :to="{ name: 'AdminCommandeSingle', params: { id: commande.refcommande } }">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Modifier
                                </button>
                            </router-link>
                            <button @click="fakeDelete()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Supprimer
                            </button>  
                            <button @click="generatePDF" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                PDF
                            </button>           
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">
                        <router-link to="/admin/commande/ajout">
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
import generatePDF from '../../../utils/jsPDF';

const commandes: any = ref([]);

const submitHandler = () => {
    alert('Mise en promotion en cours...');
    alert('Mise en promotion terminée !');
}

const getCommandes = async () => {
    const response = await apis.getCommandes();
    commandes.value = response.data.data;
    commandes.value.sort((a: any, b: any) => a.refcommande - b.refcommande);
}

const fakeDelete = () => {
    alert('Suppression en cours...');
    alert('Suppression terminée !');
}

// get commande from commandes array by id
const getSejourById = (id: number) => {
    return commandes.value.find((commande: any) => commande.refcommande === id);
}

onMounted(getCommandes);

const sortByPrice = () => {
    if (commandes.value[0].prixcommande > commandes.value[commandes.value.length - 1].prixcommande) {
        commandes.value.reverse();
        return;
    } 
    commandes.value.sort((a: any, b: any) => a.prixcommande - b.prixcommande);
}

const sortById = () => {
    if (commandes.value[0].refcommande < commandes.value[commandes.value.length - 1].refcommande) {
        commandes.value.reverse();
        return;
    } 
    commandes.value.sort((a: any, b: any) => a.refcommande - b.refcommande);
}

const sortByDate = () => {
    if (commandes.value[0].datecommande > commandes.value[commandes.value.length - 1].datecommande) {
        commandes.value.reverse();
        return;
    } 
    commandes.value.sort((a: any, b: any) => a.datecommande - b.datecommande);
}
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