import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import footer from '../views/footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/index.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/signin/index.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup/index.vue'),
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/password/index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/index.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('../views/verify/index.vue'),
  },
  {
    path: '/tabs/',
    component: footer,
    children: [
      /*{
        path: 'signin',
        component: () => import('../views/signin/index.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
      },*/
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
