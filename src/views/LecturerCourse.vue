<template>
    <v-content>
    <v-container>
      <!-- <LecturerCourseStepper/> -->
      <div v-if="upload==true">
      <LecturerCourseCard/>
      </div>
      <div v-else>
        <div class="headline">Please Upload the File at the Home Page</div>
      </div>
    </v-container>
    </v-content>
</template>

<script>
// import axios from 'axios'
// import { mapGetters } from "vuex";
import LecturerCourseCard from "@/components/LecturerCourseCard";

export default {
  data () {
    return {
      courseInfo: [],
      // userCurrentView: this.$store.getters.getCurrentView,
      upload:"false",
    }
  },
  components: {
    LecturerCourseCard,
  },
  created(){
    // this.getCourseInfo()
    this.getEventsInfo()
  },
  // computed: {
  //   ...mapGetters([
  //     // "getLecturerHomePageCourseList",
  //     "getCurrentView"
  //   ])
  // },
    
    methods: {
      // 本地json获取商品数据
    //  getCourseInfo() {
    //     axios.get('../static/CourseInfo.json').then(response => {
            
    //         this.courseInfo = response.data[0];
    //         // console.log(this.courseInfo[0].name)
    //     }, response => {
    //         console.log("error");
    //     });
    // },
    getEventsInfo(){
           this.$http.get('/api/getGroupInfo', {
          }).then( (res) => {
            console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }
          })
        },
    }
}
</script>

<style > 