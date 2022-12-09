<template>
    <div class="flex justify-center flex-col items-center min-h-screen">
        <h1 id="passenger" class=" text-5xl text-center">Mot de passe oublié</h1>
        <div class="flex flex-col gap-2 mt-3" v-auto-animate>
            <label for="email" class="text-white w-full">Email</label>
            <input v-model="email" type="email" id="email" class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                placeholder="Email">
            <div v-if="authStore.errors.email" v-auto-animate>
                <p class="text-red-500">{{ authStore.errors.email[0] }}</p>
            </div>
            <div class="flex justify-between">
                <RouterLink to="/connexion" class="mt-3 cursor-pointer">
                    Se connecter
                </RouterLink>
                <button @click="authStore.forgotPassword(email)" class="bg-rose w-fit px-12 rounded-full hover:-translate-y-1 text-white p-2">
                    Envoyé
                </button>
            </div>
        </div>        
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { ref } from 'vue';
const email = ref(null);

const authStore = useAuthStore();


</script>

<style scoped>
* {
    transition: all 0.3s ease;
}
</style>