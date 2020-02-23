import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import LecturerHomePage from './LecturerHomePage.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  el: '#LecturerHomePage',
  components: { LecturerHomePage },
  template: '<LecturerHomePage/>',
  render: h => h(LecturerHomePage)
})