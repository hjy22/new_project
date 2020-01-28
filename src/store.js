import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    HomePage:{
      infoList: [{
        name: 'Florida',
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
    {
      code: 'COMP201',
      name: 'Software Engineering',
      ddl: '21st April, 16:30 PM'  
    },
    ],
    }
  },
  getters: {
    getInfoList: state => state.HomePage.infoList,
    getCourseList: state => state.HomePage.courseList,
  }
})