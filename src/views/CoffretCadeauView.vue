<template>
<div id="corps" class="padCorp">
   <h1 class=" text-center text-2xl"> Coffret Cadeau Vin </h1>
   <div class=" flex justify-center mt-3">
      <div class=" w-20 border"></div>
   </div>
  <p class="text-center mt-10">Vous êtes à la recherche d’un cadeau original et convivial autour du vin et de l'oenologie, faites plaisir à vos proches le temps d’une escapade viticole. <br>  Offrez-leur des moments d’exception dans les vignobles français !
  <br></p>
  <p class="text-center mt-5">Ils pourront sélectionner la destination et les dates de leur séjour, soit directement sur le site soit en prenant contact avec notre équipe par téléphone ou mail. <br> Nos coffrets et chèques cadeaux oenologiques sont valables sur tous les séjours (avec possibilité de personnaliser son séjour) et toutes les destinations, durant une période de 18 mois.</p>

   <div class="flex-container justify-center">
      <div class=" flex-child grid grid-cols-3 mt-11 max-w-xs">
         <div class="flex justify-center">
           <div class="flex flex-col gap-4 mb-5 hover:scale-95 transition ease-in-out shadow-2xl shadow-black rounded-lg">
             <img src="https://images.pexels.com/photos/8472743/pexels-photo-8472743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="rounded-xl max-w-xs">
           </div>
           <div>
         </div>
         </div>
      </div>
      <div class=" flex-child grid grid-cols-3 mt-11 max-w-xs pl-4">
         <div class="flex justify-center">
           <div class="flex flex-col gap-4 mb-5 hover:scale-95 transition ease-in-out shadow-2xl shadow-black pt-24 rounded-lg" >
             <h1 class="text-center text-2xl font-bold pl-4 ">Coffret Cadeau</h1>
             <p class="limites pt-10 pl-4">L'option <span class=" font-bold"> Offrir Cadeau</span> vous permet de choisir ce que vous voulez parmis notre catalogue pour l'offrir à un proche. <br><br> Pour ce faire il faut ajouter un séjour à votre panier et sélectionner l'option <span class=" font-bold">"Offrir en tant que cadeau"</span> pendant l'achat.</p>
           </div>
           <div>
         </div>
         </div>
      </div>
    </div>
<div class="flex-container justify-center pt-10">
       <button type="button"  class="bg-red-900 hover:bg-red-800 text-white font-bold py-5 px-10 rounded"  id="lien">Voir les séjours</button>
</div>
</div>
  
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(() => {
    let button = document.querySelector('#lien');
    button?.addEventListener('click', () => {
        window.location.href = '/sejour';
    })})
</script>

  <style scoped>
  .padCorp{
    padding-top: 7em;
  }
.textlimites{
    line-height: 16px;
    max-width: 400px;
    text-overflow: ellipsis;
  }
.flex-container {
    display: flex;
}

.flex-child {
  display: flex;
    flex: 1; 
}  
.flex-child:first-child {
    margin-right: 20px;
} 

#cookie-container{
  position: absolute;
  font-size: 14px;
  width: 70vw;
  max-width: 42.85em;
  background: #5e4242;
  box-shadow: 0 0 2em #5e424279;
  font-family: "Poppins", sans-serif;
  text-align: justify;
  line-height: 1.8em;
  padding: 2em 1.4em;
  border-radius: 6px;
  transition: all 0.5s ease-in;
  bottom: 0.1em;
left: 62%;
}
#detail-pop{
  text-align: justify;
  z-index: +1;
  position:fixed;
  font-size: 14px;
  max-width: 80em;
  background: #5e4242;
  box-shadow: 0 0 2em #5e424279;
  font-family: "Poppins", sans-serif;
  line-height: 1.8em;
  padding: 4em 3.4em;
  border-radius: 6px;
  transition: all 0.5s ease-in;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#detail-pop p{
text-align: center;
margin: 1.4em 0;
}
.blurr{
  filter: blur(8px);
}
.collapse{
  visibility: collapse;
}
.hide{
visibility: hidden;

}
.show{
visibility: visible;
}

#cookie-container img{
  display: block;
  width: 3.75em;
  transform: translateZ(0);
  position: relative;
  margin: auto;
}
#cookie-container p{
text-align: center;
margin: 1.4em 0;
}
a{
color: rgb(228, 21, 114);
}
.btn{
  background: pink;
  border:0;
  color: white;
  padding: 12px 48px;
  font-size: 18px;
  border-radius: 8px;
  position: relative;
  margin: auto;
  margin-left: 6em;
}
.btnn{
  background: pink;
  border:0;
  color: white;
  padding: 12px 48px;
  font-size: 18px;
  border-radius: 8px;
  margin: auto;
  margin-left: 38%;
}
#lien{
  background-color :#CB7169;
}
#lien:hover{
  background-color :#a75e57;
}

  </style>