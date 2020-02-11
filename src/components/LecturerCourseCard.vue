<template>
<v-container>
  <v-card>
    <v-card-text>
      <v-row class="mb-4" align="center">
        <strong class="title" :id="courseCode">{{courseCode}} {{courseName}}</strong>
        <v-spacer></v-spacer>
      </v-row>
      <LecturerCourseStepper/>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import LecturerCourseStepper from "./LecturerCourseStepper";
export default {
  props:["courseCode","courseName"],
  components: {
      LecturerCourseStepper
    },
}
</script>