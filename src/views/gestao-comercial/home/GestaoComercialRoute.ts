import { RouteRecordRaw } from 'vue-router';

const GestaoComercialRoute: Array<RouteRecordRaw> = [
    {
      path: '/gestao-comercial',
      name: 'gestao-comercial',
      component: () => import('@/views/gestao-comercial/home/GestaoComercial.vue')
    }
  ]

  export default GestaoComercialRoute;