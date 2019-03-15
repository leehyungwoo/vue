import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/userManage',
            name: 'userManage',
            component: () => import('./views/userManage.vue')
        },
        {
            path: '/header',
            name: '헤더',
            component: () => import('./views/headers.vue')
        },

    ]
})
