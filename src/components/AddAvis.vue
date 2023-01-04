<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
import axios from 'axios';
import Popup from './Popup.vue';
import { formatDate } from '@vueuse/shared';

const props = defineProps<{
    idsejour: any;
    idclient: any;
}>();

const form = ref({
    note: 0,
    commentaire: '',
    titreavis: ''
})

const photos: any = ref([])
const idavis: any = ref(null);
const pictures: any = ref([])
const filesInput: any = ref([])

function handleFileChange(e: any) {
  photos.value.push(e.target.files);
  for (let i = 0; i < e.target.files.length; i++) {
    const file = e.target.files[i]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        const image: any = new Image()
        image.src = reader.result
        if (!image.src.includes('data:image')) {
            return
        }

        if (pictures.value.includes(image.src)) {
            return
        }

        pictures.value.push(image.src);
    }
  }
};

const removePictureWuthObject = (picture: any) => {
    pictures.value = pictures.value.filter((p) => p !== picture)
}

const addNewAvis = async (event) => {
    event.preventDefault();
    console.log('addNewAvis')

    const formData = new FormData();
    // filesInput.value.forEach((image) => formData.append('images[]', image));

    console.log(filesInput.value)

    for (let i = 0; i < filesInput.value.length; i++) {
        console.log(filesInput.value[i]);
        formData.append('images[]', filesInput.value[i])
    }

    // formData.append('images[]', filesInput.value)


    console.log(formData)

    try {  
    //   const response = await axios.post('/api/multiple-upload', {
    //     images: filesInput.value
    //   });
    //   console.log(response);
      await axios.post('/api/avis', {
        idsejour: props.idsejour,
        idclient: props.idclient,
        note: form.value.note,
        commentaire: form.value.commentaire,
        titreavis: form.value.titreavis,
      }).then((response) => {
        // reload the page
        window.location.reload();
        })
        ;
    } catch (error) {
      console.error(error);
    }


}
</script>

<template>
    
     <form @submit="addNewAvis" class="w-full">
        <div class="mb-6 flex gap-6 w-full items-center">
            <div class="w-1/2">
                <label for="titresejour" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                <input v-model="form.titreavis" type="text" id="titresejour" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="w-1/2">
                <label for="note" class="mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center gap-3">
                    Note
                    <div class="flex items-center">
                        <i v-for="i in 5">
                            <svg xmlns="http://www.w3.org/2000/svg" v-if="i <= form.note" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        </i>
                    </div>
                </label>
                <input v-model="form.note" step="1" max="5" min="0" type="range" id="note" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
        </div>
        <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea v-model="form.commentaire" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div> 
        <!-- <div class="mb-6" v-auto-animate>
            <label v-if="pictures.length <= 5" for="dropzone-file" class="flex mb-6 min-w-fit flex-1 flex-col items-center justify-center h-64 border-2 px-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquer ici pour charger une image</span> ou glisser déposer dans la zone</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 800x400px)</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ pictures.length }} fichier(s) sélectionné(s)</p>
                </div>
                <input multiple ref="" @input="(event: any) => filesInput = event.target.files" @change="handleFileChange" accept=".jpg,.svg,.png" id="dropzone-file" type="file" class="hidden" />
            </label>
            <div v-if="pictures.length > 0" class="h-fit mb-6 relative flex justify-evenly flex-wrap w-auto border gap-2 border-gray-300 border-dashed" v-auto-animate> 
                <div v-for="img in pictures">
                    <svg @click="removePictureWuthObject(img)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 absolute z-50 cursor-pointer text-red-600 top-1 right-1">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                    </svg>
                    <img class="rounded-lg h-64 cursor-pointer" :src="img" :alt="'Avis image n°' + pictures.length">
                </div>
            </div>
        </div> -->
        <button type="submit" class="w-full py-2.5 px-5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800">Envoyer</button>
    </form>
</template>