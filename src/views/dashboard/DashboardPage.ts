import { defineComponent } from 'vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
    name: 'DashboardPage',
    components: {
        CardComponent
    },
    computed: {
        ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('user', ['logout']),
        close() {
            this.logout();
        },
    },

});
