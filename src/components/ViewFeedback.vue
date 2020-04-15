<template>
  <v-row justify="center">
    <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">View Feedback</v-btn>
      </template> -->
      <!-- <v-card max-width="800"> -->
        <!-- <v-toolbar dark color="primary"> -->
          <!-- <p>Team{{teamID}} Feedback (Marked by Team{{markingGroup}})</p> -->
          <!-- <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-icon dark text @click="dialog = false">mdi-close</v-icon>
          </v-toolbar-items>
        </v-toolbar> -->
        <!-- <v-row justify="center"> -->
         <v-container>
            <p class="text-center headline">Team{{teamID}} Feedback (Marked by Team{{markingGroup}})</p>
            </v-container>
        <!-- </v-row> -->

        <v-row justify="center">
            <v-col>
                <v-container>
                  
            <v-list three-line subheader>
          <v-subheader>Rating</v-subheader>
          <v-flex  v-for="(rating, id) in feedbackRating" :key="id">
            <v-list-item>

              <v-list-item-content>
          <v-list-item-title class="title">{{rating.name}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
          
        >
          <v-rating
                      :value="parseInt(rating.content)"
                      length="4"
                      size="32"
                      color="amber"
                      dense
                      half-increments
                      readonly
                    ></v-rating>
                    <!-- <v-icon size="16">mdi-alert-circle-outline</v-icon> -->
                    <v-tooltip top offset-overflow max-width="300px">
          <template  v-slot:activator="{ on }">
            <v-icon  v-on="on" size="16">mdi-alert-circle-outline</v-icon>
             <!-- <div v-on="on" class="font-italic">detail</div> -->
           </template>
          <span class="justify-space-between">{{getComment(rating.name,rating.content)}}</span>
    </v-tooltip>
        </v-row>
                </v-list-item>
          </v-flex>
        </v-list>
        </v-container>
            </v-col>
            <v-col>
              <v-container>
            <v-list three-line subheader>
            <v-subheader>Command</v-subheader>
            <v-flex v-for="(text, id) in feedbackText" :key="id">
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">{{text.name}}</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-1">
                            <!-- <v-textarea
                            outlined
                            disabled
                            :label="text.content"
                            rows="2"
                            row-height="20"
                            ></v-textarea> -->
                            {{text.content}}
                        </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
              </v-card>
            </v-flex>
        </v-list>
        </v-container>
        </v-col>
        </v-row>
      <!-- </v-card> -->
    <!-- </v-dialog> -->
  </v-row>
</template>

<script>
import axios from 'axios'
  export default {
    props:["teamID"],
    data () {
      return {
        feedbackRating:[],
        feedbackText:[],
        feedbackSheet:[],
        model:null,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        markingGroup:"",
      }
    },
    created () {
      this.getInfo() 
      this.getRatingInfo(this.teamID)
      this.getTextInfo(this.teamID)
      this.getMarking(this.teamID)
    },
     methods:{
       getRatingInfo(id){
      this.$http.get('/api/checkFeedback', {
        params: {id: id}
      }).then( (res) => {
        console.log('res', res);
        this.feedbackRating = res.data;
      })
       },
       getTextInfo(id){
      this.$http.get('/api/getTextInfo', {
        params: {id: id}
      }).then( (res) => {
        console.log('res', res);
        this.feedbackText = res.data;
      })
       },
       getMarking(groupName){
          this.$http.get('/api/getMarking', {
        params: {name: groupName}
      }).then( (res) => {
          console.log('res', res);
          this.markingGroup = res.data[0].AssessingGroup
      })
        },
       getInfo() {
        axios.get('../static/FeedbackSheet.json').then(response => {
            this.feedbackSheet = response.data.checkBox;
        }, response => {
            console.log("error");
        });
        
      },
      getComment(name, scores){
        for(var i = 0; i<this.getJsonLength(this.feedbackSheet);i++){
          if(this.feedbackSheet[i].name == name){
            for(var j = 0; j<this.getJsonLength(this.feedbackSheet[i].details);j++){
              if(this.feedbackSheet[i].details[j].scores==scores){
                return this.feedbackSheet[i].details[j].name+". "+this.feedbackSheet[i].details[j].intro
              }
          }
        }
      } 
      },
      getJsonLength(jsonData){
          var jsonLength = 0;
          for(var item in jsonData){
            jsonLength++;
          }
          return jsonLength;
      }, 
     }
  }
</script>