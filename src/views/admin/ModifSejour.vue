<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    idsejour: Number,
}>()

const form = ref({
        idsejour: props.idsejour,
        titre: '',
        description: '',
        datedebut: '',
        datefin: '',
        prix: '',
        nbchambre: '',
        nbplace: '',
        nbplaceenfant: '',
        nbplacebebe: '',
        idcategorie: '',
        iddestination: '',
        idtype: '',
        idactivite: '',
        idlogement: '',
        idrestaurant: '',
        idtransport: '',
        idvisite: '',
        idvoyage: '',
        idimage: '',
})

</script>

<style scoped>

</style>