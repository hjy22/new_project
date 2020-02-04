<template>
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
</v-content>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "../components/LecturerMenu";
import FeedbackList from "../components/FeedbackList";

export default {
  name: 'FeedbackPage',
  components: {
    LecturerMenu,
    FeedbackList
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