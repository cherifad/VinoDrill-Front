<template>
    <div class="h-full">
        <div class="w-full h-full justify-between flex flex-col gap-3 mb-3 items-center">
            <div id="box" class="relative w-full flex-1 border-b-8 border-r-8 border-t-2 border-l-2 border-rose p-5 rounded-lg justify-around flex flex-col gap-3">                 
                <div class="flex gap-5 justify-between">
                    <div class="flex flex-col items-center">
                        <p id="passenger" class="text-2xl font-bold">Référence commande</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ refcommande }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p id="passenger" class="text-2xl font-bold">Date commande</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ toReadableDate(datecommande) }}</p>
                    </div>
                </div>       
                
                <div class="flex gap-5 justify-between mb-3">
                    <div class="flex flex-col items-center">
                        <p id="passenger" class="text-2xl font-bold">Prix</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ prixcommande }} €</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p id="passenger" class="text-2xl font-bold">Quantité</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="text-2xl">{{ quantite }}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p id="passenger" class="text-2xl font-bold">Méthode de paiement</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="capitalize text-2xl">{{ libellepaiement }}</p>
                    </div>
                </div>

                <div v-if="coupon" class="mb-3 flex items-center gap-3 justify-between" :class="coupon.estvalide ? '' : 'opacity-60'">
                    <div class="flex gap-3">
                        <ion-icon name="ticket-outline" class="text-3xl"></ion-icon>
                        <p class="text-xl font-semibold" >{{ coupon.codebonreduction }} <br> 
                            <span class="text-sm">                                
                                {{ coupon.estvalide ? `Valable jusqu'au ${toReadableDate(coupon.datevalidite)}` : 'Déjà utilisé' }}
                            </span>
                        </p>
                    </div>
                    <button @click="copied = copyToClipboard(coupon.codebonreduction)" :disabled="!coupon.estvalide" class="flex w-fit items-center gap-2 border-2 border-rose rounded-lg p-2">
                        <ion-icon name="copy-outline" class="text-xl"></ion-icon>
                        <p class="text-sm whitespace-nowrap">{{ copied ? 'copié !' : 'copier' }}</p>
                    </button>
                </div>

                <div v-if="message" class="rounded-lg">
                    <div class="flex mb-2">
                        <div class=" w-10 border mt-2"></div>
                    </div>
                    Note :
                    <p id="" class="text-sm font-normal">{{ message }}</p>                    
                </div>
            </div>
            <a v-if="invoice" :href="invoice" class="border-b-8 w-full hover:bg-rose hover:border-b-2 hover:border-r-2 flex gap-3 items-center border-r-8 border-t-2 border-l-2 border-rose h-16 justify-center rounded-lg" target="_blank">
                <ion-icon name="document" class="text-xl"></ion-icon>
                Télécharger la facture
            </a>
            <p v-else class="border-b-8 w-full cursor-not-allowed opacity-75 flex gap-3 items-center border-r-8 border-t-2 border-l-2 border-rose h-16 justify-center rounded-lg" target="_blank">
                <ion-icon name="close-circle" class="text-xl"></ion-icon>
                Facture non disponible
            </p>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import config from '../../utils/config';
import { toReadableDate } from '../../utils/functions';

const edit = ref(false);
const invoice = ref('');
const coupon: any = ref(null);
const copied = ref(false);

function copyToClipboard(text: string) {
  var input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
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

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

const props = defineProps<{
    idclient: number;
    refcommande: any;
    datecommande: any;
    message: any;
    prixcommande: number;
    quantite: number;
    libellepaiement: any;
    cheminFacture: any;
    estCheque?: boolean;
    estPassee?: boolean;
}>();

const form = ref({
    idclient: props.idclient,
    refcommande: props.refcommande,
    datecommande: props.datecommande,
    message: props.message,
    prixcommande: props.prixcommande,
    quantite: props.quantite,
    libellepaiement: props.libellepaiement,
});

onMounted(() => {
    // check if cheminFacture is null or contains a http link
    if (props.cheminFacture != null && !props.cheminFacture.includes('http')) {
        getInvoiceData(props.cheminFacture);
    } else {
        invoice.value = props.cheminFacture;
    }

    if (props.estCheque) {
        axios.post('/api/coupon/get', {refcommande: props.refcommande}).then((response) => {
            coupon.value = response.data.coupon;
        });
    }
});

</script>

<style>
input {
    color: white;
}
* {
    transition : all 150ms ease-in-out;
}
</style>