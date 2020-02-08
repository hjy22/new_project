<template>
  <v-app>
    <v-content>
    <LecturerMenu/>
    <v-container>
    <StudentsCard/>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LecturerMenu from "../components/LecturerMenu";
import StudentsCard from "../components/StudentsCard";

export default {
  name: 'LecturerInfoPage',
  components: {
    LecturerMenu,
    StudentsCard
  },
}
</script>

<style > 