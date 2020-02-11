<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    <v-container>
      <v-container v-for="(course, id) in getLecturerInfoPageCourseList" :key="id">
        <StudentsCard :code="course.code"/>
      </v-container>
    <!-- <StudentsCard/> -->
    </v-container>
    <BackTop/>
    <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "../components/LecturerMenu";
import StudentsCard from "../components/StudentsCard";
import BackTop from "../components/BackTop";
import Footer from "../components/Footer";

export default {
  name: 'LecturerInfoPage',
  components: {
    LecturerMenu,
    StudentsCard,
    BackTop,
    Footer
  },
  computed: {
    ...mapGetters([
      "getLecturerInfoPageCourseList",
    ])
  }
}
</script>

<style > 