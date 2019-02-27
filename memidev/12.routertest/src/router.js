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
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            children: [
                {
                    path: '/:id',
                    name: 'about-detail',
                    component: () => import('./views/about-detail.vue')
                },
                {
                    path: '/:id/edit',
                    name: 'aboutEdit',
                    component: () => import('./views/aboutEdit.vue')
                },
            ]
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('./views/help.vue'),
        },
        {
            path: '*',
            name: 'errPage',
            component: () => import('./views/errorPage.vue')
        }
    ]
})
