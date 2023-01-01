<script setup lang="ts">
import Progress from "../../components/Progress.vue";
import config from "../../utils/config";
import axios from "axios";

import Stripe from "stripe";
import { ref } from "vue";

// Retrieve the Checkout session ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get("session_id");
const data = ref({});
const invoice = ref('');

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
    <h1>RIEN RIEN RIEN</h1>
    <h1>{{ data }}</h1>
    <a :href="invoice" target="_blank"
          class="flex w-full justify-center hover:bg-transparent cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 font-semibold"
        >
        Telecharger la facture
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a> 
  </div>
  <div v-else>
    <h1>RIEN RIEN RIEN</h1>
    {{ sessionId }}
  </div>
</template>
