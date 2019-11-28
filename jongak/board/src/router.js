import Vue from 'vue'
import Router from 'vue-router'
import join from './views/join.vue'
import home from './views/home.vue'
import login from './views/login.vue'
import board from './components/board.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/login'
    },
    {
      path: '/join',
      name: 'join',
      component:join
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/board',
      name: 'board',
      component:board
    },
  ]
})
