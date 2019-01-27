import test from './components/test.vue'
import abc from './components/abc.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/test', component: test },
    { path: '/abc', component: abc },
]


const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})