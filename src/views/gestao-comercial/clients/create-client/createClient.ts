import { defineComponent, getTransitionRawChildren } from 'vue';
import { stringifyQuery } from 'vue-router';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'
import apiCorreios from '@/apis/Api';
import Api from '@/apis/Api';
import router from '@/router';
export default defineComponent({
    name: 'createClient',
    /*mounted(){
        apiCorreios.get('https://viacep.com.br/ws/01001000/json/').then((response) => {
            console.log(response)
        })
    },*/
    components: {
        PageHeaderComponent
    },
    data() {
       return{
        form: {
            isPhysicalPerson: '',
            name: '',
            corporate_name: '',
            nickname: '',
            fantasy_name: '',
            cpf: '',
            cnpj: '',
            rg: '',
            issuer: '',
            gender: '',
            birthday: '',
            telephone: '',
            cellphone: '',
            email: '',
            site: '',
            cep: '',
            street: '',
            number: '',
            complement: '',
            neighborhood: '',
            town: '',
            status: 'prospect'

        }
       } 
    },
    methods: {
        changeDisable() {
            const Select: any = document.getElementById("selectPhysicPerson");
            const Iname: any = document.getElementById("inputName");
            const Inickname: any = document.getElementById("inputNickname");
            const IcorporateName: any = document.getElementById("inputCorporateName");
            const IfantasyName: any = document.getElementById("inputFantasyName");
            const Icnpj: any = document.getElementById("inputCNPJ");
            const Iissuer: any = document.getElementById("inputIssuer");
            const Irg: any = document.getElementById("inputRG");

            if (Select.value == 1) {
                Iname.disabled = true;
                Inickname.disabled = true;
                Iissuer.disabled = true;
                Irg.disabled = true;
                IcorporateName.disabled = false;
                IfantasyName.disabled = false;
                Icnpj.disabled = false;

            } else {
                Iname.disabled = false;
                Inickname.disabled = false;
                Iissuer.disabled = false;
                Irg.disabled = false;
                IcorporateName.disabled = true;
                IfantasyName.disabled = true;
                Icnpj.disabled = true;
            }
        },

        submitForm() {
            console.log(this.form);
            Api.post('/client/register',this.form).then(
                (response) =>{
                console.log(response);
                alert("Cadastro realizado com sucesso")
                this.$router.back();
            })


        },

        searchCep() {
            //console.log('aasdasdasd')
            // const Icep: any = document.getElementById("inputCEP")
            // const Istreet: any = document.getElementById("inputStreet")
            // const Ineighborhood: any = document.getElementById("inputNeighborhood")
            // const Itown: any = document.getElementById("inputTown")
            // const Icomplement: any = document.getElementById("inputComplement")
            // const Inumber: any = document.getElementById("inputNumber")
            // console.log(Icep.value)
            apiCorreios.get('https://viacep.com.br/ws/' + this.form.cep+ '/json/').then(
                (response) => {
                    console.log(response)
                    this.form.street = response.data.logradouro
                    this.form.neighborhood = response.data.bairro
                    this.form.town = response.data.localidade
                }
                
            )
        }

    }
});

