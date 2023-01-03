<template>
    <button @mouseenter="showTooltip = true" @mouseleave="showTooltip = false" class="mx-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
        </svg>
        <div class="tooltip w-96" v-auto-animate v-bind:class="{ 'tooltip--visible': showTooltip }">
            <div class="tooltip__content ">
                <slot></slot>
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
  z-index: 9999;
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
