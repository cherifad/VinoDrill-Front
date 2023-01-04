<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Sud-Ouest</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#vignoble">Le Sud-Ouest et son vignoble</a></li>
                <li><a href="#weekend">Week-ends sur la route des vins du Sud-Ouest</a></li>
                <li><a href="#appellations">Appellations à découvrir sur la route des vins du Sud-Ouest</a></li>
                <li><a href="#itineraires">Notre sélection d'itinéraires</a></li>
                <li><a href="#plus">Pour aller plus loin</a></li>
                <li><a href="#visiter">Visiter d'autres routes des vins</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Le Sud-Ouest et son vignoble</h2>
            <p>
                La région regroupe des vignobles qui font partie des plus anciens de France. Ces derniers ont longtemps vécu sous l'autorité bordelaise, freinés par la puissance du négoce maritime favorable à celle-ci, privilégiée pour l'approvisionnement de l'Europe du Nord. Le rail et le réseau routier ont permis une reconnaissance, certes tardive mais réelle, des vins haut de gamme du sud-ouest. La région est un véritable musée ampélographique des cépages d'autrefois.
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Week-ends sur la route des vins du Sud-Ouest</h2>

                <div class="grid grid-cols-3 mt-2">
                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
                    <img src="https://medias1.vinotrip.com/266-ProductThird/week-end-vin-golf-pau.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Golf et Vin dans le Sud-Ouest</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">169€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/51-golf-et-vin-dans-le-sud-ouest">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <img src="https://medias1.vinotrip.com/271-ProductThird/week-end-romantique-cahors.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end en amoureux à Cahors</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">440€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/68-week-end-en-amoureux-a-cahors">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/240-ProductThird/week-end-gers.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end œnologique dans le Gers</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">275€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/55-week-end-nologique-dans-le-gers">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <div id="appellations" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Appellations à découvrir sur la route des vins du Sud-Ouest</h2>

            <p>
                Le vaste <a href="https://www.vinotrip.com/fr/sejours-oenologiques-sud-ouest">vignoble du Sud-Ouest</a>, qui s'étend de la frontière espagnole à l'Aveyron, en passant par les vignobles entourant la ville de Toulouse, vous invite à des parcours oenologiques et gastronomiques remarquables.
            </p>
            
            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Route%20des%20vins%20du%20Sud-Ouest.jpg" alt="vignobles sud" class="mt-5 rounded-lg m-2">
            </div>

            <p>
                Pour découvrir les prestigieux vins du Sud-Ouest, partez à la rencontre d'un de ces vignobles :
            </p>
            <ul class=" list list-disc list-inside mt-2">
                <li>Le Bergeracois : la ville et sa maison des vins, Monbazillac et son délicieux vin liquoreux ;</li>
                <li>Côte-de-duras et marmandais : Duras et la cave Berticot, Marmande ;</li>
                <li>Le vignoble de Cahors, un des plus anciens de France ;</li>
                <li>La Gascogne ;</li>
                <li>Le Gaillacois : on y produit un vin parmi les meilleurs du Sud-Ouest, on visitera la ville de Gaillac et surtout la magnifique ville médiévale de Cordes-sur-ciel ;</li>
                <li>Le pays de "la rivière basse" : dégustez le madiran ;</li>
                <li>Vignoble du Jurançon ;</li>
                <li>Vignoble d'Irouléguy : seule appellation basque, aux portes de l'Espagne, on découvrira la ville de Saint-Jean-Pied-de-Port ;</li>
                <li>L'Aveyronnais : autour de Marcillac, une AOC réputée.</li>
            </ul>

        </div>

        <div id="itinéraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Notre sélection d'itinéraires</h2>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Les routes du Cahors</p>
                <p>
                    A partir de la belle ville de Cahors dont la cathédrale mérite une visite, vous suivrez une route qui offre un beau point de vue sur le Lot et passerez à Parnac où la cave coopérative des Côtes-d'Olt fut à l'origine du renouveau du Cahors. Cambayrac, Albas, Grézels, Puy-l'Evêque (à déguster le Clos Triguedina) suivront puis Luzech et Caillac et son château Lagrézette qui produit des cuvées prestigieuses.
                </p>
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Sur la route du Jurançon, au départ de Pau sur 55 kilomètres</p>
                <p>
                    Vous ne pourrez manquer la visite de cette belle ville. A Artiguelouve vous apprécierez chez Pierre Saubot un excellent Jurançon, ce vin blanc liquoreux, moelleux ou sec. Laroin suivra, La chapelle-de-Rousse, Gan et sa cave coopérative, Lasseube. Vous terminerez à Monein et sa confrérie du Jurançon.
                </p>
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Les routes de Gascogne</p>
                <p>
                    De Buzet à Nérac, 23 kilomètres d'un vignoble qui suit le cours de la Garonne, on y distille l'Armagnac. 50 kilomètres ensuite du Château de Pomarède à Condom au cœur de l'armagnac.
                    <br>Vous passerez par Mézin et son musée du liège et du bouchon, Poudenas, Fourcès, Séviac, villa gallo-romaine, Larresingle pour terminer à Condom. Vous poursuivrez sur 75 kilomètres de Condom à Saint-Justin les côtes de Gascogne.
                    <br>Vous dégusterez le château Cassaigne, à Eauze, le château du Tariquet et visiterez le musée archéologique.
                </p>
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Le pays de la rivière basse, sur la route du Madiran</p>
                <p>
                    75 kilomètres au départ de Saint-Mont, à la découverte des AOC Madiran, Saint-Mont et Pacherenc-du-vic-bilh. Vous passerez par Maumusson-Laguian (Château Laffitte-Teston), Aydie, Crouseilles, Madiran, Plaisance pour arriver à Termes-d'Armagnac.
                </p>
            </div>

        </div>

        <div id="plus" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Pour aller plus loin</h2>

            <ul class=" list list-disc list-inside mt-2">
                <li>Page Wikipédia sur le vignoble du Sud-Ouest : <a href="https://fr.wikipedia.org/wiki/Vignoble_du_Sud-Ouest">Vignoble_du_Sud-Ouest</a></li>
                <li>Office de tourisme du Gers : <a href="http://www.tourisme-gers.com/">www.tourisme-gers.com</a> </li>
                <li>Office de tourisme de Cahors : <a href="https://www.tourisme-cahors.fr/">www.tourisme-cahors.fr</a></li>
            </ul>
        </div>

        <div id="visiter" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Visiter d'autres routes des vins</h2>
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