<template>
 <app-template>
    <div class="container">
        <div class="mt-4 mb-4 d-flex justify-content-between align-items-center">
          <h1>Consultar cliente</h1>
          <ion-button class="me-5" router-link="/client/index" expand="block" fill="solid" color="danger">Voltar</ion-button>
        </div>
        <div class="inner d-flex flex-column justify-content-center align-items-center">
          <div class="container-fluid">
            <ion-input placeholder="Custom" class="custom"></ion-input>
          </div>          
        </div>
    </div>
 </app-template>
</template>
<script lang="ts" src="./ShowClientsPage.ts"></script>
<style scoped  src="./ShowClientsPage.css"></style>
