<template>
<v-app>
  <!-- <div id="app"> -->
    <Menu/>
    <!-- <LecturerMenu/> -->
    <!-- <IdentityChosen/> -->
    
    <router-view/>
    
    <PhoneMenu fixed class="hidden-md-and-up white--text"/>
    <BackTop/>

    <Footer/>
  <!-- </div> -->
  </v-app>
  
</template>

<script>
import Menu from "./components/Menu";
import LecturerMenu from "./components/LecturerMenu";
import PhoneMenu from "./components/PhoneMenu";
import IdentityChosen from "./components/IdentityChosen";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
export default {
  name: 'App',
  components:{
    Menu,
    Footer,
    BackTop,
    LecturerMenu,
    PhoneMenu,
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
