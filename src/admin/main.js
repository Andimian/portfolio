import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import {store} from './store/index';
import requests from '@/requests';

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});