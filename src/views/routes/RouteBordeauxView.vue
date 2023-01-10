<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Bordeaux</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#parcourir">Parcourir la route des vins de Bordeaux</a></li>
                <li><a href="#circuits">Les circuits sur la route des vins du bordelais</a></li>
                <li><a href="#idees">Idées séjours sur la route des vins de Bordeaux</a></li>
                <li><a href="#itineraires">Nos itinéraires favoris dans le bordelais</a></li>
                <li><a href="#partenaires">Nos partenaires autour de Bordeaux</a></li>
                <li><a href="#sillonner">Sillonner les routes des vins de France</a></li>
            </ul>
        </div>

        <div id="parcourir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Parcourir la route des vins de Bordeaux</h2>
            <p>
                Parcourir ces routes du Bordelais, c’est découvrir le plus vaste et le plus connu domaine des vins fins du monde… 117 000 ha, 57 appellations, des crus variés et renommés, mais aussi un héritage ancestral et une architecture remarquable. C’est aussi goûter des cépages mythiques, plus diversifiés que dans les autres régions : pour les rouges, le Cabernet Sauvignon, le Cabernet Franc et le Merlot…. Pour les blancs : le Sémillon, le Sauvignon et le Muscadelle.
            </p>
            <div class="flex justify-center mh-50">
                <img src="https://www.vinotrip.com/img/cms/route-des-vins-bordeaux-raisins.jpg" alt="grapes" class="mt-5 rounded-lg m-2">
            </div>

        </div>

        <div id="circuits" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Les circuits sur la route des vins du bordelais</h2>
            <p class="mt-5">
                Visiter le Bordelais, c’est aller à la découverte de 5 grandes routes, toutes jalonnées de noms évocateurs de crus goûtés, dégustés ou même tout simplement « rêvés » d’être dégustés un jour !
            </p>
            
            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">La route des Châteaux</p>
                <p>
                    Dans le Médoc, elle s’étend du nord de Bordeaux sur 80 kilomètres jusqu’à la Pointe de Grave. C’est le domaine des grands crus classés : Pauillac, Saint-Estèphe, Saint-Julien, Margaux, Moulis, ...
                </p>
            </div>
            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">La route des Coteaux</p>
                <p>
                    Le long de l’estuaire de la Garonne ce sentier viticole nous conduit dans la région du Brayais et du Bourgeais.
                </p>
            </div>
            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">La route du Patrimoine</p>
                <p>
                    Découvrez des vignobles de réputation mondiale et des villages classés. C’est le domaine du Pomerol, mais Saint-Emilion présente d’autres atouts puisque ce village est classé au patrimoine mondial de l’UNESCO.
                </p>
            </div>
            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">La route des Bastides</p>
                <p>
                    Visiter des châteaux et des églises romanes, la région de l’entre-deux-mers, entre Dordogne et Garonne, avec ses vins jeunes, rouges, rosés et clairets, … Passez également par Cadillac et Loupiac.
                </p>
            </div>
            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">La route des Graves</p>
                <p>
                    Ce chemin vous emmène jusqu’aux portes de la région landaise. Les terroirs y sont variés produisant des rouges, des blancs et des vins liquoreux Le Sauternes est le plus beau fleuron de cette région.                </p>
            </div>
        </div>

        <div id="idees" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Idées séjours sur la route des vins de Bordeaux</h2>

            <div class="grid grid-cols-3 mt-2">
                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/192-ProductThird/degustation-vins-biologiques-bordeaux.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Séjour dégustation Saint-Emilion</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">225€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl" title="Découvrir l'offre">
                            <RouterLink to="/sejour/6-sejour-degustation-saint-emilion">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/190-ProductThird/atelier-oenologique-bordeaux.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Bordelais - Séjour œnologique</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">161€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                            <RouterLink to="/sejour/3-bordelais-sejour-nologique" title="Découvrir l'offre">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/194-ProductThird/week-end-vin-golf-bordeaux.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Séjour vin et golf en Médoc</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>3 jours / 2 nuits</p>
                    <p class="text-2xl">570€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl" title="Découvrir l'offre">
                            <RouterLink to="/sejour/10-sejour-vin-et-golf-en-medoc">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="itineraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Nos itinéraires favoris dans le bordelais</h2>
            <p>
                Difficile de conseiller certains itinéraires mais nous pourrions en privilégier deux, la route des Châteaux et celle du Patrimoine, l’une permettant la découverte des grands crus et l’autre qui donnera à celui qui l’empruntera une vision globale de ce que peut être le mélange des paysages et du génie humain, maître d’œuvre d’une architecture remarquable. Commencez par faire un arrêt dans la magnifique ville de Bordeaux avant de vous enfoncer au cœur du vignoble, une étape culturelle incontournable de la région.
            </p>
            <p class="mt-2">
                La route des Châteaux et grands crus vous verra quitter Bordeaux et longer l’estuaire de la Garonne, visiter Agassac, Margaux, Pauillac et sa maison des vins et du tourisme. Vous entrerez dans les domaines du Château Mouton Rothschild, Château Lafite-Rothschild, Saint-Estèphe et Moulis-en-Médoc sur la route du retour complétera votre parcours.
            </p>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/route-des-vins-bordeaux-chateau-margaux.jpg" alt="chateau bordeaux" class="mt-5 rounded-lg m-2">
            </div>

            <p class="mt-2">
                La route du Patrimoine conduit à Saint-Emilion à 40 kilomètres à l’est de Bordeaux et la cité vaut à elle seule le détour et du temps : église, ermitage, chapelle, collégiale, cloître des cordeliers et bien sûr la maison du vin. On dénombre désormais 4 Premiers Grands Crus Classés à Saint-Emilion depuis 2012 : Château Pavie et Château Angélus sont venus rejoindre Château Ausone et Château Cheval-Blanc.
            </p>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/route-des-vins-bordeaux-vignoble.jpg" alt="tonneaux bordeaux" class="mt-5 rounded-lg m-2">
            </div>

            
        </div>

        <div id="partenaires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Nos partenaires autour de Bordeaux</h2>
            <p class="mt-2">
                Partez à la rencontre de nos domaines et châteaux partenaire à l’occasion de votre week-end sur la route des vins de Bordeaux, pour découvrir de manière conviviale le Médoc, le Libournais, les Graves et de nombreuses autres appellations.
            </p>

            <h2 class="font-bold mt-5">Dormir dans un domaine bordelais</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Château Féret Lambert</li>
                <li>Château du Payre</li>
                <li>Château Haut-Bailly</li>
                <li>Les sources de Caudalie</li>
                <li>Domaine Rollan de By</li>
                <li>Château de Môle</li>
                <li>Château de Camarsac</li>
                <li>Château La Romaningue</li>
                <li>Clos de la Barbanne</li>
                <li>Château Du Tertre</li>
                <li>Golf du Médoc</li>
                <li>Château Giscours</li>
            </ul>

            <h2 class="font-bold mt-5">Dégustez au cœur du vignoble : caves et châteaux</h2>
            <ul class=" list list-disc list-inside mt-2">
                <li>Château Ferrand</li>
                <li>Château Pape Clément</li>
                <li>Château Smith Haut Lafitte</li>
                <li>Château Lynch Bages</li>
                <li>Château Cos Labory</li>
                <li>Château des Ormes de Pez</li>
                <li>Château Desmirail</li>
                <li>Château La Tour de Bessan</li>
                <li>Château Suduiraut</li>
                <li>Château Soutard</li>
                <li>Château Siaurac</li>
                <li>Château Fonplégade</li>
                <li>Château du Taillan</li>
                <li>Château Saint-Ahon</li>
                <li>Château Tour Saint Christophe</li>
            </ul>

            <h2 class="font-bold mt-5">Pour aller plus loin</h2>
            <ul class="mt-2">
                <li>Site de l’office de tourisme de Saint-Emilion : <a href="www.saint-emilion-tourisme.com">www.saint-emilion-tourisme.com</a></li>
                <li>Site de l'office de tourisme du Médoc : <a href="www.medoc-tourisme.com">www.medoc-tourisme.com</a></li>
                <li>Site de l’office de tourisme de Bordeaux : <a href="fr.bordeaux-tourisme.com">fr.bordeaux-tourisme.com</a></li>
            </ul>
        </div>

        <div id="sillonner" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sillonner les routes des vins de France</h2>
            <div class="grid grid-cols-3 mt-2">
                <RouterLink to="/route-alsace" title="Route Alsace">Alsace</RouterLink>
                <RouterLink to="/route-bourgogne" title="Route Bourgogne">Bourgogne</RouterLink>
                <RouterLink to="/route-provence" title="Route Provence">Provence</RouterLink>
                <RouterLink to="/route-champagne" title="Route Champagne">Champagne</RouterLink>
                <RouterLink to="/route-val" title="Route Val de Loire">Val de Loire</RouterLink>
                <RouterLink to="/route-languedoc" title="Route Languedoc-Roussillon">Languedoc-Roussillon</RouterLink>
                <RouterLink to="/route-rhone" title="Route Vallée du Rhône">Vallée du Rhône</RouterLink>
                <RouterLink to="/route-beaujolais" title="Route Beaujolais">Beaujolais</RouterLink>
                <RouterLink to="/route-corse" title="Route Corse">Corse</RouterLink>
                <RouterLink to="/route-sud" title="Route Sud-Ouest">Sud-Ouest</RouterLink>
                <RouterLink to="/route-jura" title="Route Jura">Jura</RouterLink>
                <RouterLink to="/route-savoie" title="Route Savoie">Savoie</RouterLink>
                <RouterLink to="/route-ile" title="Route Ile-de-France">Ile-de-France</RouterLink>
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