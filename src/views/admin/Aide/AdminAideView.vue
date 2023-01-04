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
                    <li><a href="ModifSejour">Comment modifier un séjour ?</a></li>
                    <li><a href="SuppSejour">Comment supprimer un séjour ?</a></li>
                    <li>Comment voir tous les avis d'un séjour ?</li>
                    <li>Comment répondre aux avis d'un séjour ?</li>
                    <li>Comment mettre une promotion ?</li>
                </ul >
                </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div class="pt-20 flex justify-center">
        <h1 class="text-2xl mb-4" id="ModifSejour">Comment modifier un séjour ?</h1>
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
      </div>


      <div class="solid mt-10"></div>


       <div>
        <div class="pt-20 flex justify-center">
        <h1 class="text-2xl mb-4" id="SuppSejour">Comment supprimer un séjour ?</h1>
        </div>
        <div class="flex justify-center">
            <p>Pour supprimer un séjour, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>
            
        </div>
        
         <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
         <div class="flex justify-center">
            <p>Cliquez sur le bouton "Séjours" qui se trouve en début de bandeau.</p>
        </div>
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