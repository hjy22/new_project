import Vue from 'vue'
import Router from 'vue-router'
import LecturerHomePage from '@/lecturerHomeView/LecturerHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LecturerHomePage',
      component: LecturerHomePage
    },
    {
      path: '/LecturerFeedbackPage',
      name: 'LecturerFeedbackPage',
      component: () => import('../lecturerFeedbackView/LecturerFeedbackPage.vue'),
    },
  ]
})
