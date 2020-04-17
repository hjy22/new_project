<template>
<v-content>
  <InfoCard :group="teamID"  character="Student"/>
</v-content>
</template>

<script>
import { mapGetters } from "vuex";
import InfoCard from "@/components/InfoCard";

export default {
  name:"StudentHome",
  components: {
    InfoCard,
  },
  data () {
      return {
        teamID:"",
      }
    },
  created () {
      this.getTeamID()
    },
    methods: {
      getTeamID(){
        this.teamID = this.$store.getters.getStudentGroup
      },
    },
    computed: {
    ...mapGetters(["getStudentGroup"])
  }
}
</script>

<style > 
</style>