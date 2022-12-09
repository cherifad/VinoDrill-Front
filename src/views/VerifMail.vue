<template>
    <div class="flex items-center flex-col h-screen justify-center gap-5">
        <h1 id="passenger" class="font-bold text-5xl">Connectez-vous pour valider votre inscription</h1>
        <div class=" w-2/4">
            <LoginForm />
        </div>
    </div>
</template>

<script setup>
import LoginForm from "../components/LoginForm.vue";


</script>
