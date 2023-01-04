import { RouteRecordRaw } from 'vue-router';

const AuthRoute: Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/login/LoginPage.vue')
    },
    {
      path: '/senha',
      name: 'Forgot',
      component: () => import('@/views/auth/forgot-password/ForgotPassword.vue')
    }
  ]

  export default AuthRoute;