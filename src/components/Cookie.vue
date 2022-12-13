<template>
<div v-if="!allowCookie.accepte" id="cookie">
    <div class="m-0 fixed w-fit bottom-3 left-3 z-40 p-0 box-border .font-sans">
      <div id="cookie-container" class="show">
          <img src="../assets/img/cookieImg.png">        
          <p>
          Bienvenu chez VinoDrill !
          </p>
          <p>
            Notre site utilise des cookies indispensables à son bon fonctionnement, optimiser ses performances techniques et personnaliser l'affichage de nos pages. Pour obtenir davantage d'information, cliquez sur le bouton  <a href="#">Détails</a>. 
          </p>
          <button class="btn " type="button" @click="allowCookie.allowCookie(true)" id="cookie-btn">Ok</button>
          <button class="btn" type="button" id="blurBtn" @click="details = true">Détail</button>
      </div> 
    </div>
    <div v-if="details" class=".m-0 p-0 box-border font-sans z-50 flex shadow-xl justify-center">
      <div id="detail-pop" >
          <p class="text-xl underline underline-offset-8">Cookies nécessaires</p>
          <p>
            Il s'agit des cookies nécessaires au fonctionnement de notre site et aux services essentiels qui en font partie intégrante. Ils vous permettent d'utiliser les principales fonctionnalités de notre site par exemple commander un séjour, accéder à votre compte…
            Ces cookies ne relèvent pas d’un choix et ne peuvent pas être refusés.
          </p>
          <p class="text-xl underline underline-offset-8">Plus d'informations sur les cookies ?</p>
          <p>Sur le site de la CNIL, en cliquant <a href="https://www.cnil.fr/fr/site-web-cookies-et-autres-traceurs" target="_blank">ici</a>.</p>
          <button class="btnn " type="button" id="unblurbtn" @click="details = false">Fermer</button>
      </div>
    </div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCookieStore } from '../stores/cookie';

const allowCookie = useCookieStore();
 
const details = ref(false);

</script>



<style scoped>

#cookie-container{
  position: absolute;
  font-size: 14px;
  width: 70vw;
  max-width: 42.85em;
  background: #5e4242;
  box-shadow: 0 0 2em #5e424279;
  font-family: "Poppins", sans-serif;
  text-align: justify;
  line-height: 1.8em;
  padding: 2em 1.4em;
  border-radius: 6px;
  transition: all 0.5s ease-in;
  bottom: 0.1em;
left: 62%;
}
#detail-pop{
  text-align: justify;
  z-index: +1;
  position:fixed;
  font-size: 14px;
  max-width: 80em;
  background: #5e4242;
  box-shadow: 0 0 2em #5e424279;
  font-family: "Poppins", sans-serif;
  line-height: 1.8em;
  padding: 4em 3.4em;
  border-radius: 6px;
  transition: all 0.5s ease-in;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#detail-pop p{
text-align: center;
margin: 1.4em 0;
}
.blurr{
  filter: blur(8px);
}
.collapse{
  visibility: collapse;
}
.hide{
visibility: hidden;

}
.show{
visibility: visible;
}

#cookie-container img{
  display: block;
  width: 3.75em;
  transform: translateZ(0);
  position: relative;
  margin: auto;
}
#cookie-container p{
text-align: center;
margin: 1.4em 0;
}
a{
color: rgb(228, 21, 114);
}
.btn{
  background: pink;
  border:0;
  color : #CB7169;
  padding: 12px 48px;
  font-size: 18px;
  border-radius: 8px;
  position: relative;
  margin: auto;
  margin-left: 6em;
}
.btnn{
  background: pink;
  border:0;
  color: white;
  padding: 12px 48px;
  font-size: 18px;
  border-radius: 8px;
  margin: auto;
  margin-left: 38%;
}

</style>