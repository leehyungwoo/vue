import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
new Vue({
    el: '#app',
    render: h => h(App)
})