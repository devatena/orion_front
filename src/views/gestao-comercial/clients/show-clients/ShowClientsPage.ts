import { defineComponent } from 'vue';
import { searchOutline } from 'ionicons/icons';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'

export default defineComponent({
    name: 'ShowClientsPage',
    components: {
        PageHeaderComponent,
    },    
    setup(){
        return{
            searchOutline,
        }
    },
    methods: {
       /* searchUsers(){
            //console.log(this.searchUser);
            /*for(let user in this.users){
               if(this.searchUser == 'Daniel'){
                console.log(user == 'Daniel');
               } 
                
            }
            const idTD: any = document.getElementById('clientID');
            const nameTD: any = document.getElementById('clientName');
            for(let other in this.others){
                if(this.searchUser == 'Daniel' || this.searchUser == 'daniel' ){
                    if((this.others[other].nome == 'Daniel') == true){
                        console.log(this.others[other]);
                      
                    }
                    else if((this.others[other].nome == 'Carlos') == true)
                    {
                        idTD.style.display = 'none';
                        nameTD.style.display = 'none';
                    }
                    else if((this.others[other].nome == 'Caio') == true)
                    {
                        idTD.style.display = 'none';
                        nameTD.style.display = 'none';
                    }
                    else if((this.others[other].nome == 'Patrick') == true)
                    {
                        idTD.style.display = 'none';
                        nameTD.style.display = 'none';
                    }
                }
                if(this.searchUser == 'Carlos' || this.searchUser == 'carlos' ){
                    if((this.others[other].nome == 'Carlos') == true){
                        console.log(this.others[other].nome);
                    }
                }
                if(this.searchUser == 'Caio' || this.searchUser == 'caio' ){
                    if((this.others[other].nome == 'Caio') == true){
                        console.log(this.others[other].nome);
                    }
                }
                if(this.searchUser == 'Patrick' || this.searchUser == 'patrick' ){
                    if((this.others[other].nome == 'Patrick') == true){
                        console.log(this.others[other].nome);
                    }
                }
               
            }
        } */
    },
    data() {
        return{
            searchUser: "",
            users: ['Carlos', 'Daniel', 'Caio', 'Patrick'],
            others: [
                {
                nome: 'Carlos',
                id: '1'
                },
                {
                nome: 'Daniel',
                id: '2'
                },
                {
                nome: 'Caio',
                id: '3'
                },
                {
                nome: 'Patrick',
                id: '4'
                },
                {
                nome: 'Daniel',
                id: '5'    
                }

            ]   
        }
    }
    
});