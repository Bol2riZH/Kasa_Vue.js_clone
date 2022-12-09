import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/pages/About.vue';
import Home from '../components/pages/Home.vue';
import Host from '../components/pages/Host.vue';
import NotFound from '../components/pages/NotFound.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    name: 'Host',
    path: '/host/:id',
    component: Host,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
