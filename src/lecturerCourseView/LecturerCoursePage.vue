<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    <v-container>
    <LecturerTimeline/>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LecturerMenu from "../components/LecturerMenu";
import LecturerTimeline from "../components/LecturerTimeline";

export default {
  name: 'LecturerCoursePage',
  components: {
    LecturerMenu,
    LecturerTimeline,
  },
}
</script>

<style > 