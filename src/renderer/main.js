import Vue from 'vue'
import axios from 'axios'
import Config from 'electron-store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'
import store from './store'

// console.log(store)

const config = new Config()

config.set('projectDirectoryPath', '~/NodeJS Projects/')

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (!process.env.IS_WEB) {
  Vue.prototype.$config = config
  Vue.use(require('vue-electron'))
}
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
