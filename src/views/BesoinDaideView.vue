<template>
    <div>
        <h1 class=" text-center text-2xl"> Besoin d'aide </h1>
      <div class=" flex justify-center mt-3">
         <div class=" w-20 border"></div>
      </div>
      <div>
         <div class="">
            <p class="text-center mt-5 text-lg">Vous vous êtes perdu sur le site ? Pas de soucis, vous êtes sur la bonne    page !<br></p>
            <p class="text-center  mt-2 text-sm">Voici les problèmes les plus courants sur notre site avec leurs solutions, si votre problème ne peut se résoudre grace à cette page nous vous invitons à nous contacter par votre page <span class="text-sky-500 underline "><RouterLink to="/contact">Contact</RouterLink></span>.</p>
         </div>
         <div class="text-center">
            <ul class="inline-block text-left mt-10 list-disc list-inside text-xl">
               <li><a href="#ModifyInfo">Modifier mes informations personnelles</a></li>
               <li><a href="#ContactPage">Envoyer un mail depuis la page Contact</a></li>
               <li><a href="#Panier">Ajouter/Modifier un séjour dans mon panier</a></li>
               <li><a href="#Payer">Payer pour finaliser ma commande</a></li>
            </ul>
         </div>
         <div>
            <h2 class=" flex text-3xl mt-10 mb-10 title" id="ModifyInfo">Modifier mes informations personnelles</h2>
            <p>Pour modifier mes informations personnelles je dois :</p>
            <ul class="list-decimal list-inside ml-5 mt-3">
               <li>Accéder à la page « <span class="text-sky-500 underline "><RouterLink to="/mon-compte">Mon compte</RouterLink></span> »</li>
               <img class="w-1/2 p-5" src="../assets/img/screen/ModifInfoPerso1.png" alt="img">
               <li>Cliquer sur l'option « Mes informations »</li>
               <li>Cliquer sur l'option « Modifier mes informations »</li>
               <li>Changer les informations voulues</li>
               <li class="pb-5">Cliquer sur l'option « Enregistrer les modifications »</li>
               <img class="w-1/2 p-7 border-solid border-yellow-500 border-2" src="../assets/img/screen/ModifInfoPerso2.png" alt="img">
            </ul>
            <p class="mt-3">Une fois cela fait vous pouvez constater les changements <span class="font-bold">immédiatement</span> , si ce n'est pas le cas attendez un moment avant de réessayer. <br> Si le problème est non résolu et persiste contactez-nous depuis la page <span class="text-sky-500 underline "><RouterLink to="/contact">Contact</RouterLink></span>.</p>
         </div>
         <div>
            <h2 class=" flex text-3xl mt-10 mb-10 title" id="ContactPage">Utiliser la page Contact</h2>
            <p>Pour pouvoir contacter VinoDrill je dois :</p>
            <ul class="list-decimal list-inside ml-5 mt-3">
               <li>Depuis la page « Contact » remplir tout les champs obligatoires (seul référence commande ne l'est pas).</li>
               <li class="pb-5">Ne pas oublier de cocher la case de connaissance de la <span class="text-sky-500 underline "><RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink></span></li>
               <img class="w-1/2 p-7 border-solid border-yellow-500 border-2" src="../assets/img/screen/Contacter.png" alt="img">
            </ul>
            <p class="mt-3">Une fois cela fait vous pouvez constater le séjour choisi dans votre <span class="text-sky-500 underline "><RouterLink to="/mon-panier">panier</RouterLink></span>, si ce n'est pas le cas attendez un moment avant de réessayer. <br> Si le problème est non résolu et persiste contactez-nous depuis la page <span class="text-sky-500 underline "><RouterLink to="/contact">Contact</RouterLink></span>.</p>
         </div>
         <div>
            <h2 class=" flex text-3xl mt-10 mb-10 title" id="Panier">Ajouter/Modifier un séjour dans mon panier</h2>
            <p>Pour ajouter ou modifier un séjour dans mon panier je dois :</p>
            <ul class="list-decimal list-inside ml-5 mt-3">
               <li class="pb-5">Depuis la page « Séjour » selectionnez un séjour et ajoutez le au panier.
                     <Tooltip text="Une fois un séjour dans le panier un message «Déja dans le panier» apparait." />
               </li>
               <img class="w-1/2 p-7 border-solid border-yellow-500 border-2" src="../assets/img/screen/sejour.png" alt="img">
            </ul>
            <p class="mt-3">Une fois cela fait vous pouvez constater le séjour choisi dans votre <span class="text-sky-500 underline "><RouterLink to="/mon-panier">panier</RouterLink></span>, si ce n'est pas le cas attendez un moment avant de réessayer. <br> Si le problème est non résolu et persiste contactez-nous depuis la page <span class="text-sky-500 underline "><RouterLink to="/contact">Contact</RouterLink></span>.</p>
         </div>
         <div>
            <h2 class=" flex text-3xl mt-10 mb-10 title" id="Offrir">Payer pour finaliser ma commande</h2>
            <p>Pour payer et finaliser ma commande je dois :</p>
            <ul class="list-decimal list-inside ml-5 mt-3">
               <li>Avoir <a href="#Panier" class="underline">ajouté au moins un séjour</a>  et avoir enregistré une adresse</li>
               <li>Cliquer sur l'icone du <span class="text-sky-500 underline "><RouterLink to="/mon-panier">Panier</RouterLink></span></li>
               <img class="w-1/2 p-5" src="../assets/img/screen/Payer1.png" alt="img">
               <li>Ajouter une date pour chaque séjour et modifier les informations si nécessaire</li>
               <li class="pb-5">Cliquer sur le boutton « Payer »</li>
               <img class="w-1/2 p-7 border-solid border-yellow-500 border-2" src="../assets/img/screen/Payer2.png" alt="img">
               <li class="pt-5 pb-5">Suivre le site et choisir une adresse précédemment défini dans la seconde partie du paiement.</li>
               <img class="w-1/2 p-7 border-solid border-yellow-500 border-2" src="../assets/img/screen/Payer3.png" alt="img">
            </ul>
            <p class="mt-3">Une fois cela fait vous pouvez constater votre commande et télécharger sa facture sous format PDF, si ce n'est pas le cas attendez un moment avant de réessayer. <br> Si le problème est non résolu et persiste contactez-nous depuis la page <span class="text-sky-500 underline "><RouterLink to="/contact">Contact</RouterLink></span>.</p>
         </div>
      </div>
    </div>
    
</template>

<script setup lang="ts">
import Tooltip from '../components/Tooltip.vue';
</script>

<style>
  .title {
    color: #CB7169;
  }
</style>