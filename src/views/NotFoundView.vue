<template>
    <div class="h-screen flex flex-col gap-5 justify-center items-center">
        <h1 id="passenger" class=" text-9xl font-bold">Rien ici !</h1>
        <h1 class="text-3xl">Aïe il semblerait que vous vous soyez perdu...</h1>
        <div class="flex gap-6">
          <p @click="goBack" class="tewt-white px-5 py-3 cursor-pointer select-none bg-rose rounded-md border-rose border-2 hover:bg-transparent mt-2">Machine arrière !</p>
          <RouterLink to="/" class="tewt-white px-5 py-3 bg-rose rounded-md border-rose border-2 hover:bg-transparent mt-2">Retour à l'accueil</RouterLink>
        </div>
    </div>    
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
}

</script>

<style scoped>
* {
  transition: all 0.3s ease;
}
</style>