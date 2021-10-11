import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHashHistory } from 'vue-router';

import Catalog from './components/Catalog.vue';
import Orders from './components/Orders.vue';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      notifications: []
    };
  },
  mutations: {
    addNotification(state, text) {
      state.notifications = [...state.notifications, text];
    },
    removeAllNotification(state) {
      state.notifications = [];
    }
  }
});

const routes = [
  { path: '/catalog', component: Catalog },
  { path: '/orders', component: Orders }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
