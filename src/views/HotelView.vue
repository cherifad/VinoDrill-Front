<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import apis from '../api';
import LoadComponent from '../components/LoadComponent.vue';
import Popup from '../components/Popup.vue';
import { marked } from 'marked';

const hotel: any = ref(null);
const route = useRoute();
const id = route.params.id;
const descriptionHtml: any = ref(null);

const test: any = ref(null); // test for markdown

const getHotel = async () => {
    const response = await apis.getHotelById(id);
    hotel.value = response.data.data;
    var description = response.data.data.detailpartenaire;
    console.log(description);
    description = description.replace(/   /g, '\n');
    description = description.replace("* ###", '\n* ###');
    console.log(description);
    descriptionHtml.value = description;
    test.value.innerHTML = marked(description);
}

onMounted(getHotel);

</script>

<template>
    <div ref="test">{{ descriptionHtml }}</div>
    <!-- <div v-if="hotel">
        {{ hotel }}
    </div>
    <div v-else>
        <LoadComponent />
    </div> -->
</template>