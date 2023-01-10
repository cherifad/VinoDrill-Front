<script setup>
import { RouterLink, RouterView, useRoute, onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref, watch } from 'vue';
import { useAuthStore } from './stores/auth';
import Cookies from './components/Cookie.vue';
import { usePanierStore } from './stores/panier';
import { useLikesStore } from './stores/likes';
import config from "./utils/config";
import Footer from "./components/Nav/Footer.vue";

const authStore = useAuthStore();
const panierStore = usePanierStore();
const likesStore = useLikesStore();
const adminMenu = ref();
const admin = ref(false);
const route = useRoute();

const height = ref(0);

onMounted(async () => {
  useRoute().path.includes("admin") ? admin.value = true : admin.value = false;
  const header = document.querySelector("header");

  // prevent bug when calculating header height
  const menu = document.querySelector("#menu");
  if(window.innerWidth < 1280) {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }

  // get header height
  const headerHeight = header?.clientHeight;

  height.value = headerHeight + 20;
  admin.value ? height.value += adminMenu.value.clientHeight : height.value += 0;
  
  // get header height on resize
  window.addEventListener("resize", () => {
    if(window.innerWidth < 1280) {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
    console.log(admin.value);
    const headerHeight = header?.clientHeight;
    height.value = headerHeight + 35;
    admin.value ? height.value += adminMenu.value?.clientHeight : '';
  });

  try {
    await authStore.getUser();
  }
  catch(err) { 
  }

});

watch(route, (newRoute, oldRoute) => {
  if (newRoute.path.includes("admin")) {
    admin.value = true;
  } else {
    admin.value = false;
  }  
  window.addEventListener('domcontentloaded', () => {
    const event = new Event('resize');
    window.dispatchEvent(event);
  });
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
          class="gap-4 lg:block hidden text-2xl text-white border-l-2 border-zinc-800 pl-8"
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
            <span class="inline-flex md:whitespace-nowrap absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full">{{ panierStore.total }}</span>
          </div>
        </RouterLink>
  
        <!-- fav icon with buble, only displayed if the user is connected -->
        <RouterLink to="/favoris">
          <div v-if="authStore.user && likesStore" class="flex cursor-pointer relative px-2 py-3">
            <ion-icon class="text-3xl" name="heart"></ion-icon>
            <span class="inline-flex absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full">{{ likesStore.total }}</span>
          </div>
        </RouterLink>
  
        <div v-if="!authStore.user">
          <RouterLink title="connexion" to="/connexion">
            <ion-icon name="log-in-outline" alt="connexion" class="text-3xl block md:hidden"></ion-icon>
          </RouterLink>
          <RouterLink title="connexion" to="/connexion" class="hover:text-opacity-90 hidden md:block">Connexion</RouterLink>
        </div>
        <div v-else>
          <RouterLink  to="/mon-compte" class="hover:text-opacity-70 hidden md:flex gap-2 items-center">Bonjour {{ authStore.user.prenomclient }}
            <svg v-if="config.admins.includes(authStore.user.emailclient)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-rose">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </RouterLink>
          <RouterLink v-if="authStore.user.prenomclient" id="passenger" to="/mon-compte" class="px-3 py-1 bg-white text-black justify-center rounded-full flex md:hidden gap-2 items-center">
            {{ authStore.user.prenomclient.charAt(0) }}
          </RouterLink>
        </div>
      </div>     
    </div>

    <!-- Admin Menu
    <div class="mt-6" ref="adminMenu" v-if="useRoute().path.includes('admin')">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <ion-icon class="text-2xl" name="location-outline"></ion-icon>
          <span class="text-white">VinoDrill</span>
         </div>
      </div>

    </div> -->
    
  </header>
  <a href="#top" class="fixed text-black text-3xl bottom-4 right-4 p-3 cursor-pointer bg-white rounded-xl shadow-xl z-50">
    <ion-icon class="hover:-translate-y-1" name="arrow-up"></ion-icon>
  </a>
  <RouterView v-if="height" :style="{'padding-top': + height +'px'}" class="lg:px-10 px-2" v-slot="{ Component }">    
      <Component :is="Component" />    
  </RouterView>

  <Cookies />

  <Footer />

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
