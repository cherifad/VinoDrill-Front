<template>
    <div v-if="!loading" class="min-h-screen px-32">
        <div class="">
            <div class="grid gap-4 grid-cols-4">
                <div class="gap-4 flex items-center col-span-3">
                    <img :src="sejour.photosejour" :alt="sejour.titresejour + ' image'" class="rounded-lg shadow-lg">
                    <div class="flex-1 text-2xl font-normal">
                        Quelques informations sur le séjour
                        <ul>
                            <li v-if="sejour.nbjour" class="text-lg">Nombre de journée(s) : <span></span>{{ sejour.nbjour }}</li>
                            <li v-if="sejour.nbnuit" class="text-lg">Nombre de nuit(s) : <span></span>{{ sejour.nbnuit }}</li>
                            <li v-if="sejour.libelletemps" class="text-lg">Durée : <span></span>{{ sejour.libelletemps }}</li>
                            <li class="text-lg">Lieu : {{ sejour.destination.libelledestination }}</li>
                            <li class="text-lg">Thème : {{ sejour.theme.libelletheme }}</li>
                        </ul>
                        <div class="flex gap-1 flex-wrap items-center justify-center">                            
                            <a href="#etape" class="p-2 bg-white text-black block w-fit rounded-lg hover:-translate-y-2 mt-5">Voir les étapes</a>
                            <a @click="!getCurrentCartSejour() ? panierStore.addSejour(sejour.idsejour) : addedToCart = true" class="p-2 bg-white select-none cursor-pointer text-black block w-fit rounded-lg hover:-translate-y-2 mt-5">
                                Ajouter au panier <br>
                                <div v-if="getCurrentCartSejour()" class="flex justify-evenly">
                                    <span v-if="!addedToCart" class="text-sm">Déjà dans le panier</span>
                                    <span v-else class="text-sm">Dans le panier !</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ReviewResume v-if="rating" :ratingaverage="rating" :ratingcount="ratingcount" :ratingcountarray="ratingcountarray" />
            </div>
            <div class="text-cyan-500">
              <a href="https://www.vinotrip.com/" target="_blank">En savoir plus</a>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="mt-12 text-5xl" id="passenger">{{ sejour.titresejour }}</h1>
                <div>
                    <p>A partir de</p>
                    <span class="mt-12 text-5xl" id="passenger">{{ sejour.prixsejour }}€/pers</span>
                </div>
            </div>
            <p class="w-full text-xl mt-5"> {{ sejour.descriptionsejour }} </p>
        </div>
        <div>
            
        </div>
        
        <div id="etape" class="flex flex-col gap-3 mb-8">
            <h1 class="mt-5 text-3xl font-bold">Voir les {{ etapes.length }} étapes du séjour</h1>
            <div v-for="etape in etapes" :key="etape.idetape">
                <SingleEtape class="mt-3" :titre="etape.titreetape" :description="etape.descriptionetape" :img="etape.photoetape"/>
                <div id="hebergement" class="flex flex-col w-full items-end before:">
                    <h1 class="mt-5 mb-2 w-11/12 text-2xl font-bold">Hébergement</h1>
                    <SingleHebergement class=" w-11/12" :key="etape.hebergement.idhebergement" :titre="etape.hebergement.libellehebergement" :description="etape.hebergement.descriptionhebergement" :img="etape.hebergement.hotel.photopartenaire"/>
                </div>
            </div>
        </div>
                <h1 class="mt-5 text-3xl font-bold">Chateaux et domaines</h1>
                <div class="mt-11">
                    <SingleVisite class="mt-6" v-for="visite in visites"
                        :key="visite.idvisite"
                        :idtypevisite="visite.idtypevisite"
                        :idpartenaire="visite.idpartenaire"
                        :libellevisite="visite.libellevisite"
                        :descriptionvisite="visite.descriptionvisite"
                        :horairevisite="visite.horairevisite"/>             
                </div>
        <div v-if="reviews.length > 0" id="avis" class="flex flex-col gap-3 mb-8">
            <h1 class="mt-5 text-3xl font-bold">Voir les {{ reviews.length }} avis</h1>
            <SingleComment v-for="review in reviews" :key="review.idavis" :id="review.idavis" :note="review.note" :comment="review.commentaire" :date="review.dateavis" :title="review.titreavis"/>
        </div>

        <div id="related" v-if="relatedSejours">
            <h1 class="my-5 text-3xl font-bold">Voir les {{ relatedSejours.length }} séjours similaires</h1>
            <swiper
                :slidesPerView="4"
                :centeredSlides="false"
                :spaceBetween="30"
                :grabCursor="true"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="sejour in relatedSejours" :key="sejour.idsejour">
                    <router-link class=" w-1/3 px-3 mb-3" :id="sejour.idsejour" :to="{name: 'SingleSejour', params: {id: sejour.idsejour, slug: slugify(sejour.titresejour)}}">
                            <SingleCardSejour
                                :key="sejour.idsejour"
                                :title="sejour.titresejour"
                                :description="sejour.descriptionsejour"
                                :nights="sejour.nbnuit"
                                :days="sejour.nbjour"
                                :image="sejour.photosejour"
                                :price="sejour.prixsejour"
                                :id="sejour.idsejour"
                                :libelleTemps="sejour.libelletemps"
                                :notemoyenne="sejour.notemoyenne"
                            />
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>

        <div id="viewed" v-if="alreadyViewed">
            <h1 class="my-5 text-3xl font-bold">Voir les séjours visités</h1>
            <swiper
                :slidesPerView="4"
                :centeredSlides="false"
                :spaceBetween="30"
                :grabCursor="true"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="sejour in alreadyViewed" :key="sejour.idsejour">
                    <router-link class=" w-1/3 px-3 mb-3" :id="sejour.idsejour" :to="{name: 'SingleSejour', params: {id: sejour.idsejour, slug: slugify(sejour.titresejour)}}">
                        <SingleCardSejour
                            :key="sejour.idsejour"
                            :title="sejour.titresejour"
                            :description="sejour.descriptionsejour"
                            :nights="sejour.nbnuit"
                            :days="sejour.nbjour"
                            :image="sejour.photosejour"
                            :price="sejour.prixsejour"
                            :id="sejour.idsejour"
                            :libelleTemps="sejour.libelletemps"
                            :notemoyenne="sejour.notemoyenne"
                        />
                    </router-link>
                </swiper-slide>
            </swiper>            
        </div>
    </div>
    <div v-else>
        <LoadComponent />
    </div>

</template>

<script setup lang="ts">
// get url params
import { useRoute, RouterLink, onBeforeRouteUpdate } from 'vue-router';
import { onMounted, ref } from 'vue';
import LoadComponent from '../components/LoadComponent.vue';
import axios from 'axios';
import ReviewResume from '../components/ReviewResume.vue';
import SingleComment from '../components/SingleComment.vue';
import SingleEtape from '../components/SingleEtape.vue';
import SingleHebergement from '../components/SingleHebergement.vue';
import { usePanierStore } from '../stores/panier';
import { useViewedStore } from '../stores/viewed';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import SingleVisite from '../components/SingleVisite.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const route = useRoute();
const panierStore = usePanierStore();
const viewedStore = useViewedStore();
const addedToCart = ref(false);

const getCurrentCartSejour = () => {
    const cart = panierStore.sejours;
    console.log(cart)
    const sejour: any = cart.find((item: any) => item.idsejour ? item.idsejour.toString() === route.params.id : false);
    return sejour;
}


const nompartenaire: any = ref(null);
const visites: any = ref(null);

onMounted(async () => {
    axios.get('http://51.83.36.122:5005/api/visite')
    .then((response) => {
        visites.value = response.data['data'];
    })
    .catch((error) => {
        console.log(error);
    });
});


// get slug from url
const props = defineProps(['idsejour']);
const slug = route.params.slug;

// current sejour
const sejour: any = ref(null);
const ratingcount: any = ref(null);
const ratingcountarray: any = ref(null);
const rating: any = ref(null);
const reviews: any = ref(null);
const etapes: any = ref(null);
const domaines: any = ref(null);
const loading = ref(true);

// related sejours
const relatedSejours: any = ref(null);

//already viewed
const alreadyViewed: any = ref(null);

onMounted(async () => {
    getData(route.params.id);
});

onBeforeRouteUpdate(async (to, from) => {
    // prevent page reload if slug is the same
    if (to.params.slug === from.params.slug) {
        return;
    }
    getData(to.params.id);
});

function lisibilite_nombre(nbr)
{
	var nombre = ''+nbr;
	var retour = '';
	var count=0;
	for(var i=nombre.length-1 ; i>=0 ; i--)
	{
		if(count!=0 && count % 3 == 0)
			retour = nombre[i]+' '+retour ;
		else
			retour = nombre[i]+retour ;
		count++;
	}
	return retour;
}

const getData = async (id) => {
    console.log(id);
    viewedStore.addSejour(id);
    loading.value = true;

    //get the current sejour
    axios.get('/api/sejour/' + id + '?avis=true&etape=true&destination=true&theme=true&hebergement=true')
    .then((response) => {
        sejour.value = response.data['data'];
        reviewAnalytics(response.data['data']['avis']);
        reviews.value = response.data['data']['avis'].reverse();
        // reverse array to have the most recent first
        etapes.value = response.data['data']['etapes'].reverse();

        // get the realted sejour if the current is loaded
        axios.get('/api/sejour?destination=' + sejour.value.iddestination + '&limit=5&except=' + id)
        .then((response) => {
            relatedSejours.value = response.data['data'];

            // get the sejour already visited by the user
            axios.get(`/api/sejour?idsejour=${viewedStore.idsejours.join(',')}`)
            .then((response) => {
                alreadyViewed.value = response.data["data"];
            })
        })
        .catch((error) => {
            console.log(error);
        });
    })
    .then(() => {
        // scroll to top with animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        loading.value = false;
    })
    .catch((error) => {
        console.log(error);
    });
}

// generate slug from title
function slugify(string: string) {
    return string
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') // replace & with 'and'
        .replace(/[\s\W-]+/g, '-'); // replace spaces, non-word characters and dashes with a single dash (-)
}

function reviewAnalytics(review: any) {
    ratingcount.value = review.length;
    /* get number of each rating */
    let rating1 = 0;
    let rating2 = 0;
    let rating3 = 0;
    let rating4 = 0;
    let rating5 = 0;
    let ratingaverage = 0;
    for (let i = 0; i < review.length; i++) {
        ratingaverage += review[i].note;
        switch (review[i].note) {
            case 1:
                rating1++;
                break;
            case 2:
                rating2++;
                break;
            case 3:
                rating3++;
                break;
            case 4:
                rating4++;
                break;
            case 5:
                rating5++;
                break;
        }
    }
    rating.value = ratingFormat(ratingaverage / review.length);
    ratingcountarray.value = [rating1, rating2, rating3, rating4, rating5];
    ratingcount.value = review.length;
}

function ratingFormat(x) {
    return Math.round((x + Number.EPSILON) * 10) / 10;
}
</script>

<style scoped>
*{
    transition: all 0.3s ease;
}

#hebergement::before{
  content: "";
  position: absolute;
  width: 0;
  height: 80%;
  border-radius: 100px;
  border-right: 5px solid hsl(228, 33%, 97%);
  top: 10px;
  left: 5%;
}

#visite::before{
  content: "";
  position: absolute;
  width: 0;
  height: 80%;
  border-radius: 100px;
  border-right: 5px solid hsl(228, 33%, 97%);
  top: 10px;
  left: 5%;
}


.swiper {
  width: 100%;
  height: 100%;
}

</style>