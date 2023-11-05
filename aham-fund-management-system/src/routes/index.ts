import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

import Layout from '@/layouts/Layout.vue'
import Login from '../views/Login/Login.vue'
import UserRoutes from './UserRoutes.js'

const routes = [
  {
    path: '/login',
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        redirect: { name: 'login' },
        name: 'auth-redirect'
      },
      {
        path: '',
        component: Login,
        name: 'login'
      }
    ]
  },
  {
    path: '',
    meta: { requiresAuth: true },
    component: Layout,
    children: [...UserRoutes]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//  Middlewares
router.beforeEach((to, from, next) => {
  const redirectToRoute = function (name: string) {
    if (name === from.name) {
      next()
      return
    }

    next({ name })
  }
  const loggedUser = Cookies.get('token') || false

  if (to.meta.requiresAuth) {
    if (loggedUser) return next()
    else return redirectToRoute('login')
  } else {
    if (loggedUser) return redirectToRoute('')
    else return next()
  }
})

export default router
