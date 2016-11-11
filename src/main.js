import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import store from './store';

//vue components
import App from './App';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';

Vue.component('app', App);

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
const routes = [
  {path: '/', component: LoginPage, name: 'login'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: {requiresAuth: true}},
  {path: '/chat', component: ChatPage, name: 'chat', meta: {requiresAuth: true}}
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'));
    if (authUser && authUser.access_token) {
      next();
    }else{
      next({name: 'login'});
    }
  }

  next();
});

//alternativa 1
/*
new Vue({
  el: '#app',
  router
});
*/

//alternativa 2
new Vue({
  router, store
}).$mount('#app');
