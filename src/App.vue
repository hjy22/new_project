<template>
<v-app>
  <!-- <div id="app"> -->
    <PhoneHeader class="hidden-md-and-up"/>
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
import PhoneHeader from "./components/PhoneHeader";
import IdentityChosen from "./components/IdentityChosen";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
export default {
  name: 'App',
  components:{
    Menu,
    Footer,
    PhoneHeader,
    BackTop,
    LecturerMenu,
    PhoneMenu,
    IdentityChosen
  }
}
</script>

