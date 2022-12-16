<template>
  <div v-if="mesSejours.length > 0" >
    <h1 class="flex flex-wrap justify-center text-2xl font-semibold text-white pb-10">Vos séjours</h1>
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
                v-on:total="(i) => getTotal(i)"
                >
              </PanierItem>
            </div>
          </div> 
        </div>
      </div>
      <div class="w-1/4 sticky top-5 border-2 border-rose rounded-2xl flex flex-col gap-5 items-center h-fit">
        <div class="p-12 text-center">
          <h1 class="text-2xl text-white font-semibold">Total : {{ numberWithSpaces(total.toFixed(2)) }} €</h1>
          <button id="button" class="font-bold py-3 px-8 rounded">Payer</button>
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

import { useRoute } from 'vue-router';
import { usePanierStore } from '../stores/panier';
import { onMounted , ref } from 'vue';
import axios from 'axios';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import PanierItem from '../components/PanierItem.vue';
const route = useRoute();
const mesSejours = ref([]);
var total = ref(0);
const sejour = ref([]);
const panierStore = usePanierStore();

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

//before leaving the page


onMounted(() => {  
  window.addEventListener('beforeunload', function (e) {
    alert('Are you sure you want to leave?')
  });
  onbeforeunload = (event) => { confirm('Are you sure you want to leave?') };
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

const add = (id) => {
  panierStore.sejours.forEach(element => {
       if (element.idsejour === id){
              element.quantite = element.quantite + 1; 
          }
  });
  window.location.reload();
}

const removeall = (id) => {
  panierStore.sejours.forEach(element => {
       if (element.idsejour === id){
              element.quantite = 0; 
          }
  });
  window.location.reload();
}

const remove = (id) => {
  panierStore.sejours.forEach(element => {
       if (element.idsejour === id && element.quantite != 0){
         if(element.quantite != 0)
              element.quantite = element.quantite - 1; 
          }
  });
  window.location.reload();
}

const getCurrentCartSejour = (id) => {
    const cart = panierStore.sejours;
    const sejour = cart.find((item) => item.idsejour ? item.idsejour === id : false);
    return sejour;
}

const removesejour = (id) => {
  if(confirm('Etes-vous sur de vouloir supprimer ce séjour ?')){
    panierStore.removeSejour(id);
    mesSejours.value = mesSejours.value.filter(item => item.sejour.idsejour !== id);
  }
}


const getTotal = (totalParams) => {
  total.value += totalParams;
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