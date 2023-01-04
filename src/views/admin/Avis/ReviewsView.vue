<template>
    <div v-if="reviews" class="flex flex-col gap-6">
        <div v-for="review in reviews" :key="review.idavis" >
            <SingleComment :id="review.idavis" :reponse="review.reponse_admin" :comment="review.commentaire" :note="review.note" :date="review.dateavis" :title="review.titreavis"/>         
            <div v-if="!review.reponse_admin" class="mt-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Réponse</label>
                <textarea v-model="commentaire" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </div>
            <button v-if="!review.reponse_admin" @click="reponse(review.idavis)" class="bg-green-500 hover:bg-green-700 text-white font-bold mt-2 py-2 px-4 rounded">
                Répondre
            </button>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apis from '../../../api';
import SingleComment from '../../../components/SingleComment.vue';
import axios from 'axios';
import {useAuthStore} from '../../../stores/auth';

const userId= useAuthStore();
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const reviews: any = ref(null);
const commentaire  = ref("");

const getReviews = async () => {
    const response = await apis.getReviews(id);
    reviews.value = response.data.data;
}

async function reponse(idavis) {
    await userId.getUser()
    axios.post('/api/avis/reponse',{
        idavis:idavis,
        commentaire:commentaire.value,
        idsejour:id,
        idclient:userId.user.idclient
    }).then((response) => {
        getReviews();
    })
}

onMounted(() => {
    getReviews();
});

</script>