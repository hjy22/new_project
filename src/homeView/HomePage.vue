<template>
  <v-content>
    <Menu/>
    <v-container>
      <a href="CoursePage.html">feedback</a>
    <v-layout row wrap>
      <v-flex v-for="(Info, id) in getInfoList" :key="id" xs12 sm8 md4>
        <InfoCard :name="Info.name" :ID="Info.ID" :character="Info.character"/>
      </v-flex>
      <v-flex v-for="(course) in getCourseList" :key="course.index" xs12 sm8 md4>
        <AssignCard :code="course.code" :name="course.name" :ddl="course.ddl"/>
      </v-flex>
      <!-- <AssignCard/> -->
    </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "../components/Menu";
import InfoCard from "../components/InfoCard";
import AssignCard from "../components/AssignCard";

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
    Menu,
    InfoCard,
    AssignCard
  },
  computed: {
    ...mapGetters([
      "getInfoList",
      "getCourseList"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
