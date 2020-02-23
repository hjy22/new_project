import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import LecturerCoursePage from './LecturerCoursePage.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  el: '#LecturerCoursePage',
  components: { LecturerCoursePage },
  template: '<LecturerCoursePage/>',
  render: h => h(LecturerCoursePage)
})