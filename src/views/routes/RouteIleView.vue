<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Ile-de-France</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#histoire">Histoire du vignoble d'Ile-de-France</a></li>
                <li><a href="#evenements">Evènements oenologiques à Paris</a></li>
                <li><a href="#visites">Les visites de vignes à Paris</a></li>
                <li><a href="#itineraires">Itinéraire viticole en périphérie de la capitale</a></li>
                <li><a href="#plus">En savoir plus</a></li>
                <li><a href="#partir">Partir découvrir les autres routes des vins</a></li>
            </ul>
        </div>

        <div id="histoire" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Histoire du vignoble d'Ile-de-France</h2>
            <p>
                Il y a bien longtemps et ce jusqu’au 18ème siècle, l’Ile de France hébergeait le plus grand vignoble de France, sur 42 000 hectares et environ 300 communes. Royauté oblige, avec des communications restreintes, il fallait faire boire la cour ! La production viticole, qui remonte au 4ème siècle, était donc destinée à la cour royale et à l’exportation. Malheureusement le temps a eu raison de ce vignoble qui a fini par disparaître dans les années 1950. Une centaine de vignes de plus de 100 pieds : voilà ce qui reste du patrimoine vignoble de l’Ile de France.
            </p>

            <p class="mt-2">
                Aujourd’hui, la plupart de ces petits vignobles n’ont pas vocation économique et sont en fait liés à des activités touristiques, pédagogiques et culturelles.
            </p>
        </div>

        <div id="evenements" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Evènements oenologiques à Paris</h2>
        </div>

        <div id="visites" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Les visites de vignes à Paris</h2>
            <p>
                Paris abrite le plus célèbre, à coup sûr le plus folklorique vignoble : celui de la Commanderie qui produit le Clos Montmartre sur le flanc nord de la butte du même nom, dans le 18ème arrondissement, pour une production restreinte mais emblématique (1003 bouteilles en 2009). C’est également là qu’est organisée, chaque année, la fête des vendanges de Montmartre pour une vente aux enchères du vin produit.
            </p>
            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Route%20de%20vins%20Ile-de-France.jpg" alt="domaine paris" class="mt-5 rounded-lg m-2">
            </div>
            <p class="mt-2">
                Toujours à Paris, le Jardin des Plantes possède 247 pieds de vigne et surtout un mélange de cépages étonnants, à découvrir et à déguster. Une surprise : une découverte au milieu des tours de La Défense, le Clos de Chantecoq. Il s’agit d’un vignoble de 700 pieds, cultivés sur 10 ares (Chardonnay, Pinot noir), non commercialisé mais qui peut être dégusté. On ne peut terminer ce périple sans mentionner le célèbre Musée du Vin, au cœur de Paris, dans le 16ème arrondissement, situé rue des Eaux !
            </p>
        </div>

        <div id="itinéraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Itinéraire viticole en périphérie de la capitale</h2>
            <p>
                Parmi les quelques vignes de la route des vins d’Ile-de-France à découvrir aux alentours de Paris, on peut citer :
            </p>

            <ul class=" list list-disc list-inside mt-2">
                <li>Les vignes du parc départemental du Sausset à Villepinte ;</li>
                <li>Suresnes, Argenteuil et son clos Passemay ;</li>
                <li>Versailles, à côté du Trianon, possède 2 000 m² de vignes ;</li>
                <li>Le domaine Bérurier pour Conflans St Honorine ;</li>
                <li>Les villes de Rosny-sous-Bois, Aulnay-sous-Bois possèdent également quelques vignobles ;</li>
                <li>Le Chasselas de Thomery, en Seine et Marne, cultivé de manière traditionnelle et ornementale, connut ses heures de gloire entre les deux guerres. Il mérite d’être mentionné pour sa technique de viticulture en espaliers.</li>
            </ul>    
        </div>

        

        <div id="plus" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">En savoir plus</h2>

            <ul class=" list list-disc list-inside mt-2">
                <li>Soirées et <a href="https://www.vinotrip.com/fr/oenologie-paris">évènements d'oenologie à Paris</a></li>
                <li>Information sur le vignoble en Ile-de-France - page Wikipédia : <a href="https://fr.wikipedia.org/wiki/Vignoble_d%27%C3%8Ele-de-France">Vignoble-d'Ile-de-France</a></li>
                <li>Vigne de Montmartre - page Wikipédia : <a href="https://fr.wikipedia.org/wiki/Vigne_de_Montmartre">Vigne_de_Montmartre</a></li>
            </ul>
        </div>

        <div id="partir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Partir découvrir les autres routes des vins</h2>
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
                <RouterLink to="/route-jura">Jura</RouterLink>
                <RouterLink to="/route-savoie">Savoie</RouterLink>
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