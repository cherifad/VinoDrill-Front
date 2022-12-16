<template>
    <div>

    <div id="addForm" class="padCorp">

        <div class="m-10">
            <form>

            <h1 class="text-left text-4xl font-bold pt-15"> Contactez-nous </h1>
            <p class=" text-left text-1xl pt-5 text-gray-400 "> Une question ? Besoin d’un renseignement ? Notre Service Client est à votre écoute ! </p>
                
                <div class="grid grid-cols-3 m-12">
                    <div>

                        <div>
                            
                            <p class="text-left font-semibold text-2xl pt-5">Objet</p>
                            <select v-model="form.object" class="object text-gray-400 font-weight:500 w-80" name="object" id="object" required>
                                <option value="" disabled selected>Selectionnez un destinataire</option>
                                <option value="service">Contacter le Service Client</option>
                                <option value="dpo">Contacter le DPO</option>
                                <option value="webmaster">Contacter le webmaster</option>
                                <option value="devis">Demander un devis</option>
                            </select >
                        </div>

                        <div>
                            <p class=" text-left font-medium text-2xl pt-5">Nom</p>
                            <input v-model="form.lastname" class="object" placeholder="Entrez votre nom" type="text" id="lastname" name="lastname" required >
                        </div>

                        <div>
                            <p class="text-left font-medium text-2xl pt-5">Prénom</p>
                            <input v-model="form.firstname" class="object" placeholder="Entrez votre prénom" type="text" id="firstname" name="firstname" required >
                        </div>

                        <div>
                            <p class="text-left font-medium text-2xl pt-5">Adresse mail</p>
                            <input v-model="form.mail" class="object" placeholder="Entrez votre e-mail" type="text" id="mail" name="mail" required >
                        </div>

                        <div>
                            <p class="text-left font-medium text-2xl pt-5">Référence commande</p>
                            <input v-model="form.code" class="object" placeholder="Entrez la référence (optionnel)" type="text" id="code" name="code" >
                        </div>
                    </div>

    
                    <div class="col-span-2">
                        <div>
                            <p  class="text-left font-semibold text-2xl pt-5">Message</p>
                            <input v-model="form.message" required class="" placeholder="Entrez votre message" type="text" id="message" name="message" >
                        </div>

                        <div >
                            <input type="file" id="file" class="file" mulitple>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="text-gray-400">En soumettant ce formulaire, vous acceptez que VinoDrill mémorise et utilise vos données personnelles dans les conditions décrites dans la <span class="text-sky-500 underline "><RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink></span>.</p>
                </div>            


                <div>
                    <div class="mt-2">
                        <label class="inline-flex items-center ">
                        <input id="accept" type="checkbox" class="mt-4 w-6 h-6 rounded"  />
                        <span class="ml-2 mt-4">J’ai pris connaissance de la <span class="text-sky-500 underline "><RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink></span> et j'autorise VinoDrill à m'envoyer des informations.</span>
                        </label>
                    </div>
                </div> 

               
                <div>
                    <input @click="envoyer()" id="send" type="submit" class="mr-12 mt-8 bg-white py-2 px-4 rounded shadow" value="Envoyez"/>
                </div>
            </form>
        </div>

    </div>

    </div>
<div class=".m-0 p-0 box-border .font-sans flex ustify-center">
  <div id="msgsent" class=" detail-pop hide" >
    <p class="text-xl underline underline-offset-8">Message Envoyée</p>
    <p>
      Votre message a été envoyé avec succès ! <br>Nous vous contacterons dans les plus bref délais
    </p>
    <button class="btn " type="button" id="close">OK</button>
  </div>
</div>
<div class=".m-0 p-0 box-border .font-sans flex ustify-center">
  <div id="msgerror" class=" detail-pop hide" >
    <p class="text-xl underline underline-offset-8">Message Erreur</p>
    <p>
      Votre message possède une erreur ! <br>Veuillez remplir les champs rouge et/ou cocher la case d'acceptation de notre politique.
    </p>
    <button class="btnn " type="button" id="closeerror">OK</button>
  </div>
</div>
    
  </template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const form = ref({
    object: '',
    lastname: '',
    firstname: '',
    mail: '',
    code: '',
    message: '',
    file: '',
})

const envoyer = () => {
    if(document.getElementById("message").value.length == 0 || document.getElementById("lastname").value.length == 0|| document.getElementById("firstname").value.length == 0||document.getElementById("mail").value.length == 0 || document.getElementById("object").value.length == 0 || document.getElementById("accept").checked  == false) {
        
    if(document.getElementById("object").value.length == 0){
    document.getElementById("object").classList.add("borderError")
    document.querySelector('#msgerror').classList.add("show")
    document.querySelector('#msgerror').classList.remove("hide")
    }
        else if(document.getElementById("object").value.length !== 0){
            document.getElementById("object").classList.remove("borderError");
            console.log('vail');
    }
    if(document.getElementById("lastname").value.length == 0){
    document.getElementById("lastname").classList.add("borderError")
    document.querySelector('#msgerror').classList.add("show")
    document.querySelector('#msgerror').classList.remove("hide")
    }
        else if(document.getElementById("lastname").value.length !== 0){
            document.getElementById("lastname").classList.remove("borderError");
            console.log(2);
    }
    if(document.getElementById("firstname").value.length == 0){
    document.getElementById("firstname").classList.add("borderError")
    document.querySelector('#msgerror').classList.add("show")
    document.querySelector('#msgerror').classList.remove("hide")
    }
        else if(document.getElementById("firstname").value.length !== 0){
            document.getElementById("firstname").classList.remove("borderError");
            console.log(3);
    }
    if(document.getElementById("mail").value.length == 0){
    document.getElementById("mail").classList.add("borderError")
    document.querySelector('#msgerror').classList.add("show")
    document.querySelector('#msgerror').classList.remove("hide")
    }
        else if(document.getElementById("mail").value.length !== 0){
            document.getElementById("mail").classList.remove("borderError");
            console.log(4);
    }
    if(document.getElementById("message").value.length == ""){
    document.getElementById("message").classList.add("borderError")
    document.querySelector('#msgerror').classList.add("show")
    document.querySelector('#msgerror').classList.remove("hide")
    }
        else if(document.getElementById("message").value.length !== ""){
            document.getElementById("message").classList.remove("borderError");
            console.log(5);
    }
    if(document.getElementById("accept").checked == false){
    document.querySelector('#msgerror').classList.add("show")
    document.querySelector('#msgerror').classList.remove("hide")
    }
        else if(document.getElementById("accept").checked == true){
            document.getElementById("accept").classList.remove("borderError");
            console.log(6);
    }
}
    console.log(form)
}

const displayData = (data: any) => {
    console.log(data)
}

    function create(tag, parent, text=null, classs=null, id=null) {
        let element = document.createElement(tag)
        if (text)
            element.appendChild(document.createTextNode(text))
        parent.appendChild(element)
        if (classs)
            element.classList.add(classs)
        if (id)
            element.id = id
        return element
    }

    function q(s) {
        return document.querySelector(s)
    }


    onMounted(() => {
        let buttonsend = document.querySelector('#send');
        let close = document.querySelector('#close');
        let closeerr=document.querySelector('#closeerror')
        let detailUp=document.getElementById("msgsent");
        let error=document.getElementById("msgerror");
        
        buttonsend?.addEventListener("click", () => {
             if(document.getElementById("message").value.length !== 0 && document.getElementById("lastname").value.length !== 0 && document.getElementById("firstname").value.length !== 0 && document.getElementById("mail").value.length !== 0 && document.getElementById("object").value.length !== 0 && document.getElementById("accept").checked == true){
                detailUp?.classList.remove("hide");
                detailUp?.classList.add("show");
             }
        
        });

        closeerr.addEventListener("click", ()=>{
            error?.classList.remove("show");
            error?.classList.add("hide");
        })

        close?.addEventListener("click", ()=>{
            detailUp?.classList.remove("show");
            detailUp?.classList.add("hide");

        });
    
    })


  </script>

<style scoped>
        .padCorp{
    padding-top: 7em;
  }
.detail-pop{
  text-align: justify;
  z-index: +1;
  position:fixed;
  font-size: 14px;
  max-width: 80em;
  background: #655844;
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
.detail-pop p{
text-align: center;
margin: 1.4em 0;
}
    .object {
        border-radius:15px;
        margin-top:9px;
        padding:10px;
        padding-left:15px;
        color: black;
    }

    #message {
        border-radius:15px;
        width: 99%;
        margin-top:9px;
        padding:10px;
        padding-bottom:13.5rem;
        color: black;
    }

    select {
        background-color:#fda4af;
    }

    input[type=file] {
        width: 350px;
        margin-top:15px;
        border-radius: 15px;
        max-width: 100%;
        color: #444;
        padding: 5px;
        background: #fff;
    }

input[type=file]::file-selector-button {
    border: none;
    background: #fda4af;
    padding: 10px 20px;
    border-radius: 15px;
    color: black;
    cursor: pointer;
    transition: background .2s ease-in-out;
    margin-right: 20px;
    }

input[type=file]::file-selector-button:hover {
    background: #fda4af;
}

#send {
    float: right;
    border-radius: 15px;
    background-color: #9E896A;
    padding:10px;
    padding-left: 25px;
    padding-right: 25px;
    text-align:center; 
    margin-top:10px;
    cursor:pointer;
    }
.btn{
    background: #9E896A;
    border:0;
    color: white;
    font-size: 18px;
    padding: 12px 48px;
    position: relative;
    margin: auto;
    margin-left: 6em;
    border-radius: 8px;
}
.btnn{
    background: #9E896A;
    border:0;
    color: white;
    font-size: 18px;
    padding: 12px 48px;
    position: relative;
    margin: auto;
    margin-left: 41%;
    border-radius: 8px;
}
.hide{
    
    visibility: hidden;
}
.show{
    visibility: visible;
}
.borderError{

    border: solid;
    border-color: red;


}
#accept{
    accent-color: red;
}

</style>