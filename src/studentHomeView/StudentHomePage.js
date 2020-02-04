import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import StudentHomePage from './StudentHomePage.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  el: '#StudentHomePage',
  components: { StudentHomePage },
  template: '<StudentHomePage/>',
  render: h => h(StudentHomePage)
})