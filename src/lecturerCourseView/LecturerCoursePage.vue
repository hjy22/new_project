<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    <v-container>
    <LecturerTimeline/>
    <StudentsCard/>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LecturerMenu from "../components/LecturerMenu";
import LecturerTimeline from "../components/LecturerTimeline";
import StudentsCard from "../components/StudentsCard";

export default {
  name: 'LecturerCoursePage',
  components: {
    LecturerMenu,
    LecturerTimeline,
    StudentsCard
  },
}
</script>

<style > 