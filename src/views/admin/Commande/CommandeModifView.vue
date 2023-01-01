<script setup lang="ts">
import apis from '../../../api';
import { onMounted, ref } from 'vue';
import LoadComponent from '../../../components/LoadComponent.vue';
import Popup from '../../../components/Popup.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

const commande: any = ref(null);

const submitHandler = () => {
    alert('Mise en promotion en cours...');
    alert('Mise en promotion terminée !');
}

const getCommande = async () => {
    const response = await apis.getCommandeById(id, true);
    commande.value = response.data.data;
}

const fakeDelete = () => {
    alert('Suppression en cours...');
    alert('Suppression terminée !');
}

// get commande from commandes array by id
const getSejourById = (id: number) => {
    return commande.value.find((commande: any) => commande.refcommande === id);
}

onMounted(getCommande);

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
</script>

<template>
    <div v-if="commande">
        <h1 class="text-3xl mb-6" id="passenger">Commande N°{{ commande.refcommande }} du {{ toReadableDate(commande.datecommande) }}</h1>
        <div class="flex justify-between mb-6 gap-6">            
            <div class="flex-1 p-7 border-2 border-dashed border-rose">
                <h1 class="text-3xl text-center" id="passenger">Client</h1>
                <ul class="mt-6">
                    <li class=" text-lg font-medium">Nom : {{ commande.client.nomclient }}</li>
                    <li class=" text-lg font-medium">Prénom : {{ commande.client.prenomclient }}</li>
                    <li class=" text-lg font-medium">Adresse : {{ commande.client.adresseclient }}</li>
                    <li class=" text-lg font-medium">Code postal : {{commande.client.cpclient }}</li>
                    <li class=" text-lg font-medium">Ville : {{ commande.client.villeclient }}</li>
                    <li class=" text-lg font-medium">Email : {{ commande.client.emailclient }}</li>
                </ul>
            </div>
            <div class="flex-1 p-7 border-2 border-dashed border-rose">
                <h1 class="text-3xl text-center" id="passenger">Commande</h1>
                <ul class="mt-6">
                    <li class="text-lg font-medium">Référence : {{ commande.refcommande }}</li>
                    <li class="text-lg font-medium">Date : {{ toReadableDate(commande.datecommande) }}</li>
                    <li class="text-lg font-medium">Prix : {{ commande.prixcommande }} €</li>
                    <li class="text-lg font-medium">Statut : {{ commande.reservations[0].datedebutreservation > new Date() ? 'Pas encore effectué' : 'Effectué' }}</li>
                    
                </ul>
            </div>
        </div>
        <h1 class="text-3xl mb-6" id="passenger">Réservations</h1>
        <div class="flex-1 p-7 border-2 border-dashed border-rose" v-for="reservation in commande.reservations" :key="reservation.refcommande + reservation.idsejour">
            <h1 class="text-3xl flex items-center text-center" id="passenger">Réservation  
                <svg v-if="reservation.estcadeau" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-3">
                    <path d="M11.25 3v4.046a3 3 0 00-4.277 4.204H1.5v-6A2.25 2.25 0 013.75 3h7.5zM12.75 3v4.011a3 3 0 014.239 4.239H22.5v-6A2.25 2.25 0 0020.25 3h-7.5zM22.5 12.75h-8.983a4.125 4.125 0 004.108 3.75.75.75 0 010 1.5 5.623 5.623 0 01-4.875-2.817V21h7.5a2.25 2.25 0 002.25-2.25v-6zM11.25 21v-5.817A5.623 5.623 0 016.375 18a.75.75 0 010-1.5 4.126 4.126 0 004.108-3.75H1.5v6A2.25 2.25 0 003.75 21h7.5z" />
                    <path d="M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 01-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 012.122-2.12c.517.517.759 1.36.842 2.194zM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0013.72 8.16c-.518.518-.76 1.362-.843 2.194z" />
                </svg>
            </h1>
            <ul class="mt-6">
                <li class="text-lg font-medium">Référence : VINORES-{{ reservation.refcommande + reservation.idsejour }}</li>
                <li class="text-lg font-medium">Date de début : {{ toReadableDate(reservation.datedebutreservation) }}</li>
                <li class="text-lg font-medium">Nombre d'enfants : {{ reservation.nbenfant }}</li>
                <li class="text-lg font-medium">Nombre d'adultes : {{ reservation.nbadulte }}</li>
                <li class="text-lg font-medium">Nombre de chambre : {{ reservation.nbchambre }}</li>
                <li class="text-lg font-medium">Statut : {{ reservation.datedebutreservation > new Date() ? 'Pas encore effectué' : 'Effectué' }}</li>
            </ul>
        </div>
    </div>
    <div v-else>
        <LoadComponent />
    </div>
</template>