<template>
 <app-template>
    <div class="container">
        <PageHeaderComponent title="Consultar Cliente"></PageHeaderComponent>
        <div class="inner d-flex flex-column justify-content-center align-items-center">
          <div class="container-fluid">
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
                  <!--<th scope="col">CPF</th>-->
                
                </tr>
              </thead>
              <tbody>
                <tr v-for="other in others">
                  <td id="clientID">{{ other.id }}</td>
                  <td id="clientName">{{ other.nome }}</td>
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
