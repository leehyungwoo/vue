import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/' : '/api/'
console.log(process.env.NODE_ENV)
Vue.prototype.$gb = 333

Vue.use(VeeValidate)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
