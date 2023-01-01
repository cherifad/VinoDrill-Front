<template>
  <div>    
    <Progress :step="2" />
    <div class="flex gap-6 mb-6">
        <RouterLink to="/mon-panier"
          @click=""
          class="flex w-2/5 justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
            Modifier le panier
        </RouterLink>
        <RouterLink to="/paiement/facturation"
          class="flex w-full justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold"
        >
            Valider et passer à l'étape suivante
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </RouterLink>
    </div>
    <div class="mb-6 w-full gap-6 flex flex-wrap justify-center">
      <div
        v-for="item in articles"
        v-auto-animate
        :key="item.sejour.idsejour"
        class="w-full"
      >
        <div class="w-full">
          <PanierItem
            :id="item.sejour.idsejour"
            :title="item.sejour.titresejour"
            :image="item.sejour.photosejour"
            :nights="item.sejour.nbnuit"
            :days="item.sejour.nbjour"
            :price="item.sejour.prixsejour"
            :disabled="true"
            v-on:total="(i) => getTotal(i, item.sejour.titresejour)"
          >
          </PanierItem>
        </div>
      </div>
    </div>
    <div class="flex w-full gap-3 items-center">
        <RouterLink to="/mon-panier"
          @click=""
          class="flex w-2/5 justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
            Modifier le panier
        </RouterLink>
        <RouterLink to="/paiement/facturation"
          class="flex w-full justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold"
        >
            Valider et passer à l'étape suivante
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { usePanierStore } from "../../stores/panier";
import PanierItem from "../../components/PanierItem.vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import Progress from "../../components/Progress.vue";

const route = useRouter();
const authStore: any = useAuthStore();

const panierStore = usePanierStore();
const articles: any = ref([]);
const loading = ref(false);

const savePaiment = ref(false);

const items: any = []

onMounted(async () => {
    if (panierStore.total === 0) {
        route.push("/mon-panier");
    }
    panierStore.sejours.forEach((element) => {
        if (element.idsejour) {
            axios.get("/api/sejour/" + element.idsejour)
                .then((response) => {
                    articles.value.push({
                        sejour: response.data["data"],
                    });
                    items.push({
                        name: response.data["data"].titresejour,
                        description: response.data["data"].descriptionsejour,
                        unit_amount: response.data["data"].prixsejour,
                        currency: 'EUR',
                        quantity: 1,
                        metadata: {
                            nbenfants: element.nbEnfants,
                            nbadultes: element.nbAdultes,
                            nbchambre: element.nbChambres,
                        }
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    });
});

const confirmPay = () => {
    if (confirm("Voulez-vous vraiment payer ?")) {
        loading.value = true;
        pay();
    }
}

async function pay() {
  try {
    const response = await axios.post("/payment/checkout", {
        articles: items,
        save_crendentials: savePaiment.value,
        email: authStore.user?.emailclient,
        name: authStore.user?.nomclient + " " + authStore.user?.prenomclient,
    });
    const checkoutURL = response.data.checkoutURL;
    // Redirect the user to the Stripe Checkout page
    window.location.href = checkoutURL;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
}

function getTotal(total: number, name: string) {
    if(total == 0) return;
    items.forEach((element: any) => {
        if (element.name === name) {
            element.unit_amount = total * 100;
        }
    });
}

</script>
