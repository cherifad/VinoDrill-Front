<template>
    <!-- <div class=" bg-white rounded-xl p-2">
      <img src="../assets/img/pexels-tim-mossholder-3895185.png" alt="404 NOT FOUND" class=" w-80 ">
      <h1 class="text-black text-xl">{{title}}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Gravida neque convallis a cras semper.</p>
    </div> -->
  <div class=" flex justify-center pl-7">
      <div class="flex flex-col gap-4 mb-5 hover:scale-110 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
          <img src="../assets/img/pexels-tim-mossholder-3895185.png" alt="title + 'image'" class=" rounded-lg ">
          <h1 class="text-2xl font-bold pl-4">{{ title }}</h1>
          <p class="pl-4">{{description}}</p>
      </div>
  </div>
  
  </template>
  <script setup lang="ts">
  </script>
  <style>
  </style>