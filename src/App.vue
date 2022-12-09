<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from 'vue';
import { useAuthStore } from './stores/auth';
import Cookies from './components/Cookie.vue';

const authStore = useAuthStore();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const reload = urlParams.get('reload');

const height = ref(0);

onMounted(async () => {
  const header = document.querySelector("header");

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
  <header id="top" class="flex absolute top-0 w-full justify-between z-50 px-10 pt-10">
    <div class="flex items-center gap-8">
      <RouterLink to="/">
        <span class="brandName text-4xl font-semibold"
          >Vino<span style="color: #cb7169">Drill</span></span
        >
      </RouterLink>
      <ul
        class="flex gap-4 text-2xl text-white border-l-2 border-zinc-800 pl-8"
      >
        <li>
          <RouterLink to="/sejour">Séjour</RouterLink>
        </li>
        <li><RouterLink to="/vignoble">Vignoble</RouterLink></li>
        <li><RouterLink to="/route-des-vins">Route des vins</RouterLink></li>
        <li><RouterLink to="/coffretCadeau">Cadeau</RouterLink></li>
        <li><RouterLink to="/offreEntreprise">Offre entreprise</RouterLink></li>
        <li><RouterLink to="/mon-panier">Panier</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>
    <div class="flex text-2xl text-white items-center gap-10">
      <RouterLink v-if="!authStore.user" to="/connexion" class="hover:text-opacity-90">Connexion</RouterLink>
      <RouterLink v-else to="/mon-compte" class="hover:text-opacity-90">Bonjour {{ authStore.user.prenomclient }}</RouterLink>
    </div>
  </header>
  <a href="#top" class="fixed text-black text-3xl bottom-4 right-4 p-3 cursor-pointer bg-white rounded-xl shadow-xl z-50">
    <ion-icon class="hover:-translate-y-1" name="arrow-up"></ion-icon>
  </a>
  <RouterView :style="{'padding-top': + height +'px'}" class="px-10" v-slot="{ Component }">    
    <transition name="fade" mode="out-in">      
      <Component :is="Component" />    
    </transition>  
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

header li {
  color: whitesmoke;
}

.pass {
  font-family: "PassengerDisplay", sans-serif;
}
</style>
