import { defineComponent, onMounted, reactive, ref } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    name: 'ForgotPassword',
    setup() {
        const store = useStore();
        const user = reactive({
            dados: []
        });
        const errors = ref();

        const setUser = async () => {
            user.dados = store.state.user.dados
        }

        onMounted(() => {
            setUser();
          })
        
        const checkForm = async () => {
          errors.value = [];
          console.log(user.dados);

            // if (!user.value) {
            //     // console.log(`$user`)
            //     errors.value.push("Por favor, preencha o campo USUÁRIO");
            // }

            // if (!this.password) {
            //     this.errors.push("Por favor preencha o campo SENHA")
            //     console.log(this.errors)
            // }

            // if (this.user && this.password) {
            //     this.$router.push('/dashboard');
            // }
        }
        

        return {
            user,
            errors,
            setUser,
            checkForm
        }
    }

});
