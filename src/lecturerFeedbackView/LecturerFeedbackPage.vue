<template>
<v-app>
<v-content>
  <LecturerMenu/>
  <v-container>
    <v-layout row wrap>
    <v-flex v-for="(course, id) in getFeedbackPageCourseList" :key="id">
      <v-btn @click="returnCom(course.code)"> {{course.code}} </v-btn>
    </v-flex>
    </v-layout>
    <FeedbackList/>
  </v-container>
  <!-- <p id="comment">cccc</p> -->
  <Footer />
</v-content>
</v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "../components/LecturerMenu";
import FeedbackList from "../components/FeedbackList";
import Footer from "../components/Footer";

export default {
  name: 'LecturerFeedbackPage',
  components: {
    LecturerMenu,
    FeedbackList,
    Footer
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
  }
}
</script>

<style > 