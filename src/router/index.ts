import AuthRoute from '@/views/auth/AuthRoute';
import ClientsRoute from '@/views/clients/ClientsRoute';
import DashbordRoute from '@/views/dashboard/DashboardRoute';
import GestaoComercialRoute from '@/views/gestao-comercial/GestaoComercialRoute';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

export const routes = ([] as Array<RouteRecordRaw>).concat(AuthRoute, DashbordRoute, ClientsRoute, GestaoComercialRoute)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && localStorage.getItem('token') == null) next({ name: 'Login' })
  // if the user is not authenticated, `next` is called twice
  else if (to.name == 'Login' && localStorage.getItem('token') !== null) next({ name: 'Home' })

  else next()
})

export default router
