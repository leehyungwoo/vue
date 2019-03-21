import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from 'axios'

Vue.use(Router)


const apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/' : '/api/';
Vue.prototype.$apiRootPath = apiRootPath;
axios.defaults.baseURL = apiRootPath;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

var dontGo = (to, from, next) => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('로그인이 필요한 기능입니다')
        return next({ path: '/sign' })
    } else {
        next()
    }
}

const pageCheck = (to, from, next) => {

    axios.post(`${apiRootPath}page`,
        { name: to.path.replace('/', '') },
        { headers: { Authorization: localStorage.getItem('token') } }
    ).then((r) => {
        console.log(r)
        if (!r.data.success) throw new Error(r.data.msg)
        next()
    }).catch((e) => {
        console.log(e)
        next(`/block/${e.message}`)
    })
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
            component: () => import('./views/lv0'),
            beforeEnter: pageCheck
        },
        {
            path: '/lv1',
            name: 'lv1',
            component: () => import('./views/lv1'),
            beforeEnter: pageCheck
        },
        {
            path: '/lv2',
            name: 'lv2',
            component: () => import('./views/lv2'),
            beforeEnter: pageCheck
        },
        {
            path: '/lv3',
            name: 'lv3',
            component: () => import('./views/lv3'),
            beforeEnter: pageCheck
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('./views/user'),
            beforeEnter: pageCheck
        },
        {
            path: '/page',
            name: 'page',
            component: () => import('./views/page'),
            beforeEnter: pageCheck
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
            component: () => import('./views/sign.vue'),
        },
        {
            path: '/block/:msg',
            name: 'block',
            component: () => import('./views/block.vue'),
        },
    ]
})
