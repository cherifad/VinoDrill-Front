<template>
    <div class="flex gap-6 items-center justify-center w-full mb-6" v-auto-animate>
        <label for="dropzone-file" class="flex flex-1 flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquer ici pour charger une image</span> ou glisser déposer dans la zone</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 800x400px)</p>
                <p v-if="picture != original_picture" class="text-xs text-gray-500 dark:text-gray-400">1 fichier sélectionner</p>
            </div>
            <input ref="fileInput" @change="handleFileChange" accept=".jpg,.svg,.png" id="dropzone-file" type="file" class="hidden" />
        </label>
        <img v-if="picture" class=" h-64 w-auto border border-gray-300 border-dashed rounded-lg cursor-pointer" :src="picture" alt="">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from 'vue'
import apis from '../api';

const props = defineProps<{
    original_picture: any
}>();

// emits url of the picture
const emits = defineEmits(['picture'])

const picture = ref(null)
const fileInput: any = ref(null)

function handleFileChange(e) {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    const image: any = new Image()
    image.src = reader.result
    picture.value = image.src
  }
};
</script>