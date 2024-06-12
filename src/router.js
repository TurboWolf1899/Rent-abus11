import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Adaptacije from './components/Adaptacije.vue';
import Arhitektura from './components/Arhitektura.vue';
import Bazeni from './components/Bazeni.vue';
import Bojleri from './components/Bojleri.vue';
import Ciscenje from './components/Ciscenje.vue';
import Elektroinstalacije from './components/Elektroinstalacije.vue';
import Kontakt from './components/Kontakt.vue';
import MajstorSam from './components/MajstorSam.vue';
import Seemore from './components/Seemore.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/adaptacije',
      name: 'Adaptacije',
      component: Adaptacije
    },
    {
      path: '/arhitektura',
      name: 'Arhitektura',
      component: Arhitektura
    },
    {
      path: '/bazeni',
      name: 'Bazeni',
      component: Bazeni
    },
    {
      path: '/bojleri',
      name: 'Bojleri',
      component: Bojleri
    },
    {
      path: '/ciscenje',
      name: 'Ciscenje',
      component: Ciscenje
    },
    {
      path: '/elektroinstalacije',
      name: 'Elektroinstalacije',
      component: Elektroinstalacije
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
    {
      path: '/majstorsam',
      name: 'MajstorSam',
      component: MajstorSam
    },
    {
      path: '/seemore',
      name: 'Seemore',
      component: Seemore
    }
  ]
});

export default router;
