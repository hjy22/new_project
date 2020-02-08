import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import LecturerInfoPage from './LecturerInfoPage.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  el: '#LecturerInfoPage',
  components: { LecturerInfoPage },
  template: '<LecturerInfoPage/>',
  render: h => h(LecturerInfoPage)
})