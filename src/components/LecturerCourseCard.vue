<template>
<v-container>
 
  <v-container>
    <v-card max-height="344">
      <v-card-text>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{courseCode}} {{courseName}}</v-list-item-title>
          <DatePicker/>
          <v-btn class="ma-2" color="primary" dark @click="createFile()">Upload
                <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
        </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-container>

</v-container>
</template>

<script>
import LecturerCourseStepper from "./LecturerCourseStepper";
import DatePicker from "./DatePicker";
export default {
  props:["courseCode","courseName"],
  components: {
      LecturerCourseStepper,
      DatePicker
    },
    methods:{
      createFile(){
      }
    }
}
</script>