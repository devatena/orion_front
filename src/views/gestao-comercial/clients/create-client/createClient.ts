import { defineComponent } from 'vue';
import { stringifyQuery } from 'vue-router';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'
export default defineComponent({
    name: 'createClient',
    components: {
       PageHeaderComponent
    },
    methods: {
        changeDisable(){
            const Icheck:  any  = document.getElementById("isPhysicalPerson");
            const Iname:  any  = document.getElementById("inputName");
            const Inickname:  any  = document.getElementById("inputNickname");
            const IcorporateName:  any  = document.getElementById("inputCorporateName");
            const IfantasyName:  any  = document.getElementById("inputFantasyName");
            const Icnpj:  any  = document.getElementById("inputCNPJ");
            const Iissuer:  any  = document.getElementById("inputIssuer");
            const Irg:  any  = document.getElementById("inputRG");
            console.log(Icheck.checked)
            if(Icheck.checked == true){
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
    }
});

