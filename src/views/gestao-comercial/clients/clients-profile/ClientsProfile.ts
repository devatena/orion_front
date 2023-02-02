import { defineComponent } from 'vue';
import ProfileComponent from '@/components/Profile/ProfileComponent.vue';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'
import Api from '@/apis/Api';

export default defineComponent({
    name: 'ClientsProfilePage',
    components: {
        ProfileComponent,
        PageHeaderComponent,
    },
    data() {
        return {
            clients: ''
        }
    },
    mounted() {
        this.showClient();
    },
    methods: {
        async showClient() {
            await Api.get('/client/id/' + this.$router.currentRoute.value.params.id).then(
                (response) => {
                    console.log(response.data.client)
                    this.clients = response.data.client
                })
        },

        test(){
            console.log(this.clients)
        }
    }

})       