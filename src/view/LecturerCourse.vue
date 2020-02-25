<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    
    <v-container>
    <!-- <LecturerTimeline/> -->
    <!-- <v-divider/> -->
      <v-flex v-for="(course, id) in getLecturerHomePageCourseList" :key="id">
        <LecturerCourseCard :courseCode="course.code" :courseName="course.name"/>
      </v-flex>
      
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
  components: {
    LecturerMenu,
    PhoneMenu,
    LecturerTimeline,
    LecturerCourseCard,
    BackTop,
    Footer
  },
  computed: {
    ...mapGetters([
      "getLecturerHomePageCourseList"
    ])
  }
}
</script>

<style > 