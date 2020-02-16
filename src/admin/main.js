import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import requests from '@/requests';
import { store } from './store/index';

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});