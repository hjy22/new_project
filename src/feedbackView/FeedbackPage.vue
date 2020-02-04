<template>
<v-content>
  <Menu/>
  <v-container>
    <v-btn @click="returnCom"> aaa </v-btn>
    <FeedbackList/>
  </v-container>
  <p id="comment">cccc</p>
</v-content>
</template>

<script>
// import { mapGetters } from "vuex";
import Menu from "../components/Menu";
import FeedbackList from "../components/FeedbackList";

export default {
  name: 'FeedbackPage',
  components: {
    Menu,
    FeedbackList
  },
  methods:{
  returnCom() {
    const returnEle = document.querySelector("#comment");
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
  }
  },
  // computed: {
  //   ...mapGetters([
  //     "getFeedbackPageExpand",
  //     "getFeedbackPageSearch",
  //     "getFeedbackPageHeaderList",
  //     "getFeedbackPageDessertList",
  //   ])
  // }
}
</script>

<style > 