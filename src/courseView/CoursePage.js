import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import CoursePage from './CoursePage.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  el: '#CoursePage',
  components: { CoursePage },
  template: '<CoursePage/>',
  render: h => h(CoursePage)
})