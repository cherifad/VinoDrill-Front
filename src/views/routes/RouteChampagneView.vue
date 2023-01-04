<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Champagne</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#visiter">Visiter les routes du Champagne</a></li>
                <li><a href="#regions">Les grandes régions de la Champagne</a></li>
                <li><a href="#weekend">Week-ends sur la route touristiques du Champagne</a></li>
                <li><a href="#itineraires">Quelques itinéraires sur la route touristique du Champagne</a></li>
                <li><a href="#decouvrir">Découvrir la Champagne autrement</a></li>
                <li><a href="#connaitre">Mieux connaître le champagne</a></li>
                <li><a href="#partenaires">Nos partenaires dans le vignoble champenois</a></li>
                <li><a href="#parcourir">Parcourir d'autres routes des vins</a></li>
            </ul>
        </div>

        <div id="visiter" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Visiter les routes du Champagne</h2>
            <p>
                « C'est le seul vin qui laisse la femme belle après boire » ! Qui irait contredire la Marquise de Pompadour parlant du vin de Champagne ? Ruinart 1729, Taittinger 1734, Moët 1772, Clicquot 1772, Pommery 1836, Mumm 1827... Ces noms célèbres, dont les origines ancestrales témoignent du savoir-faire des vignerons au service d'un riche terroir, vous invitent sur les routes de Champagne. Pinot noir, Pinot meunier, Chardonnay sont assemblés pour nous offrir ce vin réputé.
            </p>
            <p class="mt-2">
                Reims, son art gothique, haut lieu de l'histoire de France puisque ville du sacre depuis l'an 816 vous séduira, vous offrant en sus la visite de toutes les grandes maisons de Champagne. Epernay dispute à Reims le titre de capitale du Champagne et sera un autre excellent point de départ pour la découverte de cette région.
            </p>
        </div>

        <div id="regions" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Les grandes régions de la Champagne</h2>
            <p class="mt-5">
                Les grandes régions de Champagne se divisent en 4 : la Montagne de Reims, la Côte des Blancs, la Vallée de la Marne, et la Côte des Bar. Les visites pourraient vous conduire vers Epernay et sa région cernée par les vignes, dans le vaste domaine de la Vallée de la Marne, autour de Bar sur Seine et sur les coteaux de Vitry.
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Week-ends sur la route touristiques du Champagne</h2>

            <div class="grid grid-cols-3 mt-2">
                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/204-ProductThird/week-end-romantique-champagne.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end en amoureux Epernay</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">395€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/29-week-end-en-amoureux-epernay">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/221-ProductThird/coffret-week-end-champagne.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end à offrir - Champagne</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">200€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/38-week-end-a-offrir-champagne">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <img src="https://medias1.vinotrip.com/229-ProductThird/degustations-champagnes-reputes.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end d'exception en Champagne</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">520€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/45-week-end-d-exception-en-champagne">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="itineraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Quelques itinéraires sur la route touristique du Champagne</h2>
            <p>
                Le premier itinéraire, incontournable en Champagne, vous mènera de Reims à Cuis, via Epernay, 92 kilomètres, 1 journée de voiture... avec un passage à Hautvillers où vécut Dom Pérignon ! Un autre circuit que nous vous recommandons part d'Epernay vers Mont Aimé, via Vertus, pour la découverte des Côtes de Blancs.
            </p>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Route%20touristique%20du%20Champagne.jpg" alt="vignoble champagne" class="mt-5 rounded-lg m-2">
            </div>
        </div>

        <div id="decouvrir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir la Champagne autrement</h2>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Sillonner le vignoble champenois à pied</p>
                <p>
                    De Cramant à Vertus, 13 kilomètres à pied, d'un niveau facile ; vous passerez par Avize, le Mesnil sur Oger qui abrite « le Clos du Mesnil », terroir magique de 1,87 hectares de Chardonnay, ceint de murs dès 1698.
                </p>
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Vue imprenable sur les vignes</p>
                <p>
                    En montgolfière au départ de Reims, Sault lès Rethel ou Turqueux, pour découvrir du ciel ces vignobles magnifiques.
                </p>
            </div>
        </div>

        <div id="connaitre" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Mieux connaître le champagne</h2>

            <p>
                La grappe de raisin est vendangée obligatoirement à la main pour que la peau des raisins noirs ne dégage pas de couleur. Les raisins sont pressés et les moûts récoltés fermentent normalement puis sont assemblés. Le vin « tranquille » est ensuite mis en bouteille avec une adjonction de « liqueur de tirage » composée de vin, de levures et de sucre. Celle-ci va faire repartir la fermentation et donner au Champagne ses bulles de gaz carbonique prisonnières dans la bouteille.
            </p>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/D%C3%A9gustation%20route%20du%20Champagne.jpg" alt="vins champagne" class="mt-5 rounded-lg m-2">
            </div>

            <p class="mt-2">
                D'autres opérations suivront : le dégorgement... et d'autres manipulations que vous découvrirez en visitant les caves prestigieuses. N'hésitez plus et faites le tour des vignobles pour mieux connaître le Champagne, son élaboration et ses mystères.
            </p>
        </div>

        <div id="partenaires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Nos partenaires dans le vignoble champenois</h2>
            <p class="mt-2">
                Arrêtez-vous chez nos partenaires, qui vous guideront à merveille au coeur du vignoble.
            </p>

            <h2 class="font-bold mt-5">Hébergements en Champagne</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Domaine Roger Coulon</li>
                <li>Les Avisés</li>
                <li>Château de Rilly</li>
                <li>Hostellerie La briqueterie</li>
                <li>Hotel Jean Moet</li>
                <li>Château de Fère</li>
                <li>Château d'Etoges</li>
            </ul>

            <h2 class="font-bold mt-5">Maisons et domaines champenois partenaires</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Domaine Vranken Pommery</li>
                <li>Domaine Edmont Barnaut</li>
                <li>Domaine J. Telmont</li>
                <li>Maison Moët & Chandon</li>
                <li>Domaine Desruets</li>
                <li>Domaine Philippe Martin</li>
                <li>Domaine de Castellane</li>
                <li>Domaine Selosse</li>
                <li>Domaine Jacquesson</li>
                <li>Champagne Comtesse Lafond</li>
            </ul>

            <h2 class="font-bold mt-5">En savoir plus</h2>
            <p>
                Si vous souhaitez connaître tous les noms des villages traversés et imaginez vos propres itinéraires, vous pouvez également consulter :
            </p>
            <ul class="mt-2">
                <li>Page Wikipédia : <a href="http://fr.wikipedia.org/wiki/Route_touristique_du_Champagne">Route touristique du Champagne</a></li>
                <li>Site de l'office du tourisme de Champagne-Ardenne : <a href="http://www.tourisme-champagne-ardenne.com/">www.tourisme-champagne-ardenne.com</a></li>
            </ul>
        </div>

        <div id="parcourir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Parcourir d'autres routes des vins</h2>
            <div class="grid grid-cols-3 mt-2">
                <RouterLink to="/route-alsace">Alsace</RouterLink>
                <RouterLink to="/route-bourgogne">Bourgogne</RouterLink>
                <RouterLink to="/route-bordeaux">Bordeaux</RouterLink>
                <RouterLink to="/route-provence">Provence</RouterLink>
                <RouterLink to="/route-val">Val de Loire</RouterLink>
                <RouterLink to="/route-languedoc">Languedoc-Roussillon</RouterLink>
                <RouterLink to="/route-rhone">Vallée du Rhône</RouterLink>
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