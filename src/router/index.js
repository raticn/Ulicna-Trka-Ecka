import { createRouter, createWebHistory } from 'vue-router'
import Trka from "../views/Trka.vue"
import Home from "../views/Home.vue"
import Kontakt from "../views/Kontakt.vue"
import Rezultati from "../views/Rezultati.vue"
import TabelaTrke from "../views/TabelaTrke.vue"
import Onama from "../views/Onama.vue"
import Rekordi from "../views/Rekordi.vue"
import Trka4 from "../views/Trka4.vue"
import Trka5 from "../views/Trka5.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "5. Ulična Trka Ečka: Sve što Treba da Znate",
        description: "Dobrodošli na Uličnu trku Ečka! Pridružite se uzbudljivim trkama na 5 i 10 km, štafetnoj ili dečijoj trci i doživite trkački duh u prelepom okruženju Ečke!"
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
        title: "Kontaktirajte organizatore - Ulična Trka Ecka",
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
        title: "Tabele Rezultata Trkača: Ulična Trka Ecka",
        description: "Detaljna tabela sa rezultatima Ulične trke Ečka. Pregledajte vremena, pozicije i kategorije za svaku trku."
      }
    },
    {
      path: '/onama',
      name: 'onama',
      component: Onama,
      meta: {
        title: "O nama - Informacije o Uličnoj trci Ečka",
        description: "Saznajte više o organizaciji i timu iza Ulične trke Ečka. Pridružite nam se i budite deo trkačke zajednice!"
      }
    },
    {
      path: '/rekordi',
      name: 'rekordi',
      component: Rekordi,
      meta: {
        title: "Rekordi staze 5 i 10 km - Ulična trka Ečka",
        description: "Pogledajte rekorde trka na 5 km i 10 km u muškoj i ženskoj kategoriji na Uličnoj trci Ečka."
      }
    },
    {
      path: '/cetvrta-trka-info',
      name: 'cetvrta-trka-info',
      component: Trka4,
      meta: {
        title: "Sve Potrebne Informacije o 4. Uličnoj trci Ečka",
        description: "Sve informacije o 4. Uličnoj trci Ečka, uključujući datume, rute, kotizacije, prijave..."
      }
    },
    {
      path: '/peta-trka-info',
      name: 'peta-trka-info',
      component: Trka5,
      meta: {
        title: "Sve Potrebne Informacije o 5. Uličnoj trci Ečka",
        description: "Sve informacije o 5. Uličnoj trci Ečka, uključujući datume, rute, kotizacije, prijave..."
      }
    },
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

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', getCanonicalUrl(to));
  } else {
    const newCanonicalLink = document.createElement('link');
    newCanonicalLink.rel = "canonical";
    newCanonicalLink.href = getCanonicalUrl(to);
    document.getElementsByTagName('head')[0].appendChild(newCanonicalLink);
  }

  next();
});

function getCanonicalUrl(route) {
  return window.location.origin + route.fullPath;
}
export default router
