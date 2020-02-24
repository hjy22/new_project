import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '../../router'
import store from '../../store'
import LecturerCalendarPage from './LecturerCalendarPage.vue'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  store,
  el: '#LecturerCalendarPage',
  render: h => h(LecturerCalendarPage)

})
