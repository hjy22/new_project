import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import LecturerCalendarPage from './LecturerCalendarPage.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  el: '#LecturerCalendarPage',
  components: { LecturerCalendarPage },
  template: '<LecturerCalendarPage/>',
  render: h => h(LecturerCalendarPage)
})