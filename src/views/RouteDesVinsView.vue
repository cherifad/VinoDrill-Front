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
        <p class=" text-sm pt-1 italic">
          * Source : <a id="links" target="blank" href="https://www.atout-france.fr/">Atout France</a>, Tourisme et Vin - données 2010
        </p>

        <div class="grid grid-cols-2 mt-5">
          
          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins d'Alsace</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-alsace-france.jpg"  alt="route-alsace"   class="rounded-lg">
              <p class="pl-4">
                Sans doute la plus connue des routes des vins en France, et assurément la plus ancienne  ! Que cela soit à vélo ou en voiture, la routes des vins d'Alsace est parcourue par des  millions de touristes chaque année, en quête de ses grands crus, ses fabuleux cépages, ses   spécificités viticoles (citons les vendanges tardives), ses paysages vallonnés et villages  pittoresques comme Colmar ou Riquewihr. Les vins d'Alsace, principalement blancs, sont   réputés pour leur élégance, fraicheur et finesse.
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-alsace">Découvrir la route des vins d'Alsace</RouterLink>
                </button>
              </div>
            </div>
            
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins de Bourgogne</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-bourgogne-france.jpg"  alt="route-bourgogne"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Une visite des villages les plus renommés (si on vous dit Meursault, Pommard, Chablis, Vougeot, Nuit-Saint-George, Beaune), une route qui parcourt plus de 200 kilomètres entre Chablis et le vignoble Mâconnais… Vous serez parfois surpris d’y entendre parler japonais, chinois, anglais ou portugais, mais le monde entier nous envie les grands crus bourguignons, partageons-les ! Autant de circuit, de dégustations de vins, de domaines viticoles à découvrir le temps d'un week-end. <br><br>
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-bourgogne">Découvrir la route des vins de Bourgogne</RouterLink>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins de Bordeaux</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-bordeaux-france.jpg"  alt="route-bordeaux"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Bordeaux est la terre des vins par excellence. Des châteaux, des grands crus classés (parfois à des tarifs inabordables mais pas uniquement), la Garonne, le Médoc, le Libournais, le Sauternes et les Grave, Saint-Emilion … Voilà ce qui vous attend lors de votre tour du vignoble bordelais, au coeur de la Gironde, découvres les 6 itinéraires des routes des vins de Bordeaux
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-bordeaux">Découvrir la route des vins de Bordeaux</RouterLink>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins de Provence</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-provence-france.jpg"  alt="route-provence"   class="rounded-lg">
              <p class="pl-4 pr-4">
                A n’en pas douter l’un des vignobles les plus ensoleillés, attention au coup de chaud ! Heureusement, la douceur des vins rosés et la souplesse des vins blancs vous seront de précieux alliés à découvrir à travers les coteaux de Aix-en-provence, des vignes du Lubéron ou des Caves du Mont-Ventoux. Un vignoble intimiste dont les appellations méritent d'être découvertes !
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-provence">Découvrir la route des vins de Provence</RouterLink>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route du Champagne</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-champagne-france.jpg"  alt="route-champagne"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Elle se compose de 6 itinéraires pour découvrir le plus célèbre des vins effervescents: les côteaux de Vitry, la vallée de la Marne ou la côtes des Blancs...Autant des parcours touristiques entre Reims, Epernay, pour mieux connaître le Champagne mais aussi la Champagne, ces deux-là étant bien entendu indissociables !
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-champagne">Découvrir la route des vins Champagne</RouterLink>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins du Val de Loire</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-des-vins-chateau.jpg"  alt="route-val-de-loire"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Parcourir l’un des plus grands vignobles de France prend du temps, mais rien ne vous empêche d’y aller par étape. Initiez-vous aux joies du Sancerre, poursuivez avec la Touraine (et ses châteaux), l’Anjou et terminez par le pays nantais et ses muscadets. La vallée de la Loire conjugue ainsi patrimoine culturel avec ses châteaux renaissance et patrimoine viticole d'exception. 
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-val">Découvrir la route des vins du Val de Loire</RouterLink>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins du Languedoc-Roussillon</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-languedoc-roussillon-france.jpg"  alt="route-languedoc-roussillon"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Des itinéraires (souvent) ensoleillés entre vin, montagne, garrigue, méditerranée ! Un véritable spectacle à ciel ouvert pour découvrir l'Hérault, cette route des vins vous mènera de caves en caves de Montpellier, à Pic-Saint-Loup, en passant par le Saint-Chinian ou dégustez les fameux Cabardès. <br><br>
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <RouterLink to="/route-languedoc">Découvrir la route des vins du Languedoc-Roussillon</RouterLink>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins du Rhône</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-rhone-france.jpg"  alt="route-rhône"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Une entente cordiale entre Nord et sud qui réjouira tous les amateurs de vins, de Condrieu à Châteauneuf-du-Pape. Au nord du vignoble, aux coteaux exposés au climat continental, fait face la partie méridionale et ses terres plus arides. La route des vins du Rhône est une escapade qui s'apprécie en nuances à l'exemple de la force du célèbre Côte-Rôtie, ou des vins de Gigondas....
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-vallee-du-rhone">Découvrir la route des vins du Rhône</a>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins du Beaujolais</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-beaujolais-france.jpg"  alt="route-beaujolais"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Le Beaujolais Nouveau, bien sûr, mais pas que ! Vignoble souvent associé à sa production la plus médiatisée, le Beaujolais offre une incroyable diversité aromatique. Sans oublier de mentionner les paysages viticoles parmi les plus beaux de France en plein coeur du Vaux-en-Beaujolais, ...
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-beaujolais">Découvrir la route des vins du Beaujolais</a>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins de Corse</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-des-vins-littoral.jpg"  alt="route-corse"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Sillonner la route des vins de Corse revient à longer la côte, du nord au sud et d’est en ouest. Qu’attendez-vous pour partir ? Que cela soit le vignoble de porto vecchio ou une visite sur la route des vins corse patrimonio, la perle méditérranéénne sera un paradis pour tous les sens. <br><br>
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-corse">Découvrir la route des vins de Corse</a>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins du Sud-Ouest</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-sud-ouest-france.jpg"  alt="route-sud-ouest"   class="rounded-lg">
              <p class="pl-4 pr-4">
                On ne parle plus du bordelais, mais bien des magnifiques vignobles peuplant le vaste territoire qui s’étend des Pyrénées à l’Aveyron, en passant par Toulouse. Vous découvrirez les appellations de Cahors, de Gaillac, de Bergerac, du Madiran, d’Irouléguy, et bien d’autres.
              </p>
              <div class="flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-sud-ouest">Découvrir la route des vins du Sud-Ouest</a>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins du Jura</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-jura-france.jpg"  alt="route-jura"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Très réputée pour son « Vins Jaune » qui a fait la renommée du vignoble jurassien, les itinéraires que nous vous proposons vous entraîneront à Arbois, Poligny et Lons-le-Saunier. <br><br>
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-jura">Découvrir la route des vins du Jura</a>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins de la Savoie</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-savoie-france.jpg"  alt="route-savoie"   class="rounded-lg">
              <p class="pl-4 pr-4">
                Un périple œnologique et touristique autour de 4 départements alpins vous attend. Privilégiez la période hivernale, pour pouvoir déguster la fondue savoyarde avec les vins d’Apremont… ! <br><br><br>
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-savoie">Découvrir la route des vins de la Savoie</a>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-1 mb-5 mr-5">
            <h4 class="flex text-2xl justify-center">Route des vins d'Ile-de-France</h4>
            <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
              <img src="https://www.vinotrip.com/img/cms/route-vins-paris-france.jpg"  alt="route-paris"   class="rounded-lg">
              <p class="pl-4 pr-4">
                L’Ile-de-France, notamment Paris, possède un vignoble fruit d’un héritage historique qui a favorisé l’implantation de vignes à proximité de la capitale, pour désaltérer la cour royale ! Aujourd’hui ne subsistent que quelques parcelles, dont la plupart ont une vocation touristique et pédagogique, comme les dernières vignes de Montmartre. 
              </p>
              <div class=" flex justify-end mr-2">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1   p-2 rounded-xl">
                  <a href="https://www.vinotrip.com/fr/route-des-vins-ile-de-france">Découvrir la route des vins d'Ile-de-France</a>
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
  h4 {
    font-weight: bold;
  }
</style>