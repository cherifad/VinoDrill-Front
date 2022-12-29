<template>
    <div class="min-h-fit mb-10">
        <div v-if="mesFavoris && lenghtFavoris > 0" class="px-14 py-5">
            <div class="flex flex-wrap justify-center">
                <div v-for="sejour in mesFavoris" :key="sejour.idsejour" class="px-2 py-2 w-1/3 mb-20" >
                    <RouterLink :to="{ name: 'SingleSejour', params: { id: sejour.idsejour, slug: slugify(sejour.titresejour) }}">
                        <SingleCardSejour :title="sejour.titresejour"
                                    :description="sejour.descriptionsejour" :nights="sejour.nbnuit" :days="sejour.nbjour"
                                    :image="sejour.photosejour" :price="sejour.prixsejour" :id="sejour.idsejour"
                                    :libelleTemps="sejour.libelletemps" :notemoyenne="sejour.notemoyenne" />
                    </RouterLink>
                    <div class="flex justify-center h-fit">
                        <span @click="removeSejour(sejour.idsejour)" class="cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">Supprimer</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-2xl w-full font-bold text-center mt-10">
            Vous n'avez aucun séjour en favoris.
        </div>
    </div>    
</template>

<script setup lang="ts">
import { useLikesStore } from '../stores/likes';
import { onMounted, ref } from 'vue';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import axios from 'axios';
import { slugify } from '../utils/functions';

const likesStore = useLikesStore();
const mesFavoris: any = ref([]);
const lenghtFavoris = likesStore.total;

likesStore.sejours.forEach(element => {
    if (element.idsejour) {
        console.log("element", element.idsejour)
        axios.get('/api/sejour/' + element.idsejour)
        .then((response) => {
            console.log(response.data['data'])
            mesFavoris.value.push(response.data['data'])
        })
        .catch((error) => {
            console.log(error);
        });
    };
});

const removeSejour = (id: number) => {
    if (confirm('Voulez-vous vraiment supprimer ce séjour de vos favoris ?')) {
        likesStore.removeSejour(id);
        window.location.reload();
    }
}
</script>