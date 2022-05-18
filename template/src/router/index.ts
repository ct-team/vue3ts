import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
