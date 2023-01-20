
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue';


import ProfileComponent from '@/components/Profile/ProfileComponent.vue';

<template>
<app-template>
    <div class="container">
        <PageHeaderComponent title="Lista de clientes"></PageHeaderComponent>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <ProfileComponent
                name="Pedro Júnior de Assís Cavalcante"
                nickname="Juninho Groovador"
                cpf_cnpj="19384762938"
                gender="Masculino"
                telephone="87988405785"
                rg="29384709874"
                issuer="SSP BA"
                email="jrdogroove@gmail.com"
                site=""
                cep="47506768"
                town="Petrolina"
                neighborhood="João de Deus"
                street="Qualquer rua"
                complement="casa"
                number="45"
                image="https://yt3.ggpht.com/a/AATXAJznu9Ke3t9h1yW2wwwJ01g1qaHOyl7SCI4_PA=s900-c-k-c0xffffffff-no-rj-mo"
                ></ProfileComponent>
            </li>
        </ul>
       
    </div>
</app-template>
</template>
<script lang="ts" src="./ClientsProfile.ts"></script>
<style scoped src="./ClientsProfile.css"></style>