<template>
<v-content>
 
  <v-container>
    <v-card max-height="500">
      <v-card-text>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{courseInfo.code}} {{courseInfo.name}}</v-list-item-title>
          <v-container>
          <DatePicker :identity="'lecturer'" :header="'Deadline'" :name="'COMP107'"/>
          </v-container>
          <v-container>
          <FeedbackSheet/>
          </v-container>
        </v-list-item-content>
      </v-card-text>
    </v-card>
  </v-container>

</v-content>
</template>

<script>
import axios from 'axios'
import DatePicker from "./DatePicker";
import FeedbackSheet from "./FeedbackSheet";

export default {
  data () {
    return {
      courseInfo: [],
    }
  },
  components: {
      DatePicker,
      FeedbackSheet
    },
    created () {
      this.getCourseInfo() 
    },
    
    methods: {
     getCourseInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            this.courseInfo = response.data[0];
        }, response => {
            console.log("error");
        });
    },
    }
}
</script>