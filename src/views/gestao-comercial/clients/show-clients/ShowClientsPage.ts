import { defineComponent } from 'vue';
import { searchOutline } from 'ionicons/icons';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'
import Api from '@/apis/Api';

export default defineComponent({
    name: 'ShowClientsPage',
    components: {
        PageHeaderComponent,
    }, 
     data() {
        return{
            clients: '',
            search: '',
            someID: ''
        }
    },
    
    methods: {
        getId(id: any){ 
            console.log(id)
            this.$router.push('/client/profile/' + id)
        },

        searchClient(){
            console.log(this.search)
                    if(this.search != ''){
                        Api.get('/client/show/'+this.search).then(
                            (response) => {
                                this.clients = response.data.client;
                        })
                    }
                    else{
                        Api.get('/client').then(
                            (response) => {
                                console.log(response.data.client);
                                this.clients = response.data.client;       
                        })
                    }
                    
                }
            
        },
    mounted(){
        Api.get('/client').then(
            (response) => {
                console.log(response.data.client);
                this.clients = response.data.client;       
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
   
});