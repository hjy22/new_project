<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Presenting Time</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Waiting Feedback</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">View Feedback</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <!-- <v-card
          class="mb-12"
        > -->
        <StudentPreCard/>
        <v-row justify="center">
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
        </v-row>


        <!-- </v-card> -->
      </v-stepper-content>

      <v-stepper-content step="2">
        <!-- <v-card
          class="mb-12"
          height="200px"
        > -->
        <div class="headline text-center">Waiting Marker Submiting Feedback Sheet</div>
        <!-- </v-card> -->
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
          <v-row justify="center">
              <ViewFeedback :teamID="teamID"/>
        
          </v-row>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapGetters } from "vuex";
import StudentPreCard from "@/components/StudentPreCard";
import ViewFeedback from "@/components/ViewFeedback";
  export default {
    data () {
      return {
        teamID:"",
        e1: 1,
      }
    },
    components:{
        StudentPreCard,
        ViewFeedback
    },
    created () {
      this.getTeamIndex()
    },
    methods:{
      getTeamIndex(){
        this.teamID = this.$store.getters.getStudentGroup
      }
    },
    computed: {
      ...mapGetters(["getStudentGroup"])
    }
  }
</script>