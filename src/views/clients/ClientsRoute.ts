import { RouteRecordRaw } from 'vue-router';

const ClientsRoute: Array<RouteRecordRaw> = [
    {
      path: '/client',
      name: 'Client',
      component: () => import('@/views/clients/show-clients/ShowClientsPage.vue')
    }
  ]

  export default ClientsRoute;