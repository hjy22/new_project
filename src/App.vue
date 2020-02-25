<template>
<v-app>
  <!-- <div id="app"> -->
    <Menu class="hidden-sm-and-down"/>
    <!-- <LecturerMenu/> -->
    <!-- <IdentityChosen/> -->
    
    <router-view/>
    
    <PhoneMenu class="hidden-md-and-up white--text"/>
    <BackTop/>

    <Footer class="hidden-sm-and-down"/>
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

