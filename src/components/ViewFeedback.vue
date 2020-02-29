<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">View Feedback</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Team{{getFeedbackTeam()}} Feedback (Marked by Team{{getMarkerTeam()}})</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-icon dark text @click="dialog = false">mdi-close</v-icon>
          </v-toolbar-items>
        </v-toolbar>

        <v-row justify="center">
            <v-col>
                <v-container>
                  
            <v-list three-line subheader>
          <v-subheader>Rating</v-subheader>
          <v-flex  v-for="(rating, id) in feedbackInfo.rating" :key="id">
            <v-list-item>

              <v-list-item-content>
          <v-list-item-title class="title">{{rating.name}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
          
        >
          <v-rating
                      :value="rating.scores"
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
          <span class="justify-space-between">{{getComment(rating.name,rating.scores)}}</span>
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
            <v-subheader>TextField</v-subheader>
            <v-flex v-for="(text, id) in feedbackInfo.textField" :key="id">
                <v-list-item>
                <v-list-item-content>
                        <v-list-item-subtitle>
                            <v-textarea
                            outlined
                            disabled
                            :label="text.content"
                            rows="2"
                            row-height="20"
                            ></v-textarea>
                        </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-flex>
        </v-list>
        </v-container>
        </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
  export default {
    props:["index"],
    data () {
      return {
        feedbackInfo:[],
        feedbackSheet:[],
        model:null,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    created () {
      this.getInfo() // 本地JSON
    },
     methods:{
       getInfo() {
        axios.get('../static/FeedbackInfo.json').then(response => {
            this.feedbackInfo = response.data[this.index];
        }, response => {
            console.log("error");
        });
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
      getFeedbackTeam(){
        return this.feedbackInfo.id
      },
      getMarkerTeam(){
        return this.feedbackInfo.marker
      }
     }
  }
</script>