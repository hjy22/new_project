<template>
<v-app>
<v-content>
  <LecturerMenu/>
  <v-container>
    <v-layout row>
    <!-- <v-flex v-for="(course, id) in getFeedbackPageCourseList" :key="id" offset-md1>
      <v-btn @click="returnCom(course.code)"> {{course.code}} </v-btn>
    </v-flex> -->
    <FeedbackChips/>
    </v-layout>
    <!-- </v-container> -->
    <!-- <v-container>
    <v-row
      justify='center'
    >
      <v-col v-for="(course, id) in getFeedbackPageCourseList" :key="id" >
        <v-btn @click="returnCom(course.code)"> {{course.code}} </v-btn>
      </v-col>
    </v-row>
    </v-container> -->
    <!-- <v-container> -->
    <FeedbackList/>
    
  </v-container>
  <!-- <p id="comment">cccc</p> -->
      <!-- <div @click="backTop">
          <v-btn>mdi-facebook
          </v-btn>
        </div> -->
      <BackTop/>
  <Footer />
</v-content>
</v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "../components/LecturerMenu";
import FeedbackList from "../components/FeedbackList";
import Footer from "../components/Footer";
import FeedbackChips from "../components/FeedbackChips";
import BackTop from "../components/BackTop";

export default {
  name: 'LecturerFeedbackPage',
  components: {
    LecturerMenu,
    FeedbackList,
    Footer,
    FeedbackChips,
    BackTop,
  },
  methods:{
  returnCom(id) {
    const returnEle = document.querySelector("#"+id);
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
  }
  },
  computed: {
    ...mapGetters([
      "getFeedbackPageCourseList",
    ])
  },
}
</script>

<style > 