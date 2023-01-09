import { defineComponent } from 'vue';
import { personAddOutline } from 'ionicons/icons'
import { personOutline } from 'ionicons/icons'
import { clipboardOutline } from 'ionicons/icons'
import CardComponent from '@/components/Card/CardComponent.vue'

export default defineComponent({
    name: 'IndexClient',
    components: {
       CardComponent
    },
    setup() {
        return{
            personAddOutline,
            personOutline,
            clipboardOutline
        }
    }
});