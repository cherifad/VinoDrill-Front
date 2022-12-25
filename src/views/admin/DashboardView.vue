<template>
    <div>        
        <div>
            <h1>Dashboard</h1>
            <p>Here you can see the dashboard</p>
        </div>

        <div class="inline-flex w-full rounded-md shadow-sm">
            <RouterLink to="/admin/sejours" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Séjours
            </RouterLink>
            <RouterLink to="/admin/domaines" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Domaines
            </RouterLink>
            <RouterLink to="/admin/domaines" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Activités
            </RouterLink>
            <RouterLink to="/admin/hebergements" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Hébergements
            </RouterLink>
        </div>

        <div>
            <RouterLink to="/admin/sejour">Voir les séjours</RouterLink>
            <RouterLink to="/admin/sejour">Voir les séjours</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>