import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Onama from './components/Onama.vue';
import Busevi from './components/Busevi.vue';
import Usluge from './components/Usluge.vue';
import Kontakt from './components/Kontakt.vue';
import Destinacije from './components/Destinacije.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/onama',
      name: 'Onama',
      component: Onama
    },
    {
      path: '/busevi',
      name: 'Busevi',
      component: Busevi
    },
    {
      path: '/destinacije',
      name: 'Destinacije',
      component: Destinacije
    },
    {
      path: '/usluge',
      name: 'Usluge',
      component: Usluge
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
  ]
});

export default router;
