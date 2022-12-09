<template>
    <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
        <div v-if="notemoyenne" class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
            {{ Math.round(notemoyenne * 10) / 10 }}
        </div>
        <img :src="image" :alt="title + 'image'" class="rounded-xl shadow-md">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <p v-if="days" class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>{{ days }} jour<span v-if="days > 1">s</span><span v-if="nights >= 1"> / {{ nights }} nuit<span v-if="nights > 1">s</span></span></p>
        <p v-else class="text-2xl">{{ libelleTemps }}</p>
        <p class="text-2xl">{{ price }}€ / <span class=" text-rose">Pers</span></p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    nights: any;
    days: any;
    image: string;
    price: number;
    id: number;
    libelleTemps: any;
    notemoyenne: number;
    }>(); 
</script>

<style scoped>

</style>