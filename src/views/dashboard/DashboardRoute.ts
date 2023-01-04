import { RouteRecordRaw } from 'vue-router';

const DashbordRoute: Array<RouteRecordRaw> = [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/dashboard/DashboardPage.vue')
    }
  ]

  export default DashbordRoute;