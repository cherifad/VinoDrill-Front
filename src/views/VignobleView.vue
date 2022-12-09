<template>
   <div>
      <h1 class=" text-center text-2xl"> Guide des Vignobles </h1>
      <div class=" flex justify-center mt-3">
         <div class=" w-20 border"></div>
      </div>
      <div class="flex justify-center">
         <p class=" mt-5">Vinotrip vous emmène visiter les vignobles français au coeur des plus belles régions viticoles.</p>
      </div>
      <div class="grid grid-cols-3 mt-11">
            <SingleCardVignoble v-for="destination in destinations"
                  :title="destination.libelledestination"
                  :description="destination.descriptiondestination"
                  image="vignoble.photosejour"
                  :id="destination.idDestination"
               />             
      </div>
     
   </div>
   
   

   
   
   
</template>
<script setup lang="ts"> import { onMounted, ref } from 'vue';
import SingleCardVignoble from '../components/SingleCardVignoble.vue';
import axios from 'axios';

//CONSTANTE
const destinations: any = ref(null);
const libelleDestination: any = ref(null);
const idDestination: any = ref(null);


//REQUETE AXIOS POUR RECUPERER LES DONNEES DE LA BDD
onMounted(async () => {
    axios.get('http://51.83.36.122:5005/api/destination')
    .then((response) => {
        destinations.value = response.data['data'];
        console.log(destinations.value[0].libelledestination);
        libelleDestination.value = destinations.value.map((item: any) => item.libelledestination);
    })
    .catch((error) => {
        console.log(error);
    });
});


</script>
<style scoped>

</style>