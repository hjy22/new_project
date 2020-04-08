<template>
<v-content>
  <v-card>
    <p class="title text-center headline">Marking for {{teamInfo.marker}}</p>
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
            :value="2"
            length="4"
            size="32"
            color="amber"
            dense
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
        >submit</v-btn>
        </v-container>
      </v-card>
</v-content>
</template>


<script>
import axios from 'axios'
import { mapGetters } from "vuex";
  export default {
    data () {
      return {
        teamIndex:0,
        teamInfo:[],
        feedbackSheet:[],
        feedbackTextField:[],
        model:null,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    created () {
      // this.getTeamIndex()
      // this.getInfo() // 本地JSON
      this.getFeedbackCheck()
      this.getFeedbackText()
    },
     methods:{
       getFeedbackCheck(){
        this.$http.get('/api/getFeedbackCheck', {
        }).then( (res) => {
          console.log('res', res);
          this.feedbackSheet = res.data
          console.log(this.feedbackSheet);
        })
       },
       getFeedbackText(){
         this.$http.get('/api/getFeedbackText', {
        }).then( (res) => {
          console.log('res', res);
          this.feedbackTextField = res.data
        })
       },
       getTeamIndex(){
        var teamID = this.$store.getters.getStudentGroup
        this.teamIndex = Number(teamID)-1
      },
       getInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            this.feedbackSheet = response.data[0].feedbackCheckBox;
            this.feedbackTextField = response.data[0].feedbackTextField;
        }, response => {
            console.log("error");
        });

        axios.get('../static/COMP107.json').then(response => {
            this.teamInfo = response.data[this.teamIndex];
        }, response => {
            console.log("error");
        });
        
      },
     },
     computed: {
      ...mapGetters(["getStudentGroup"])
    }
  }
</script>