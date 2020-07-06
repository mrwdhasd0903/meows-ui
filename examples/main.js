import Vue from 'vue'
import App from './App.vue'

import my from '../packages/Button'
Vue.config.productionTip = false

Vue.use(my)

new Vue({
  render: h => h(App),
}).$mount('#app')