<template>
    <div>
        <!-- <div id="example1-card" class="w-1/2 bg-white p-4 rounded-xl">
        </div>

        <form id="payment-form" class="w-1/2 bg-white p-4 rounded-xl">
            <div id="card-element">
            A Stripe Element will be inserted here.
            </div>
        
             Used to display form errors.
            <div id="card-errors" class="text-red-900" role="alert"></div>
        
            <button class=" text-black">Submit Payment</button>
        </form> -->

        <form class="form-horizontal" id="payment-form" >
            <div class="mb-3">
                <label class='control-label'>Card Number</label>
                <input v-model="form.card_no" autocomplete='off' class='form-control card-number text-black' size='20' type='text' name="card_no">
            </div>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label class='control-label'>CVV</label>
                    <input v-model="form.cvvNumber" autocomplete='off' class='form-control card-cvc text-black' placeholder='ex. 311' size='4' type='text' name="cvvNumber">
                </div>
                <div class="col-auto">
                    <label class='control-label'>Expiration</label>
                    <input v-model="form.ccExpiryMonth" class='form-control card-expiry-month text-black' placeholder='MM' size='4' type='text' name="ccExpiryMonth">
                </div>
                <div class="col-auto">
                    <label class='control-label'>Year</label>
                    <input v-model="form.ccExpiryYear" class='form-control card-expiry-year text-black' placeholder='YYYY' size='4' type='text' name="ccExpiryYear">
                    <input v-model="form.amount" class='form-control card-expiry-year' placeholder='YYYY' size='4' type='hidden' name="amount">
                </div>
            </div>
            <div class="mb-3" style="padding-top:20px;">
                <h5 class='total' >Total:<span class='amount'>$10</span></h5>
            </div>
            <div @click="pay()" class="mb-3">
                Pay »
            </div>
            <div class="mb-3">
                <div class='alert-danger alert' style="display:none;">
                    Please correct the errors and try again.
                </div>
            </div>
        </form>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {loadStripe} from '@stripe/stripe-js';
import config from '../../utils/config';
import axios from 'axios';

const form = ref({
    card_no: '',
    ccExpiryMonth: '',
    ccExpiryYear: '',
    cvvNumber: '',
    amount: 300,
    description: '',
});

const stripe: any = await loadStripe(config.stripe.pk);
    var elements = stripe?.elements();
  
    // Create the payment element
    var paymentElement = elements.create('card');

onMounted(async () => {
   

    // Mount the element to the DOM
    paymentElement.mount('#card-element');

    
});

function pay() {

    console.log("clicked");

    stripe.createToken(paymentElement).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error
            var errorElement: any = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // Send the token to your server
            console.log(result.token);
            stripeTokenHandler(result.token);
        }
    });
    };

    function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    console.log(form);
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form?.appendChild(hiddenInput);


    // Submit the form
    axios.post('/api/add-money-stripe', form).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

    console.log("passed");
    // (form as HTMLInputElement).submit();
    };

</script>


   