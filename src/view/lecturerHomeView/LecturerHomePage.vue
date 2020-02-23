<template>
<v-app>
  <v-content>
    <LecturerMenu/>
    <v-container>
    <v-layout>
      <v-flex v-for="(Info, id) in getLecturerHomePageInfoList" :key="id" xs12 sm8 md4 offset-md4>
        <InfoCard :name="Info.name" :ID="Info.ID" :character="Info.character"/>
      </v-flex>
      </v-layout>
    </v-container>
    <v-row
      justify='space-around'
    >
      <v-col v-for="(course) in getLecturerHomePageCourseList" :key="course.index" >
        <AssignCard :code="course.code" :name="course.name" :ddl="course.ddl" offset-sm5/>
      </v-col>
    </v-row>
    <Footer/>
  </v-content>
 </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerMenu from "@/components/LecturerMenu";
import InfoCard from "@/components/InfoCard";
import AssignCard from "@/components/AssignCard";
import Footer from "@/components/Footer";

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
    LecturerMenu,
    InfoCard,
    AssignCard,
    Footer,
  },
  computed: {
    ...mapGetters([
      "getLecturerHomePageInfoList",
      "getLecturerHomePageCourseList"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
