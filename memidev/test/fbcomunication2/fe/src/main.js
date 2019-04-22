import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.apiRootPath = (process.env.NODE_ENV === "production") ? 'http://localhost:80/api' : "http://localhost:3000/api"
console.log(process.env.NODE_ENV)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
