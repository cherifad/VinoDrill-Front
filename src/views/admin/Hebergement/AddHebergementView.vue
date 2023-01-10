<script setup lang="ts">
import { ref, onMounted } from 'vue';
import apis from '../../../api';
import Tooltip from '../../../components/Tooltip.vue';

const hebergementForm = ref({
    libellehebergement: '',
    descriptionhebergement: '',
    nbchambre: '',
    horairehebergement: '',
})

const hotelForm = ref({
    nbetoilehotel: 0,
    nompartenaire: '',
    ruepartenaire: '',
    cppartenaire: '',
    villepartenaire: '',
    photopartenaire: null,
    emailparenaire: '',
    contact: 'test',
    detailpartenaire: 'test',
})

const picture = ref(null)
const fileInput: any = ref(null)

function handleFileChange(e) {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    const image: any = new Image()
    image.src = reader.result
    picture.value = image.src
  }
};

const addNewActivite = async (event) => {
    event.preventDefault();
    const payload = { ...hebergementForm.value, ...hotelForm.value };

    const formData = new FormData();
    formData.append('file', fileInput.value.files[0]);

    await apis.uploadImage(formData).then((response) => {
        payload.photopartenaire = response.data.url
    }).catch((error) => {
        console.log(error);
        return;
    });

    console.log(payload.photopartenaire)

    apis.newHebergement(payload)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

}
</script>

<template>
    <div v-if="true">
        <form ref="uploadForm" @submit="addNewActivite" class="pt-20">
            <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Détails sur l'hébergement</label>
            <div class="mb-6">
                <label for="libelleact" class="block mb-2 text-sm font-medium text-gray-900     dark:text-white">Nom de l'hébergement</label>         
                <input v-model="hebergementForm.libellehebergement" type="text" id="libelleact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Maison d'hôtes chez Michel et Michelle" required>
            </div>            
            <div class="mb-6">
                <div class="flex">
                    <label for="descriptionact" class="block mb-2 text-sm font-medium text-gray-900                 dark:text-white">Description</label>
                    <Tooltip text="Décrivez votre hébergement avec des informations nécessaires et informatives comme votre type d'hébergement et un descriptif de l’activité"/>   
                </div>
                <textarea v-model="hebergementForm.descriptionhebergement" id="descriptionact" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Situé dans les hauteurs de..."></textarea>
            </div> 
            <div class="flex gap-6 mb-6">
                <div class="flex-1">
                <div class="flex ">
                    <label for="horaireactivite" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horaire</label>
                    <Tooltip text="Dans le format HH:MM soit Heure:Minute, définir l'horaire du RDV où les clients s'installeront"/>   
                </div>
                    <input v-model="hebergementForm.horairehebergement" type="time" id="horaireactivite" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12:12" required>
                </div>
                <div class="flex-1">
                    <div class="pt-1">
                        <label for="horaireactivite" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nb de chambre</label>
                    </div>
                    
                    <input v-model="hebergementForm.nbchambre" type="number" id="horaireactivite" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" min="1" required>
                </div>
            </div>
            <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Détails sur l'Hotêlier</label>
            <div class="flex gap-6 mb-6">
                <div class="w-2/5">
                    <label for="nomhotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                    <input v-model="hotelForm.nompartenaire" type="text" id="nomhotel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Michel" required>
                </div>
                <div class="w-2/5">
                    <label for="emailhotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input v-model="hotelForm.emailparenaire" type="mail" id="emailhotel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="michel@exemple.com" required>
                </div>
                <div class="w-1/5">
                    <label for="nbetoilehotelHotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre d'étoile ({{ hotelForm.nbetoilehotel }})</label>
                    <input v-model="hotelForm.nbetoilehotel" type="range" id="nbetoilehotelHotel" min="0" max="5" step="1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Annecy" required>
                </div>
            </div>
            <div class="flex gap-6 mb-6">
                <div class="flex-1">
                    <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
                    <input v-model="hotelForm.contact" type="tel" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Annecy" required>
                </div>
                <div class="flex-1">
                    <label for="villehotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                    <input v-model="hotelForm.villepartenaire" type="villehotelt" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Annecy" required>
                </div>
                <div class="flex-1">
                    <label for="ruehotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rue</label>
                    <input v-model="hotelForm.ruepartenaire" type="text" id="ruehotel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rue de L'arc en ciel" required>
                </div>
                <div class="flex-1">
                    <label for="cphotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
                    <input v-model="hotelForm.cppartenaire" type="text" id="cphotel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="74100" required>
                </div>
            </div>
                <div class="flex">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo de l'hotel</label>
                    <Tooltip text="Placez une ou plusieurs images de l'hébergement et de ce qu'il propose comme une piscine  ou une vue sur la mer"/>   
                </div>
            <div class="flex gap-6 items-center justify-center w-full mb-6" v-auto-animate>
                <label for="dropzone-file" class="flex flex-1 flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquer ici pour charger une image</span> ou glisser déposer dans la zone</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 800x400px)</p>
                        <p v-if="hotelForm.photopartenaire" class="text-xs text-gray-500 dark:text-gray-400">1 fichier sélectionner</p>
                    </div>
                    <input name="file" ref="fileInput" @change="handleFileChange" accept=".jpg,.svg,.png" id="dropzone-file" type="file" class="hidden" />
                </label>
                <div v-if="picture" class="relative">
                    <svg @click="picture = null" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 absolute z-50 cursor-pointer text-red-600 top-1 right-1">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                    </svg>
                    <img class="h-64 w-auto max-w-xl border border-gray-300 border-dashed rounded-lg " :src="picture" alt="Image Partenaire">
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

        </form>
    </div>
</template>