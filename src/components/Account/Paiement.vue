<template>
    <div class="">
        <h1 class="text-2xl font-bold">Mes moyens de paiements</h1>
        <stripe-element-card/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { StripeElementCard } from '@vue-stripe/vue-stripe';


function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}


</script>

<style>
input {
    color: white;
}
</style>