<template>
     <div>
        <h1 class=" text-center text-2xl"> Besoin d'aide </h1>
      <div class=" flex justify-center mt-3">
         <div class=" w-20 border"></div>
      </div>
      <div class="flex justify-center">
         <p class=" mt-5">Vous êtes un nouveau salarié et vous ne savez pas comment modifier les informations sur le site ? 
            Pas de soucis, vous êtes sur la bonne page</p>
      </div>
      <div>
        <div>
            <h1 class=" text-2xl"> Sommaire </h1>
            <div class="ml-2">
                <div>
                <h1 class="text-xl p-1">Séjours :</h1>
                <div class="ml-4">
                <ul class=" list list-disc list-inside">
                    <li><a href="#ModifSejour">Comment modifier un séjour ?</a></li>
                    <li><a href="#SuppSejour">Comment supprimer un séjour ?</a></li>
                    <li><a href="#VoirSej">Comment voir tous les avis d'un séjour ?</a></li>
                    <li><a href="#RepSej">Comment répondre aux avis d'un séjour ?</a></li>
                    <li><a href="#Promo">Comment appliquer une promotion ?</a></li>
                </ul >
                </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div class="pt-20 flex justify-center">
        <h1 class="text-2xl mb-4 underline underline-offset-4" id="ModifSejour">Comment modifier un séjour ?</h1>
        </div>
        <div class="flex justify-center">
          <p>Pour modifier un séjour, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>
        </div>
        <div class="flex justify-center">
          <p>Voici à quoi ressemble la page :</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
        <div class="flex justify-center">
          <p>Cliquez sur le bouton "Séjours" qui se trouve en début de bandeau.<br>Vous pouvez ensuite choisir le séjour que vous voulez modifier.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/modifier.PNG " />
        <div class="flex justify-center">
          <p>Vous pouvez ajouter/supprimer des hébergements, domaines et activités avec leurs boutons spécifiques.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/modifier3.png " />
        <div class="flex justify-center">
          <p>Pour ajouter un domaine il faut en choisir un parmi la liste donnée et cliquer sur le bouton "Envoyer".</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/modifierdom.png " />
        <div class="flex justify-center">
          <p>Pour modifier un hébergement il faut en choisir une étape cliquée sur le bouton "Choisir", ensuite vous pouvez ajouter et supprimer des hébergements parmi la liste donnée.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/modifierheb.png " />
        <div class="flex justify-center">
          <p>Vous n'avez plus qu'à changer les informations nécessaires et cliquer sur le bouton pour confirmer pour effectuer la modification des informations.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/modifier2.png " />
      </div>

      <div class="solid mt-10"></div>

      <div>
        <div class="pt-20 flex justify-center">
        <h1 class="text-2xl mb-4 underline underline-offset-4" id="SuppSejour ">Comment supprimer un séjour ?</h1>
        </div>
        <div class="flex justify-center">
            <p>Pour supprimer un séjour, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>

        </div>

         <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
         <div class="flex justify-center">
            <p>Cliquez sur le bouton "Séjours" qui se trouve en début de bandeau.<br>Vous pouvez ensuite choisir le séjour que vous voulez supprimer.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/supprimer.png " />
        <div class="flex justify-center">
            <p>Un message de confirmation de la suppression va apparaitre, il suffit de cliquer sur Ok pour effectuer la suppression.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/supprimer2.png " />
      </div>

      <div class="solid mt-10"></div>

      <div>
        <div class="pt-20 flex justify-center" >
        <h1 class="text-2xl mb-4 underline underline-offset-4" id="VoirSej">Comment voir tous les avis d'un séjour ?</h1>
        </div>
        <div class="flex justify-center">
          <p>Pour voir tous les avis d'un séjour, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>
        </div>

        <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
        <div class="flex justify-center">
          <p>Cliquez sur le bouton "Séjours" qui se trouve en début de bandeau.<br>Vous pouvez ensuite choisir le séjour pour lequel vous voulez voir les avis.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/avis.png " />
        <div class="flex justify-center">
          <p>Vous pouvez maintenant voir tous les avis du séjour choisi.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/avis2.png " />
      </div>

      <div class="solid mt-10"></div>

      <div>
        <div class="pt-20 flex justify-center">
        <h1 class="text-2xl mb-4 underline underline-offset-4" id="RepSej">Comment répondre aux avis d'un séjour ?</h1>
        </div>
        <div class="flex justify-center">
            <p>Pour répondre aux avis d'un séjour, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
         <div class="flex justify-center">
            <p>Cliquez sur le bouton "Séjours" qui se trouve en début de bandeau.<br>Vous pouvez ensuite choisir le séjour pour lequel vous voulez voir les avis.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/avis.png " />
        <div class="flex justify-center">
          <p>Vous pouvez maintenant voir tous les avis du séjour choisi.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/avis2.png " />
        <div class="flex justify-center">
          <p>Trouvez un avis et écrivez un message dans la zone de texte, puis cliquez sur le bouton "répondre".<br>Vous verrez normalement votre message publié.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/avis3.png " />
      </div>

      <div class="solid mt-10"></div>

      <div>
        <div class="pt-20 flex justify-center">
        <h1 class="text-2xl mb-4 underline underline-offset-4" id="Promo">Comment appliquer une promotion ?</h1>
        </div>
        <div class="flex justify-center">
            <p>Pour appliquer une promotion, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
        <div class="flex justify-center">
          <p>Cliquez sur le bouton "Séjours" qui se trouve en début de bandeau.<br>Vous pouvez ensuite choisir le séjour pour lequel vous voulez appliquer une promotion.</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/promotion.png " />
        <div class="flex justify-center">
          <p>Vous pouvez ensuite choisir un pourcentage de promotion avec le résultat (promotion appliquée)</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/promotion2.png " />
      </div>


    </div>

    
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ImageAide from '../../../components/ImageAide.vue';
</script>
<style scoped>

.solid {
  border-top: 3px solid rgb(204, 100, 100);
}

</style>