<template>
    <div v-if="ready" >
        <div class="flex mb-6 justify-between">
            <RouterLink to="/admin/sejours" class="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" title="Cliquer ici pour revenir à la liste des séjours">
                Retour à la liste des séjours
            </RouterLink>
            <h1 class="text-2xl text-center font-bold text-gray-900 dark:text-white">Modification du séjour n°{{ sejour.idsejour }}</h1>
            <p @click="popitup(`/sejour/${sejour.idsejour}-view`, sejour.titresejoursejour)" class="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" title="Cliquer ici pour avoir un aperçu du séjour que vous modifier">
                Aperçu
            </p>
        </div>
        <div class="flex gap-6 mb-6">
            <button @click="openHebergementHandler" class="bg-blue-500 flex flex-1 uppercase justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" title="Cliquer ici pour ajouter/supprimer un hébergement lié à un séjour">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> - 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                hébergement
            </button>
            
            <button @click="openDomaineHandler" class="bg-blue-500 flex-1 uppercase justify-center flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" title="Cliquer ici pour ajouter/supprimer un domaine lié à un séjour">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> - 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                domaine
            </button>
            <button @click="openActiviteHandler" class="bg-blue-500 flex-1 uppercase justify-center flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" title="Cliquer ici pour ajouter/supprimer une activité liée à un séjour">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> - 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                activité
            </button>
        </div>
        <form @submit="addNewActivite">
            <div class="mb-6 flex gap-6 w-full items-center">
                <div class="w-1/2">
                    <label for="titresejour" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                    <input v-model="form.titresejour" type="text" id="titresejour" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="sejour.titresejoursejour" required>
                </div>  
                <div class="flex w-1/2 gap-6 " v-auto-animate>
                    <label class="inline-flex relative items-center cursor-pointer">
                        <input @change="handleCheckboxChange" v-model="libelletemps" type="checkbox" value="" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <Tooltip text="Choisissez entre un intervalle en nombre de nuits et de jours ou en moment de la journée"/>         
                        <span class="ml-3 text-center text-sm font-medium text-gray-900 dark:text-gray-300">{{ libelletemps ? 'Avec ' : 'Sans ' }}libellé temps</span>
                    </label>
                    <div v-if="!libelletemps" class=" w-2/5">
                        <label for="nbnuits" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de nuits</label>
                        <input v-model="form.nbnuit" type="number" id="nbnuits" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                    </div>
                    <div v-if="!libelletemps" class=" w-2/5">
                        <label for="nbjours" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de jours</label>
                        <input v-model="form.nbjour" type="number" id="nbjours" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                    </div>
                    <div v-if="libelletemps" class="w-4/5">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionner une option</label>
                        <select v-model="form.libelletemps" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Matinée">Matinée</option>
                            <option value="Midi">Midi</option>
                            <option value="Après-midi">Après-midi</option>
                            <option value="Soiree">Soirée</option>
                            <option value="Nuit">Nuit</option>                            
                            <option value="Journée">Journée</option>
                        </select>
                    </div>
                </div>
            </div>
            <p for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo du séjour</p>
            <div class="flex gap-6 items-center justify-center w-full mb-6" v-auto-animate>
                <label for="dropzone-file" class="flex flex-1 flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquer ici pour charger une image</span> ou glisser déposer dans la zone</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 800x400px)</p>
                        <p v-if="form.photosejour != sejour.photosejour" class="text-xs text-gray-500 dark:text-gray-400">1 fichier sélectionné</p>
                    </div>
                    <input ref="fileInput" @change="handleFileChange" accept=".jpg,.svg,.png" id="dropzone-file" type="file" class="hidden" />
                </label>
                <img v-if="picture" class=" h-64 w-auto border border-gray-300 border-dashed rounded-lg cursor-pointer" :src="picture" alt="">
            </div>
            <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea v-model="form.descriptionsejour" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="sejour.descriptionsejoursejour"></textarea>
            </div> 
            <div class="flex gap-6 mb-6">
                <div class="w-1/2">
                    <label for="themes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionner un theme</label>
                    <select v-model="form.idtheme" id="themes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="theme in themes" :value="theme.idtheme">{{ theme.libelletheme }}</option>
                    </select>
                </div>
                <div class="w-1/2">                    
                    <label for="destinations" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionner une destination</label>
                    <select v-model="form.iddestination" id="destinations" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="destination in destinations" :value="destination.iddestination">{{ destination.libelledestination }}</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Cliquer ici pour mettre à jour vos modification">Mettre à jour</button>
        </form>

        <!-- Ajouter un hébergement, relié au bouton en haut -->
        <Popup title="Ajouter/Supprimer un hébergement" :show="showHebergementPopup" @update:show="showHebergementPopup = $event" @submit="submitHandler" v-auto-animate>
            <div v-if="hebergementStep == 1">
                <h1>Choisissez l'étape à modifier</h1>
                <ul class="flex gap-3 justify-center items-center h-fit">
                    <li v-for="etape in sejour.etapes" :key="etape.idetape" class="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg w-full h-auto" :src="etape.photoetape" alt="" />
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{{ etape.titresejouretape }} <Tooltip :text="etape.descriptionsejouretape"/></h5>
                            </a>
                            <a @click="idEtapeHebergement = [etape.idetape, etape.idhebergement], hebergementStep = 2" class="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Choisir {{ idEtapeHebergement }}
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-if="hebergementStep == 2" class="flex flex-wrap gap-3 justify-center">
              <div v-for="single in AllHebergement" :key="single.idhebergement" class="flex w-96 justify-between items-center gap-6 p-2 rounded-lg border border-white">
                  <div>
                      <div class="flex justify-between gap-6">                    
                          <span>{{ single.idhebergement }}</span>
                          {{ single.libellehebergement }}
                      </div>
                      <button v-if="single.idhebergement = idEtapeHebergement[1]" class="text-white mt-3 mr-3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Supprimer</button>
                      <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ajouter</button>
                  </div>
                  <Tooltip :text="single.descriptionhebergement"></Tooltip>
              </div>
              <a @click="hebergementStep = 1" class="inline-flex mr-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Retour
              </a>
            </div>
        </Popup>

        <!-- Ajouter un domaine, relié au bouton en haut -->
        <Popup title="Ajouter/Supprimer un domaine" :show="showDomainePopup" @update:show="showDomainePopup = $event" @submit="submitHandler">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionner une option</label>
            <select v-model="form.libelletemps" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option :style="{backgroundImage: `url(${domaine.photopartenaire})`}" v-for="domaine in domaines" :value="domaine.idpartenaire">{{ domaine.nompartenaire }}</option>
            </select>
        </Popup>

        <!-- Ajouter un Activité, relié au bouton en haut -->
        <Popup title="Ajouter/Supprimer un activité" :show="showActivitePopup" @update:show="showActivitePopup = $event" @submit="submitHandler">
          <div class="flex flex-wrap gap-3 justify-center">
            <div v-for="activite in activites" class="flex w-96 justify-between items-center gap-6 p-2 rounded-lg border border-white">
                <div>
                    <div class="flex justify-between gap-6">                    
                        <span>{{ activite.idactivite }}</span>
                        {{ activite.libelleactivite }}
                    </div>
                    <button class="text-white mt-3 mr-3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Supprimer</button>
                    <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Ajouter</button>
                </div>
                <Tooltip :text="activite.descriptionsejouractivite"></Tooltip>
            </div>
          </div>
        </Popup>

    </div>
    <div v-else>
        <LoadComponent />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import apis from '../../../api';
import { useRoute, useRouter } from 'vue-router';
import LoadComponent from '../../../components/LoadComponent.vue';
import Popup from '../../../components/Popup.vue';
import Tooltip from '../../../components/Tooltip.vue';
import { slugify } from '../../../utils/functions';

const libelletemps = ref(false);

const AllHebergement: any = ref(null);
const showHebergementPopup = ref(false);
const idEtapeHebergement = ref([null, null]);
const hebergementStep = ref(1);
const openHebergementHandler = () => {
    if(AllHebergement.value == null) {
        apis.getHebergements().then((response) => {
            AllHebergement.value = response.data.data;
        });
    }
    showHebergementPopup.value = true;
};

const domaines: any = ref(null);
const showDomainePopup = ref(false);
const openDomaineHandler = () => {
    if(domaines.value == null) {
        apis.getDomaines().then((response) => {
            domaines.value = response.data.data;
        });
    }
    showDomainePopup.value = true;
};

const activites: any = ref(null);
const showActivitePopup = ref(false);
const openActiviteHandler = () => {
    if(activites.value == null) {
        apis.getActivites().then((response) => {
            console.log(response.data.activites);
            activites.value = response.data.activites;
        });
    }
    showActivitePopup.value = true;
};

const submitHandler = () => {
    showActivitePopup.value = false;
    showDomainePopup.value = false;
    showHebergementPopup.value = false;
};

function popitup(url,windowName) {
  const newwindow: any = window.open(url,windowName,'height=1000,width=1600');
  if (document.hasFocus()) {newwindow.focus()}
  return false;
}

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

function handleCheckboxChange(e) {
    libelletemps.value = e.target.checked
}

const route = useRoute();
const router = useRouter();
const sejour: any = ref(null);
const themes: any = ref(null);
const destinations: any = ref(null);

const form: any = ref({
    titresejour: '',
    descriptionsejour: '',
    iddestination: '',
    idtheme: '',
    photosejour: '',
    prixsejour: '',
    nbjour: '',
    nbnuit: '',
    libelletemps: '',
});
const ready = ref(false);
const id = route.params.id;

const getSejour = async () => {
    const response = await apis.getSejourWithHebergement(id);
    sejour.value = response.data.data;

    picture.value = sejour.value.photosejour;

    form.value.titresejour = sejour.value.titresejour;
    form.value.descriptionsejour = sejour.value.descriptionsejour;
    form.value.iddestination = sejour.value.iddestination;
    form.value.idtheme = sejour.value.idtheme;
    form.value.prixsejour = sejour.value.prixsejour;
    form.value.nbjour = sejour.value.nbjour;
    form.value.nbnuit = sejour.value.nbnuit;
    form.value.libelletemps = sejour.value.libelletemps;
    form.value.photosejour = picture.value;

    themes.value = (await apis.getThemes()).data.data;
    destinations.value = (await apis.getDestinations()).data.data;

    form.value.libelletemps ? libelletemps.value = true : libelletemps.value = false;

    ready.value = true;
}

onMounted(() => {
    getSejour();
});

const addNewActivite = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', fileInput.value.files[0]);

    await apis.uploadImage(formData).then((response) => {
        form.value.photosejour = response.data.url
    }).catch((error) => {
        console.log(error);
        return;
    });

    !libelletemps.value ? form.value.libelletemps = null : form.value.nbnuit = null, form.value.nbjour = null;

    apis.updateSejourById(id, form.value)
    .then((response) => {
        router.push({ name: 'SingleSejour', params: { id: id, slug: slugify(sejour.value.titresejour) } })
    })
    .catch((error) => {
        console.log(error);
    });

}

</script>

<style scoped>
* {
    transition: all 0.3s ease;
}

td {
    padding: .25rem;
    border: 2px solid #ccc;
}

th {
    padding: .25rem;
    border: 2px solid #ccc;
    background-color: #ccc;
    color: black;
    font-weight: bold;
}
</style>