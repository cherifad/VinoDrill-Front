<template>
  <div>
     <h1 class=" text-center text-2xl "> Offre Entreprise </h1>
     <div class=" flex justify-center mt-3">
         <div class=" w-20 border"></div>
      </div>
     
     <div id="intro">
       <h2 class=" flex text-2xl justify-center  mt-10 mb-10" id="title">Séjour et évènement d’entreprise autour du vin</h2>
       <p class=" mt-3">Créateur de séjours oenotouristiques et spécialiste de l’évènementiel autour du vin, nous organisons pour vous des séjours d’affaire sur-mesure et des évènements d’entreprise au haut potentiel fédérateur, qui tout en vous immergeant dans les vignobles de France, vous offrent la possibilité de développer vos relations commerciales. En s’adaptant à vos envies, nous vous proposons des solutions clé en main afin d’organiser vos séminaires, teambuilding, évènements ou <RouterLink class="text-sky-500 underline" to="/sejour">week-ends oenologiques</RouterLink> entre collègues.
       </p>
       <p class=" mt-3">Au programme : visites et dégustations à la propriété, hébergement en Château, repas gastronomique, atelier œnologique, cours de dégustation, balade dans les vignes, … De quoi vous assurer une expérience inoubliable dans des hauts-lieux du vin français. Vos séjours se révèleront être de véritables escapades sensorielles en pleine nature, mêlant vins, gastronomie, culture, sport et bien-être ; vos évènements et soirées œnologiques des moments d’exception.
       </p>
     </div>

      <h3 id="title" class="flex justify-center text-2xl  mt-10">Nos offres pour les entreprises</h3>
      
      <div class="flex-container ">
        <div class="flex-child grid grid-cols-2 gap-10 m-11">
          
          <div class="flex flex-col gap-4 mb-5 mr-5"> 
            <h4 class="text-2xl  mb-2">Séminaires</h4>
            <img src="https://www.vinotrip.com/img/cms/seminaire-entreprise-vignoble.jpg" alt="séminaire"   class="rounded-lg">
            <p>Compilez réunions et dégustations de millésimes afin de vivre une expérience stimulante et enrichissante</p>
         </div>
  
         <div class="flex flex-col gap-4 mb-5 mr-5"> 
           <h4 class="text-2xl  mb-2">Teambuilding</h4>
           <img src="https://www.vinotrip.com/img/cms/teambuilding-activite-oenologique.jpg" alt="teambuilding"   class="rounded-lg">
           <p>Fédérez et motivez votre équipe au cours d’une activité œnologique ludique et créative</p>
          </div>

          <div class="flex flex-col gap-4 mb-5 mr-5"> 
           <h4 class="text-2xl  mb-2">Voyages / Incentives</h4>
           <img src="https://www.vinotrip.com/img/cms/incentive-oenologie.jpg" alt="voyages"   class="rounded-lg">
           <p>Valorisez le potentiel de vos salariés ou offrez-vous un moment de découverte avec des collègues.</p>
           </div>

           <div class="flex flex-col gap-4 mb-5 mr-5"> 
           <h4 class="text-2xl  mb-2">Cadeaux d'entreprise</h4>
           <img src="https://www.vinotrip.com/img/cms/cadeau-week-end-oenologique.jpg" alt="cadeaux"   class="rounded-lg">
           <p>Fidélisez vos clients et consolidez vos relations commerciales. <br> Offrez à vos collègues des week-ends oenologiques.</p>
          </div>          
        </div>

        <div class="flex justify-center">
          <button id="button" class=" py-3 px-8 rounded">
            <RouterLink class="text-2xl " to="/contact">Demander un devis</RouterLink>
          </button>
        </div>

      </div>
  </div>
  
</template>


<script> 
</script>

<style scoped>

#intro {
  text-align: center;
}

#title {
  color: #CB7169;
}

#button {
  background-color: #CB7169;
  justify-content: center;
}
#button:hover{
  background-color :#a75e57;
}


</style>