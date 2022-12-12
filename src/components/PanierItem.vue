<template>
  <div class="h-full justify-between p-5 border-2 rounded-2xl border-rose">
    <div class="flex justify-between w-full">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Article</h1>
        <div class="w-14 border mb-2"></div>
        <img :src="image" :alt="title + 'image'" class="imageSize rounded-xl" />
      </div>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Description</h1>
        <div class="w-20 border mb-2"></div>
        <h1 class="text-xl pt-5">{{ title }}</h1>
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
      </div>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Supprimer</h1>
        <div class="w-20 border mb-2"></div>
        <ion-icon
          @click="remove"
          class="text-4xl pt-8"
          name="trash-bin-outline"
        ></ion-icon>
      </div>
    </div>
    <div class="flex gap-5 justify-evenly">
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="mt-6 flex flex-col items-center">
        <h1 class="font-bold text-xl w-fit mb-1">Période du séjour</h1>
        <div class="w-32 border mb-2"></div>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="mb-1">Début</h1>
        <div class="w-12 border mb-2"></div>
        <input type="date" class="rounded border-2 p-1 text-rouge border-rose focus:border-rouge outline-none" max="12-02-1992" placeholder="Date">
        <!-- <span>Par exemple {{ exampleDate }}</span> -->
      </div>
    </div>
    <div class="flex flex-1 flex-col items-center">
        <div class="mt-6 flex flex-col items-center">
          <h1 class="font-bold text-xl w-fit mb-1">Informations</h1>
          <div class="w-24 border mb-2"></div>
        </div>
        <div class="flex items-center gap-2 w-full justify-evenly">
          <div class="flex flex-col items-center">
            <h1 class="mb-1">Adultes</h1>
            <div class="w-12 border mb-2"></div>
            <p>
              <button @click="form.adults != 0 ? form.adults-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
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
              <button @click="form.rooms != 0 ? form.rooms-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
              {{ form.rooms }}
              <button @click="form.rooms++" id="button" class="font-bold py-1 px-2 rounded">+</button>
            </p>
          </div>
        </div>
    </div>
  </div>
  </div>


</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePanierStore } from "../stores/panier";

const panierStore = usePanierStore();
const exampleDate = new Date();

const form = ref({
  adults: 0,
  children: 0,
  rooms: 0,
})

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

const remove = () => {
  if (confirm("Voulez-vous vraiment supprimer ce séjour ?")) {
    panierStore.removeSejour(props.id);
    window.location.reload();
  }
};

const getCurrentCartSejour = (id) => {
  const cart = panierStore.sejours;
  const sejour = cart.find((item) =>
    item.idsejour ? item.idsejour === id : false
  );
  return sejour;
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
