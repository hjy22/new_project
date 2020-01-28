import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    Homepage:{
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
    }
  },
  getters: {
    getInfoList: state => state.Homepage.infoList,
  }
})