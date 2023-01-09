import { defineComponent } from 'vue';
// import ViaCep from '@/apis/ViaCep';
export default defineComponent({
    name: 'IndexClient',
    data() {
        return {
            checkbox: false,
        }
    },
    components: {

    },
    methods: {
        isPhysicalPerson(e: any) {
            if (e.target.checked == true) {
                this.checkbox = true;
            }else{
                this.checkbox = false;
            }
        },
       
    }
});