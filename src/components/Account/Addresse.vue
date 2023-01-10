<template>
    <div class="relative border-2 border-rose p-5 rounded-lg flex flex-col gap-3" v-auto-animate>
        <ion-icon v-if="edit" @click="deleteAdress" class="text-red-600 z-50 cursor-pointer text-3xl absolute top-2 right-3" name="trash-outline" title="Cliquer ici pour supprimer l'adresse"></ion-icon>
        <div v-auto-animate class="flex flex-col text-xl">
            <h1 id="passenger" class="text-2xl font-bold" v-if="!edit">{{ libelleAdress }}</h1>
            <input v-model="form.libelleAdress" v-if="edit" type="text" :placeholder="'Tapez ici ex :' + libelleAdress"
                class=" w-4/5 border font-normal border-rose outline-none bg-transparent p-2 rounded-md" title="Nom donné à votre adresse ex : Maison">
        </div>
        <div v-auto-animate class="flex flex-col text-xl">
            <span id="passenger" class="text-2xl font-bold">Adresse</span>
            <div class="flex mb-2">
                <div class=" w-10 border mt-2"></div>
            </div>
            <h1 v-if="!edit">{{ rueAdresse }}</h1>
            <input v-model="form.rue" v-if="edit" type="text" :placeholder="'Tapez ici ex :' + rueAdresse"
                class=" border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
        </div>
        <div class="flex gap-5 justify-between">
            <div v-auto-animate class="flex flex-col text-xl">
                <span id="passenger" class="text-2xl font-bold">Ville</span>
                <div class="flex mb-2">
                    <div class=" w-10 border mt-2"></div>
                </div>
                <h1 v-if="!edit">{{ villeAdresse }}</h1>
                <input v-model="form.ville" v-if="edit" type="text" :placeholder="'Tapez ici ex :' + villeAdresse"
                    class="w-full border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
            </div>
            <div v-auto-animate class="flex flex-col text-xl">
                <span id="passenger" class="text-2xl font-bold">Code postal</span>
                <div class="flex mb-2">
                    <div class=" w-10 border mt-2"></div>
                </div>
                <h1 v-if="!edit">{{ codePostalAdresse }}</h1>
                <input v-model="form.codePostal" v-if="edit" type="text" :placeholder="'Tapez ici ex :' + codePostalAdresse"
                    class="w-full border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
            </div>
            <div v-auto-animate class="flex flex-col text-xl">
                <span id="passenger" class="text-2xl font-bold">Pays</span>
                <div class="flex mb-2">
                    <div class=" w-10 border mt-2"></div>
                </div>
                <h1 v-if="!edit">{{ paysAdresse }}</h1>
                <input v-model="form.pays" v-if="edit" type="text" :placeholder="'Tapez ici ex :' + paysAdresse"
                    class="w-full border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
            </div>
        </div>
        <div class="flex justify-end gap-2" v-auto-animate>
            <div @click="updateAdress()" v-if="edit" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
                Valider les changements
            </div>
            <div v-if="canEdit" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold" @click="edit = !edit">{{ edit ? "Annuler les changements" :
                    "Modifier l'adresse"
            }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const edit = ref(false);

const props = defineProps<{
    id: number;
    libelleAdress: any;
    rueAdresse: any;
    villeAdresse: any;
    codePostalAdresse: any;
    paysAdresse: any;
    canEdit: boolean;
}>();

const form = ref({
    libelleAdress: props.libelleAdress,
    rue: props.rueAdresse,
    codePostal: props.codePostalAdresse,
    ville: props.villeAdresse,
    pays: props.paysAdresse,
})

const updateAdress = () => {
    axios.put(`/api/adresse/${props.id}`, {
        libelle: form.value.libelleAdress,
        rue: form.value.rue,
        ville: form.value.ville,
        codepostal: form.value.codePostal,
        pays : form.value.pays,
    }).then(() => {
        edit.value = false;
    })
}

const deleteAdress = () => {
    if (confirm("Voulez-vous vraiment supprimer cette adresse ?")) {
        axios.delete(`/api/adresse/${props.id}`).then(() => {
            window.location.reload();
        })
    }
}

</script>

<style scoped>

</style>