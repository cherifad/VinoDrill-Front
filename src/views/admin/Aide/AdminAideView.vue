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
                    <li>Comment modifier un séjour ?</li>
                    <li> Comment supprimer un séjour ?</li>
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
        <h1 class="text-2xl">Comment modifier un séjour ?</h1>
        </div>
        <div class="flex justify-center">
            <p>Pour modifier un séjour, rendez vous sur la page : <span class="text-sky-500 underline "><RouterLink class="underline underline-offset-2" to="/admin">Dashboard</RouterLink></span></p>
        </div>
        <div class="flex justify-center">
            <p>Voici à quoi ressemble la page :</p>
        </div>
        <ImageAide image="/src/views/admin/Aide/img/Dashboard.PNG " />
      </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ImageAide from '../../../components/ImageAide.vue';
</script>
<style scoped>
</style>