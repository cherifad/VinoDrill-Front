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
            <RouterLink to="/admin/hebergements" aria-current="page" class="py-2 flex-1 px-4 text-center text-sm font-medium text-blue-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Hébergements
            </RouterLink>
        </div>

        <div>
            STATS
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const authStore: any = useAuthStore();

</script>

<style scoped>

</style>