<template>
<v-content>
  <!-- <div id="app"> -->
    <!-- <LecturerMenu/> -->
    <v-btn @click="getValue">aaa</v-btn>
    <v-btn @click="setValue">bbb</v-btn>
    <v-btn @click="addValue">ccc</v-btn>
    <IdentityChosen/>
    <!-- <Footer/> -->
  <!-- </div> -->
  </v-content>
  
</template>

<script>
import LecturerMenu from "@/components/LecturerMenu";
import IdentityChosen from "@/components/IdentityChosen";
import Footer from "@/components/Footer";
export default {
  name: 'choose',
  components:{
    inpContent: 'choose',
    Footer,
    LecturerMenu,
    IdentityChosen
  },
  methods: {
    getValue() {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then( (res) => {
        console.log('res', res);
        this.inpContent = res.data[0].name;
        // console.log(this.inpContent);
      })
    },
    setValue() {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        id: 1, name: "cc"
      }).then( (res) => {
        console.log('res', res);
      })
    },
    addValue() {
      // axios.post('/', {})
      this.$http.post('/api/addValue', {
        id: 4, name: "ad"
      }).then( (res) => {
        console.log('res', res);
      })
    }
  }
}
</script>