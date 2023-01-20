<template>
    <div class="mt-4 mb-4 d-flex justify-content-between align-items-center">
                <h1>{{ title }}</h1>
                <ion-button class="me-5" router-link="/client/index" expand="block" fill="solid">Voltar</ion-button>
            </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        title: String,

    },
    name: 'PageHeaderComponent'
})
</script>

<style scoped>
ion-button{
    --background: purple;
}
</style>
