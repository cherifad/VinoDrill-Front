<template v-auto-animate>
    <div v-auto-animate>
        <div class="relative bg-slate-700 p-7 shadow-xl rounded-md">
            <div @click="toggleVisible" name="alert-circle"
                class="absolute text-red-600 bottom-1 right-2 text-xs cursor-pointer">Signaler le commentaire</div>
            <div class="flex justify-between">
                <i>
                    <ion-icon class="text-xl" v-for="i in 5" :name="i <= note ? 'star' : 'star-outline'"></ion-icon>
                </i>
                <span class=" font-medium">{{ toReadableDate(date) }}</span>
            </div>
            <h1 class=" text-xl font-bold text-white">{{ title }}</h1>
            <p class="text-lg text-slate-300">{{ comment }}</p>
        </div>
        
        <!-- pop up element -->
        <div v-if="visible"
            class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div class="relative p-7 w-9/12 bg-slate-300 rounded-lg shadow-lg" v-auto-animate>
                <ion-icon class="absolute top-3 right-3 text-3xl z-50 cursor-pointer text-black" @click="toggleVisible"
                    name="close-circle"></ion-icon>
                <div v-if="!showSuccess">                    
                    <div class="bg-slate-700 p-7 shadow-xl rounded-md">
                        <div class="flex justify-between">
                            <i>
                                <ion-icon class="text-xl" v-for="i in 5" :name="i <= note ? 'star' : 'star-outline'"></ion-icon>
                            </i>
                            <span class=" font-medium">{{ toReadableDate(date) }}</span>
                        </div>
                        <h1 class=" text-xl font-bold dark:text-white">{{ title }}</h1>
                        <p class="text-lg text-slate-300">{{ comment }}</p>
                    </div>
                    <h1 class="mt-5 text-3xl text-black">Qu'est ce qui ne vas pas avec ce commentaire ?</h1>
                    <ul id="list" class="flex gap-2 justify-evenly mt-2">
                        <li @click="setSign('Inapproprié')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg text-xl text-black">Il est inapproprié
                        </li>
                        <li @click="setSign('Inutile')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg text-xl text-black">Il est inutile</li>
                        <li @click="setSign('Faux')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg text-xl text-black">Il est faux</li>
                        <li @click="setSign('Autre')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg text-xl text-black">Autre</li>
                    </ul>
                    <button @click="send" id="btnSignale" class="mt-5 bg-black hover:-translate-y-1 text-white w-full text-center p-3 rounded-lg shadow-lg text-xl">Signaler</button>
                </div>
                <div v-else>
                    <h1 class="mt-5 text-3xl text-black">Merci pour votre signalement !</h1>
                    <p class="mt-5 text-xl text-black">Nous allons étudier votre signalement et nous vous tiendrons au courant de la suite des événements.</p>
                    <button @click="toggleVisible" class="mt-5 bg-black hover:-translate-y-1 text-white w-full text-center p-3 rounded-lg shadow-lg text-xl">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { nextTick, onMounted, ref } from 'vue';
import axios from 'axios';

const avisignale = ref(true);
const signaleComment = ref('');
const showSuccess = ref(false);

const props = defineProps<{
    id: number;
    note: number;
    comment: string;
    date: string;
    title: string;
}>();

const visible = ref(false);
const textarea = ref(false);

const toggleSuccess = () => {
    showSuccess.value = !showSuccess.value;
}

const toggleVisible = () => {
    visible.value = !visible.value;
    showSuccess.value = false;
    nextTick(() => {
        if (visible.value) {
            const btn = document.querySelectorAll('.choice');
            btn.forEach((el) => {
                el.addEventListener('click', () => {
                    el.classList.toggle('btn-active');
                });
            });
        }   
    });
}

const send = async () => {
    axios.put(`/api/avis/${props.id}`, {
                note: props.note,
                commentaire: props.comment,
                dateavis: props.date,
                titreavis: props.title,
                avisignale : avisignale.value,
                typesignalement: signaleComment.value
    })
    toggleSuccess();
}

const setSign = (str) =>{
    if (!signaleComment.value.includes(str))
    {
        if (signaleComment.value == ''){
            signaleComment.value += str;
        } else {
            signaleComment.value += ', ' + str;
        }
    } else {
        signaleComment.value = signaleComment.value.replace(str + ', ', '');
        if (signaleComment.value.includes(str))
            signaleComment.value = signaleComment.value.replace(str, '');
    }
}

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

</script>

<style scoped>
* {
    transition: all 0.3s ease;
}

.btn-active {
    background-color: #000;
    color: #fff;
    transform: scale(1.2);
}
</style>

