<template>
    <div class="w-full my-9 mx-auto pb-4">	
	<div class="flex pb-3 ">
		<div class="flex-1">
		</div>

        <!-- Step 1 -->
		<div class="flex-1">
			<RouterLink to="/mon-panier" v-if="step > 1" class="w-10 h-10 bg-rose mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white items-center justify-center flex w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </span>
			</RouterLink>
            <div v-else class="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-black text-center w-full">1</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div :class="step > 1 ? 'bg-rose' : 'bg-white'" class="text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>
	
		<!-- Step 2 -->
		<div class="flex-1">
			<RouterLink to="/paiement/validation" v-if="step > 2" class="w-10 h-10 bg-rose mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white items-center justify-center flex w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </span>
			</RouterLink>
            <div v-else class="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-black text-center w-full">2</span>
			</div>
		</div>
	
		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-white rounded items-center align-middle align-center flex-1">
			 	<div :class="step > 2 ? 'bg-rose' : 'bg-white'" class="text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>
	
        <!-- Step 3 -->
		<div class="flex-1">
			<div v-if="step > 3" class="w-10 h-10 bg-rose mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white items-center justify-center flex w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </span>
			</div>
            <div v-else class="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-black text-center w-full">3</span>
			</div>
		</div>
	
	
		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-white rounded items-center align-middle align-center flex-1">
			 	<div :class="step > 3 ? 'bg-rose' : 'bg-white'" class="text-xs leading-none py-1 text-center text-grey-darkest rounded " style="width: 100%"></div>
			</div>
		</div>


        <!-- Step 4 -->
		<div class="flex-1">
			<div v-if="step > 4" class="w-10 h-10 bg-rose mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-white items-center justify-center flex w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </span>
			</div>
            <div v-else class="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span class="text-black text-center w-full">4</span>
			</div>
		</div>
	
	
		<div class="flex-1">
		</div>		
	</div>
	
	<div class="flex text-lg content-center text-center">
		<div class="w-1/4">
            Panier validé
		</div>
		
		<div class="w-1/4">
            Récapitulatif de la commande
		</div>
		
		<div class="w-1/4">
            Informations de facturation
		</div>
		
		<div class="w-1/4">
			Paiement
		</div>			
	</div>
</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps<{
    step: number
}>()
</script>