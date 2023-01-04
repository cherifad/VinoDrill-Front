<script setup lang="ts">
import Progress from "../../components/Progress.vue";
import { useAuthStore } from "../../stores/auth";
import AddresseVue from "../../components/Account/Addresse.vue";
import { onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import LoadComponent from "../../components/LoadComponent.vue";
import { usePanierStore } from "../../stores/panier";
import axios from "axios";
import { useRoute } from "vue-router";
import config from "../../utils/config";
import AddAdressForm from "../../components/Account/AddAdressForm.vue";

const panierStore: any = usePanierStore();
const route = useRoute();
const refchq: any = route.params.ref;
const items: any = [];
const prixTotal: any = ref(0);
const articleDetails: any = [];

const authStore: any = useAuthStore();
const savePaiment: any = ref(false);
const loading: any = ref(false);
const selectedAddress: any = ref(999999999);
const note = ref("");
const noteError = ref(false);
const coupon = ref("");
const closeAddAdress: any = ref(true);

watch(note, (val) => {
  if (val.length < 50 && val.length > 0) {
    noteError.value = true;
  } else if (val.length > 500) {
    noteError.value = true;
  } else {
    noteError.value = false;
  }
});

onMounted(() => {
  loading.value = true;
  panierStore.sejours.forEach((element) => {
    if (element.idsejour) {
      prixTotal.value += element.prixtotal;
      axios
        .get("/api/sejour/" + element.idsejour)
        .then((response) => {
          articleDetails.push({
            idsejour: element.idsejour,
            nbAdultes: element.nbAdultes,
            nbEnfants: element.nbEnfants,
            nbChambres: element.nbChambres,
            datedebutreservation: element.date,
            estcadeau: true,
          });
          items.push({
            name: response.data["data"].titresejour,
            description: response.data["data"].descriptionsejour,
            unit_amount: element.prixtotal * 100,
            currency: "EUR",
            image: response.data["data"].photosejour,
            quantity: 1,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  loading.value = false;
});

const confirmPay = () => {
  // if (confirm("Voulez-vous vraiment payer ?")) {
  //     loading.value = true;
  //     // wait one second to show the loading animation
  //     setTimeout(() => {
  //         pay();
  //     }, 1000);
  // }
  if (selectedAddress.value == 999999999 || !selectedAddress.value) {
    alert("Veuillez choisir une adresse de livraison");
    return;
  }

  if (noteError.value) {
    alert("La note doit faire entre 50 et 500 caractères, ou être vide !");
    return;
  }
  console.log(items);
  loading.value = true;
  setTimeout(() => {
    pay();
  }, 1000);
};

async function pay() {
  try {
    const response = await axios.post("/payment/checkout", {
      articles: items,
      save_crendentials: savePaiment.value,
      email: authStore.user?.emailclient,
      name: authStore.user?.nomclient + " " + authStore.user?.prenomclient,
      idadresse: selectedAddress.value,
      idclient: authStore.user?.idclient,
      details: articleDetails,
      notecommande: note.value,
      cheque_cadeau: false,
      coupon: coupon.value,
    });
    const checkoutURL = response.data.checkoutURL;
    // Redirect the user to the Stripe Checkout page
    window.location.href = checkoutURL;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex justify-between gap-6">
    <div class="w-2/3">
      <div class="px-3 mb-6">
        <h1 class="text-3xl mb-6">Adresse de facturation</h1>
        <div class="flex flex-wrap">
          <div
            class="w-1/2 h-full justify-between flex-1 px-3 flex flex-col gap-6"
            v-for="adresse in authStore.user.adresses"
            :key="adresse.idadresse"
          >
            <AddresseVue
              :class="
                selectedAddress == adresse.idadresse
                  ? 'bg-rose'
                  : 'bg-transparent'
              "
              :canEdit="false"
              :id="adresse.idadresse"
              :libelleAdress="adresse.libelleadresse"
              :rueAdresse="adresse.rueadresse"
              :villeAdresse="adresse.villeadresse"
              :codePostalAdresse="adresse.cpadresse"
              :paysAdresse="adresse.pays"
            />
            <button
              @click="
                selectedAddress == adresse.idadresse
                  ? (selectedAddress = null)
                  : (selectedAddress = adresse.idadresse)
              "
              :class="
                selectedAddress == adresse.idadresse
                  ? 'bg-rose'
                  : 'bg-transparent'
              "
              class="flex w-full text-xl justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 border-rose border-2 font-semibold"
            >
              <svg
                v-if="selectedAddress != adresse.idadresse"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {{
                selectedAddress == adresse.idadresse
                  ? "Adresse sélectionnée"
                  : "Choisir cette adresse"
              }}
            </button>
          </div>
        </div>
      </div>
      <h1 class="text-3xl mb-6">
        Ajouter une note (laisser vide si pas nécessaire)
      </h1>
      <textarea
        v-model="note"
        class="w-full h-32 p-3 text-black outline-none rounded-md border-rose border-4"
        placeholder="Ajouter une note"
      ></textarea>
      <p
        class="text-right mb-6"
        :class="noteError ? 'text-red-500' : 'text-gray-300'"
      >
        {{ note.length }}/500
      </p>
    </div>
    <div class="flex-1 flex justify-end">
      <AddAdressForm
        v-if="!closeAddAdress"
        v-on:toClose="(i) => (closeAddAdress = i)"
        :idclient="authStore.user.idclient"
      />
      <div
        class="flex h-fit sticky top-3 flex-col max-w-md p-6 rounded-lg space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 bg-gray-900 text-gray-100"
      >
        <h2 class="text-2xl font-semibold">Votre commande à offrir</h2>
        <ul v-if="items.length > 0" class="flex flex-col pt-4 space-y-2">
          <li v-for="article in items" class="flex items-start justify-between">
            <h3>
              {{ article.name }}
              <span class="text-sm dark:text-violet-400"
                >x{{ article.quantity }}</span
              >
            </h3>
            <div class="text-right">
              <span class="block">{{ article.unit_amount / 100 }}€</span>
            </div>
          </li>
        </ul>
        <div class="pt-4 space-y-2">
          <div>
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>{{ prixTotal }}€</span>
            </div>
          </div>
        </div>
        <div class="pt-4 space-y-2">
          <div class="space-y-6">
            <div class="flex justify-between">
              <span>Total</span>
              <span class="font-semibold">{{ prixTotal }}€</span>
            </div>
            <div class="w-fit flex flex-col gap-3 pt-4">
              Enregistrer les données de paiement ?
              <label
                class="inline-flex w-fit relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  v-model="savePaiment"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose"
                ></div>
                <span
                  class="ml-3 italic w-fit font-bold text-gray-300"
                  >{{
                    savePaiment
                      ? "La carte sera enregistrée"
                      : "La carte ne sera PAS enregistrée"
                  }}</span
                >
              </label>
            </div>
            <button
            @click="confirmPay"
              type="button"
              class="w-full py-2 font-semibold border rounded bg-rose"
            >
              Payer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: all 0.3s ease-in-out !important;
}
</style>
