<template>
    <div>        
        <div class="mb-6 text-5xl font-bold">
            <h1>Dashboard - {{ authStore.user.nomclient }}</h1>
        </div>

        <div class="inline-flex w-full mb-6 rounded-md shadow-sm">
            <RouterLink to="/admin/sejours" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Séjours
            </RouterLink>
            <RouterLink to="/admin/domaines" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Domaines
            </RouterLink>
            <RouterLink to="/admin/activites/new" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Activités
            </RouterLink>
            <RouterLink to="/test" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Test
            </RouterLink>
            <RouterLink to="/admin/hebergements/new" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white  border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Hébergements
            </RouterLink>
            <RouterLink to="/admin/aide" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Besoin d'aide ?
            </RouterLink>
        </div>

        <div>
            <h2 class="text-2xl font-bold mt-6 mb-4">Liens rapides</h2>
            <ul class="list list-disc list-inside">
                <li><a href="#bi">Espace BI</a></li>
                <li><a href="#dpo">Espace DPO</a></li>
            </ul>
        </div>

        <div class="text-center text-5xl font-bold m-6">
            <h1 id="bi">Espace BI</h1>
        </div>
        <div class="flex justify-center">
            <PowerBi
                title="Rapport_Bi_Par_Mois"
                src="https://app.powerbi.com/view?r=eyJrIjoiN2Q2MzZlZDUtMjViZi00ZjM0LWJlNzgtYTBiY2Y2OGVkY2Q3IiwidCI6ImUyMWU5NzgzLWQwYTAtNDhmOC04NTBlLTBiMDgxYjQ2ZDc4OCIsImMiOjh9&pageName=ReportSectiona9b305a68fe41461b2c7"
            />
        </div>
        <div class="flex justify-center mt-5">
            <PowerBi
                title="Rapport_Bi_Par_Vignoble"
                src="https://app.powerbi.com/view?r=eyJrIjoiNjc0ODQyZWItZDI1YS00MTFiLTg0YzAtM2U5MWNjMjIwZDM1IiwidCI6ImUyMWU5NzgzLWQwYTAtNDhmOC04NTBlLTBiMDgxYjQ2ZDc4OCIsImMiOjh9"
            />
        </div>
        <div class="flex justify-center mt-5">
            <PowerBi
                title="Rapport_Bi_Clients"
                src="https://app.powerbi.com/view?r=eyJrIjoiZGVkZTNmOTktOWFiYy00ZTBlLWI4MmEtYmRkZmRhMzQ0ZjY2IiwidCI6ImUyMWU5NzgzLWQwYTAtNDhmOC04NTBlLTBiMDgxYjQ2ZDc4OCIsImMiOjh9"
            />
        </div>

        <div id="dpo">
            <div class="text-center text-5xl font-bold m-6">
                <h1>Espace DPO</h1>
            </div>

            
            <div>
                <h2 class="text-2xl font-bold">Suppresion les données d'un client</h2>
                <input type="text" id="mailToDelete" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail client à supprimer" required>
            </div>

            <button @click="sendDelete()" type="submit" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Supprimer</button>

            <div class="mt-4">
                <h2 class="text-2xl font-bold">Anonymiser les données d'un client</h2>
                 <input type="text" id="mailToAnonymise" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail client à anonymiser" required>
            </div>

            <button @click="sendAnonymise()" type="submit" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Anonymiser</button>
        </div>
        

        
        
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import PowerBi from '../../components/PowerBi.vue';
import axios from 'axios';



const authStore: any = useAuthStore();

async function sendDelete() {
    const mailToDelete = document.getElementById('mailToDelete');
    var email = mailToDelete.value;

    mailToDelete.value = "";

     axios.post('/api/delete_client_cascade', {
            parameter: email
      })
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
};


async function sendAnonymise() {
    const mailToAnonymise = document.getElementById('mailToAnonymise');
    var email = mailToAnonymise.value;
    
    mailToAnonymise.value = "";
    
     axios.post('/api/anonymise_client', {
          parameter: email
      })
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
}

</script>

<style scoped>

</style>