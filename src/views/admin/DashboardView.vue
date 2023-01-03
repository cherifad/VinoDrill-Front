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
        <div class="text-center text-5xl font-bold m-6">
            <h1>Rapports Power BI</h1>
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
                src="https://app.powerbi.com/view?r=eyJrIjoiNGIxMWMzYjItZDBkNy00ZWU4LWI4MzQtM2U1NjQ1ZGE1NmZiIiwidCI6ImUyMWU5NzgzLWQwYTAtNDhmOC04NTBlLTBiMDgxYjQ2ZDc4OCIsImMiOjh9&pageName=ReportSection"
            />
        </div>
        <div class="flex justify-center mt-5">
            <PowerBi
                title="Rapport_Bi_Clients"
                src="https://app.powerbi.com/view?r=eyJrIjoiZGVkZTNmOTktOWFiYy00ZTBlLWI4MmEtYmRkZmRhMzQ0ZjY2IiwidCI6ImUyMWU5NzgzLWQwYTAtNDhmOC04NTBlLTBiMDgxYjQ2ZDc4OCIsImMiOjh9"
            />
        </div>

        
        
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import PowerBi from '../../components/PowerBi.vue';

const authStore: any = useAuthStore();

</script>

<style scoped>

</style>