<template>
<v-content>
 
  <v-container>
    <v-card max-height="344">
      <v-card-text>
        <!-- <v-list-item> -->
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{courseInfo.code}} {{courseInfo.name}}</v-list-item-title>
          <v-container>
          <DatePicker/>
          </v-container>
          <v-container>
          <FeedbackSheet/>
          </v-container>
        </v-list-item-content>
        <!-- </v-list-item> -->
      </v-card-text>
    </v-card>
  </v-container>

</v-content>
</template>

<script>
import axios from 'axios'
// import LecturerCourseStepper from "./LecturerCourseStepper";
import DatePicker from "./DatePicker";
import FeedbackSheet from "./FeedbackSheet";

export default {
  data () {
    return {
      courseInfo: [],
    }
  },
  components: {
      // LecturerCourseStepper,
      DatePicker,
      FeedbackSheet
    },
    created () {
      this.getCourseInfo() // 本地JSON
    },
    
    methods: {
      // 本地json获取商品数据
     getCourseInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            
            this.courseInfo = response.data[0];
            // console.log(this.courseInfo[0].name)
        }, response => {
            console.log("error");
        });
    },
    }
}
</script>