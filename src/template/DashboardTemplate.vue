<template>
  <ion-menu
    side="start"
    menu-id="first"
    content-id="main"
    swipe-gesture="true"
    type="push"
  >
    <ion-header>
      <ion-toolbar class="menu">
        <ion-title><p>Menu</p></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-accordion-group>
          <ion-accordion value="first">
            <ion-item slot="header" color="light">
              <ion-label>Gestão Comercial</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
              <ion-item router-link="/client">
                <ion-icon :icon="people"></ion-icon>
                Clientes
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>

        <ion-item v-on:click="closeMenu()">Sair</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <div class="ion-page" id="main">
    <ion-content>
      <ion-header>
        <ion-toolbar class="title-center">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title router-link="/home">Orion</ion-title>
          <ion-buttons slot="end">
            <ion-button>
              {{ user.name }}
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <slot></slot>
    </ion-content>
  </div>
</template>

<script lang="ts" src="./DashboardTemplate.ts"></script>
<style scoped  src="./DashboardTemplate.css"></style>
