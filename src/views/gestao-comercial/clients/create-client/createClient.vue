<template>
    <app-template>
        <div class="container">
            <PageHeaderComponent title="Cadastro de Clientes"></PageHeaderComponent>
            <form>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="selectPhysicPerson" class="form-label">Tipo de cliente</label>
                           <select class="form-select half-size" id="selectPhysicPerson" @change="changeDisable()">
                            <option selected value="0">Pessoa física</option>
                            <option value="1">Pessoa jurídica</option>
                           </select>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="selectGender" class="form-label">Status</label>
                           <select class="form-select half-size" id="selectGender">
                            <option selected>----------------</option>
                            <option value="1">Cliente</option>
                            <option value="2">Prospect</option>
                           </select>
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputName" class="form-label">Nome do cliente</label>
                            <input type="text" class="form-control half-size" id="inputName">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputNickname" class="form-label">Apelido</label>
                            <input type="text" class="form-control half-size" id="inputNickname">
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputCorporateName" class="form-label">Razão social</label>
                            <input type="text" class="form-control half-size" id="inputCorporateName" disabled>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputFantasyName" class="form-label">Nome fantasia</label>
                            <input type="text" class="form-control half-size" id="inputFantasyName" disabled>
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputCNPJ" class="form-label">CNPJ</label>
                            <input type="text" class="form-control quarter-size" id="inputCNPJ" disabled>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputCPF" class="form-label">CPF</label>
                            <input type="text" class="form-control quarter-size" id="inputCPF">
                        </div> 
                        <div class="d-flex flex-column">
                            <label for="inputRG" class="form-label">RG</label>
                            <input type="text" class="form-control quarter-size" id="inputRG">
                        </div> 
                        <div class="d-flex flex-column">
                            <label for="inputIssuer" class="form-label">Emissor</label>
                            <input type="text" class="form-control quarter-size" id="inputIssuer">
                        </div>  
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="selectGender" class="form-label">Sexo</label>
                           <select class="form-select half-size" id="selectGender">
                            <option selected>----------------</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            <option value="3">Outro</option>
                           </select>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputBirthday" class="form-label">Data de nascimento</label>
                            <input type="date" class="form-control half-size" id="inputBirthday">
                        </div>   
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputTelephone" class="form-label">Telefone</label>
                            <input type="text" class="form-control half-size" id="inputTelephone">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputCellphone" class="form-label">Celular/Whatsapp</label>
                            <input type="text" class="form-control half-size" id="inputCellphone">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail">
                </div>
                <div class="mb-3">
                    <label for="inputSite" class="form-label">Site do cliente</label>
                    <input type="text" class="form-control" id="inputSite">
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputCEP" class="form-label">CEP</label>
                            <input type="text" class="form-control third-size" id="inputCEP">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputStreet" class="form-label">Rua</label>
                            <input type="text" class="form-control third-size" id="inputStreet">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputNumber" class="form-label">Número</label>
                            <input type="text" class="form-control third-size" id="inputNumber">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            <label for="inputComplement" class="form-label">Complemento</label>
                            <input type="text" class="form-control third-size" id="inputComplement">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputNeighborhood" class="form-label">Bairro</label>
                            <input type="text" class="form-control third-size" id="inputNeighborhood">
                        </div>
                        <div class="d-flex flex-column">
                            <label for="inputTown" class="form-label">Cidade</label>
                            <input type="text" class="form-control third-size" id="inputTown">
                        </div>
                    </div>
                </div>
                <ion-button form fill="solid">Enviar</ion-button>
            </form>
        </div>
    </app-template>
</template>
<script lang="ts" src="./createClient.ts"></script>
<style scoped src="./createClient.css"></style>