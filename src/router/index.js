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
      component: Home,
      meta: {
        title: "Ulična Trka Ečka: Sve što Treba da Znate",
        description: "Učestvujte u Uličnoj trci Ečka i trkajte se u različitim trkama kao što su trka na 10km, trka na 5km, dečija trka i štafetna trka. Osvojite novčane nagrade i unikatne medalje. Registracija je otvorena do 20.10.2023."
      }
    },
    {
      path: '/trka',
      name: 'trka',
      component: Trka,
      meta: {
        title: "Treća Ulična Trka Ecka: Informacije i Detalji",
        description: 'Saznajte sve o trećem izdanju Ulične trke Ečka, stazama, kategorijama i nagradama.'
      }
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
      meta: {
        title: "Kontaktirajte nas - Ulična Trka Ecka",
        description: "Kontaktirajte organizatore Ulične trke Ečka za više informacija o događaju, registraciji i sponzorstvu."
      }
    },
    {
      path: '/rezultati',
      name: 'rezultati',
      component: Rezultati,
      meta: {
        title: "Rezultati Poslednjih Uličnih Trka u Ečkoj",
        description: "Pregledajte rezultate prošlih i aktuelnih izdanja Ulične trke Ečka. Pronađite svoje vreme, rang i uporedite se sa drugim učesnicima."
      }
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: TabelaTrke,
      meta: {
        title: "Tabele Rezultata: Ulična Trka Ecka",
        description: "Detaljna tabela sa rezultatima Ulične trke Ečka. Pregledajte vremena, pozicije i kategorije za svaku trku."
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Ulicna Trka Ecka';
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Default Description');
  } else {
    const newMetaDesc = document.createElement('meta');
    newMetaDesc.name = "description";
    newMetaDesc.content = to.meta.description || 'Default Description';
    document.getElementsByTagName('head')[0].appendChild(newMetaDesc);
  }

  next();
});

export default router
