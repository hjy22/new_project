<template>
<v-content>
  <InfoCard :group="teamID" :marking="markingID" character="Student"/>
  <PreCard :teamID="teamID"/>
</v-content>
</template>

<script>
import { mapGetters } from "vuex";
import InfoCard from "@/components/InfoCard";
import PreCard from "@/components/PreCard";

export default {
  name:"StudentHome",
  components: {
    InfoCard,
    PreCard
  },
  data () {
      return {
        teamID:"",
        markingID:"",
      }
    },
  created () {
      this.getTeamID()
      this.getMarking()
    },
    methods: {
      getTeamID(){
        this.teamID = this.$store.getters.getStudentGroup
      },
      getMarking() {
      this.$http.get('/api/getMarking', {
        params: {name: this.teamID}
      }).then( (res) => {
        this.markingID = res.data[0].AssessingGroup
      })
    },
    },
    computed: {
    ...mapGetters(["getStudentGroup"])
  }
}
</script>

<style > 
</style>