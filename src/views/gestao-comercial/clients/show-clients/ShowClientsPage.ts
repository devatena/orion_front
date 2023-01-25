import { defineComponent } from 'vue';
import { searchOutline } from 'ionicons/icons';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'
import Api from '@/apis/Api';

export default defineComponent({
    name: 'ShowClientsPage',
    components: {
        PageHeaderComponent,
    },  
    mounted(){
        Api.get('/client').then(
            (response) => {
                console.log(response.data.client);
                this.clients = response.data.client;
                // for(const client in response.data.client){
                //     console.log(response.data.client[client])
                //     this.clients.name = response.data.client[client].name
                //     this.clients.id = response.data.client[client].id
                //     this.clients.cpf = response.data.client[client].cpf
                // }
                
        })
    },  
    setup(){
        return{
            searchOutline,
        }
    },
    // methods: {
    //     searchUsers(){
            
    //     } 
    // },
    data() {
        return{
            clients: ''
        }
    }
    
});