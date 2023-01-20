<template>
 <app-template>
    <div class="container">
        <PageHeaderComponent title="Consultar Cliente"></PageHeaderComponent>
        <div class="inner d-flex flex-column justify-content-center align-items-center">
          <div class="container-fluid mt-4">
            <ion-input placeholder="Custom" v-model="searchUser" class="custom">
              <ion-icon class="ms-3" :icon="searchOutline" ></ion-icon>
            </ion-input>
          </div> 
          <div class="container mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Status</th>
                  <th scope="col">...</th>
                
                </tr>
              </thead>
              <tbody>
                <tr v-for="other in others" :key="other.id">
                  <td id="clientID">{{ other.id }}</td>
                  <td id="clientName">{{ other.nome }}</td>
                  <td id="clientStatus"> {{ other.status }}</td>
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
