import Vue from 'vue'
import feedback from './feedback.vue'

Vue.config.productionTip = false



/* eslint-disable no-new */
var main = new Vue({

  el: '#feedback',
  render: h => h(feedback)

})
