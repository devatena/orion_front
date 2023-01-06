<template>
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
                <ion-button router-link="/gestao-comercial" expand="block" fill="clear" shape="round">
                 Gestão Comercial
                </ion-button>
                
              </li>

            </ul>
            <button v-on:click="close()" class="btn btn-outline-light">SAIR</button>
          </div>
        </div>
      </nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
    name: 'NavbarComponent',
    computed: {
        ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('user', ['logout']),
        close() {
            this.logout();
        },
        alert(){
          alert('oi');
        }
    },
});

</script>

<style scoped>
nav{
    background-color: purple !important;
}

.nav-link, .navbar-brand{
    color:white !important;
}

ion-button{
    color: white;
}

</style>


