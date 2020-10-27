import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig);
import '@aws-amplify/ui-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
