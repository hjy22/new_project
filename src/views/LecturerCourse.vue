<template>
    <v-content>
    <v-container>
      <LecturerCourseStepper/>
      <!-- <LecturerCourseCard/> -->
    </v-container>
    </v-content>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex";
// import LecturerMenu from "@/components/LecturerMenu";
// import PhoneMenu from "@/components/PhoneMenu";
import LecturerCourseStepper from "@/components/LecturerCourseStepper";
import LecturerCourseCard from "@/components/LecturerCourseCard";
// import BackTop from "@/components/BackTop";
// import Footer from "@/components/Footer";

export default {
  data () {
    return {
      courseInfo: [],
      userCurrentView: this.$store.getters.getCurrentView,
    }
  },
  components: {
    // LecturerMenu,
    // PhoneMenu,
    LecturerCourseCard,
    // BackTop,
    // Footer,
    LecturerCourseStepper
  },
  computed: {
    ...mapGetters([
      // "getLecturerHomePageCourseList",
      "getCurrentView"
    ])
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

<style > 