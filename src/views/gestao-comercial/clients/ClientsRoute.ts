import { RouteRecordRaw } from 'vue-router';

const ClientsRoute: Array<RouteRecordRaw> = [
  {
    path: '/gestao-comercial/client',
    name: 'client',
    component: () => import('@/views/gestao-comercial/clients/show-clients/ShowClientsPage.vue'),
    children: [
      {
        path: 'show',
        name: 'show-client',
        component: () => import('@/views/gestao-comercial/clients/show-clients/ShowClientsPage.vue'),
      },
    ]
  }
]

export default ClientsRoute;