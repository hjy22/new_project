<template>
<v-content>
  <!-- <div id="app"> -->
    <!-- <LecturerMenu/> -->
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
  name: 'App',
  components:{
    Footer,
    LecturerMenu,
    IdentityChosen
  }
}
</script>