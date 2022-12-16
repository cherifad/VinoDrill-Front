<template>
  <div class="h-full justify-between p-5 border-2 rounded-2xl border-rose">
    <div class="flex justify-between w-full shadow-md shadow-rose rounded-xl p-5 mb-5">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Article</h1>
        <div class="w-14 border mb-2"></div>
        <img :src="image" :alt="title + 'image'" class="imageSize rounded-xl" />
      </div>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Description</h1>
        <div class="w-20 border mb-2"></div>
        <h1 class="text-xl pt-5 text-center">{{ title }}</h1>
        <p v-if="days" class="text-xl pt-2">
          <ion-icon name="time-outline" class="mr-2"></ion-icon
          >{{ days }} jour<span v-if="days > 1">s</span
          ><span v-if="nights >= 1">
            / {{ nights }} nuit<span v-if="nights > 1">s</span></span
          >
        </p>
        <p v-else class="text-2xl">{{ libelleTemps }}</p>
        
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-xl mb-1">Prix Unitaire</h1>
          <div class="w-20 border mb-2"></div>
        </div>
        <h1 class="text-xl pt-9">{{ price }}€</h1>
      </div>
      <div class="flex flex-col items-center">
        <div>
          <h1 class="font-bold text-xl w-fit mb-1">Quantité</h1>
          <div class="border mb-2"></div>
        </div>
        <h1 class="text-2xl pt-8">1</h1>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Total</h1>
        <div class="w-10 border mb-2"></div>
        <h1 class="text-2xl pt-8">{{ calculTotal().toFixed(2) }}€</h1>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Supprimer</h1>
        <div class="w-20 border mb-2 "></div>
        <ion-icon
          @click="remove"
          class="text-4xl pt-8 cursor-pointer"
          name="trash-bin-outline"
        ></ion-icon>
      </div>
    </div>
    <div class="flex gap-5 justify-evenly">
      <div class="flex flex-1 shadow-sm shadow-rose rounded-xl p-5 flex-col items-center justify-center">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-xl w-fit mb-1">Période du séjour</h1>
          <div class="w-32 border mb-2"></div>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="mb-1">Début</h1>
          <div class="w-12 border mb-2"></div>
          <input v-model="form.date" id="dateDebut" type="date" class="rounded border-2 p-1 text-rouge border-rose focus:border-rouge outline-none" max="12-02-1992" placeholder="Date">
        </div>
      </div>
      <div class="flex flex-1 shadow-sm shadow-rose rounded-xl p-5 flex-col items-center">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-xl w-fit mb-1">Informations</h1>
            <div class="w-24 border mb-2"></div>
          </div>
          <div class="flex items-center gap-2 w-full justify-evenly">
            <div class="flex flex-col items-center">
              <h1 class="mb-1">Adultes</h1>
              <div class="w-12 border mb-2"></div>
              <p>
                <button @click="form.adults != 1 ? form.adults-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
                {{ form.adults }}
                <button @click="form.adults++" id="button" class="font-bold py-1 px-2 rounded">+</button>
              </p>
            </div>
            <div class="flex flex-col items-center">
              <h1 class=" mb-1">Enfants</h1>
              <div class="w-12 border mb-2"></div>
              <p>
                <button @click="form.children != 0 ? form.children-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
                {{ form.children }}
                <button @click="form.children++" id="button" class="font-bold py-1 px-2 rounded">+</button>
              </p>
            </div>
            <div class="flex flex-col items-center">
              <h1 class=" mb-1">Chambres</h1>
              <div class="w-12 border mb-2"></div>
              <p>
                <button @click="form.rooms != 1 ? form.rooms-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
                {{ form.rooms }}
                <button @click="form.rooms++" id="button" class="font-bold py-1 px-2 rounded">+</button>
              </p>
            </div>
            <div class="flex flex-col items-center">
              <h1 class="mb-1 cursor-pointer" @click="reset()">Mettre à zéro</h1>
            </div>
          </div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { usePanierStore } from "../stores/panier";
import config from "../utils/config";

const panierStore = usePanierStore();
const exampleDate = new Date();
const prixTotal = ref(0);

// majoration (en %)
const majEnfant = 12;
const majChambre = 15;
const majAdulte = 20;

//total
const emit = defineEmits(['total']);

onMounted(() => {
  const datePickerId = document.getElementById("dateDebut") as HTMLInputElement;
  datePickerId.min = new Date().toISOString().split("T")[0];
});

const props =
  defineProps<{
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

const getCurrentCartSejour = () => {
  const cart = panierStore.sejours;
  const sejour = cart.find((item) =>
    item.idsejour ? item.idsejour === props.id : false
  );
  return sejour;
};

const form = ref({
  adults: getCurrentCartSejour()?.nbAdultes || 0,
  children: getCurrentCartSejour()?.nbEnfants || 0,
  rooms: getCurrentCartSejour()?.nbChambres || 0,
  date: getCurrentCartSejour()?.date || "",
})

const remove = () => {
  if (confirm("Voulez-vous vraiment supprimer ce séjour ?")) {
    panierStore.removeSejour(props.id);
    window.location.reload();
  }
};

onBeforeRouteLeave(async (to, from) => {
  panierStore.addRemAdultes(props.id, form.value.adults);    
  panierStore.addRemEnfants(props.id, form.value.children);
  panierStore.addRemChambres(props.id, form.value.rooms);
  panierStore.addRemDate(props.id, form.value.date);
});

// watch works directly on a ref
watch(form, async () => {
  calculTotal();
})

const reset = () => {
  form.value.adults = 1;
  form.value.children = 0;
  form.value.rooms = 1;
  form.value.date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
}

const calculTotal = () => {
  const total = props.price;
  let totalAdultes = 0;
  let totalChambres = 0;

  if(form.value.adults > 1) {
    totalAdultes = (props.price * majAdulte) / 100;
  }

  if(form.value.rooms > 1) {
    totalChambres = (props.price * majChambre) / 100;
  }

  const totalEnfants = (props.price * majEnfant) / 100;
  const totalFinal =
    total +
    totalEnfants * form.value.children +
    totalChambres * (form.value.rooms - 1) +
    totalAdultes * (form.value.adults - 1);
  
  
  emit('total', totalFinal - prixTotal.value);
  prixTotal.value = totalFinal;
  return totalFinal;
};
</script>
<style scoped>
.imageSize {
  height: 8rem;
  width: auto;
}
#button {
  background-color: #cb7169;
  justify-content: center;
  margin: 2px;
}

.top {
  margin-top: 65px;
} 
</style>
