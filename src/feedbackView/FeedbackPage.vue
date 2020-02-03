<template>
<v-content>
  <Menu/>
  <v-container>
    <FeedbackList/>
  </v-container>
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