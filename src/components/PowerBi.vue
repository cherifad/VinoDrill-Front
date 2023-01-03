<template>
    <div class="flex justify-center border-rose border-2 rounded-2xl p-3">
    <iframe :title="title" width="1080" height="612" :src="src" frameborder="0" allowFullScreen="true" class="rounded-2xl"></iframe>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title: string;
    src: string;
    }>();
</script>
<style>
</style>