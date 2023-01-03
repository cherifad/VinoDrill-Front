<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Corse</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#pas">Premiers pas dans le vignoble Corse</a></li>
                <li><a href="#parcourir">Parcourir la route des vins de Corse</a></li>
                <li><a href="#itineraires">Quelques itinéraires à découvrir</a></li>
                <li><a href="#plus">En savoir plus</a></li>
                <li><a href="#visiter">Visiter les régions viticoles</a></li>
            </ul>
        </div>

        <div id="pas" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Premiers pas dans le vignoble Corse</h2>
            <p>
                Un terroir à nul autre pareil ! Comment pourrait-il en être autrement d'une île qui culmine à 2 000 mètres au milieu de la Méditerranée ? Le vignoble corse jouit d'une situation exceptionnelle, entre mer et montagne, et bénéficie d'un climat méditerranéen et d'un ensoleillement incroyable (environ 3 000 heures de soleil par an), sur une surface de près de 3 000 km².
            </p>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Route%20des%20vins%20Corse.jpg" alt="corse" class="mt-5 rounded-lg m-2">
            </div>

            <p class="mt-2">
                Trois principaux cépages produisent ces vins de soleil : Niellucio, Sciaccarellu et Vermentinu, appelé parfois malvoisie de Corse pour les blancs. On dénombre 9 Appellations d'Origine Protégée, parmi lesquels, le premier d'entre eux, en 1968, le Patrimonio. Citons également l'AOP Ajaccio, Corse Calvi, Corse Coteaux du Cap Corse, ... Sans oublier les Indications Géographiques Protégées qui représentent la moitié de la production de vins de l'Ile de Beauté. Votre séjour à la découverte du vignoble et de ses vignerons peut débuter !
            </p>
        </div>

        <div id="parcourir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Parcourir la route des vins de Corse</h2>
            <p>
                La route des vins de l'Ile de Beauté vous emmènera des coteaux du Cap Corse au nord jusqu'aux vins de Porto-Vecchio et de Figari au sud, en passant par Calvi et Ajaccio. Il vous suffit de longer le littoral pour faire le tour des vignobles !
                <br>De nombreux domaines viticoles vous accueillent pour vous faire déguster leurs vins, vous faire découvrir les méthodes de vinification et vous parler de leur héritage et de leurs valeurs. Il est à noter par ailleurs qu'une grande majorité des vignerons en Corse sont des femmes, une autre caractéristique de ce terroir unique.
            </p>
            <p class="mt-2">
                Laissez-vous charmer par les paysages de la région, sa gastronomie (lonzu, prisuttu, fromage brocciu, ...). Le patrimoine culturel est à découvrir lors de votre circuit au cœur des vignobles : ne manquez pas de vous arrêter visiter le port de Centuri, la tour de Macinaggio, la citadelle de Calvi, le golfe de Saint-Laurent, les villes de Bastia, Bonifacio, Patrimonio, ... La liste est encore longue. Vous serez éblouis par les richesses culturelles de l'île.

            </p>
        </div>

        <div id="itinéraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Quelques itinéraires à découvrir</h2>
            <p>
                Suivez la route des vins en longeant le littoral, pour un voyage riche en découverte œnologique, gastronomique et culturelle :
            </p>

            <ul class=" list list-disc list-inside mt-2">
                <li>A la découverte du Cap Corse, de Luri à Macinaggio sur 53 kilomètres. Vous découvrirez Pino, Centuri, l'un des plus beaux villages du Cap Corse, Rogliano, Tomino et son panorama, et enfin Macinaggio, port et station balnéaire.</li>
                <li>Le vignoble du Patrimonio au nord de l'île, sur 60 kilomètres, de Saint-Florent à Patrimonio en passant par Oletta.</li>
                <li>Le vignoble de la Balagne vous conduira de Calvi à Lavatoggio sur 63 kilomètres. Vous ne manquerez pas la visite de la citadelle de Calvi Lumio, le couvent de Corbara, Pigna, Sant'Antonino et Feliceto pour arriver à votre terminus.</li>
                <li>Le vignoble de Porto-Vecchio sur 46 kilomètres jusqu'à Solenzara.</li>
                <li>Les vignobles d'Ajaccio et de Sartène : le parcours se fera en deux étapes, de Sagone à Porticcio sur 47 kilomètres et de Porticcio à Sartène sur 90 kilomètres.</li>
            </ul>    

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Visiter%20route%20des%20vins%20Corse.jpg" alt="domaine corse" class="mt-5 rounded-lg m-2">
            </div>
        </div>

        

        <div id="plus" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">En savoir plus</h2>

            <ul class=" list list-disc list-inside mt-2">
                <li>Office de tourisme Corse : <a href="http://www.visit-corsica.com/">www.visit-corsica.com</a></li>
                <li>Vins de Corse : <a href="http://www.vinsdecorse.com/">www.vinsdecorse.com</a> </li>
                <li>Office Municipal de Tourisme de Saint-Florent : <a href="https://www.saint-florent.fr/">www.saint-florent.fr</a></li>
            </ul>
        </div>

        <div id="visiter" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Visiter les régions viticoles</h2>
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
</style>