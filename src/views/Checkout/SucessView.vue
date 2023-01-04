<script setup lang="ts">
import Progress from "../../components/Progress.vue";
import config from "../../utils/config";
import axios from "axios";
import { usePanierStore } from "../../stores/panier";
import { ref } from "vue";

// Retrieve the Checkout session ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get("session_id");
const data: any = ref({});
const invoice = ref('');

// clear panier
const panierStore = usePanierStore();
panierStore.clearPanier();

async function getPaymentData(sessionId) {
  axios
    .get(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: {
        Authorization: `Bearer ${config.stripe.sk}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      data.value = response.data;
      getInvoiceData(response.data.invoice);
      // The response data will contain the payment information
    });
}

async function getInvoiceData(invoiceId) {
  axios
    .get(`https://api.stripe.com/v1/invoices/${invoiceId}`, {
      headers: {
        Authorization: `Bearer ${config.stripe.sk}`,
      },
    })
    .then((response) => {
      invoice.value = response.data.hosted_invoice_url;
  // The invoice_pdf field will contain the URL of the invoice PDF
    });
}

getPaymentData(sessionId);
</script>

<template>
  <div v-if="data">
    <Progress :step="5"></Progress>
    <div class="flex flex-col gap-5 justify-center items-center">
        <h1 id="passenger" class=" text-9xl font-bold">Merci !</h1>
        <h1 class="text-3xl">Votre commande de {{data.amount_subtotal / 100}}€ a bien été validée</h1>
        <div class="flex gap-6">
          <RouterLink to="/mon-compte" class="flex justify-center hover:bg-transparent cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 px-5 py-3 bg-rose border-rose border-2 font-semibold">
            Aller sur mon compte
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </RouterLink>
          <a :href="invoice" target="_blank"
                class="flex justify-center hover:bg-transparent cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 px-5 py-3 bg-rose border-rose border-2 font-semibold"
              >
              Telecharger la facture
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
          </a> 
        </div>
    </div> 
    <!-- <h1>{{ data }}</h1> -->
  </div>
  <div v-else>
    <h1>RIEN RIEN RIEN</h1>
    {{ sessionId }}
  </div>
</template>
