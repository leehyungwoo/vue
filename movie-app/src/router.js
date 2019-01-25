import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'homeView',
            component: HomeView
        },
        {
            path: '/searchView',
            name: 'searchView',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/SearchView.vue')
        },
        {
            path: '/addView',
            name: 'addView',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/AddView.vue')
        },
        {
            path: '/deleteView',
            name: 'deleteView',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/DeleteView.vue')
        }
    ]
})
