<template>
    <div v-if="len > 0">
        {{ name }}        
        <input :placeholder="placeholder" class="w-full focus:outline-none border-b-2 border-black p-2 bg-transparent text-black" v-model="searchquery" type="text" list="data" @input="showResultfromQuery">
        <div>
            <ul class="flex gap-2 flex-wrap mt-2">
                <li id="addItems" class="px-3 flex items-center gap-2 transition-all border-2 cursor-pointer hover:text-gray-600 hover:bg-white hover:border-white text-white rounded-full" v-for="single in tempData" @click="addToFilteredData(single)">{{ single }}</li>
            </ul>
        </div>
        <div>
            Donnée filtrée
            <ul class="flex gap-2 flex-wrap">
                <li class="px-3 flex items-center gap-2 transition-all bg-green-500 text-white rounded-full" v-for="single in filteredData">
                    {{ single }}
                    <ion-icon @click="removeToFilteredData(single)" class="hover:scale-110 cursor-pointer" name="close-circle-outline"></ion-icon>
                </li>
            </ul>
        </div> 
    </div> 
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

const props = defineProps<{
    data: string[];
    placeholder: string;
    name: string;
    columnName: string;
}>();

const emit = defineEmits(['filter']);

const searchquery = ref('');
const filteredData: any = ref([]);
const datas = ref(props.data);
const len = props.data.length;
const tempData = ref(props.data);

const addToFilteredData = (item: any) => {
    filteredData.value.push(item);
    datas.value.splice(datas.value.indexOf(item), 1);
    tempData.value = datas.value.sort();
    showResultfromQuery();
};

const removeToFilteredData = (item: any) => {
    datas.value.push(item);
    filteredData.value.splice(filteredData.value.indexOf(item), 1);
    tempData.value = datas.value.sort();
    showResultfromQuery();
};

const showResultfromQuery = () => {
    if (searchquery.value.length > 0) {
        tempData.value = datas.value.filter((item: any) => {
            return item.toLowerCase().includes(searchquery.value.toLowerCase());
        });
    } else {
        tempData.value = props.data;
    }
};

watch(filteredData.value, (val) => {
    emit('filter',filteredData.value);
});

</script>

<style scoped>
#addItems:hover {
    content: "Ajouter" !important;
}
</style>