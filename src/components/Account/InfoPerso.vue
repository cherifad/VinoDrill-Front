<template>
    <div class="w-full flex gap-3 mb-3 items-center">
        <h1 class="text-2xl font-bold">Mes informations personnelles</h1>
        <div @click="edit = !edit" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
            <ion-icon v-if="edit" name="ban"></ion-icon>
            <ion-icon v-else name="pencil"></ion-icon>
            {{edit ? 'Annuler les modifications' : 'Modifier mes informations'}}
        </div>
    </div>
    <div class="relative w-full border-2 border-rose p-5 rounded-lg flex flex-col gap-3" v-auto-animate>
        <div class="flex gap-5 items-center" v-auto-animate>
            <div class="flex gap-3 items-center">
                <ion-icon name="person"></ion-icon>
                <h1 class="text-xl font-bold">Nom : </h1>
            </div>
            <span v-if="!edit" class="text-xl font-bold">{{ nom }}</span>
            <input v-if="edit" type="text" class="border font-normal border-rose outline-none bg-transparent p-2 rounded-md" v-model="form.nom" />
        </div>
        <div class="flex gap-5 items-center" v-auto-animate>
            <div class="flex gap-3 items-center">
                <ion-icon name="person"></ion-icon>
                <h1 class="text-xl font-bold">Prénom : </h1>
            </div>
            <span v-if="!edit" class="text-xl font-bold">{{ prenom }}</span>
            <input v-if="edit" type="text" class="border font-normal border-rose outline-none bg-transparent p-2 rounded-md" v-model="form.prenom" />
        </div>
        <div class="flex gap-5 items-center" v-auto-animate>
            <div class="flex gap-3 items-center">
                <ion-icon name="mail"></ion-icon>
                <h1 class="text-xl font-bold">Email : </h1>
            </div>
            <span v-if="!edit" class="text-xl font-bold">{{ email }}</span>
            <input v-if="edit" type="text" class="border font-normal border-rose outline-none bg-transparent p-2 rounded-md" v-model="form.email" />
            <h1 class="font-bold text-red-500" v-if="error.emailclient && edit" v-for="item in error.emailclient">{{item}}</h1>     
        </div>
        <div class="flex gap-5 items-center" v-auto-animate>
            <div class="flex gap-3 items-center">
                <ion-icon name="calendar"></ion-icon>
                <h1 class="text-xl font-bold">Date de naissance : </h1>
            </div>
            <span v-if="!edit" class="text-xl font-bold">{{ toReadableDate(dateDeNaissance) }}</span>
            <input v-if="edit" v-model="form.dateDeNaissance" type="date" id="birthdate"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                max="12-02-1992">  
            <h1 class="font-bold text-red-500" v-if="error.datenaissance && edit" v-for="item in error.datenaissance">{{item}}</h1>     
        </div>
        <div class="flex gap-5 items-center" v-auto-animate>
            <div class="flex gap-3 items-center">
                <ion-icon name="male-female"></ion-icon>
                <h1 class="text-xl font-bold">Sexe : </h1>
            </div>
            <span v-if="!edit" class="text-xl font-bold">{{ sexe == 'H' ? 'Homme' : 'Femme' }}</span>
            <div class="flex gap-3" v-if="edit">
                <div @click="form.sexe = 'H'" :class="form.sexe == 'H' ? 'opacity-100' : 'opacity-60'"
                    class="text-xl font-bold text-black p-3 rounded-md bg-white cursor-pointer select-none">M
                </div>
                <div @click="form.sexe = 'F'" :class="form.sexe == 'H' ? 'opacity-60' : 'opacity-100'"
                    class="text-xl font-bold text-black p-3 rounded-md bg-white cursor-pointer select-none">
                    Mme</div>
            </div>
        </div> 
        <div v-if="edit" class="w-full flex">
            <div class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold" @click="saveUpdateInfo()">
                <ion-icon name="save"></ion-icon>
                Enregistrer les modifications
            </div>
        </div>     
    </div>  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const edit = ref(false);
const error: any = ref([]);

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

const props = defineProps<{
    id: number;
    nom: any;
    prenom: any;
    email: any;
    sexe: any;
    dateDeNaissance: any;
}>();

const form = ref({
    idclient: props.id,
    nom: props.nom,
    prenom: props.prenom,
    email: props.email,
    sexe: props.sexe,
    dateDeNaissance: props.dateDeNaissance,
});

async function saveUpdateInfo() {
    if(confirm("Voulez-vous vraiment modifier vos informations ?") == false) return;
    await axios.put(`/api/user/${props.id}`, {
        idclient: props.id,
        nomclient: form.value.nom,
        prenomclient: form.value.prenom,
        datenaissance: form.value.dateDeNaissance,
        sexe: form.value.sexe,
        emailclient: form.value.email,
    })
    .then((res) => {
        window.location.reload();
    })
    .catch((err) => {
        if (err.response.status === 422) {
            error.value = err.response.data.errors;
        }
    });
};
</script>

<style>
input {
    color: white;
}
</style>