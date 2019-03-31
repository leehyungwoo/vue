import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ './views/login.vue')
        },
        {
            path: '/signUpEnt',
            name: 'signUpEnt',
            component: () => import(/* webpackChunkName: "signUpEnt" */ './views/signUpEnt.vue'),
            children: []
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: () => import(/* webpackChunkName: "signUp" */ './views/signUp.vue'),
            children: []
        },
        {
            path: '/v0',
            name: 'v0',
            component: () => import(/* webpackChunkName: "v0" */ './views/v0.vue')
        },
        {
            path: '/v1',
            name: 'v1',
            component: () => import(/* webpackChunkName: "v1" */ './views/v1.vue')
        },
        {
            path: '/v2',
            name: 'v2',
            component: () => import(/* webpackChunkName: "v2" */ './views/v2.vue')
        }
    ]
})
