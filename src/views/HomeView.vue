<template>
  <div id="main" class="flex flex-col justify-between">

    <section class="flex-1 flex justify-center items-center flex-col">
      <div class="mt-10 w-9/12 flex flex-col gap-4">
        <p class=" text-rose text-4xl font-extrabold">\ Travelling</p>

        <h1 class="pass title">Offrir un <span style="color: #CB7169;">séjour</span> oenologique</h1>

      </div>
    </section>

  </div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});

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
  height: 100vh;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .2);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 2rem;
}

.pass {
  font-family: 'PassengerDisplay', sans-serif;
}

.title {
  font-size: 9rem;
  line-height: 132px;
  text-transform: capitalize;
}
</style>