<template>
  <div v-if="mesSejours.length > 0" >
    <h1 class="flex flex-wrap justify-center text-2xl font-semibold text-white pb-10">Vos séjours</h1>
    <div v-if="error" class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" role="alert">
      {{ errorMessages[0] }} <RouterLink to="/connexion" v-if="errorMessages[0].includes('connecté')" class="text-red-800 ml-3 font-bold">Se connecter</RouterLink>
    </div>
    <div class="flex gap-3">
      <div class="w-3/4">
        <div class="flex flex-col gap-5" v-auto-animate>
          <div v-for="item in mesSejours" v-auto-animate :key="item.sejour.idsejour" class="">
            <div class="w-full">
              <PanierItem
                :id="item.sejour.idsejour"
                :title="item.sejour.titresejour"
                :image="item.sejour.photosejour"
                :nights="item.sejour.nbnuit"
                :days="item.sejour.nbjour"
                :price="item.sejour.prixsejour"
                :disabled="false"
                v-on:total="(i) => getTotal(i)"
                >
              </PanierItem>
            </div>
          </div> 
        </div>
      </div>
      <div class="w-1/4 sticky top-5 border-2 border-rose rounded-2xl flex flex-col gap-5 items-center h-fit">
        <div class="p-12 text-center">
          <h1 class="text-2xl text-white mb-6 font-semibold">Total : {{ numberWithSpaces(total.toFixed(2)) }} €</h1>
          <button @click="checkBeforeCheckout('pay')" class="flex mb-6 w-full text-xl justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
            </svg>
              Payer
          </button>
          <button @click="checkBeforeCheckout('offer')" class="flex w-full text-xl justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
            </svg>
              Offrir
          </button>
        </div>    
      </div>
    </div>
        
  </div>

  <div v-else>
    <div class="text-center text-2xl h-screen flex flex-col items-center justify-center">
      Vous n'avez aucun séjour d'ajouté !
      <div class=" flex justify-center mt-2">
        <div class=" w-20 border mt-2"></div>
      </div>
      <RouterLink to="/sejour" class="text-white px-5 py-3 bg-rose rounded-md border-rose border-2 hover:bg-transparent mt-2">Retour aux séjours</RouterLink>
    </div>
  </div>  

</template>

<script setup>
import { usePanierStore } from '../stores/panier';
import { useAuthStore } from '../stores/auth';
import { onMounted , ref } from 'vue';
import axios from 'axios';
import PanierItem from '../components/PanierItem.vue';
import { RouterLink, useRouter } from 'vue-router';
const mesSejours = ref([]);
var total = ref(0);
const panierStore = usePanierStore();
const authStore = useAuthStore();

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

onMounted(() => {  
  window.addEventListener('beforeunload', function (e) {
    alert('Are you sure you want to leave?')
  });
  document.onbeforeunload = (event) => { confirm('Are you sure you want to leave?') };
  const panierStore = usePanierStore();
  panierStore.sejours.forEach(element => {
            if (element.idsejour){
                axios.get('/api/sejour/' + element.idsejour)
                .then((response) => {
                    mesSejours.value.push({
                      sejour: response.data['data'], 
                      qte: element.quantite
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            };
  });
});

const removesejour = (id) => {
  if(confirm('Etes-vous sur de vouloir supprimer ce séjour ?')){
    panierStore.removeSejour(id);
    mesSejours.value = mesSejours.value.filter(item => item.sejour.idsejour !== id);
  }
}


const getTotal = (totalParams) => {
  total.value += totalParams;
}

const router = useRouter();
const error = ref(false);
const errorMessages = ref([]);

// get url params with js
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('error')){
  error.value = true;
  errorMessages.value.push('Vous avez annulé le paiement');
}

const checkBeforeCheckout = (type) => {
  if(!authStore.isAuthenticated) {
    error.value = true;
    if (!errorMessages.value.includes('Vous devez être connecté pour valider votre panier'))
      errorMessages.value.push('Vous devez être connecté pour valider votre panier');
    return;
  }
  panierStore.sejours.forEach(element => {
    error.value = false;
    if (element.idsejour){
        if(!element.date) 
        {
          error.value = true;
          if (!errorMessages.value.includes('Veuillez choisir une date pour chaque séjour'))
            errorMessages.value.push('Veuillez choisir une date pour chaque séjour');
        }
    };
  });
  if(!error.value){
    if(type == 'pay')
      router.push('/paiement/validation');
    else if(type == 'offer')
      router.push('/paiement/offir');
  }
}

</script>


<style scoped>
* {
  transition: all 0.3s ease;
}

#button {
  background-color: #CB7169;
  justify-content: center;
  margin: 4px;
}

#buttondelete {
  background-color: #6b2a24;
  justify-content: center;
  margin: 4px;
}

</style>