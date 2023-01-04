<template>
  <ion-page>
    <ion-content class="bg-purple">
      <section class="login">
        <div class="box-login">
          <div class="card-login">
            <div class="login-logo">
              
              <p class="text-logo">Orion</p>
              <h1 class="text-welcome">Bem-vindo, cavaleiro!</h1>
              <!-- <div class="message-error">
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </div> -->
            </div>
            <div class="form-login">
              <form id="form" @submit.prevent="login()">
                <div class="form">
                  <input
                    class="input"
                    type="text"
                    placeholder="Usuário"
                    v-model="dados.cpf"
                    autocomplete="off"
                  />

                  <input
                    class="input"
                    type="password"
                    placeholder="Senha"
                    v-model="dados.password"
                    min="0"
                  />
                </div>
                <div class="box-button">
                  <input class="btn-login" type="submit" value="Login" />
                  <!-- <button type="submit" class="btn">Login</button> -->
                </div>
              </form>
            </div>
            <div  @click="() => $router.push('/senha')">
              <p class="text-center-login forgot-password">Esqueci a senha!</p>
            </div>
          </div>
        </div>

        <footer>
          <p class="text-center-login">
            Um produto de <strong> Atena Agência® </strong>
          </p>
        </footer>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" src="./LoginPage.ts"></script>
<style scoped src="./LoginPage.css"></style>