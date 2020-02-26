<template>
<!-- <v-container> -->
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

        <v-card-text>
          You are sending emails to Team {{team}} with {{name()}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
            :href=sendingEmail()
          >
            Sending
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
<!-- </v-container> -->
</template>

<script>
import axios from 'axios'
export default {
  props:['index','team','containsLeader'],
    data(){
      return{
        dialog: false,
        membersInfo: [],
        leaderInfo:[],
      }
    },
    created () {
      this.getMemberInfo() // 本地JSON
    },
     methods:{
       getMemberInfo() {
        axios.get('../static/COMP107.json').then(response => {
            this.membersInfo = response.data[this.index].members;
            this.leaderInfo = response.data[this.index];
        }, response => {
            // console.log("error");
        });
      },

      sendingEmail(){
        // const url = "static/"+this.code+".json"
        // fetch(static/COMP107.json)
        // console.log(item)
        // const emails= this.membersInfo[this.index].members
        if(!this.isEmpty(this.membersInfo)){
          var length = this.getJsonLength(this.membersInfo);
          var  memberEmail =  this.membersInfo[0].email+";";
          for (var i = 1; i < length; i++) { 
              memberEmail += this.membersInfo[i].email;
              memberEmail += ";";
          }
          if(this.containsLeader){
            memberEmail += this.leaderInfo.email
          }
          const url = "mailto:"+memberEmail
          return url
        }
      },
      
      getJsonLength(jsonData){
          var jsonLength = 0;
          for(var item in jsonData){
            jsonLength++;
          }
          return jsonLength;
      },
      isEmpty(array){
        if(this.getJsonLength(array)==0){
          return true
        }else{
          return false
        }
      },
      name(){
        if(!this.isEmpty(this.membersInfo)){
          var length = this.getJsonLength(this.membersInfo);
          var  memberName =  this.membersInfo[0].name;
          for (var i = 1; i < length; i++) { 
              memberName += ", "; 
              memberName += this.membersInfo[i].name;
          }
          if(this.containsLeader){
            memberName += ", "+this.leaderInfo.leader+"(leader)"
          }
          return memberName;
        }
      }
    }
}
</script>