import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

var dontGo = (to, from, next) => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('로그인이 필요한 기능입니다')
        return next({ path: '/sign' })
    } else {
        next()
    }
}


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/',
            name: 'lv0',
            component: () => import('./views/lv0')
        },
        {
            path: '/lv1',
            name: 'lv1',
            component: () => import('./views/lv1')
        },
        {
            path: '/lv2',
            name: 'lv2',
            component: () => import('./views/lv2')
        },
        {
            path: '/lv3',
            name: 'lv3',
            component: () => import('./views/lv3')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('./views/user')
        },
        {
            path: '/page',
            name: 'page',
            component: () => import('./views/page')
        },
        {
            path: '/header',
            name: 'header',
            component: () => import('./views/headers.vue'),
            beforeEnter: dontGo
        },
        {
            path: '/sign',
            name: 'sign',
            component: () => import('./views/sign.vue')
        },

    ]
})
