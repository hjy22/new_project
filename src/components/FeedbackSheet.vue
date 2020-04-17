<template>
<v-content>
  <div v-if="upload==false">
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Set Feedback Sheet</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="saveFeedbackSheet">Submit</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <v-container>
            <v-list three-line subheader>
          <v-subheader>Rating</v-subheader>
          <!-- <p>{{ selectedCheck }}</p>
          <p>{{ selectedText }}</p> -->
          <v-flex  v-for="(checkBox, id) in checkBoxInfo" :key="id">
              <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="selectedCheck" :value="checkBox.name"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{checkBox.name}}</v-list-item-title>
              <v-list-item-subtitle>{{checkBox.intro}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-flex>
        </v-list>
        </v-container>
            </v-col>
            <v-col>
              <v-container>
            <v-list three-line subheader>
            <v-subheader>Command</v-subheader>
            <v-flex v-for="(text, id) in textFieldInfo" :key="id">
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox  v-model="selectedText" :value="text.name"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                        <v-list-item-subtitle>
                            <v-textarea
                            outlined
                            disabled
                            :label="text.label"
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
  </div>
      <div v-else>
        <div class="headline text-center">You have uploaded this year feedback sheet already</div>
      </div>
</v-content>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        upload:"",
        checkBoxInfo:[],
        textFieldInfo:[],
        dialog: false,
        selectedCheck:[],
        selectedText:[],
      }
    },
    created () {
      this.getInfo() // 本地JSON
      this.checkFeedback()
    },
     methods:{
       checkFeedback(){
         this.$http.get('/api/checkFeedbackUplaod', {
          }).then( (res) => {
            console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }else{
              this.upload = false
            }
          })
          
       },
       getInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            this.checkBoxInfo = response.data[0].feedbackCheckBox;
            this.textFieldInfo = response.data[0].feedbackTextField;
            // this.organisation = this.checkBoxInfo[0].modelName
            // console.log(this.checkBoxInfo)
        }, response => {
            console.log("error");
        });
      },
      saveFeedbackCheck(name) {
        this.$http.post('/api/saveFeedbackCheck', {
          selected: "true",name: name
        }).then( (res) => {
          console.log('res', res);
        })
      },
      saveFeedbackText(name) {
        this.$http.post('/api/saveFeedbackText', {
          selected: "true",name: name
        }).then( (res) => {
          console.log('res', res);
        })
      },
      saveFeedbackSheet(){
        this.dialog=false
        this.upload = true
        for(var i =0;i<this.selectedCheck.length;i++){
          console.log(this.selectedCheck[i])
          this.saveFeedbackCheck(this.selectedCheck[i])
        }
        for(var i =0;i<this.selectedText.length;i++){
          this.saveFeedbackText(this.selectedText[i])
        }
      }
     }
  }
</script>