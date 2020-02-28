import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/chooseUser.vue'
// import LecturerHomePage from '@/view/lecturerHomeView/LecturerHomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'redirect',
      component: Home,
    },
    {
      path: '/chooseUser',
      name: 'chooseUser',
      component: () => import('@/view/chooseUser.vue'),
    },
    {
      path: '/LecturerHome',
      name: 'LecturerHome',
      component: () => import('@/view/LecturerHome.vue'),
    },
    {
      path: '/LecturerCalendar',
      name: 'LecturerCalendar',
      component: () => import('@/view/LecturerCalendar.vue'),
    },
    {
      path: '/LecturerCourse',
      name: 'LecturerCourse',
      component: () => import('@/view/LecturerCourse.vue'),
    },
    {
      path: '/LecturerInfo',
      name: 'LecturerInfo',
      component: () => import('@/view/LecturerInfo.vue'),
    },
    {
      path: '/StudentHome',
      name: 'StudentHome',
      component: () => import('@/view/StudentHome.vue'),
    },
    {
      path: '/StudentPre',
      name: 'StudentPre',
      component: () => import('@/view/StudentPre.vue'),
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('@/view/abc.vue'),
    // },
  ]
})
