import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userStatus: {
      userCurrentIdentity: 'Chosen',
      userCurrentView: 'Chosen',
    },
    LecturerHomePage:{
      infoList: [{
        name: 'Anna',
        ID: '0001',
        character: 'Lecturer'  
      },
      // {
      //   name: 'jjjj',
      //   ID: '0001',
      //   character: 'Lecturer'  
      // },
      ],
      courseList: [{
        code: 'COMP107',
        name: 'Designing Systems',
        ddl: '2nd April, 12:30 PM'  
      },
      ],
    },
    LecturerCoursePage:{
      colors: [
        {
          color: 'red lighten-2',
          code: 'COMP107',
          ddl: 'Deadline: 4564646',
          info:'There are 23 groups submitting the feedback sheets',
        },
        {
          color: 'purple darken-1',
          code: 'COMP201',
          ddl: "You haven't assign deadline",
          info:'',
        },
        // {
        //   color: 'green lighten-1',
        //   icon: 'mdi-airballoon',
        // },
        // {
        //   color: 'indigo',
        //   icon: 'mdi-buffer',
        // },
      ],
    },
    LecturerInfoPage:{
      courses: [
        {
          code: 'COMP107',
        },
        {
          code:'COMP201'
        }
      ],
    },
  },
  mutations: {
    switchUserCurrentIndentity(state,payload){
      state.userStatus.userCurrentIdentity = payload.status
    },
    switchUserCurrentView(state,payload){
      state.userStatus.userCurrentView = payload.status
    },
  },
  actions: {
    toggleUserIdentity({commit}, payload) {
      commit('switchUserCurrentIndentity', payload)
    },
    toggleUserView({commit}, payload) {
      commit('switchUserCurrentView', payload)
    },
  },
  getters: {
    getCurrentIdentity: state => state.userStatus.userCurrentIdentity,
    getUserCurrentView: state => state.userStatus.userCurrentView,
    getLecturerHomePageInfoList: state => state.LecturerHomePage.infoList,
    getLecturerHomePageCourseList: state => state.LecturerHomePage.courseList,
    getLecturerFeedbackPageCourseList: state => state.LecturerFeedbackPage.courses,
    getLecturerCoursePageCourseList: state => state.LecturerCoursePage.colors,
    getLecturerInfoPageCourseList: state => state.LecturerInfoPage.courses,
  }
})