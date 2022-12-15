<template>
    <div class="flex min-h-screen">
        <div class=" w-3/5 p-5">
            <div id="img" class="h-full w-full flex flex-col justify-end p-7 gap-5">
                <h1 class=" text-4xl font-bold">Domaine de Lagravière</h1>
                <p class=" font-normal text-2xl">Bordeaux</p>
            </div>
        </div>

        <div class="flex flex-col items-center flex-1">

            <div class=" p-5 flex flex-grid flex-col items-center gap-10" v-auto-animate>
                <h1 id="passenger" class=" text-5xl text-center">{{ login ? 'Bonjour' : 'Créer un compte' }}</h1>
                <div id="toggle" class="flex gap-2 relative bg-rose p-2 rounded-full">
                    <div @click="toggleLogin(false)" class="flex-1 cursor-pointer select-none text-center p-2 text-rouge">
                        <span id="login" class="z-50 active">Connexion</span>
                    </div>
                    <div @click="toggleLogin(true)"
                        class="flex-1 z-50 cursor-pointer select-none text-center p-2 text-rouge">
                        <span id="register">Inscription</span>
                    </div>
                    <div class="absolute w-full flex h-full top-0 left-0 p-2 rounded-full">
                        <div id="logRegBack" class="bg-rouge w-1/2 h-full rounded-full"></div>
                    </div>
                </div>
            </div>
            <div id="form" class="flex flex-col gap-3 w-full px-12" v-auto-animate>

                <!-- Login -->

                <div v-if="login" class="flex flex-col gap-4">
                    <div class="flex w-full flex-col gap-2" v-auto-animate>
                        <label for="email" class="text-white w-full">Email</label>
                        <input v-model="loginForm.email" type="email" id="email"
                            class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                            placeholder="Email">
                        <div v-if="authStore.errors.email && login" v-auto-animate>
                            <p class="text-red-500">{{ authStore.errors.email[0] }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" class="">Mot de passe</label>
                        <div class="relative w-full">
                            <div class="flex absolute z-50 h-full p-2 right-1 top-0 items-center justify-center">
                                <ion-icon @click="show = !show" v-if="!show"  class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-outline"></ion-icon>
                                <ion-icon @click="show = !show" v-else class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-off-outline"></ion-icon>
                            </div>                           
                            <input v-model="loginForm.password" :type="show ? 'text': 'password'" id="password"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Mot de passe">
                        </div>
                        <div v-if="authStore.errors.password && login" v-auto-animate>
                            <p class="text-red-500">{{ authStore.errors.password[0] }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <a class="flex items-center gap-3 bg-white text-black justify-center hover:-translate-y-1 p-4 rounded-xl" href="http://www.iutannecy-deptinfo.fr:5005/login/google">
                            <ion-icon class="text-xl" name="logo-google"></ion-icon>
                            Se connecter avec Google
                        </a>
                        <!-- <a class="flex items-center gap-3 bg-white text-black justify-center hover:-translate-y-1 p-4 rounded-xl" href="http://www.iutannecy-deptinfo.fr:5005/login/facebook">
                            <ion-icon class="text-xl" name="logo-facebook"></ion-icon>
                            Se connecter avec Facebook
                        </a> -->
                        <a class="flex items-center gap-3 bg-white text-black justify-center hover:-translate-y-1 p-4 rounded-xl" href="http://www.iutannecy-deptinfo.fr:5005/login/twitter">
                            <ion-icon class="text-xl" name="logo-twitter"></ion-icon>
                            Se connecter avec Twitter
                        </a>
                    </div>
                    
                </div>

                <!-- Registration -->

                <div v-else class="flex flex-col gap-4">

                    <div v-if="error" class=" bg-red-600 flex items-center text-white text-xl text-center p-3 rounded-xl">
                        <ion-icon class="text-5xl font-bold" name="alert-circle-outline"></ion-icon>
                        Vous devez d'abord créer un compte avant de vous connecter avec {{ socialProvider }} !
                    </div>

                    <div class="flex gap-3">
                        <div @click="registerForm.gender = 'M'" :class="registerForm.gender == 'M' ? 'opacity-100' : 'opacity-60'"
                            class="text-xl font-bold text-black p-3 rounded-md bg-white cursor-pointer select-none">M
                        </div>
                        <div @click="registerForm.gender = 'F'" :class="registerForm.gender == 'M' ? 'opacity-60' : 'opacity-100'"
                            class="text-xl font-bold text-black p-3 rounded-md bg-white cursor-pointer select-none">
                            Mme</div>
                    </div>

                    <div class="flex gap-2">
                        <div class="flex w-full flex-col gap-2">
                            <label for="lastname" class="text-white w-full">Nom</label>
                            <input v-model="registerForm.lastname" type="text" id="lastname"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Durant">
                            <div v-if="authStore.errors.nomclient && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.nomclient[0] }}</p>
                            </div>
                        </div>
                        <div class="flex w-full flex-col gap-2">
                            <label for="firstname" class="text-white w-full">Prénom</label>
                            <input v-model="registerForm.firstname" type="text" id="firstename"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Michel">
                            <div v-if="authStore.errors.prenomclient && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.prenomclient[0] }}</p>
                            </div>
                        </div>
                    </div>


                    <div class="flex w-full flex-col gap-2">
                        <label for="email" class="text-white w-full">Email</label>
                        <input v-model="registerForm.email" type="email" id="email"
                            class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                            placeholder="Email">
                        <div v-if="authStore.errors.emailclient && !login" v-auto-animate>
                            <p class="text-red-500">{{ authStore.errors.emailclient[0] }}</p>
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <div class="flex w-full flex-col gap-2">
                            <label for="birthdate" class="text-white w-full">Date de naissance</label>
                            <input v-model="registerForm.birthdate" type="date" id="birthdate"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                max="12-02-1992">
                            <div v-if="authStore.errors.datenaissance && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.datenaissance[0] }}</p>
                            </div>
                        </div>
                        <!-- <div class="flex w-full flex-col gap-2">
                            <label for="phone" class="text-white w-full">Téléphone</label>
                            <input v-model="registerForm.phone" type="tel" id="phone"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="0658789654">
                            <div v-if="authStore.errors.phone && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.phone[0] }}</p>
                            </div>
                        </div> -->
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="">Mot de passe</label>
                        <div class="relative w-full">
                            <div class="flex absolute z-50 h-full p-2 right-1 top-0 items-center justify-center">
                                <ion-icon @click="show = !show" v-if="!show"  class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-outline"></ion-icon>
                                <ion-icon @click="show = !show" v-else class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-off-outline"></ion-icon>
                            </div>
                            <input v-model="registerForm.password" :type="show ? 'text': 'password'" id="password"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Mot de passe">
                        </div>
                        <div v-if="authStore.errors.motdepasse && !login" v-auto-animate>
                            <p v-for="error in authStore.errors.motdepasse" :key="error" class="text-red-500">{{ error.includes('confirmation') ? null : error }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 relative">
                        <label for="password" class="">Confirmer votre mot de passe</label>
                        <div class="relative w-full">
                            <div class="flex absolute z-50 h-full p-2 right-1 top-0 items-center justify-center">
                                <ion-icon @click="show = !show" v-if="!show"  class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-outline"></ion-icon>
                                <ion-icon @click="show = !show" v-else class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-off-outline"></ion-icon>
                            </div>
                            <input v-model="registerForm.passwordConfirm" :type="show ? 'text': 'password'" id="password"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Mot de passe">
                        </div>
                        <div v-if="authStore.errors.motdepasse && !login" v-auto-animate>
                            <p v-for="error in authStore.errors.motdepasse" :key="error" class="text-red-500">{{ error.includes('confirmation') ? error : null }}</p>
                        </div>
                    </div>
                </div>
                <!-- <RouterLink :to=" login ? '/mot-de-passe-oublie' : login = true">
                    {{ login ? 'Mot de passe oublié ?' : 'Déjà inscrit ? Se connecter' }}
                </RouterLink> -->

                <div class="flex justify-end">
                    <button @click="login ? authStore.login(loginForm.email, loginForm.password)
                     : authStore.register(registerForm.lastname, registerForm.firstname, registerForm.email, registerForm.birthdate, registerForm.gender, registerForm.password, registerForm.passwordConfirm)"
                        class="bg-rose w-fit px-12 rounded-full hover:-translate-y-1 text-white p-2">{{ login ? "Se connecter" : "S'inscrire" }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const dateMinus18 = new Date();

const login = ref(true)
const registerText = ref(null);
const loginText = ref(null);
const logRegBack = ref(null);
const show = ref(false);

// social login errors
const error = ref(false);
const socialProvider = ref(null);

const loginForm = ref({
    email: '',
    password: ''
})

const registerForm = ref({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: 'M',
    birthdate: '',
    phone: ''
})

onMounted(async () => {
    registerText.value = document.getElementById('register')
    loginText.value = document.getElementById('login')
    logRegBack.value = document.getElementById('logRegBack')

    dateMinus18.setFullYear(dateMinus18.getFullYear() - 18);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const errorParam = urlParams.get('error')
    const providerParam = urlParams.get('provider')
    if (providerParam) {
        socialProvider.value = providerParam[0].toUpperCase() + providerParam.slice(1)
    }
    if (errorParam) {
        toggleLogin(true)
        error.value = true
    }
});

const toggleLogin = (registration) => {
    registration ? login.value = false : login.value = true
    if (login.value) {
        registerText.value.classList.remove('active')
        loginText.value.classList.add('active')
        logRegBack.value.style.transform = 'translateX(0)'
    } else {
        registerText.value.classList.add('active')
        loginText.value.classList.remove('active')
        logRegBack.value.style.transform = 'translateX(100%)'
    }
};

</script>

<style scoped>
* {
    transition: all 0.2s ease-in-out;
}

#img {
    background-image: url("../assets/img/vineyard-ga92acf920_1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 29px;
}

#toggle {
    min-width: 330px;
}
.active {
    color: white;
    z-index: 50;
}
</style>