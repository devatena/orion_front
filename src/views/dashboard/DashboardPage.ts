import { defineComponent } from 'vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default defineComponent({
    name: 'DashboardPage',
    computed: {
        ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('user', ['logout']),
    },

});
