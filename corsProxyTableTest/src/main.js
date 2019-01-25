import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

axios.create({
    timeout: 1000,
    headers: {
        "X-Naver-Client-Id": "IvtgwulYsReU5CoRSoNK",
        "X-Naver-Client-Secret": "rTQblxId2g"
    },
});

new Vue({
    render: h => h(App),
}).$mount('#app')
