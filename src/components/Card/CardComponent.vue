<template>
    <div class="card text-center">
        <div class="card-body">
            
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <ion-button :router-link="{name: link}" expand="block" fill="clear" shape="round">
               Acessar
            </ion-button>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: String,
        description: String,
        link: String,
        
    },
    name: 'CardComponent'
});

</script>

<style scoped>
ion-button{
    background-color: purple;
    color: white;
    border-radius: 10px;;  
}
.card{
    border-left: 5px solid purple;
}

</style>


