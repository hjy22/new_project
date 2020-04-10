<template>
<v-content>
  <div v-if="upload==false">
  <v-card>
    <p class="title text-center headline">Marking for Group{{markingGroup}}</p>
        <v-row justify="center">
            <v-col>
            <v-list three-line subheader>
          <v-subheader>Rating</v-subheader>
          <v-flex  v-for="(rating, id) in feedbackSheet" :key="id">
            <v-list-item>
          <v-list-item-title class="title">{{rating.name}}</v-list-item-title>
        <v-row
          align="center"
          justify="end"
        >
          <v-rating
            length="4"
            size="32"
            color="amber"
            dense
            v-model="ratingArray[id]"
          ></v-rating>
        </v-row>
                </v-list-item>
          </v-flex>
        </v-list>
            </v-col>
            <v-col>
              <v-container>
            <v-list three-line subheader>
            <v-subheader>TextField</v-subheader>
            <v-flex v-for="(text, id) in feedbackTextField" :key="id">
                <v-list-item>
                <v-list-item-content>
                            <v-textarea
                            v-model="textArray[id]"
                            outlined
                            :label="text.name"
                            rows="2"
                            row-height="20"
                            ></v-textarea>
                </v-list-item-content>
            </v-list-item>
            </v-flex>
        </v-list>
        </v-container>
        </v-col>
        </v-row>
        <v-container text-right>
          <v-btn
          color="primary"
          dark
          @click="saveMarking"
        >submit</v-btn>
        </v-container>
      </v-card>
      </div>
      <div v-else>
        <div class="headline text-center">
          Your group has uploaded the feedback for group{{markingGroup}} already!</div>
      </div>
</v-content>
</template>


<script>
import axios from 'axios'
import { mapGetters } from "vuex";
  export default {
    data () {
      return {
        teamIndex:0,
        teamID:"",
        feedbackSheet:[],
        feedbackTextField:[],
        markingGroup:"",
        ratingArray:[],
        textArray:[],
        upload:false,
        stepper:"",
      }
    },
    created () {
      this.getTeamID()
      this.getMarking(this.teamID)
      this.getFeedbackCheck()
      this.getFeedbackText()
    },
     methods:{
        getMarking(groupName){
          this.$http.get('/api/getMarking', {
        params: {name: groupName}
      }).then( (res) => {
          console.log('res', res);
          this.markingGroup = res.data[0].AssessingGroup
          this.checkFeedback(this.markingGroup)
      })
        },
       getFeedbackCheck(){
        this.$http.get('/api/getFeedbackCheck', {
        }).then( (res) => {
          // console.log('res', res);
          this.feedbackSheet = res.data
          // console.log(this.feedbackSheet);
        })
       },
       getFeedbackText(){
         this.$http.get('/api/getFeedbackText', {
        }).then( (res) => {
          // console.log('res', res);
          this.feedbackTextField = res.data
        })
       },
       getTeamID(){
        this.teamID = this.$store.getters.getStudentGroup
      },
      getStepper(){
          this.$http.get('/api/getStepperStatus', {
        params: {name: this.markingGroup}
        }).then( (res) => {
          // console.log('res', res);
          var stepper = res.data[0].stepper;
          if(stepper=="1"){
            this.completeSubmission()
          }else if(stepper=="2"){
            this.completeSubmission()
            this.setStepper()
          }
        })
        },
        completeSubmission(){
          this.$http.post('/api/completeSubmission', {
        completeSubmission: "true", name: this.markingGroup
      }).then( (res) => {
        console.log('res', res);
      })
        },
      setStepper(){
      this.$http.post('/api/setStepperStatus', {
        stepper: "3", name: this.markingGroup
      }).then( (res) => {
        console.log('res', res);
      })
    },

      saveMarking(){
        this.getStepper()
        // console.log(this.feedbackSheet[0].name)
        for(var i = 0;i<this.ratingArray.length;i++){
          this.saveRatingToDB(this.markingGroup,this.feedbackSheet[i].name,this.ratingArray[i])
        }
        for(var i = 0;i<this.textArray.length;i++){
          this.saveTextToDB(this.markingGroup,this.feedbackTextField[i].name,this.textArray[i])
        }
      },
      saveRatingToDB(id,name,content){
        this.$http.post('/api/saveRatingToDB', {
          id: id, name: name, content:content
        }).then( (res) => {
          console.log('res', res);
        })
      },
      saveTextToDB(id,name,content){
        this.$http.post('/api/saveTextToDB', {
          id: id, name: name, content:content
        }).then( (res) => {
          console.log('res', res);
        })
      },
      checkFeedback(id) {
      this.$http.get('/api/checkFeedback', {
        params: {id: id}
      }).then( (res) => {
        console.log('res', res);
        console.log(res.data.length)
        if(res.data.length!=0){
          this.upload = true
        }
      })
    },
     },
     computed: {
      ...mapGetters(["getStudentGroup"])
    }
  }
</script>