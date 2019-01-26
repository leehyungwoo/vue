import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'babel-polyfill'


Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = "";
axios.defaults.headers["X-Naver-Client-Id"] = "IvtgwulYsReU5CoRSoNK";
axios.defaults.headers["X-Naver-Client-Secret"] = "rTQblxId2g";



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
