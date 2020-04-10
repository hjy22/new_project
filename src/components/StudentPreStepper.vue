<template>
  <v-stepper v-model="stepper">
    <v-stepper-header>
      <v-stepper-step :complete="stepper > 1" step="1">Presenting Time</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepper > 2" step="2">Waiting Feedback</v-stepper-step>

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
          @click="checkStepper"
        >
          Continue
        </v-btn>
        </v-row>
      </v-stepper-content>
      <v-stepper-content step="2">
        <!-- <v-card
          class="mb-12"
          height="200px"
        > -->
        <div class="headline text-center">Waiting Marker Submiting Feedback Sheet</div>
        <!-- </v-card> -->
        <!-- <v-btn
          color="primary"
          @click="stepper = 3"
        >
          Continue
        </v-btn> -->
      </v-stepper-content>

      <v-stepper-content step="3">
          <v-row justify="center">
              <ViewFeedback :teamID="teamID"/>
        
          </v-row>

        <!-- <v-btn
          color="primary"
          @click="stepper = 1"
        >
          Continue
        </v-btn> -->

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
        stepper:"",
        complete:"",
      }
    },
    components:{
        StudentPreCard,
        ViewFeedback
    },
    created () {
      this.getTeamIndex()
      this.getStepper(this.teamID)
    },
    methods:{
      getTeamIndex(){
        this.teamID = this.$store.getters.getStudentGroup
      },
      getStepper(teamID){
          this.$http.get('/api/getStepperStatus', {
        params: {name: teamID}
      }).then( (res) => {
        // console.log('res', res);
        this.stepper = res.data[0].stepper;
        this.complete = res.data[0].completeSubmission;
      })
        },
        checkStepper(){
          if(this.complete=="true"){
            this.stepper = "3"
          }else{
            this.stepper = "2"
          }
          this.setStepper(this.stepper)
        },
            setStepper(stepper){
      this.$http.post('/api/setStepperStatus', {
        stepper: stepper, name: this.teamID
      }).then( (res) => {
        console.log('res', res);
      })
    },
    },
    
    
    computed: {
      ...mapGetters(["getStudentGroup"])
    }
  }
</script>