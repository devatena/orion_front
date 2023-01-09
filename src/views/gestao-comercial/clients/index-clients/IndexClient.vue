
import { clipboardOutline } from 'ionicons/icons';

<template>
    <app-template>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="cotainer d-flex flex-column justify-content-center align-items-center">
                    <ion-icon :icon="personAddOutline"></ion-icon>
                    <CardComponent
                    title="Cadastro de cliente"
                    description=""
                    link="create-client"></CardComponent>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="container d-flex flex-column justify-content-center align-items-center">
                    <ion-icon :icon="personOutline"></ion-icon>
                    <CardComponent
                    title="Consultar cliente"
                    description=""
                    link="#"></CardComponent>
                </div>     
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="container d-flex flex-column justify-content-center align-items-center">
                     <ion-icon :icon="clipboardOutline"></ion-icon>
                    <CardComponent
                    title="Relatório"
                    description=""
                    link="#"></CardComponent>
                </div>
            </div>
        </div>
    </app-template>
</template>
<script lang="ts" src="./IndexClient.ts"></script>
<style scoped src="./IndexClient.css"></style>