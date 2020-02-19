<template>
  <v-row justify="center">
    <v-col >
      <v-card v-if="!isEmpty(group[index])"> 

        <v-list >
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title >{{group[index].leader}}</v-list-item-title>
              <v-list-item-subtitle>{{group[index].email}}</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>

          <v-divider></v-divider>
          <v-list-item v-for="item in group[index].members" :key="item.name">
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{item.name}} </v-list-item-title>
              <v-list-item-subtitle>{{item.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
  import axios from 'axios'

  export default {
    props:['index'],
    data () {
      return {
        group: [],
      }
    },
    created () {
      this.getMemberInfo() // 本地JSON
    },
    
    methods: {
      // 本地json获取商品数据
     getMemberInfo() {
        axios.get('../static/COMP107.json').then(response => {
            
            this.group = response.data;
            // console.log(this.group[0].name);
        }, response => {
            // console.log("error");
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
    },
    
  }
</script>