<template>
<v-content>
  <v-card>

        <v-row justify="center">
            <v-col>
                <v-container>
                  
            <v-list three-line subheader>
          <v-subheader>Rating</v-subheader>
          <v-flex  v-for="(rating, id) in feedbackSheet" :key="id">
            <v-list-item>

              <v-list-item-content>
          <v-list-item-title class="title">{{rating.name}}</v-list-item-title>
        </v-list-item-content>

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
                    <!-- <v-icon size="16">mdi-alert-circle-outline</v-icon> -->
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
            <v-flex v-for="(text, id) in feedbackTextField" :key="id">
                <v-list-item>
                <v-list-item-content>
                        <v-list-item-subtitle>
                            <v-textarea
                            outlined
                            :label="text.modelName"
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
</v-content>
</template>


<script>
import axios from 'axios'
  export default {
    data () {
      return {
        teamIndex:0,
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
      this.getInfo() // 本地JSON
      
    },
     methods:{
       getInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            this.feedbackSheet = response.data[0].feedbackCheckBox;
            this.feedbackTextField = response.data[0].feedbackTextField;
        }, response => {
            console.log("error");
        });
        
      },
     },
  }
</script>