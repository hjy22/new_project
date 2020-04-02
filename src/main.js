// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from '@/plugins/vuetify'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios' 
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import XLSX from 'xlsx'

Vue.use(XLSX)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use(VueAxios, axios)



