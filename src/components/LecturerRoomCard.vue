<template>
    <v-container>
        <v-card v-if="checkSubmit()"> 
        <v-list v-if="!isEmpty(teamInfo[index])">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title >{{teamInfo[index].room}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-clock-outline</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{teamInfo[index].time}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
      </v-card>

      <v-card max-width="450px">
      <v-alert v-if="!checkSubmit()"
       dense
      outlined
      type="error"
    >
    Not submit the presentation time and place.
    </v-alert>
    </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    props:['index'],
    data(){
      return{
        dialog: false,
        teamInfo: [],
      }
    },
    created () {
      this.getTeamInfo() // 本地JSON
    },
     methods:{
       getTeamInfo() {
        axios.get('../static/COMP107.json').then(response => {
            this.teamInfo = response.data;
            // console.log(response.data[this.index]);
        }, response => {
            console.log("error");
        });
      },
      isEmpty(array){
        if(this.getJsonLength(array)==0){
          return true
        }else{
          return false
        }
      },
      getJsonLength(jsonData){
          var jsonLength = 0;
          for(var item in jsonData){
            jsonLength++;
          }
          return jsonLength;
      },   
      checkSubmit(){
        if(!this.isEmpty(this.teamInfo[this.index])){
          if(this.teamInfo[this.index].room==null){
            return false
          }else{
            return true
          }
      }
      },
}
}
</script>