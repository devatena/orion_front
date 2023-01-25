<template>
 <app-template>
    <div class="container">
        <PageHeaderComponent title="Consultar Cliente"></PageHeaderComponent>
        <div class="inner d-flex flex-column justify-content-center align-items-center">
          <div class="container-fluid mt-4">
            <ion-input placeholder="Custom" class="custom">
              <ion-icon class="ms-3" :icon="searchOutline" ></ion-icon>
            </ion-input>
          </div> 
          <div class="container mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">...</th>
                
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in clients" :key="client">
                  <td id="clientID">{{ client.id }}</td>
                  <td id="clientName">{{ client.name }}</td>
                  <td id="clientStatus"> </td>
                  <td>
                    <div class="d-flex">
                      <ion-button class="go-to-profile" router-link="/client/profile" expand="block" fill="solid">Abrir na página de Clientes</ion-button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>   
          </div> 
              
        </div>
    </div>
 </app-template>
</template>
<script lang="ts" src="./ShowClientsPage.ts"></script>
<style scoped  src="./ShowClientsPage.css"></style>
