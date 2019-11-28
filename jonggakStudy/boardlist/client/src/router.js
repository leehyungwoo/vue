import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import join from './views/join.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/join',
      name: 'join',
      component: join

    }
  ]
})