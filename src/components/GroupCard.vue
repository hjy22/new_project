<template>
  <v-row justify="center">
    <v-col cols="2" sm="8">
      <v-card> 

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{group[index].identity}} - Daniel@liverpool.ac.uk</v-list-item-title>
            </v-list-item-content>
            <!-- <v-list-item-action>

              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action> -->
          </v-list-item>

          <v-divider></v-divider>

        


          <!-- <v-list-item>
            <v-list-item-action>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(323) 555-6789</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          <!-- <v-divider inset></v-divider>

          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>mcbeal@example.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          

          <!-- <v-flex  v-for="(good, index) in group[0]" :key="group[index].id"> -->
          <v-list-item v-for="item in group[index].members" :key="item.name">
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{item.name}} - {{item.email}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-divider></v-divider> -->
          
          <!-- </v-flex> -->
        </v-list>
        
        <!-- <p>a{{goods}}a</p> -->
        <!-- <v-container v-for="(good, id) in goods" :key="id">
        <p>{{good.name}}</p>
      </v-container> -->
        <!-- <li class="goods-item" v-for="goodsTab in goodsList" >{{goodsTab.name}}</li> -->
        
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