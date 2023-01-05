import { RouteRecordRaw } from 'vue-router';

const GestaoComercialRoute: Array<RouteRecordRaw> = [
    {
      path: '/gestao-comercial',
      name: 'GestaoComercial',
      component: () => import('@/views/gestao-comercial/GestaoComercial.vue')
    }
  ]

  export default GestaoComercialRoute;