<template>
    <div class="">
        <h1 class="text-2xl font-bold mb-3">Mes commandes</h1>
        <div class="w-full flex gap-3 mb-3 items-center">
            <div class="relative border-2 border-rose p-5 rounded-lg flex flex-col gap-3"> 
                <div>
                    <p id="passenger" class="text-3xl font-bold">{{ message }}</p>
                    <div class="flex mb-2">
                        <div class=" w-10 border mt-2"></div>
                    </div>
                </div>
                
                <div class="flex gap-5 justify-between">
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Référence commande</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ refcommande }}</p>
                    </div>
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Date commande</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ datecommande }}</p>
                    </div>
                </div>       
                
                <div class="flex gap-5 justify-between">
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Prix</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ prixcommande }} €</p>
                    </div>
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Quantite</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ quantite }}</p>
                    </div>
                    <div class="flex flex-col">
                        <p id="passenger" class="text-2xl font-bold">Méthode de paiement</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="capitalize text-2xl">{{ libellepaiement }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const edit = ref(false);

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

const props = defineProps<{
    idclient: number;
    refcommande: any;
    datecommande: any;
    message: any;
    prixcommande: number;
    quantite: number;
    libellepaiement: any;
}>();

const form = ref({
    idclient: props.idclient,
    refcommande: props.refcommande,
    datecommande: props.datecommande,
    message: props.message,
    prixcommande: props.prixcommande,
    quantite: props.quantite,
    libellepaiement: props.libellepaiement,
});

</script>

<style>
input {
    color: white;
}
</style>