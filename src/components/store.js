import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    aboutPage:{
      infoList: [{
        ID: 123456,
        name:"Mike",
        age: 20,
        gender: "Male",
        height: 180,
        weight: 120,
        identity: "User",
        mail:"mike@gmail.com",
        img:"https://avataaars.io/?avatarStyle=Transparent&hairColor=orange&facialHairType=Blank&clotheType=Hoodie&clotheColor=red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      },
    ],
    }
  },

  getters: {
    getInfoList: state => state.aboutPage.infoList,
  }
})