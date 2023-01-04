import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
    name: 'LoginPage',
    computed: {
        ...mapState('user', ['dados'])
    },
    // beforeRouteLeave() {
    //     this.limpar()
    // },
    methods: {
        ...mapActions('user', ['login']),

    },

});


