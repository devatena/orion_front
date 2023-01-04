<template>
  <ion-page>
    <ion-content>
      <section class="login">
        <div class="box-login">
          <div class="card-login">
            <div class="login-logo">
              <p class="text-logo">Orion</p>
              <h1 class="text-welcome">Redefinição de senha</h1>
              <div class="message-error">
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </div>
            </div>
            <div class="form-login">
              <form id="form" @submit.prevent="checkForm">
                <div class="form">
                  <input
                    class="input"
                    type="text"
                    placeholder="Usuário"
                    v-model="user.dados.cpf"
                    autocomplete="off"
                  />

                </div>
                <div class="box-button">
                  <input class="btn-login" type="submit" value="Redefinir" />
                  <!-- <button type="submit" class="btn">Login</button> -->
                </div>
              </form>
            </div>
            <div>
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

<script lang="ts" src="./ForgotPassword.ts"></script>
<style scoped src="./ForgotPassword.css"></style>