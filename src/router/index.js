import { createRouter, createWebHistory } from 'vue-router'
import NotFoundLayout from '@/layouts/NotFoundLayout.vue'
import OrderView from '@/views/OrderView.vue'
import ProvidersView from '@/views/ProvidersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/IndexView.vue')
    },
    {
      path: '/',
      component: () => import('@/layouts/NavbarLayout.vue'),
      children: [
        {
          path: '/orders',
          name: 'orders',
          component: OrderView
        },
        {
          path: '/providers',
          name: 'providers',
          component: ProvidersView
        }
      ]
    },
    // Ruta comodín para capturar todas las URLs no encontradas
    {
      path: '/:catchAll(.*)',
      component: NotFoundLayout
    }
  ]
})

export default router
