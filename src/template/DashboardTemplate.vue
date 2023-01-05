<template>
  <ion-page>
    <ion-header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">ORION</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <ion-button router-link="/client" expand="block" fill="clear" shape="round">
                 Gestão Comercial
                </ion-button>
                
              </li>

            </ul>
            <button v-on:click="close()" class="btn btn-outline-light">SAIR</button>
          </div>
        </div>
      </nav>
    </ion-header>
    <ion-content>
        <slot></slot>
    </ion-content>
  
  </ion-page>
</template>

<script lang="ts" src="./DashboardTemplate.ts"></script>
<style scoped  src="./DashboardTemplate.css">

</style>
