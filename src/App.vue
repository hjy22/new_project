<template>
<v-app>
  <!-- <div id="app"> -->
    <!-- <LecturerMenu/> -->
    <IdentityChosen/>
    <!-- <router-view/> -->
    <!-- <Footer/> -->
  <!-- </div> -->
  </v-app>
  
</template>

<script>
import LecturerMenu from "./components/LecturerMenu";
import IdentityChosen from "./components/IdentityChosen";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components:{
    Footer,
    LecturerMenu,
    IdentityChosen
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
