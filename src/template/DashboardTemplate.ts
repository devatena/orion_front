import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import { people } from 'ionicons/icons';

export default defineComponent({
    name: 'DashboardTemplate',
    computed: {
        ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('user', ['logout']),
        close() {
            this.logout();
        },
    },
    setup() {
        return { people }
    }

});