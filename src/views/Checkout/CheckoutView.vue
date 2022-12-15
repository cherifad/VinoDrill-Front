<template>
    <div>
        <div id="example1-card" class="w-1/2 bg-white p-4 rounded-xl">
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {loadStripe} from '@stripe/stripe-js';
import config from '../../utils/config';

onMounted(async () => {
    const stripe = await loadStripe(config.stripe.pk);
    var elements = stripe?.elements();

    var card = elements?.create('card', {
        iconStyle: 'solid',
        style: {
        base: {
            iconColor: '#c4f0ff',
            color: 'black',
            fontWeight: 500,
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',

            ':-webkit-autofill': {
            color: '#fce883',
            },
            '::placeholder': {
            color: '#87BBFD',
            },
        },
        invalid: {
            iconColor: 'red',
            color: 'red',
        },
        },
    });
    card?.mount('#example1-card');
});

//   registerElements([card], 'example1');

</script>