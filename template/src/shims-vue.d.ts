import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store<any>;
    $bus: Vue;
    $dart: any;
  }
}
declare global {
  interface Window {
    [p: string]: any;
  }
}
