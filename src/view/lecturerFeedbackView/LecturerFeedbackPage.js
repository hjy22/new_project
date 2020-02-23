import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '../../router'
import store from '../../store'
import LecturerFeedbackPage from './LecturerFeedbackPage.vue'

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  store,
  el: '#LecturerFeedbackPage',
  render: h => h(LecturerFeedbackPage)

})
