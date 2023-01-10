<template>
  <div id="main" class="flex lg:h-screen h-[60vh] flex-col justify-between">

    <section class="flex-1 flex justify-center items-center flex-col">
      <div class="lg:mt-10 lg:w-9/12 px-5 lg:px-0 flex flex-col gap-4">
        <p class=" text-rose md:text-4xl text-2xl font-extrabold">\ Travelling</p>
        <h1 class="pass text-5xl md:text-7xl lg:leading-[9rem] lg:text-[9rem] title">Offrir un <span style="color: #CB7169;">séjour</span> oenologique</h1>
      </div>
    </section>

  </div>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

</script>

<style scoped>
* {
  transition: all 0.3s ease;
}

#main {
  background-image: url("../assets/img/pexels-tim-mossholder-3895185.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .2);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 2rem;
}

.pass {
  font-family: 'PassengerDisplay', sans-serif;
}

.title {
  text-transform: capitalize;
}
</style>