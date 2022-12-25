<template>
    <button @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <div class="tooltip w-96" v-bind:class="{ 'tooltip--visible': showTooltip }">
            <div class="tooltip__content ">
            {{ text }}
            </div>
        </div>
    </button>
</template>

<script setup>
import { ref } from 'vue';

const showTooltip = ref(false);

defineProps({
    text: {
        type: String,
        required: true,
    },
});
</script>

<style>
.tooltip {
  position: absolute;
  display: none;
  z-index: 1000;
}

.tooltip--visible {
  display: block;
}

.tooltip__content {
  padding: 10px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
}
</style>
