<template>
    <!-- Login -->
    <div class="flex flex-col gap-4">
        <div class="flex w-full flex-col gap-2" v-auto-animate>
            <label for="email" class="text-white w-full">Email</label>
            <input v-model="loginForm.email" type="email" id="email"
                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                placeholder="Email">
            <div v-if="authStore.errors.email" v-auto-animate>
                <p class="text-red-500">{{ authStore.errors.email[0] }}</p>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <label for="password" class="">Mot de passe</label>
            <input v-model="loginForm.password" type="password" id="password"
                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                placeholder="Mot de passe">
            <div v-if="authStore.errors.password" v-auto-animate>
                <p class="text-red-500">{{ authStore.errors.password[0] }}</p>
            </div>
        </div>
    </div>

    <div class="flex justify-end mt-5">
        <button @click="authStore.login(loginForm.email, loginForm.password)"
            class="bg-rose w-fit px-12 rounded-full hover:-translate-y-1 text-white p-2">Se connecter</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const loginForm = ref({
    email: '',
    password: ''
})

</script>

<style scoped>
* {
    transition: all .3s ease-in-out;
}
</style>
