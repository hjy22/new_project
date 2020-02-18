<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent 
      width="500"
      justify="center"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Sending Email
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-form v-model = "valid">
        <v-text-field
          v-model="subject"
          filled
          clearable
          color="deep-purple"
          label="Subject"
          style="min-height: 96px"
          :rules="emailRules"
        ></v-text-field>
        <v-textarea
          v-model="body"
          auto-grow
          clearable
          filled
          color="deep-purple"
          label="Body"
          rows="5"
          :rules="emailRules"
        ></v-textarea>
      </v-form>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="empty()">Reset</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
            :href=sendingEmail()
            :disabled="!valid"
          >
            Sending
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['index'],
    data(){
      return{
        dialog: false,
        valid : true,
        subject: '',
        body: '',
        membersInfo: [],
        emailRules: [
          v => !!v || 'Cannot empty',
        ],
      }
    },
    created () {
      this.getMemberInfo() // 本地JSON
    },
     methods:{
       getMemberInfo() {
        axios.get('../static/COMP107.json').then(response => {
            this.membersInfo = response.data;
        }, response => {
            // console.log("error");
        });
      },

      sendingEmail(){
        // const url = "static/"+this.code+".json"
        // fetch(static/COMP107.json)
        // console.log(item)
        const emails= this.membersInfo[this.index].members
        var length = this.getJsonLength(emails);
        var  memberEmail =  emails[0].email+";";
        for (var i = 1; i < length; i++) { 
            memberEmail += emails[i].email;
            memberEmail += ";";
        }
        const url = "mailto:"+memberEmail+"?subject="+this.subject+"&body="+this.body
        return url
      },
      
      getJsonLength(jsonData){
          var jsonLength = 0;
          for(var item in jsonData){
            jsonLength++;
          }
          return jsonLength;
      },   
      empty(){
        this.subject= '';
        this.body='';
      }
    }
}
</script>