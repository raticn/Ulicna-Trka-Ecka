import { createRouter, createWebHistory } from 'vue-router'
import Trka from "../views/Trka.vue"
import Home from "../views/Home.vue"
import Kontakt from "../views/Kontakt.vue"
import Rezultati from "../views/Rezultati.vue"
import TabelaTrke from "../views/TabelaTrke.vue"

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
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt
    },
    {
      path: '/rezultati',
      name: 'rezultati',
      component: Rezultati
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: TabelaTrke
    }
  ]
})

export default router
