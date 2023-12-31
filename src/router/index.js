import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ComposableView from '../views/ComposableView.vue'
import CounterView from '../views/CounterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/composable',
      name: 'composable',
      component: ComposableView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    // {
    //   path: '/team',
    //   name: 'team',
    //   component: () => import('@/views/TeamView.vue')
    // }
  ]
})

export default router
