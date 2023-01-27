<template>
 <app-template>
    <div class="container">
        <div class="mb-3">
          <PageHeaderComponent title="Consultar Cliente"></PageHeaderComponent>
        </div>
        <div class="inner d-flex flex-column justify-content-center align-items-center">
          <div class="container-fluid mt-4" >
            <ion-input placeholder="Pesquisar" v-on:keyup.enter="searchClient()" class="custom" v-model="search">
              <ion-icon class="ms-3" @click="searchClient()" :icon="searchOutline" ></ion-icon>
            </ion-input>
          </div> 
          <div class="container mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Status</th>
                  <th scope="col">...</th>
                
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in clients" :key="client.id">
                  <td id="clientID">{{ client.id }}</td>
                  <td id="clientName">{{ client.name }}</td>
                  <td id="clietCPF">{{ client.cpf }}</td>
                  <td id="clientStatus">{{ client.status }}</td>
                  <td>
                    <div class="d-flex">
                      <ion-button @click="getId(client.id)" size="small" >Ficha do cliente</ion-button>
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
