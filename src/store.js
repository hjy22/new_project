import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userStatus: {
      userCurrentIdentity: 'Chosen',
      userCurrentView: 'Chosen',
      studentGroup:null,
    },
  },
  mutations: {
    switchUserCurrentIndentity(state,payload){
      state.userStatus.userCurrentIdentity = payload.status
    },
    switchUserCurrentView(state,payload){
      state.userStatus.userCurrentView = payload.status
    },
    switchStudentGroup(state,payload){
      state.userStatus.studentGroup = payload.status
    },
  },
  actions: {
    toggleUserIdentity({commit}, payload) {
      commit('switchUserCurrentIndentity', payload)
    },
    toggleUserView({commit}, payload) {
      commit('switchUserCurrentView', payload)
    },
    toggleStudentGroup({commit}, payload) {
      commit('switchStudentGroup', payload)
    },
  },
  getters: {
    getCurrentIdentity: state => state.userStatus.userCurrentIdentity,
    getUserCurrentView: state => state.userStatus.userCurrentView,
    getStudentGroup: state => state.userStatus.studentGroup,
  }
})