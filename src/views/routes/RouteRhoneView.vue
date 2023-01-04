<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Val de Rhône</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#sillonner">Sillonner la route des vins de la Vallée du Rhône</a></li>
                <li><a href="#appellations">Les appellations de la Vallée du Rhône à découvrir</a></li>
                <li><a href="#weekend">Week-ends sur la route des vins de la Vallée du Rhône</a></li>
                <li><a href="#route">La route des vins du Rhône, entre Vienne et Valence</a></li>
                <li><a href="#itineraires">Itinéraires de découverte des Côtes du Rhône</a></li>
                <li><a href="#partenaires">Nos partenaires dans le vignoble rhodanien</a></li>
                <li><a href="#autres">Visiter les vignobles en France</a></li>
            </ul>
        </div>

        <div id="visiter" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sillonner la route des vins de la Vallée du Rhône</h2>
            <p>
                Le courant du Rhône vous servira de guide, de Vienne à Valence pour la partie septentrionale, de Montélimar à Avignon pour la partie méridionale. Vous traverserez deux entités géographiques bien distinctes : la première marquée par la verticalité de ses coteaux, bien exposés au sud sous climat continental et la seconde, méridionale étageant ses vignes sur une terre plus aride entre oliviers et lavande.
            </p>
            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Route%20des%20vins%20Vall%C3%A9e%20du%20Rh%C3%B4ne.jpg" alt="vignobles" class="mt-5 rounded-lg m-2">
                <img src="https://www.vinotrip.com/img/cms/D%C3%A9gustation%20route%20des%20vins%20du%20Rh%C3%B4ne.jpg" alt="vin" class="mt-5 rounded-lg m-2">
            </div>
        </div>

        <div id="appellations" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Les appellations de la Vallée du Rhône à découvrir</h2>
            <p>
                Des vignobles prestigieux sont issus de ces deux régions. Entre Vienne et Valence, vous dégusterez le Côte-rôtie très recherché, le Condrieu connu pour son raffinement, le Château-grillet, le Saint-joseph et l'Hermitage.
            </p>
            <p class="mt-2">
                Les routes entre Montélimar et Avignon vous feront découvrir les appellations Châteauneuf-du-Pape, Costières-de-Nîmes, Luberon, Gigondas et Vacqueyras. A savoir : une charte de qualité des caves de dégustation a été mise en place dans la Vallée du Rhône, "Inter Rhône".
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Week-ends sur la route des vins de la Vallée du Rhône</h2>

            <div class="grid grid-cols-3 mt-2">
                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/218-ProductThird/week-end-degustation-drome.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end viticole dans la Drôme</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>3 jours / 2 nuits</p>
                    <p class="text-2xl">365€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/36-week-end-viticole-dans-la-drome">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        4
                    </div>
                    <img src="https://medias1.vinotrip.com/219-ProductThird/week-end-romantique-cote-rotie.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Séjour en amoureux en Côte-Rôtie</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">340€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/44-sejour-en-amoureux-en-cote-rotie">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/281-ProductThird/week-end-nature-vallee-rhone.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end oenologique Suze-la Rousse</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">340€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/19-week-end-oenologique-suze-la-rousse">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="route" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">La route des vins du Rhône, entre Vienne et Valence</h2>
            <p>
                Cet itinéraire vous fera parcourir 100 kilomètres. Vienne, cité gallo-romaine, sera le point de départ de votre circuit. Ampuis, capitale de la prestigieuse Côte-rôtie, sera votre première découverte sur la rive droite du Rhône. Ces vignobles qui sont accrochés à des pentes incroyablement abruptes sont les plus anciens de Gaule. Votre route vous emmènera ensuite à Condrieu qui produit un excellent vin blanc issu d'un cépage unique, le viognier.
            </p>
            <p class="mt-2">
                La N86 vers le sud vous conduira à St Michel du Rhône abritant l'AOC Château-Grillet, l'une des plus rares de France car produite par un seul domaine, 3,5 ha d'un seul tenant, vin blanc de viognier.
            </p>
            <p class="mt-2">
                Malleval, village étage et ses maisons du XVIème vous accueilleront au cœur de l'appellation Saint-Joseph. La verticalité des vignes vous surprendra encore. Passés St Désirat, Tournon-sur-Rhône, Tain l'Hermitage, fief des célèbres appellations Hermitage et Crozes-Hermitage, vous recevra. Vous suivrez ensuite une route panoramique pour vous rendre à Saint-Péray (AOC Cornas rouge) puis Valence.
            </p>

        </div>

        <div id="itineraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Itinéraires de découverte des Côtes du Rhône</h2>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Les Côtes-du-rhône-villages, 60 kilomètres</p>
                <p>
                    Vous partirez de Suze-la-Rousse vers Valréas, Saint-Pantaléon-les-vignes, appellation Côtes-du-Rhône-villages, Nyons et son pont romain puis le village de Vinsobres producteur de ce même vin. Cairanne sera votre destination suivante haut-lieu-de l'appellation Côtes-du-Rhône-villages. A noter : le parcours sensoriel de la cave de Cairanne.
                </p>
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Les routes des grandes appellations, 87 kilomètres</p>
                <p>
                    A partir de Rasteau. 2 appellations de vins doux naturels (Rasteau rancio, muscat-de-Beaumes-de-Venise), 5 grands crus : Gigondas, Beaumes-de-Venise, Château-neuf-du-Pape, Tavel et Lirac. De Rasteau vous irez vers Séguret, superbe village puis Gigondas, AOC Gigondas produisant un vin rouge charpenté. Beaumes-de-Venise vous accueillera avec son fameux Muscat pour vous conduire à Châteauneuf-du-Pape, vous dégusterez l'AOC Château-du-Pape, le plus sec de la Vallée du Rhône dans un musée du vin qui mérite une visite. Roquemaure, Tavel puis Lirac (AOC Lirac) pour des rouges assez corsés pour terminer votre périple.
                </p>
                <p class="mt-2">
                    Deux autres circuits dans la partie méridionale de la Vallée du Rhône s'offrent à vous : d'Apt à Cavaillon, sur 41 kilomètres, où vous découvrirez les vignobles du Luberon et la route des Costières-de-Nîmes qui vous conduira sur 60 kilomètres de Saint-Gilles à Montcalm.
                </p>
            </div>
        </div>

        <div id="partenaires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Nos partenaires dans le vignoble rhodanien</h2>
            <p class="mt-2">
                Retrouvez nos partenaires au coeur du <a href="https://www.vinotrip.com/fr/vignoble/vallee-du-rhone">vignoble de la Vallée du Rhône</a>.
            </p>

            <h2 class="font-bold mt-5">Hébergements partenaires</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Domaine de Clairefontaine</li>
                <li>Domaine de la Croix du Verre</li>
            </ul>

            <h2 class="font-bold mt-5">Domaines viticoles partenaires</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Domaine de Montine</li>
                <li>Domaine Niero</li>
                <li>Domaine Boissonnet</li>
                <li>Domaine de la ville rouge</li>
            </ul>

            <h2 class="font-bold mt-5">En savoir plus</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Pour mieux connaître les vins du Rhône : <a href="http://www.vins-rhone.com/">www.vins-rhone.com</a></li>
                <li>Page Wikipédia sur la <a href="https://fr.wikipedia.org/wiki/Route_des_vins_des_C%C3%B4tes_du_Rh%C3%B4ne">Route des vins des Côtes du Rhône</a></li>
            </ul>
        </div>

        <div id="autres" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Visiter les vignobles en France</h2>
            <div class="grid grid-cols-3 mt-2">
                <RouterLink to="/route-alsace">Alsace</RouterLink>
                <RouterLink to="/route-bourgogne">Bourgogne</RouterLink>
                <RouterLink to="/route-bordeaux">Bordeaux</RouterLink>
                <RouterLink to="/route-provence">Provence</RouterLink>
                <RouterLink to="/route-champagne">Champagne</RouterLink>
                <RouterLink to="/route-val">Val de Loire</RouterLink>
                <RouterLink to="/route-languedoc">Languedoc-Roussillon</RouterLink>
                <RouterLink to="/route-beaujolais">Beaujolais</RouterLink>
                <RouterLink to="/route-corse">Corse</RouterLink>
                <RouterLink to="/route-sud">Sud-Ouest</RouterLink>
                <RouterLink to="/route-jura">Jura</RouterLink>
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