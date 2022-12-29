<template>
    <div>
        <LoadComponentVue />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadComponentVue from '../components/LoadComponent.vue';



const formData = ref({
    cardName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCvv: ''
});
</script>

<style lang="scss">
</style>
