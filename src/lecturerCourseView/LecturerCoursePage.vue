<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    <v-container>
    <LecturerTimeline/>
    <v-divider/>
      <v-flex v-for="(course, id) in getLecturerHomePageCourseList" :key="id">
        <LecturerCourseCard :courseCode="course.code" :courseName="course.name"/>
      </v-flex>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "../components/LecturerMenu";
import LecturerTimeline from "../components/LecturerTimeline";
import LecturerCourseCard from "../components/LecturerCourseCard";

export default {
  name: 'LecturerCoursePage',
  components: {
    LecturerMenu,
    LecturerTimeline,
    LecturerCourseCard
  },
  computed: {
    ...mapGetters([
      "getLecturerHomePageCourseList"
    ])
  }
}
</script>

<style > 