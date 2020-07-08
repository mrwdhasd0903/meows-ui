import Vue from 'vue'
import App from './App.vue'

import meows from '../src/index.js'

Vue.config.productionTip = false

Vue.use(meows)

new Vue({
  render: h => h(App),
}).$mount('#app')