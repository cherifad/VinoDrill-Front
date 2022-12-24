<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { onMounted, ref, watch } from 'vue';
import { useAuthStore } from './stores/auth';
import Cookies from './components/Cookie.vue';
import { usePanierStore } from './stores/panier';
import { useLikesStore } from './stores/likes';

const authStore = useAuthStore();
const panierStore = usePanierStore();
const likesStore = useLikesStore();
const admin = ref(false);

const height = ref(0);

onMounted(async () => {
  useRoute().path.includes('admin') ? admin.value = true : admin.value = false;
  console.log(useRoute().path);
  const menuItems = document.querySelectorAll("#menu li");
  const header = document.querySelector("header");

  // prevent bug when calculating header height
  const menu = document.querySelector("#menu");
  menu.style.display = "flex";

  // get header height
  const headerHeight = header?.clientHeight;

  height.value = headerHeight + 20;
  
  // get header height on resize
  window.addEventListener("resize", () => {
    const headerHeight = header?.clientHeight;
    height.value = headerHeight + 35;
  });

  try {
    await authStore.getUser();
  }
  catch(err) {
    
  }
});
</script>

<template>
  <header id="top" class="w-full absolute top-0 z-50 px-10 pt-10">
    <div class="flex w-full justify-between">
      <div class="flex items-center gap-8">
        <RouterLink to="/">
          <span class="brandName text-4xl font-semibold"
            >Vino<span style="color: #cb7169">Drill</span></span
          >
        </RouterLink>
        <ul id="menu"
          class="gap-4 text-2xl text-white border-l-2 border-zinc-800 pl-8"
        >
          <li :class="useRoute().name == 'Séjour' ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose': 'text-white'">
            <RouterLink to="/sejour">Séjour</RouterLink>
          </li>
          <li :class="useRoute().name == 'Vignoble' ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose': 'text-white'">
            <RouterLink to="/vignoble">Vignoble</RouterLink></li>
          <li :class="useRoute().name == 'RouteDesVins' ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose': 'text-white'">
            <RouterLink to="/route-des-vins">Route des vins</RouterLink></li>
          <li :class="useRoute().name == 'CoffretCadeau' ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose': 'text-white'">
            <RouterLink to="/coffretCadeau">Cadeau</RouterLink></li>
          <li :class="useRoute().name == 'OffreEntreprise' ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose': 'text-white'">
            <RouterLink to="/offreEntreprise">Offre entreprise</RouterLink></li>
          <li :class="useRoute().name == 'Contact' ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose': 'text-white'">
            <RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <div class="flex text-2xl text-white items-center gap-3">
        
        <!-- cart icon with buble -->
        <RouterLink to="/mon-panier">
          <div v-if="panierStore" class="flex relative cursor-pointer px-2 py-3">
            <ion-icon class="text-3xl" name="cart-outline"></ion-icon>
            <span class="inline-flex absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full">{{ panierStore.total }}</span>
          </div>
        </RouterLink>
  
        <!-- fav icon with buble, only displayed if the user is connected -->
        <RouterLink to="/favoris">
          <div v-if="authStore.user && likesStore" class="flex cursor-pointer relative px-2 py-3">
            <ion-icon class="text-3xl" name="heart"></ion-icon>
            <span class="inline-flex absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full">{{ likesStore.total }}</span>
          </div>
        </RouterLink>
  
        <RouterLink v-if="!authStore.user" to="/connexion" class="hover:text-opacity-90">Connexion</RouterLink>
        <RouterLink v-else to="/mon-compte" class="hover:text-opacity-90">Bonjour {{ authStore.user.prenomclient }}</RouterLink>
      </div>
    </div>
    <div class="mt-6" v-if="admin">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <ion-icon class="text-2xl" name="location-outline"></ion-icon>
          <span class="text-white">VinoDrill</span>
         </div>
      </div>

    </div>
  </header>
  <a href="#top" class="fixed text-black text-3xl bottom-4 right-4 p-3 cursor-pointer bg-white rounded-xl shadow-xl z-50">
    <ion-icon class="hover:-translate-y-1" name="arrow-up"></ion-icon>
  </a>
  <RouterView v-if="height" :style="{'padding-top': + height +'px'}" class="px-10" v-slot="{ Component }">    
      <Component :is="Component" />    
  </RouterView>
  <Cookies />
  <footer class="pt-2rem">    
      <div class="grid-cols-3 p-10 flex justify-evenly">
         <div class="hover:text-rose"> <RouterLink to="/mentions-legales">Mentions légales</RouterLink></div>
        <div class=" hover:text-rose" >  <RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink></div>
        
         <div class="hover:text-rose"> <RouterLink to="/gestion-des-cookies">Gestion des cookies</RouterLink></div>
    </div>
  </footer>
</template>
<style scoped>
* {
  transition: all 0.3s ease;
}

.top {
  font-family: "Poppins", sans-serif;
}

header li {
  cursor: pointer;
  font-weight: 500;
}

header li:hover {
  color: #cb7169;
}

/* header li {
  color: whitesmoke;
} */

.pass {
  font-family: "PassengerDisplay", sans-serif;
}
</style>
