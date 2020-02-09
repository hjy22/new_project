<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    <v-container>
      <v-container v-for="(course, id) in getLecturerInfoPageCourseList" :key="id">
        <StudentsCard :codes="course.code"/>
      </v-container>
    <!-- <StudentsCard/> -->
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "../components/LecturerMenu";
import StudentsCard from "../components/StudentsCard";

export default {
  name: 'LecturerInfoPage',
  components: {
    LecturerMenu,
    StudentsCard
  },
  computed: {
    ...mapGetters([
      "getLecturerInfoPageCourseList",
    ])
  }
}
</script>

<style > 