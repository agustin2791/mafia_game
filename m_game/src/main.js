import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'

import { Auth } from 'aws-amplify'
import Amplify from '@aws-amplify/core'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig);

import '@aws-amplify/ui-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Amplify, AmplifyPlugin)
Vue.use(BootstrapVue);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
