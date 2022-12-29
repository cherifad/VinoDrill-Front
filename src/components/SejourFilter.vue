<template>
    <!-- catParticipant -->
    <div>
        <div id="catParticipant" class="flex flex-col gap-2 justify-evenly my-3">
            <div class="flex">
                Par Participant
                <Tooltip text="En cliquant sur l'un des pictogrammes, vous aurez les séjours associés"/>
            </div>
            <div class="flex fisrt-level select-none cursor-pointer items-center gap-3 text-base">
                <div class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer">
                    <img src="../assets/img/couple-svgrepo-com.svg" alt="en Couple" class=" w-4 ">
                </div>
                En Couple
            </div>
            <div class="flex fisrt-level select-none cursor-pointer items-center gap-3 text-base">
                <div class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer">
                    <img src="../assets/img/family-svgrepo-com.svg" alt="en Famille" class=" w-4 ">
                </div>
                En Famille
            </div>
            <div class="flex fisrt-level select-none cursor-pointer items-center gap-3 text-base">
                <div class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer">
                    <img src="../assets/img/group-of-men-svgrepo-com.svg" alt="Entre Amis" class=" w-4 ">
                </div>
                Entre Amis
            </div>
            <div class="flex fisrt-level select-none cursor-pointer items-center gap-3 text-base">
                <div class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer">
                    <img src="../assets/img/person-svgrepo-com.svg" alt="En Solo" class=" w-4 ">
                </div>
                En Solo
            </div>
        </div>
    </div>

    <!-- theme -->
    <div id="theme" class="flex flex-col gap-2 justify-evenly my-3">
        <div class="flex">
                Par Thème
                <Tooltip text="En cliquant sur l'un des pictogrammes, vous aurez les séjours associés"/>
            </div>
        <div class="flex select-none cursor-pointer items-center gap-3 text-base">
            <ion-icon class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer" name="restaurant" alt="Vin & Gastronomie"></ion-icon>
            Vin & Gastronomie
        </div>
        <div class="flex select-none cursor-pointer items-center gap-3 text-base">
            <ion-icon class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer" name="football" alt=""></ion-icon>
            Vin & Sport
        </div>
        <div class="flex select-none cursor-pointer items-center gap-3 text-base">
            <ion-icon class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer" name="library"></ion-icon>
            Vin & Culture
        </div>
        <div class="flex select-none cursor-pointer items-center gap-3 text-base">
            <ion-icon class="p-3 bg-white text-black rounded-lg hover:-translate-y-1 cursor-pointer" name="body"></ion-icon>
            Vin & Bien-être
        </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import Tooltip from './Tooltip.vue';

const destination: any = ref(null);
const catParticipant: any = ref(null);
const participe: any = ref(null);
const theme: any = ref(null);
const filterData: any = ref(null);
const open = ref(false);

// selected filters array
const selectedtheme: any = ref([]);
const selectedcatParticipant: any = ref([]);

// string to filter
const filtertheme: any = ref('');
const filtercatParticipant: any = ref('');

const emit = defineEmits(['filterTheme', 'filterCatParticipant']);

const props = defineProps<{
}>();


onMounted(async () => {    
    axios.get('http://51.83.36.122:5005/api/catparticipant/')
        .then((response) => {
            catParticipant.value = response.data['data'];
        })
        .catch((error) => {
            console.log(error);
        });

    axios.get('http://51.83.36.122:5005/api/theme/')
        .then((response) => {
            theme.value = response.data['data'];
        })
        .catch((error) => {
            console.log(error);
        });

    axios.get('http://51.83.36.122:5005/api/participe')
        .then((response) => {
            participe.value = response.data['data'];
        })
        .catch((error) => {
            console.log(error);
        });

    // displayed options
    const themeOptions = document.getElementById('theme')?.querySelectorAll('div');
    const catParticipantOptions = document.getElementById('catParticipant')?.querySelectorAll('.fisrt-level');

    // click event on theme options to set it as selected
    themeOptions?.forEach((option: any) => {
        option.addEventListener('click', () => {

            // find corresponding theme id in theme array
            toggle(selectedtheme.value, theme.value.find((t: any) => option.innerText.toLowerCase().includes(t.libelletheme.toLowerCase()))?.idtheme);

            // set selected theme in url
            selectedtheme.value.length > 0 ? filtertheme.value = '&theme=' + selectedtheme.value.join(',') : filtertheme.value = '&theme=null';

            emit('filterTheme', filtertheme.value);
            
            option.classList.toggle('bg-rose');
            option.classList.toggle('text-white');
            option.classList.toggle('p-2');
            option.classList.toggle('rounded-lg');
            option.classList.toggle('shadow-lg');
        });
    });

    // click event on catParticipant options to set it as selected
    catParticipantOptions?.forEach((option: any) => {
        option.addEventListener('click', () => {
            // find corresponding catParticipant id in catParticipant dictionary and add it to selectedcatParticipant array   
            toggle(selectedcatParticipant.value, catParticipant.value.find((t: any) => option.innerText.includes(t.nomcategorieparticipant))?.idcategorieparticipant);

            // set selected catParticipant in url
            selectedcatParticipant.value.length > 0 ? filtercatParticipant.value = '&participe=' + selectedcatParticipant.value.join(',') : filtercatParticipant.value = '&participe=null';

            emit('filterCatParticipant', filtercatParticipant.value);
            
            option.classList.toggle('bg-rose');
            option.classList.toggle('text-white');
            option.classList.toggle('p-2');
            option.classList.toggle('rounded-lg');
            option.classList.toggle('shadow-lg');
        });
    });
});

const toggle = (arr, val) => {
    const index = arr.indexOf(val);
    if (index > -1) arr.splice(index, 1);
    else arr.push(val);
};

</script>

<style scoped>
* {
    transition: all 0.2s ease-in-out;
}
</style>