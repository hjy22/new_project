<template>
<div>
<!-- <v-app> -->
  
<v-content>
  <!-- <LecturerMenu/> -->
  <v-container>
    <!-- <v-layout row>
    <FeedbackChips/>
    </v-layout>
    <FeedbackList/> -->
    <Calendar/>
    <!-- <c/> -->
    </v-container>
    <!-- <BackTop/> -->
  <!-- <Footer /> -->
</v-content>

<!-- </v-app> -->
</div>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "@/components/LecturerMenu";
import Calendar from "@/components/Calendar";
// import FeedbackList from "../components/FeedbackList";
import Footer from "@/components/Footer";
// import FeedbackChips from "../components/FeedbackChips";
import BackTop from "@/components/BackTop";

export default {
  components: {
    LecturerMenu,
    Calendar,
    // FeedbackList,
    Footer,
    // FeedbackChips,
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
      "getLecturerFeedbackPageCourseList",
    ])
  },
}
</script>

<style > 