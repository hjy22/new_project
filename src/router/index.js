import Vue from 'vue'
import Router from 'vue-router'
// import LecturerHomePage from '@/view/lecturerHomeView/LecturerHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'LecturerHomePage',
    //   component: LecturerHomePage
    // },
    {
      path: '/LecturerCalendarPage',
      name: 'LecturerCalendarPage',
      component: () => import('@/view/lecturerCalendarView/LecturerCalendarPage.vue'),
    },
  ]
})
