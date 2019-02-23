import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Bus from './util/Bus.vue'


axios.defaults.baseURL = "http://localhost:3000/"

Vue.config.productionTip = false
Vue.prototype.$Bus = Bus;

new Vue({
  render: h => h(App),
}).$mount('#app')
