<template>
  <v-app>
    <v-content>
    <!-- <LecturerMenu/> -->
    
    <v-container>
    <!-- <LecturerTimeline/> -->
    <!-- <v-divider/> -->
      <v-flex v-for="(course, id) in getLecturerHomePageCourseList" :key="id">
        <LecturerCourseCard :courseCode="course.code" :courseName="course.name"/>
      </v-flex>
      <v-btn @click="aa">cc</v-btn>
    </v-container>
    <!-- <PhoneMenu fixed class="hidden-md-and-up white--text"/> -->
    <!-- <BackTop/> -->
    <!-- <Footer/> -->
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "@/components/LecturerMenu";
import PhoneMenu from "@/components/PhoneMenu";
import LecturerTimeline from "@/components/LecturerTimeline";
import LecturerCourseCard from "@/components/LecturerCourseCard";
import BackTop from "@/components/BackTop";
import Footer from "@/components/Footer";

export default {
  data () {
    return {
      userCurrentView: this.$store.getters.getCurrentView,
    }
  },
  components: {
    LecturerMenu,
    PhoneMenu,
    LecturerTimeline,
    LecturerCourseCard,
    BackTop,
    Footer
  },
  methods:{
    aa(){
      console.log(this.$store.getters.getCurrentView)
    }
  },
  computed: {
    ...mapGetters([
      "getLecturerHomePageCourseList",
      "getCurrentView"
    ])
  }
}
</script>

<style > 