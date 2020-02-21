<template>
<v-container>
 
  <v-container>
    <v-card max-height="344">
      <v-card-text>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{courseCode}} {{courseName}}</v-list-item-title>
          <v-container>
          <DatePicker/>
          </v-container>
          <v-container>
          <FeedbackSheet/>
          </v-container>
        </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-container>

</v-container>
</template>

<script>
// import LecturerCourseStepper from "./LecturerCourseStepper";
import DatePicker from "./DatePicker";
import FeedbackSheet from "./FeedbackSheet";

export default {
  props:["courseCode","courseName"],
  components: {
      // LecturerCourseStepper,
      DatePicker,
      FeedbackSheet
    },
    methods:{
      createFile(){
      }
    }
}
</script>