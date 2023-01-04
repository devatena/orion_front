import User from "@/apis/User";
import router from '@/router'
import { loadingController } from "@ionic/vue";

const state = {
    dados: {
        cpf: "",
        password: ""
    },
    user: ""
}

const mutations = {
    limpar(state: any) {
        state.dados = {
            cpf: "",
            password: ""
        }
    },
    user(state: any, dados: any) {
        state.user = dados;
    }
}
const actions = {
    async login(context: any) {
        const loading = await loadingController.create({
            message: 'Entrando',
            spinner: 'bubbles',
            cssClass: 'spinner'
        });

        loading.present();
        await User.login(state.dados).then(
            async response => {
                loading.dismiss();
                localStorage.setItem('token', response.data.token)
                const dados = await User.get()
                context.commit('user', dados)
                context.commit('limpar')
                return router.push('/home');

            },
            error => {
                loading.dismiss();
                alert('Login inválido');
            }
        );

    },
    async logout(context: any) {
        const loading = await loadingController.create({
            message: 'Saindo',
            spinner: 'bubbles',
            cssClass: 'spinner'
        });

        loading.present();
        await User.logout().then(
            async function () {
                loading.dismiss();
            }
        );
        context.commit('user', '')

    },

    async auth(context: any) {
        await User.get().then(
            async response => {
                context.commit('user', await User.get())
                // router.push('/home')
            },
            error => {
                router.push('/login')
            }
        );
        //   if(hasUser){
        //       context.commit('user', await User.get())
        //       router.push('home')
        //   }else{
        //     router.push('/login')
        //   }


    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}