<template>
<v-content>
  <Menu/>
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
import Menu from "../components/Menu";
import FeedbackList from "../components/FeedbackList";

export default {
  name: 'FeedbackPage',
  components: {
    Menu,
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