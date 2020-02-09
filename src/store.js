import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    LecturerHomePage:{
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
    LecturerFeedbackPage:{
      courses: [{
        code: "COMP107",
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
      groupInfo: [
        {
          GroupID: '1072020001',
          Leader: 'Jack',
          Members: 'Peter, Bob',
          Scores: 71,
          FeedbackID: '1072020100',
          expanded:"aaa"
        },
        {
          GroupID: '1072020002',
          Leader: 'Anna',
          Members: 9.0,
          Scores: 37,
          FeedbackID: '1072020099',
          expanded:"ccc"
        },
        {
          GroupID: '1072020003',
          Leader: 'Tom',
          Members: 16.0,
          Scores: 23,
          FeedbackID: '1072020098',
          expanded:"kkk"
        },
        {
          GroupID: '1072020004',
          Leader: 'Jess',
          Members: 3.7,
          Scores: 67,
          FeedbackID: '1072020097',
          expanded:"bbb"
        },
        {
          GroupID: '1072020005',
          Leader: 'Sam',
          Members: 16.0,
          Scores: 49,
          FeedbackID: '1072020096',
          expanded:"ccc"
        },
        {
          GroupID: '1072020006',
          Leader: 'Lisa',
          Members: 0.0,
          Scores: 94,
          FeedbackID: '1072020095',
          expanded:"ddd"
        },
      ],
        },
        {
          code: "COMP201",
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
        groupInfo: [
          {
            GroupID: 'Frozen Yogurt',
            Leader: 159,
            Members: 6.0,
            Scores: 24,
            FeedbackID: 4.0,
            expanded:"aaa"
          },
          {
            GroupID: 'Ice cream sandwich',
            Leader: 237,
            Members: 9.0,
            Scores: 37,
            FeedbackID: 4.3,
            expanded:"ccc"
          },
          {
            GroupID: 'Eclair',
            Leader: 262,
            Members: 16.0,
            Scores: 23,
            FeedbackID: 6.0,
            expanded:"kkk"
          },
          {
            GroupID: 'Cupcake',
            Leader: 305,
            Members: 3.7,
            Scores: 67,
            FeedbackID: 4.3,
            expanded:"bbb"
          },
          {
            GroupID: 'Gingerbread',
            Leader: 356,
            Members: 16.0,
            Scores: 49,
            FeedbackID: 3.9,
            expanded:"ccc"
          },
          {
            GroupID: 'Jelly bean',
            Leader: 375,
            Members: 0.0,
            Scores: 94,
            FeedbackID: 0.0,
            expanded:"ddd"
          },
        ],
          },
      ]
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
  getters: {
    getLecturerHomePageInfoList: state => state.LecturerHomePage.infoList,
    getLecturerHomePageCourseList: state => state.LecturerHomePage.courseList,
    getLecturerFeedbackPageCourseList: state => state.LecturerFeedbackPage.courses,
    getLecturerCoursePageCourseList: state => state.LecturerCoursePage.colors,
    getLecturerInfoPageCourseList: state => state.LecturerInfoPage.courses,
  }
})