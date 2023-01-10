<template>
  <transition name="popup">
    <div v-if="show" class="fixed px-6 top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75" v-bind:class="{ 'pointer-events-none': !show }">
      <div class="w-fit bg-gray-700 rounded-lg shadow-xl p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold mr-6">{{ title }}</h2>
          <button class="text-gray-600 hover:text-gray-800" @click="close">Close</button>
        </div>
        <div class="mb-6">
          <slot></slot>
        </div>
        <div class="flex items-center justify-end">
          <button @click="submit" alt="Envoyer" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
          <Tooltip text="Cliquer pour mettre à jour vos modification"/>   

        </div>
      </div>
    </div>
  </transition>
</template>  

<script setup>
import Tooltip from './Tooltip.vue';


  defineProps({
    title: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(['update:show', 'submit']);

  const close = () => emit('update:show', false);
  const submit = () => emit('submit');
</script>
  
<style>
  .popup-enter-active, .popup-leave-active {
    transition: all .3s ease;
  }

  .popup-enter, .popup-leave-to {
    transform: scale(0);
  }

  .popup {
    display: none;
  }
  
  .popup--visible {
    display: block;
  }
</style>
  