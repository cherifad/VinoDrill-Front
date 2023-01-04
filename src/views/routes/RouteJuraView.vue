<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Jura</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#decouvrir">Découvrir la route des vins du Jura</a></li>
                <li><a href="#itineraires">Les itinéraires sur la route des vins du Jura</a></li>
                <li><a href="#sejours">Séjours sur la route des vins du Jurar</a></li>
                <li><a href="#plus">En savoir plus</a></li>
                <li><a href="#vignobles">Partir vers d'autres vignobles</a></li>
            </ul>
        </div>

        <div id="decouvrir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir la route des vins du Jura</h2>
            <p>
                Le vignoble se situe dans le seul département du Jura et nous offre des cépages uniques au monde sur 100 kilomètres du Nord au Sud. Ces vins sont célèbres... Il suffit de citer : le vin Jaune, vin blanc unique issu du cépage savagnin, vin très sec et surprenant d'une capacité de garde exceptionnelle, le vin de paille, vin liquoreux ou encore le crémant du Jura, vin mousseux et le Macvin, vin de liqueur rouge ou blanc à déguster en apéritif. Dégustez tous ces vins lors d'un <a href="https://www.vinotrip.com/fr/sejours-oenologiques-jura">séjour oenologique dans le Jura</a> !
            </p>
        </div>

        <div id="itineraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Les itinéraires sur la route des vins du Jura</h2>
            
            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Sillonner le vignoble jurassien, autour d'Arbois</p>
                <p>
                    Vous parcourez 45 kilomètres au départ d'Arc-et-Senans dont vous visiterez la célèbre saline royale classée au patrimoine mondial de l'UNESCO, témoin de l'architecture industrielle du 18ème.
                </p>
                <p class="mt-2">
                    Salins-les-Bains suivra avec sa grande saline et son musée du sel puis Montigny-lès-Arsures, ville historique de Pasteur. Vous découvrirez ensuite Arbois, ville du vignoble jurassien, domaines de la maison Henri Maire, de Jacques Tissot, Rolet Père et Fils pour en citer les principaux. Viennent ensuite la fruitière (coopérative en Jura) vinicole et le Château Pécauld qui abrite le musée du vin et de la vigne. Vous vous dirigerez vers Pupillin, capitale du cépage poulsard rouge, ensuite vers Poligny qui est la capitale du comté !
                </p>
            </div>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/D%C3%A9guster%20route%20des%20vins%20Jura.jpg" alt="vins jura" class="mt-5 rounded-lg m-2">
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Circuit de Poligny à Lons-le-Saunier</p>
                <p>
                    Un itinéraire de 45 kilomètres vous attend : vous passerez par St Lothain, Passemans, Château-Chalon avec son AOC vin jaune de grand renom, Voiteur, Le Vernois, riche de nombreux domaines de qualité.
                </p>
                <p class="mt-2">
                    Vous arriverez à Château d'Arlay, domaine viticole de la famille Laguiche qui produit un rouge à base de pinot noir et poursuivrez vers L'Etoile AOC qui produit des vins blancs. Lons-le-Saunier clôturera votre périple, pays de la Vache-qui-rit (qui possède son musée). Vous pourrez bien sûr faire un tour au musée des vignerons de la ville.
                </p>
            </div>
        </div>

        <div id="sejours" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Séjours sur la route des vins du Jura</h2>

            <div class="grid grid-cols-3 mt-2">
                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <img src="https://medias1.vinotrip.com/284-ProductThird/week-end-gastronomie-jura.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Escapade gastronomique Jura</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>3 jours / 2 nuits</p>
                    <p class="text-2xl">304€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/69-escapade-gastronomique-jura">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        4
                    </div>
                    <img src="https://medias1.vinotrip.com/276-ProductThird/sejour-gourmand-jura.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Comté et Vins dans le Jura</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">306€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/64-comte-et-vins-dans-le-jura">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>     

        <div id="plus" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">En savoir plus</h2>

            <ul class=" list list-disc list-inside mt-2">
                <li>Site de l'office de tourisme du Jura : <a href="http://www.jura-tourism.com/">www.jura-tourism.com</a></li>
            </ul>
        </div>

        <div id="vignobles" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Partir vers d'autres vignobles</h2>
            <div class="grid grid-cols-3 mt-2">
                <RouterLink to="/route-alsace">Alsace</RouterLink>
                <RouterLink to="/route-bourgogne">Bourgogne</RouterLink>
                <RouterLink to="/route-bordeaux">Bordeaux</RouterLink>
                <RouterLink to="/route-provence">Provence</RouterLink>
                <RouterLink to="/route-champagne">Champagne</RouterLink>
                <RouterLink to="/route-val">Val de Loire</RouterLink>
                <RouterLink to="/route-languedoc">Languedoc-Roussillon</RouterLink>
                <RouterLink to="/route-rhone">Vallée du Rhône</RouterLink>
                <RouterLink to="/route-beaujolais">Beaujolais</RouterLink>
                <RouterLink to="/route-corse">Corse</RouterLink>
                <RouterLink to="/route-sud">Sud-Ouest</RouterLink>
                <RouterLink to="/route-savoie">Savoie</RouterLink>
                <RouterLink to="/route-ile">Ile-de-France</RouterLink>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
 color: rgb(228, 21, 114);
}
#stitre {
    color: #943f0d;
}
#title {
    color: #CB7169;
}
button a {
    color: black;
}
</style>