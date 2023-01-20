<template>
    <div class="container">
        <div class="row hero p-3">
            <div class="col-4">
                <div class="card text-center main-prof-card">
                    <img src="https://yt3.ggpht.com/a/AATXAJznu9Ke3t9h1yW2wwwJ01g1qaHOyl7SCI4_PA=s900-c-k-c0xffffffff-no-rj-mo" alt="profile pic">
                    <div class="card-body">
                        <h4>Nome: {{ name }}</h4>
                        <h5>Apelido: {{ nickname }}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">CPF ou CNPJ: {{ cpf_cnpj }}</li>
                        <li class="list-group-item">Sexo: {{ gender }}</li>
                        <li class="list-group-item">Telefone: {{ telephone }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-8">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Outros dados
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <ul class="list-group">
                                    <div class="row">
                                        <div class="col-12 col-sm-6">
                                            <li class="list-group-item">RG: {{ rg }}</li>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                             <li class="list-group-item">Emissor: {{ issuer }}</li>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12 col-sm-6">
                                            <li class="list-group-item">Celular: {{ cellphone }}</li>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                             <li class="list-group-item">Email: {{ email }}</li>
                                        </div>
                                    </div>
                                    <li class="list-group-item mt-2">Site: {{ site }}</li>
                                    <div class="row mt-2">
                                        <div class="col-12 col-sm-6 col-md-4">
                                            <li class="list-group-item">CEP: {{ cep }}</li>
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-4">
                                             <li class="list-group-item">Cidade: {{ town }}</li>
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-4">
                                            <li class="list-group-item">Bairro: {{ neighborhood }}</li>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12 col-sm-6 col-md-4">
                                            <li class="list-group-item">Rua: {{ street }}</li>
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-4">
                                             <li class="list-group-item">Complemento: {{ complement }}</li>
                                        </div>
                                        <div class="ccol-12 col-sm-6 col-md-4">
                                            <li class="list-group-item">Número: {{ number }}</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-hearder" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Histórico
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-text text-exeption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc id cursus metus aliquam. Eu feugiat pretium nibh ipsum consequat nisl vel. Libero nunc consequat interdum varius. In fermentum posuere urna nec tincidunt praesent semper.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: String,
        nickname: String,
        cpf_cnpj: String,
        gender: String,
        telephone: String,
        rg: String,
        issuer: String,
        cellphone: String,
        email: String,
        site: String,
        cep: String,
        town: String,
        street: String,
        neighborhood: String,
        complement: String,
        number: String,
        profile_image: String,        
    },
    name: 'ProfileComponent'
});
</script>

<style scoped>
img{
    height: 225px;
    object-fit: fill;
}

.hero{
    /* background-color: #e6e6e6; */
}
.main-prof-card{
    color: purple;
}

.text-exeption{
    background-color: white;
    color: purple;
}

li, p{
    font-size: 12px;
    background-color: plum;
    color: white;
}

h5{
    font-size: 16px;
}

h4{
    font-size: 20px;
}



.accordion-button{
    background-color: white;
    color: purple;
}

.accordion-button:hover{
    background-color: purple;
    color: white;
}

</style>