<template>
<div v-if="authStore.user">
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Bonjour {{ authStore.user.nomclient }}</h1>
        <div @click="authStore.logout()" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
            <ion-icon name="log-out-outline"></ion-icon>
            Se déconnecter
        </div>
    </div>

    <div class="flex mt-5 w-full justify-center flex-wrap">
        <ProfileItem 
            class="w-1/3"
            image="/src/assets/img/pin-outline.svg"
            title="Mes adresses"
            @click="choice = 'address'"
            :selected="choice == 'address' ? true : false"
        />
        <ProfileItem
            class="w-1/3"
            image="/src/assets/img/people-outline.svg"
            title="Mes informations"
            @click="choice = 'me'"
            :selected="choice == 'me' ? true : false"
        />
        <ProfileItem
            class="w-1/3"
            image="/src/assets/img/list-outline.svg"
            title="Mes commandes"
            @click="choice = 'commandes'"
            :selected="choice == 'commandes' ? true : false"
        /> 
        <ProfileItem
            class="w-1/3"
            image="/src/assets/img/list-outline.svg"
            title="Mes réservations"
            @click="choice = 'reservations'"
            :selected="choice == 'reservations' ? true : false"
        /> 
        <ProfileItem
            class="w-1/3"
            image="/src/assets/img/people-outline.svg"
            title="Mes moyens de paiements"
            @click="choice = 'paiements'"
            :selected="choice == 'paiements' ? true : false"
        />
        <ProfileItem
            class="w-1/3"
            image="/src/assets/img/people-outline.svg"
            title="Mes avis"
            @click="choice = 'avis'"
            :selected="choice == 'avis' ? true : false"
        />
    </div>

    <AddAdressForm v-if="!closeAddAdress" v-on:toClose="(i) => setCloseAddAdress(i)" :idclient="authStore.user.idclient" />
    
    <div id="content" v-auto-animate>
        <!-- Adresses -->
        <div class="flex mt-3 flex-wrap"  v-if="choice == 'address'">
            <div class="w-full flex gap-3 items-center">
                <h1 class="text-2xl font-bold">Mes adresses</h1>
                <div @click="closeAddAdress = false" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
                    <ion-icon name="add-outline"></ion-icon>
                    Ajouter une adresse
                </div>
            </div>
            <div class="w-full flex" v-if="authStore.user.adresses && authStore.user.adresses.length > 0">
                <div class="min-w-1/3 flex-1 px-3 py-3" v-for="adresse in authStore.user.adresses" :key="adresse.idadresse">
                    <AddresseVue :id="adresse.idadresse" :libelleAdress="adresse.libelleadresse" :rueAdresse="adresse.rueadresse" :villeAdresse="adresse.villeadresse" :codePostalAdresse="adresse.cpadresse" :paysAdresse="adresse.pays" />
                </div>
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucune adresse enregistrée
            </div>
            
        </div>

        <!-- Informations personnelles -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'me'">
            <InfoPerso :nom="authStore.user.nomclient" :prenom="authStore.user.prenomclient" :email="authStore.user.emailclient" :dateDeNaissance="authStore.user.datenaissance" :sexe="authStore.user.sexe" :id="authStore.user.idclient" />
        </div>

        <!-- Mes commandes -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'commandes'">
            <div v-if="authStore.user.commandes.length > 0">
                <div class="min-w-1/3 flex-1 px-3 py-3" v-for="commande in authStore.user.commandes" :key="commande.refcommande">
                    <Commande :refcommande="commande.refcommande" :datecommande="commande.datecommande" :message="commande.message" :prixcommande="commande.prixcommande" :quantite="commande.quantite" :idclient="commande.idclient" :libellepaiement ="commande.paiement.libellepaiement"/>
                </div>
            </div>
             <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucune commande.
            </div>
        </div>

        <!-- Mes réservations -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'reservations'">
            <div class="flex-1" v-if="authStore.user.commandes.length > 0">
                <div class="px-3 w-full py-3" v-for="commande in authStore.user.commandes" :key="commande.refcommande">
                    <div v-for="reservation in commande.reservations" :key="reservation.refcommande">
                        <Reservation :refcommande="reservation.refcommande" :datedebutreservation="reservation.datedebutreservation" :estcadeau="reservation.estcadeau" :idsejour="reservation.idsejour" :nbadulte="reservation.nbadulte" :nbchambre="reservation.nbchambre" :nbenfant="reservation.nbenfant"/>
                    </div>
                </div>
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucune réservation.
            </div>
        </div>

        <!-- Mes paiements -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'paiements'">
            <div v-if="authStore.user.paiements > 0">
                <Paiement    />
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucun moyen de paiement enregistré.
            </div>
        </div>


        <!-- Mes avis -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'avis'">
            <div v-if="avis.length > 0 && avis" class="px-14 py-5">
                <SingleComment v-for="avi in avis" :key="avi.idavis" :id="avi.idavis" :note="avi.note" :date="avi.dateavis" :title="avi.titreavis" :comment="avi.commentaire" />
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucun avis.
            </div>
        </div>
    </div>    
</div>

<div v-else>
    <LoadComponent />
</div>
    
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { onMounted, ref } from 'vue';
import ProfileItem from '../components/ProfileItem.vue';
import LoadComponent from '../components/LoadComponent.vue';
import Commande from '../components/Account/Commande.vue';
import AddresseVue from '../components/Account/Addresse.vue';
import InfoPerso from '../components/Account/InfoPerso.vue';
import Reservation from '../components/Account/Reservation.vue';
import Paiement from '../components/Account/Paiement.vue';
import Avis from '../components/Account/Avis.vue';
import AddAdressForm from '../components/Account/AddAdressForm.vue';
import SingleComment from '../components/SingleComment.vue';
import axios from 'axios';

const authStore: any = useAuthStore();
const choice: any = ref("address");
const addAdressForm: any = ref(false);
const closeAddAdress: any = ref(true);

const avis: any = ref(null);

onMounted(async () => {
    await authStore.getUser();
    axios.get('/api/avis?client=' + authStore.user.idclient).then((response) => {
        avis.value = response.data['data'];
    });
});

const setCloseAddAdress = (i) => {
    console.log("rien");
    closeAddAdress.value = i
}

</script>

<style scoped>
    * {
        font-family: 'Nunito', sans-serif;
    }
</style>