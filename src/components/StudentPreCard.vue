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
            <v-row justify="center">
                <v-col sm="6" md="6">
                <v-text-field
                    label="Place"
                ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-btn color="primary">SUBMIT</v-btn>
            </v-row>
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
import DatePicker from "./DatePicker";

export default {
  data () {
    return {
      courseInfo: [],
    }
  },
  components: {
      // LecturerCourseStepper,
      DatePicker,
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