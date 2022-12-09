<template>
    <!-- <div class="flex relative h-full  gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ">
        <div class="w-fit">
             <h1 class="font-bold text-xl w-fit ml-6">Article</h1>
             <div class=" w-14 border ml-8 mb-2 mt-1"></div>
            <img :src="image" :alt="title + 'image'" class="w-1/4">
        </div>
    </div>

    <div class="w-fit">
             <h1 class="font-bold text-xl w-fit ml-6">Article</h1>
             <div class=" w-14 border ml-9"></div>
            <img :src="image" :alt="title + 'image'" class="w-1/4">
        </div>
        <div class=" flex-1">
            <h1 class="text-xl font-bold pt-10 ">{{ title}}</h1>
            <p v-if="days" class="text-xl pt-2"><ion-icon name="time-outline" class="mr-2"></ion-icon>{{ days }} jour<span v-if="days > 1">s</span><span v-if="nights >= 1"> / {{ nights }} nuit<span v-if="nights > 1">s</span></span></p>
            <p v-else class="text-2xl">{{ libelleTemps }}</p>
        </div>
        <div class="pt-12 ml-10">
            <h1>{{price}}€</h1>
        </div> -->

        <div class="h-full p-5 border-2 rounded-2xl border-rose flex">
            <div class="mr-10">
                <h1 class="font-bold text-xl w-fit ml-16 mb-1">Article</h1>
                <div class=" barreArticle w-14 border ml-14 mb-2"></div>
                <img :src="image" :alt="title + 'image'" class="imageSize rounded-xl">
            </div>
            <div class="mr-10">
                <h1 class="font-bold text-xl w-fit ml-16 mb-1">Description</h1>
                <div class=" barreDescription w-20 border mb-2"></div>
                 <h1 class="text-xl  pt-5 ">{{ title}}</h1>
                <p v-if="days" class="text-xl pt-2"><ion-icon name="time-outline" class="mr-2"></ion-icon>{{ days }} jour<span v-if="days > 1">s</span><span v-if="nights >= 1"> / {{ nights }} nuit<span v-if="nights > 1">s</span></span></p>
                <p v-else class="text-2xl">{{ libelleTemps }}</p>
            </div>
            <div class="mr-10">
                <h1 class="font-bold text-xl w-fit ml-16 mb-1">Prix Unitaire</h1>
                <div class=" barreDescription w-20 border mb-2"></div>
                <h1 class="text-xl pt-9 ml-24">{{price}}€</h1>
            </div>
            <div class="mr-10">
                <h1 class="font-bold text-xl w-fit ml-16 mb-1">Quantité</h1>
                <div class=" barreQuantite w-16 border mb-2"></div>
            </div>
            <div class="mr-10">
                <h1 class="font-bold text-xl w-fit ml-16 mb-1">Total</h1>
                <div class=" barreTotalUni w-10 border mb-2"></div>
            </div>
            <!-- <button @click="remove" class="ml-6">Supprimer</button> -->
            <div>
                
            </div>
            
        </div>
        
</template>

<script setup lang="ts">
import { usePanierStore } from '../stores/panier';

const panierStore = usePanierStore();


const props = defineProps<{
    title: string;
    description: string;
    nights: any;
    days: any;
    image: string;
    price: number;
    id: number;
    libelleTemps: any;
    notemoyenne: number;
    }>();

const remove = ()=>{
    if (confirm("Voulez-vous vraiment supprimer ce séjour ?")){
        panierStore.removeSejour(props.id)
        window.location.reload()
    }
}

</script>
<style scoped>

.imageSize
{
height: 8rem;
width: auto;

}

.barreDescription
{
    margin-left: 85px;
}
.barreArticle
{
    margin-left:70px;
}
.barreQuantite
{
    margin-left: 80px;
}
.barreTotalUni
{
    margin-left: 72px;
}

</style>
