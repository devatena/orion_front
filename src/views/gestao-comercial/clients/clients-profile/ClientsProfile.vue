
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue';


import ProfileComponent from '@/components/Profile/ProfileComponent.vue';

<template>
<app-template>
    <div class="container">
        <PageHeaderComponent title="Lista de clientes"></PageHeaderComponent>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <ProfileComponent
                :name="clients.name"
                :nickname="clients.nickname"
                :cpf_cnpj="clients.cpf"
                :gender="clients.gender"
                :telephone="clients.telephone"
                :rg="clients.rg"
                :issuer="clients.issuer"
                :email="clients.email"
                :site="clients.site"
                :cep="clients.cep"
                :town="clients.town"
                :neighborhood="clients.neighborhood"
                :street="clients.street"
                :complement="clients.complement"
                :number="clients.number"
                image="https://yt3.ggpht.com/a/AATXAJznu9Ke3t9h1yW2wwwJ01g1qaHOyl7SCI4_PA=s900-c-k-c0xffffffff-no-rj-mo"
                ></ProfileComponent>
            </li>
        </ul>
       
    </div>
</app-template>
</template>
<script lang="ts" src="./ClientsProfile.ts"></script>
<style scoped src="./ClientsProfile.css"></style>