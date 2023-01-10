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


const route = useRoute();
const refchq: any = route.params.ref;
const items: any = [{
    name: "Cheque cadeau de " + config.cheques[refchq] + "€",
    description: "Chèque cadeau valable 2 ans sur tous les séjours du site",
    unit_amount: config.cheques[refchq] * 100,
    currency: "EUR",
    quantity: 1,
    image: "http://www.iutannecy-deptinfo.fr:5006/src/assets/img/favicon.ico",
}];

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
      details: [],
      notecommande: note.value,
      cheque_cadeau: true,
      estcadeau: true,
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
  <div v-if="authStore.user" class="">
    <AddAdressForm v-if="!closeAddAdress" v-on:toClose="(i) => closeAddAdress = i" :idclient="authStore.user.idclient" />
    <div class="flex mt-6">
      <div class="w-1/2 px-3">
        <h1 class="text-3xl mb-6">Adresse de facturation</h1>
        <div class="flex flex-wrap">
          <div class="w-full" v-if="!authStore.user.adresses || authStore.user.adresses.length == 0">
            <button
              @click="closeAddAdress = false"
              :disabled="loading"
              :class="
                loading ? 'opacity-70 cursor-wait' : 'hover:bg-transparent'
              "
              class="flex w-full h-12 justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 bg-rose border-rose border-2 font-semibold"
            >
              {{ loading ? "" : "Ajouter une adresse" }}
              <svg
                v-if="loading"
                class="h-6 w-6 animate-spin"
                viewBox="3 3 18 18"
              >
                <path
                  class="fill-rose"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                ></path>
                <path
                  class="fill-white"
                  d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                ></path>
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
            </button>
          </div>          
          <div
            v-else
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
      <div class="px-3">
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
        <div class="w-fit flex gap-3 text-3xl mb-6 whitespace-nowrap">
          Enregistrer les données de paiement ?
          <label class="inline-flex w-fit relative items-center cursor-pointer">
            <input type="checkbox" v-model="savePaiment" class="sr-only peer" />
            <div
              class="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose"
            ></div>
            <span class="ml-3 italic w-fit text-lg font-bold text-gray-300">{{
              savePaiment
                ? "La carte sera enregistrée"
                : "La carte ne sera PAS enregistrée"
            }}</span>
          </label>
        </div>
        <div>          
          <h1 class="text-3xl mb-6">
            1 article pour un total de {{ config.cheques[refchq] }} €
          </h1>
        </div>
        <button
          @click="confirmPay"
          :disabled="loading"
          :class="loading ? 'opacity-70 cursor-wait' : 'hover:bg-transparent'"
          class="flex w-full py-9 justify-center cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 font-semibold"
          title="Valider et procéder au paiement"
        >
          {{ loading ? "" : `Valider et procéder au paiement de ${config.cheques[refchq]}€` }}
          <svg v-if="loading" class="h-6 w-6 animate-spin" viewBox="3 3 18 18">
            <path
              class="fill-rose"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path
              class="fill-white"
              d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
            ></path>
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
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: all 0.3s ease-in-out !important;
}
</style>
