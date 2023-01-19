import { defineComponent } from 'vue';
import ProfileComponent from '@/components/Profile/ProfileComponent.vue';
import PageHeaderComponent from '@/components/Page-header/PageHeaderComponent.vue'

export default defineComponent({
    name: 'ClientsProfilePage',
    components: {
        ProfileComponent,
        PageHeaderComponent,
    },
    setup(){
        return{
           
        }
    }
})       