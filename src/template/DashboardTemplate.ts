import { defineComponent } from 'vue';
import { mapState, mapActions} from 'vuex';
import { menuController } from '@ionic/vue';
import { people } from 'ionicons/icons';

export default defineComponent({
    name: 'DashboardTemplate',
    computed: {
        ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('user', ['logout']),
        closeMenu() {
            menuController.close('first');
            this.logout();
          },
    },
    setup() {
        return { people }
      }

});