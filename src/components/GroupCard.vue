<template>
  <v-row justify="center">
    <v-col >
      <v-card> 

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{group[index].leader}} - {{group[index].email}}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

          <v-divider></v-divider>
          <v-list-item v-for="item in group[index].members" :key="item.name">
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{item.name}} - {{item.email}}</v-list-item-title>
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
        group: [] // 展示部分
      }
    },
    created () {
      this.getMemberInfo() // 本地JSON
    },
    
    methods: {
      // 本地json获取商品数据
     getMemberInfo() {
        axios.get('../static/COMP107.json').then(response => {
            // console.log(response.data.cc);
            this.group = response.data;
        }, response => {
            // console.log("error");
        });
    },
    print(){

    }
    }
  }
</script>