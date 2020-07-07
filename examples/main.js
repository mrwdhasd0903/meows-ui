import Vue from 'vue'
import App from './App.vue'

import Button from '../packages/Button'
import Icon from '../packages/Icon'
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
