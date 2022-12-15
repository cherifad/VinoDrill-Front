<template>
<div class="padCorp">
   <h1 class=" text-center text-2xl"> Route des Vins </h1>
   <div class=" flex justify-center mt-3">
      <div class=" w-20 border"></div>
   </div>

  <div>
    <div>
      <h2 class=" flex text-3xl mt-10 mb-10" id="title">La Route des Vins ?</h2>
        <p class=" mt-3">La route des vins est une route touristique qui vous plonge au cœur des régions viticoles, à la rencontre du vin bien sûr, des viticulteurs, du vignoble, mais également de la gastronomie, du patrimoine culturel et des autres atouts touristiques régionaux. Le développement de l’œnotourisme, en France et à l’international, a conduit à la création du concept de route des vins, qu’il ait été créé par des organismes institutionnels du tourisme visant à mettre en avant une région viticole ou qu’il s’agisse simplement d’un circuit touristique recommandé par un guide. Cela reste une expérience de visite unique d’un vignoble permettant de concilier découverte du vin et exploration d’une région !
        </p>
        <div class="row pt-3">
            <div class="column">  
              <img src="https://www.vinotrip.com/img/cms/Route%20des%20vins_1.jpg" alt="" width="400">
            </div>
            <div class="column">
              <img src="https://www.vinotrip.com/img/cms/Visite%20route%20des%20vins.jpg" alt="" width="350" >
            </div>
            <div class="column">
              <img src="https://www.vinotrip.com/img/cms/Tourisme%20route%20des%20vins.jpg" alt="" width="400">
            </div>
        </div>
        


      <h2 class=" flex text-3xl mt-10 mb-10" id="title">Les Routes en France</h2>
        <p class=" mt-3">Les routes des vins sillonnent tous les vignobles français. Créées à partir des années 1950, ces itinéraires vous offrent l’opportunité unique de plonger, tête la première, au cœur d’une région viticole : découvertes œnologiques, culturelles et gastronomiques sont au programme.<br>
        Aujourd’hui près de 7,5 millions d’oenotouristes* parcourent les vignobles chaque année : Français et étrangers, débutants et experts, tous les publics se retrouvent pour une balade de caves en caves, de dégustations de vins. De la plus connue comme la <a id="links" target="blank" href="">route des vins d'Alsace</a> à la plus confidentielle, la plus longue à la plus brève, la plus ensoleillée à la plus fraîche, nous vous proposons un petit tour d’horizon des routes des vins de France, à visiter ou à (re)visiter. Les itinéraires des routes des vins de France seront vous charmer, que cela soit en voiture, à pied ou à vélo !
        </p>
       
        
        <img src="..\assets\img\vineyard-ga92acf920_1920.jpg" alt="" width="500" class="pt-3">
         <p class=" text-sm pt-1 italic">
          Source : <a id="links" target="blank" href="https://www.atout-france.fr/">Atout France</a>, Tourisme et Vin - données 2010
        </p>

        <div class="grid grid-cols-2">
          
          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins d'Alsace</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-alsace-france.jpg"  alt="route-alsace"   class="rounded-lg">
              <p class="pl-4">
                Sans doute la plus connue des routes des vins en France, et assurément la plus ancienne  ! Que cela soit à vélo ou en voiture, la routes des vins d'Alsace est parcourue par des  millions de touristes chaque année, en quête de ses grands crus, ses fabuleux cépages, ses   spécificités viticoles (citons les vendanges tardives), ses paysages vallonnés et villages  pittoresques comme Colmar ou Riquewihr. Les vins d'Alsace, principalement blancs, sont   réputés pour leur élégance, fraicheur et finesse.
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/sejour">Découvrir la route des vins d'Alsace</RouterLink>
                </button>
              </div>
            </div>
            
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins de Bourgogne</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-bourgogne-france.jpg"  alt="route-bourgogne"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Sans doute la plus connue des routes des vins en France, et assurément la plus ancienne  ! Que cela soit à vélo ou en voiture, la routes des vins d'Alsace est parcourue par des  millions de touristes chaque année, en quête de ses grands crus, ses fabuleux cépages, ses   spécificités viticoles (citons les vendanges tardives), ses paysages vallonnés et villages  pittoresques comme Colmar ou Riquewihr. Les vins d'Alsace, principalement blancs, sont   réputés pour leur élégance, fraicheur et finesse.
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/sejour">Découvrir la route des vins de Bourgogne</RouterLink>
                </button>
              </div>
            </div>
          </div>


        </div>

        <h2 class=" flex text-3xl mt-10 mb-10" id="title">Les activités incontournables</h2>
          <p class=" mt-3">Tout au long de votre itinéraire, vous irez de vignobles en vignobles, d’appellations en appellations, pour déguster des vins, rencontrer les vignerons et d’autres professionnels du monde viticole, visiter des musées ou des sites spécialisés liés à l’oenotourisme et à la viticulture. L’accueil dans les caves et caveaux ou encore la participation à des ateliers œnologiques dans des propriétés viticoles feront partie des incontournables de votre parcours. Sans oublier bien sûr de prendre le temps de savourer les produits du terroir ! Que cela soit le munster le long de la route des vins d'Alsace, les escargots en Bourgogne, parcourir les routes des vins de France, c'est poursuivre une émerveillement de jour comme de nuit. 
          </p>
        
        <h2 class=" flex text-3xl mt-10 mb-10" id="title">Organiser un séjour</h2>
          <p class=" mt-3">VINOTRIP a construit pour vous des séjours et des <a id="links" target="blank" href="https://www.vinotrip.com/fr/circuits-route-des-vins">circuits sur les routes des vins</a> de France. Vous pouvez également personnaliser, selon vos envies, vos itinéraires, que vous souhaitiez partir à la découverte du Champagne, de l’Alsace, de Bordeaux, du Languedoc-Roussillon, de la Bourgogne, du Val de Loire, ... Les différentes étapes de votre parcours vous feront découvrir les coulisses de la fabrication des vins de la région et vous entraîneront à la rencontre de nos partenaires passionnés, avides de vous faire partager leur savoir. N'hésitez plus à réserver votre séjour oenologique si les routes des vins de France vous font rêver. 
          </p>
        
        <h2 class=" flex text-3xl mt-10 mb-10" id="title">Les vignobles à l'étranger</h2>
          <p class=" mt-3">Tous les pays producteurs de vins proposent des activités culturelles et œnologiques à proximité des vignes. Vous pouvez ainsi parcourir les routes des vins aussi bien en Europe, notamment en Espagne et en Italie, qu’en Amérique du Nord, autour de la Napa Valley en Californie par exemple, en Amérique du Sud à la découverte des vins argentins, ou encore sur le continent africain, notamment en Afrique du Sud autour du très réputé vignoble de Stellenbosch qui jouxte la ville du Cap. 
          </p>
    </div>
  </div>


</div>
  
</template>
<script>

</script>
<style scoped>
  .padCorp{
    padding-top: 7em;
  }
  #title {
  color: #CB7169;
}
#links {
color: rgb(228, 21, 114);
}
.row {
  display: flex;
  justify-content: center;
}

.column {
  padding: 2px;
}

img {
  border-radius: 10px;
}
</style>