import { createRouter, createWebHistory } from 'vue-router'
import Trka from "../views/Trka.vue"
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trka',
      name: 'trka',
      component: Trka
    }
  ]
})

export default router
