<template>
    <app-template>
        <div class="container">
            <PageHeaderComponent title="Cadastro de Clientes"></PageHeaderComponent>
            <form>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="selectPhysicPerson" class="form-label">Tipo de cliente</label>
                           <select class="form-select half-size" id="selectPhysicPerson" @change="changeDisable()" v-model="form.isPhysicalPerson">
                            <option selected value="0">Pessoa física</option>
                            <option value="1">Pessoa jurídica</option>
                           </select>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="selectGender" class="form-label">Status</label>
                           <select class="form-select half-size" id="selectGender" v-model="form.status">
                            <option selected>----------------</option>
                            <option value="ativo">Cliente</option>
                            <option value="prospect">Prospect</option>
                           </select>
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputName" class="form-label">Nome do cliente</label>
                            <input type="text" class="form-control half-size" id="inputName" v-model="form.name">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputNickname" class="form-label">Apelido</label>
                            <input type="text" class="form-control half-size" id="inputNickname" v-model="form.nickname">
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputCorporateName" class="form-label">Razão social</label>
                            <input type="text" class="form-control half-size" id="inputCorporateName" v-model="form.corporate_name" disabled>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputFantasyName" class="form-label">Nome fantasia</label>
                            <input type="text" class="form-control half-size" id="inputFantasyName" v-model="form.fantasy_name" disabled>
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputCNPJ" class="form-label">CNPJ</label>
                            <input type="text" class="form-control quarter-size" id="inputCNPJ" v-model="form.cnpj" disabled>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputCPF" class="form-label">CPF</label>
                            <input type="text" class="form-control quarter-size" id="inputCPF" v-model="form.cpf">
                        </div> 
                        <div class="d-flex flex-column">
                            <label for="inputRG" class="form-label">RG</label>
                            <input type="text" class="form-control quarter-size" id="inputRG" v-model="form.rg">
                        </div> 
                        <div class="d-flex flex-column">
                            <label for="inputIssuer" class="form-label">Emissor</label>
                            <input type="text" class="form-control quarter-size" id="inputIssuer" v-model="form.issuer">
                        </div>  
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="selectGender" class="form-label">Sexo</label>
                           <select class="form-select half-size" id="selectGender" v-model="form.gender">
                            <option selected>----------------</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outro</option>
                           </select>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputBirthday" class="form-label">Data de nascimento</label>
                            <input type="date" class="form-control half-size" id="inputBirthday" v-model="form.birthday">
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputTelephone" class="form-label">Telefone</label>
                            <input type="text" class="form-control half-size" id="inputTelephone" v-model="form.telephone">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputCellphone" class="form-label">Celular/Whatsapp</label>
                            <input type="text" class="form-control half-size" id="inputCellphone" v-model="form.cellphone">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="form.email">
                </div>
                <div class="mb-3">
                    <label for="inputSite" class="form-label">Site do cliente</label>
                    <input type="text" class="form-control" id="inputSite" v-model="form.site">
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputCEP" class="form-label">CEP</label>
                            <input type="text" @change="searchCep()" class="form-control third-size" id="inputCEP" v-model="form.cep">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputStreet" class="form-label">Rua</label>
                            <input type="text" class="form-control third-size" id="inputStreet" v-model="form.street">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputNumber" class="form-label">Número</label>
                            <input type="text" class="form-control third-size" id="inputNumber" v-model="form.number">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputComplement" class="form-label">Complemento</label>
                            <input type="text" class="form-control third-size" id="inputComplement" v-model="form.complement">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputNeighborhood" class="form-label">Bairro</label>
                            <input type="text" class="form-control third-size" id="inputNeighborhood" v-model="form.neighborhood">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputTown" class="form-label">Cidade</label>
                            <input type="text" class="form-control third-size" id="inputTown" v-model="form.town">
                        </div>
                    </div>
                </div>
                <ion-button form fill="solid" @click="submitForm()">Enviar</ion-button>
            </form>
        </div>
    </app-template>
</template>
<script lang="ts" src="./createClient.ts"></script>
<style scoped src="./createClient.css"></style>