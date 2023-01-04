import { store} from '@/store'
export default {
    install: () => {
    store.dispatch('user/auth');       
    }
}