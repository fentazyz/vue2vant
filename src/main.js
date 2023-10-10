import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/Vant'
import '@/styles/common.less'
import { Toast, Dialog } from 'vant'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.prototype.$toast = Toast
Vue.prototype.$Dialog = Dialog
