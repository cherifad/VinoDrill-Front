<template>
    <div class="top-0 z-50 bg-black opacity-70 right-0 fixed w-screen flex justify-center items-center h-screen blur-lg">
    </div>

    <div class="top-0 z-50 right-0 fixed w-screen flex justify-center items-center h-screen">        
        <div class="opacity-100 absolute h-fit py-10 w-1/3 rounded-lg bg-rouge">
            <ion-icon @click="emit('toClose', true)" name="close-outline" class="text-white text-5xl cursor-pointer z-50 absolute top-5 right-5"></ion-icon>
            <div class="flex p-7 w-full h-full gap-5 flex-col justify-center items-center">
                <h1 class="text-5xl font-bold text-white w-full text-center" id="passenger">Ajouter une adresse</h1>
                <div class="flex flex-col gap-3 items-center w-full">
                    <div class="flex flex-col w-full gap-3">
                        <label for="placeInput">Votre adresse</label>
                        <input v-model="search" @input="autoComplete(false)" type="text" id="placeInput" placeholder="1 rue des cèdres, Grenoble" class="flex-1 text-xl border-2 font-normal border-rose outline-none bg-transparent p-3 rounded-md">
                        <!-- <button @click="autoComplete(true)" class="flex w-fit cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">Charger automatiquement</button> -->
                    </div>  
                    <div class="relative w-full">
                        <ul v-auto-animate class="absolute -mt-1 flex flex-col w-full z-50 top-auto gap-2">
                            <li class="p-2 bg-slate-200 text-black font-bold rounded-md cursor-pointer hover:-translate-y-1" v-for="result in results" @click="fillData(result)" :key="result.place_id">{{ result.formatted }}</li>
                            <div v-if="loading" class="w-full cursor-wait bg-black opacity-50 rounded-md h-full absolute top-0 righ-0 flex justify-center items-center">
                                <lord-icon
                                    src="https://cdn.lordicon.com/xjovhxra.json"
                                    trigger="loop"
                                    colors="primary:#ffff,secondary:#08a88a"
                                    style="width:125px;height:125px">
                                </lord-icon>
                            </div>
                        </ul>       
                    </div>                               
                </div>
                <input v-model="form.libelle" type="text" placeholder="Libellé de l'adresse" class="w-full border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.rue" type="text" placeholder="Rue" class="w-full cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.ville" type="text" placeholder="Ville" class="w-full cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.codepostal" type="number" placeholder="Code postal" class="w-full cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.pays" type="text" placeholder="Pays" class="w-full cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <button @click="addNewAdress" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">Ajouter</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
const apiKey = "937d2715a4ec4a349192e4f494b24706";

const emit = defineEmits(['toClose']);
const results: any = ref(null);
const search = ref('');
const loading = ref(false);

const props = defineProps<{
    idclient: any;
}>();

const form = ref({
    libelle: '',
    rue: '',
    ville: '',
    codepostal: '',
    pays: '',
    idclient: props.idclient,
});

const close = () => {
    window.location.reload();
}

const addNewAdress = async () => {
    await axios.post('/api/adresse', form.value).then(() => {
        window.location.reload();
    });
    close();
}

const autoComplete = async(load) => {
    loading.value = load;
    await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${search.value}&format=json&apiKey=${apiKey}`, {
        withCredentials: false,
        })
        .then((data) => {
            results.value = data.data["results"];
            load ? loading.value = false : null;
        });
};

const fillData = (data) => {
    form.value.rue = `${data.housenumber == 'undefined' ? '' : data.housenumber} ${data.street}`;
    form.value.ville = data.city;
    form.value.codepostal = data.postcode;
    form.value.pays = data.country;

    results.value = [];
}

</script>

<style scoped>
* {
    transition: all .3s ease-in-out;
}
</style>