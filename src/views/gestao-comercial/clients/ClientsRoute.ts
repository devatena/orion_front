import { RouteRecordRaw } from 'vue-router';

const ClientsRoute: Array<RouteRecordRaw> = [
  {
    path: '/client',
    name: 'client',
    component: () => import('@/views/gestao-comercial/clients/index-clients/IndexClient.vue'),
  },
  {
    path: '/client/index',
    name: 'index-client',
    component: () => import('@/views/gestao-comercial/clients/index-clients/IndexClient.vue'),
  },
  {
    path: '/client/show',
    name: 'show-client',
    component: () => import('@/views/gestao-comercial/clients/show-clients/ShowClientsPage.vue'),
  },
  
]

export default ClientsRoute;