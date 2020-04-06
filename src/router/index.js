import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/chooseUser.vue'
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
      component: () => import('@/views/chooseUser.vue'),
    },
    {
      path: '/LecturerHome',
      name: 'LecturerHome',
      component: () => import('@/views/LecturerHome.vue'),
    },
    {
      path: '/LecturerCalendar',
      name: 'LecturerCalendar',
      component: () => import('@/views/LecturerCalendar.vue'),
    },
    {
      path: '/LecturerCourse',
      name: 'LecturerCourse',
      component: () => import('@/views/LecturerCourse.vue'),
    },
    {
      path: '/LecturerInfo',
      name: 'LecturerInfo',
      component: () => import('@/views/LecturerInfo.vue'),
    },
    {
      path: '/LecturerTable',
      name: 'LecturerTable',
      component: () => import('@/views/LecturerTable.vue'),
    },
    {
      path: '/StudentHome',
      name: 'StudentHome',
      component: () => import('@/views/StudentHome.vue'),
    },
    {
      path: '/StudentPre',
      name: 'StudentPre',
      component: () => import('@/views/StudentPre.vue'),
    },
    {
      path: '/StudentMark',
      name: 'StudentMark',
      component: () => import('@/views/StudentMark.vue'),
    },
  ]
})
