import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/homeView/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/FeedbackPage',
      name: 'FeedbackPage',
      component: () => import('../feedbackView/FeedbackPage.vue'),
    },
  ]
})
