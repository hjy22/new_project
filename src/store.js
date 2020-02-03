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
    },
    FeedbackPage:{
        expanded: [],
        search: '',
        singleExpand: false,
      headers: [
        {
          text: 'Group ID',
          align: 'left',
          sortable: true,
          value: 'GroupID',
        },
        { text: 'Leader', value: 'Leader' },
        { text: 'Members', value: 'Members' },
        { text: 'Scores', value: 'Scores' },
        { text: 'Feedback ID', value: 'FeedbackID' },
        { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
          GroupID: 'Frozen Yogurt',
          Leader: 159,
          Members: 6.0,
          Scores: 24,
          FeedbackID: 4.0,
        },
        {
          GroupID: 'Ice cream sandwich',
          Leader: 237,
          Members: 9.0,
          Scores: 37,
          FeedbackID: 4.3,
        },
        {
          GroupID: 'Eclair',
          Leader: 262,
          Members: 16.0,
          Scores: 23,
          FeedbackID: 6.0,
        },
        {
          GroupID: 'Cupcake',
          Leader: 305,
          Members: 3.7,
          Scores: 67,
          FeedbackID: 4.3,
        },
        {
          GroupID: 'Gingerbread',
          Leader: 356,
          Members: 16.0,
          Scores: 49,
          FeedbackID: 3.9,
        },
        {
          GroupID: 'Jelly bean',
          Leader: 375,
          Members: 0.0,
          Scores: 94,
          FeedbackID: 0.0,
        },
      ],
    }

  },
  getters: {
    getInfoList: state => state.HomePage.infoList,
    getCourseList: state => state.HomePage.courseList,
    getFeedbackPageExpand: state => state.FeedbackPage.expanded,
    getFeedbackPageSearch: state => state.FeedbackPage.search,
    getFeedbackPageHeaderList: state => state.FeedbackPage.headerList,
    getFeedbackPageDessertList: state => state.FeedbackPage.dessertList,
  }
})